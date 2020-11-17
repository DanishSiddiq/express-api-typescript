"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.ExceptionHandlerMiddleware = void 0;
var express_api_problem_1 = require("express-api-problem");
var HttpStatusCode = __importStar(require("http-status-codes"));
var logErrDetails = require('../helper/logger').logErrDetails;
/**
 * Intercepts the exceptions and logs them if required
 * @param err
 * @param req
 * @param res
 * @param next
 * @return {module.exports}
 * @constructor
 */
exports.ExceptionHandlerMiddleware = function (err, req, res, next) {
    // Continue if it is not an error
    if (!(err instanceof express_api_problem_1.ApiProblem) && !(err instanceof Error)) {
        return next();
    }
    var additionalData;
    if (!(err instanceof express_api_problem_1.ApiProblem)) {
        additionalData = {
            httpStatus: err['status'] || HttpStatusCode.INTERNAL_SERVER_ERROR,
            message: err['detail'] || 'Error',
            requestUrl: req.originalUrl,
        };
    }
    else {
        additionalData = {
            httpStatus: err.status || HttpStatusCode.INTERNAL_SERVER_ERROR,
            message: err.message || 'Error',
            requestUrl: req.originalUrl
        };
    }
    // final response
    var formattedResponse = __assign(__assign({}, additionalData), { connectionId: res.getHeader('x-connection-id'), detail: "Express boilerplate \u2013 " + err.stack + " }" });
    // log error
    logErrDetails({ message: 'Error handled in middleware', error: err, additionalData: additionalData });
    return res.status(additionalData.httpStatus).json(formattedResponse);
};
