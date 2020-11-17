import express from "express";
// const healthController = require('./health.ctrl');

export const router: express.Router  = express.Router();
router.get('/api/status', (req: express.Request, res: express.Response) => { res.json({ status: 'OK' }) } );
// router.get('/ping', healthController.ping);
// router.get('/version', healthController.getVersion);
// router.get('/health', healthController.checkHealth);
