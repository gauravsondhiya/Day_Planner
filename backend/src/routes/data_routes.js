import express from 'express'
import { getdata,Todo_controller } from '../controller/Todo_controller.js';
const router = express.Router();


router.post("/daily",Todo_controller)
router.get("/data",getdata)


export default router