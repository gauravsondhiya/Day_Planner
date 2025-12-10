import mongoose from 'mongoose';
const { Schema } = mongoose;

const tasklist = new Schema({
  key:String,
  day:Number,
  completed:Boolean,
  task: String, 
});

let listmodel = mongoose.model("tasklist",tasklist)

export default listmodel