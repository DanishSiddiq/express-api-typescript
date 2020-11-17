"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleExit = exports.handleUncaughtErrors = void 0;
var db_mongo_1 = require("../db/database-connections/db.mongo");
var logger_1 = require("./logger");
/**
 * Makes sure that the process doesn't shut down
 * for any uncaught errors – and logs them to
 * for easier debugging.
 */
exports.handleUncaughtErrors = function () {
    process.on('unhandledRejection', function (err) {
        logger_1.logErrDetails({ message: 'Unhandled Rejection', error: err });
    });
    process.on('uncaughtException', function (err) {
        logger_1.logErrDetails({ message: 'Uncaught Exception', error: err });
    });
};
exports.handleExit = function () {
    // If the Node process ends, close the Mongoose connection
    process.on('SIGINT', function () {
        db_mongo_1.mongoDbDisconnect();
        process.exit(0);
    });
    process.on('exit', function () {
        db_mongo_1.mongoDbDisconnect();
        process.exit(0);
    });
};
