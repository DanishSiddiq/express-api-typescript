import { Request, Response, Router } from "express";
import * as studentController from './student.ctrl';

export const router: Router = Router();
router.get('/api/v1/student', (req: Request, res: Response) => { res.json({ status: 'Student' }) } );
router.post('/api/v1/student', studentController.createOne);
router.get('/api/v1/student/:_id', studentController.findOne);
router.put('/api/v1/student/:_id', studentController.updateOne);
router.delete('/api/v1/student/:_id', studentController.deleteOne);
