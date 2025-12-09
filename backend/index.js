import express from 'express'
import router from './src/routes/data_routes.js';
import dbconnect from './src/config/db.js';
import cors from 'cors'
const app = express()
dbconnect()
app.use(cors())

app.use(express.json());

app.use('/api/data', router);

app.get("/",(req,res)=>{
    res.send("check server")
})

app.listen(3000)