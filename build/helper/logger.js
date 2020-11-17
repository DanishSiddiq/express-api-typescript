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
Object.defineProperty(exports, "__esModule", { value: true });
exports.logInfoDetails = exports.logErrDetails = void 0;
/**
 *
 * @param message
 * @param error
 * @param additionalData
 */
exports.logErrDetails = function (_a) {
    var _b = _a.message, message = _b === void 0 ? '' : _b, _c = _a.error, error = _c === void 0 ? {} : _c, _d = _a.additionalData, additionalData = _d === void 0 ? {} : _d;
    logMsg(__assign({ level: 'ERROR', message: message,
        error: error }, additionalData));
};
/**
 *
 * @param message
 * @param additionalData
 */
exports.logInfoDetails = function (_a) {
    var _b = _a.message, message = _b === void 0 ? '' : _b, _c = _a.additionalData, additionalData = _c === void 0 ? {} : _c;
    logMsg(__assign({ level: 'INFO', message: message }, additionalData));
};
/**
 *
 * @param logObj
 */
var logMsg = function (logObj) {
    var logObject = __assign(__assign({}, logObj), { '@ts': new Date().toISOString() });
    console.log(JSON.stringify(logObject));
};
