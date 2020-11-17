"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
// const healthController = require('./health.ctrl');
exports.router = express_1.default.Router();
exports.router.get('/api/status', function (req, res) { res.json({ status: 'OK' }); });
// router.get('/ping', healthController.ping);
// router.get('/version', healthController.getVersion);
// router.get('/health', healthController.checkHealth);
