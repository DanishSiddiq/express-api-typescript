"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require('express-async-errors');
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var body_parser_1 = __importDefault(require("body-parser"));
// mongodb
var db_mongo_1 = require("./db/database-connections/db.mongo");
// routers file
var health_route_1 = require("./modules/health/health.route");
var student_route_1 = require("./modules/student/student.route");
// middle-wares
var config_loader_1 = require("./middlerwares/config.loader");
var not_found_1 = require("./middlerwares/not.found");
var exception_handler_1 = require("./middlerwares/exception-handler");
exports.app = express_1.default();
// Connect to multiple DB's
if (process.env.NODE_ENV !== 'test') {
    // connect database
    db_mongo_1.mongoDbConnect('DCS');
}
exports.app
    .disable('x-powered-by')
    .use(helmet_1.default()) // helmet for security purpose
    .use(morgan_1.default('tiny')) // for logging
    .use(body_parser_1.default.urlencoded({ extended: true }))
    .use(body_parser_1.default.json({ limit: '5mb' }))
    .use('/', health_route_1.router)
    .use('/', config_loader_1.ConfigLoader, student_route_1.router)
    .use(not_found_1.RouteNotFoundMiddleware) // RouteNotFound middle-wares must
    .use(exception_handler_1.ExceptionHandlerMiddleware); // ExceptionHandler will be the last one to be registered
;
