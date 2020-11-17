"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigLoader = void 0;
var express_api_problem_1 = require("express-api-problem");
var HttpStatusCode = __importStar(require("http-status-codes"));
/**
 * for authorization layer
 * @param req
 * @param res
 * @param next
 * @constructor
 */
exports.ConfigLoader = function (req, res, next) {
    res.header({
        'x-connection-id': 'abcdefghijklmnopqrstuvwxzy' // just an example to set key in the header
    });
    // If key is provided then check for its configuration
    if (req.headers['x-api-key'] && req.headers['x-api-key'] !== 'test-authorization-key') {
        throw new express_api_problem_1.ApiProblem({ status: HttpStatusCode.FORBIDDEN, title: 'Unauthorized', detail: 'Invalid apiKey received' });
    }
    next();
};
