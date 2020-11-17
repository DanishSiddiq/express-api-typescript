"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
var mongoose_1 = require("mongoose");
var student_shema_1 = __importDefault(require("./student.shema"));
exports.StudentModel = mongoose_1.model("student", student_shema_1.default);
