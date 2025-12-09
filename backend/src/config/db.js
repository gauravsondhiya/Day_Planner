import mongoose from "mongoose"

const dbconnect=async()=>{
    
   try {
     await mongoose.connect("mongodb+srv://gauravsondhiya1503_db_user:qwe123@cluster0.fs5t8pa.mongodb.net/?appName=Cluster0")
     console.log("db connected")
   } catch (error) { 
    console.log("db not connected")
    console.log(error)
    
   }
  
}
export default dbconnect