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
exports.config = void 0;
var get = require('lodash/get');
var common_1 = require("./common");
var loadedConfig = {};
var config = /** @class */ (function () {
    function config() {
    }
    /**
     * Read the configuration from the config file.
     * @example  config.get('REDIS_HOST', '127.0.0.1');
     * @param targetConfig
     * @param defaultValue
     */
    config.get = function (targetConfig, defaultValue) {
        var envVariable = get(process.env, targetConfig);
        /**
         * if it's in env
         */
        if (envVariable !== undefined) {
            return envVariable;
        }
        /**
         * if it's already loaded
         */
        if (Object.keys(loadedConfig).length) {
            return loadedConfig[targetConfig] || defaultValue;
        }
        var configPath = './../../.config.json';
        var configOverridePath = './../../.config.override.json';
        if (!common_1.common.isPathExist(configPath)) {
            throw new Error('.config.json file is missing');
        }
        var configJson = require(configPath);
        var configOverride = common_1.common.isPathExist(configOverridePath) ? require(configOverridePath) : {};
        loadedConfig = __assign(__assign({}, configJson), configOverride);
        return loadedConfig[targetConfig] || defaultValue;
    };
    return config;
}());
exports.config = config;
