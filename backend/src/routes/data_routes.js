import express from 'express'
import Todo_controller from '../controller/Todo_controller.js';
const router = express.Router();


router.post("/daily",Todo_controller)


export default router