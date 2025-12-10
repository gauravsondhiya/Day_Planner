import listmodel from "../models/taskmodel.js"

export const post_data =async (req,res) => {
  let task= req.body
  const datasave = new listmodel(task)
     datasave.save() 
  res.send("data uploaded")
}

export const getdata = async (req,res)=>{
  let data = await listmodel.find({})
  res.json({data})
}

export const deleteData = async (req, res) => {
   let task= req.body
  await listmodel.deleteOne(task);
  res.json("value deleted");
}
