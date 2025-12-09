import listmodel from "../models/taskmodel.js"

const Todo_controller =async (req,res) => {
  let task= req.body
  const datasave = new listmodel(task)
     datasave.save() 
  res.send("hello ji controller se bol rha hu")
}

export default Todo_controller