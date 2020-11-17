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
exports.router = void 0;
var express_1 = require("express");
var studentController = __importStar(require("./student.ctrl"));
exports.router = express_1.Router();
exports.router.get('/api/v1/student', function (req, res) { res.json({ status: 'Student' }); });
exports.router.post('/api/v1/student', studentController.createOne);
exports.router.get('/api/v1/student/:_id', studentController.findOne);
exports.router.put('/api/v1/student/:_id', studentController.updateOne);
exports.router.delete('/api/v1/student/:_id', studentController.deleteOne);
