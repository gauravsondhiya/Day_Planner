import express from 'express'
import { getdata,post_data,deleteData } from '../controller/Todo_controller.js';
const router = express.Router();


router.post("/data",post_data)
router.get("/data",getdata)
router.delete("/data/:id", deleteData);


export default router