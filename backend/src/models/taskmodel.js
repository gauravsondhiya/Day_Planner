import mongoose from 'mongoose';
const { Schema } = mongoose;

const tasklist = new Schema({
  task: String, 
});

let listmodel = mongoose.model("tasklist",tasklist)

export default listmodel