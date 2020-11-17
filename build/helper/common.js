"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.common = void 0;
var fs = require('fs');
var path = require('path');
exports.common = {
    /**
     * Check if path exists or not
     *
     * @param {string} filePath
     * @returns {boolean}
     */
    isPathExist: function (filePath) {
        return fs.existsSync(path.resolve(__dirname, filePath));
    },
    /**
     * @param arg
     * @returns {boolean}
     */
    isEmpty: function (arg) {
        var val = arg;
        if (typeof val === 'number') {
            val = arg.toString();
        }
        return !val || val === 0 || val.length === 0 || Object.keys(val).length === 0;
    },
    /**
     * usage: __.stringFormat("{0}, {1}", ["Hello", "World"])
     * @param value
     * @param paramsArr
     * @returns {string|void|never}
     */
    stringFormat: function (value, paramsArr) { return value.replace(/{(\d+)}/g, function (match, number) { return (typeof paramsArr[number] !== 'undefined' ? paramsArr[number] : match); }); },
};
