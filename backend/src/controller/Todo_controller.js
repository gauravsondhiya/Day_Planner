import listmodel from "../models/taskmodel.js";

export const post_data = async (req, res) => {
  try {
    const { key, task, day, completed } = req.body;

    // Validate (optional but recommended)
    if (!key || !task || !day) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const datasave = await listmodel.create({
      key,
      task,
      day,
      completed,
    });

    return res.status(201).json({
      message: "Data uploaded successfully",
      data: datasave,
    });

  } catch (error) {
    console.error("POST ERROR:", error);
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};
export const getdata = async (req, res) => {
  let data = await listmodel.find({});
  res.json({ data });
};

export const deleteData = async (req, res) => {
  let task = req.body;
  await listmodel.deleteOne(task);
  res.json("value deleted");
};
