import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/taskcontext";
const Todolist = () => {
  const { user, setUser } = useContext(UserContext);

  let [invalue, setinvalue] = useState({
    key: "",
    day: "",
    completed: "",
    task: "",
  });

  let [output, setoutput] = useState([]);
  let [deleted_count, setdeleted_count] = useState(0);
  let isdisable = !invalue;
  let handler = (e) => {
    let { name, value } = e.target;
    setinvalue((pre) => ({
      ...pre,
      [name]: value,
    }));
  };


  let uploaddata = async () => {
    try {
      let post = await axios.post("http://localhost:3000/api/data/data", {
        task: output.task,
        key: output.key,
        day: "",
        completed: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  let fetchdata = async () => {
    await axios.get("http://localhost:3000/api/data/data").then((res) => {
      setoutput(res.data?.data);
    });
  };
  // console.log(user)
  useEffect(() => {
    fetchdata();
  }, []);

  let submited = (e) => {
    e.preventDefault()
    if (!invalue.task) {
      return;
    }
    let tempdata = {
    key: Date.now(),
    day: "",
    completed: "",
    task: invalue.task,
    };

    setoutput((pre) => [...pre, tempdata]);
    uploaddata();
    setinvalue(" ");
  };

  let done_deleted = async (task) => {
    console.log(task);
    try {
      await axios.delete(`http://localhost:3000/api/data/data`);
      setoutput((prev) => prev.filter((item) => item.task !== task));
      setdeleted_count(deleted_count + 1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" m-auto w-[90%] mt-5">
      <h1 className="text-center text-3xl font-bold">Day Planner</h1>
      <form
        onSubmit={submited}
        className="flex border justify-around grid  mt-5  w-[70%] m-auto gap-2 p-2"
      >
        <input
          type="text"
          name="task"
          placeholder="task"
          value={invalue.task || ""}
          onChange={handler}
          className="border w-full p-5 text-2xl  rounded-2xl  "
        />
        {/* <input
          type="text"
          name="task"
          value={invalue.task || ""}
          onChange={handler}
          className="border w-full p-5 text-2xl  rounded-2xl "
        /> */}

        <input
          type="submit"
          disabled={isdisable}
          className={`border
            hover:text-black p-5 text-2xl font-bold  rounded-2xl
           ${isdisable ? "bg-purple-300" : "bg-purple-600"}
           `}
        />
      </form>

      <div className=" w-[70%] m-auto mt-5 ">
        {output.map((e, i) => (
          <div
            className=" rounded-2xl bg-gray-400 h-auto  text-black font-bold mt-3 p-3 grid sm:grid-cols-12 gap-4"
            key={i}
          >
            <h1 className="col-span-10 border truncate text-2xl flex items-center">
              {e.task}
            </h1>
            <button
              onClick={() => done_deleted(e.task)}
              className="col-span-2 border border-2 rounded-2xl bg-purple-500 hover:text-white p-3"
            >
              Done
            </button>
          </div>
        ))}
      </div>
      <h1 className="text-2xl text-white">{deleted_count}</h1>
    </div>
  );
};

export default Todolist;
