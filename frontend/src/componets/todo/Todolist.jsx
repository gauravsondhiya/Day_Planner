import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/taskcontext";
const Todolist = () => {
  const { user, setUser } = useContext(UserContext);

  let [invalue, setinvalue] = useState("");
  let [output, setoutput] = useState([]);
  let isdisable = !invalue;

  let uploaddata = async () => {
    try {
      let post = await axios.post("http://localhost:3000/api/data/data", {
        task: invalue,
      });
    } catch (error) {
      console.log(error);
    }
  };

  let fetchdata = async () => {
    await axios.get("http://localhost:3000/api/data/data").then((res) => {
      setoutput(res.data?.data);
      console.log(res.data.data);
    });
  };
  // console.log(user)
  useEffect(() => {
    fetchdata();
  }, []);

  let submited = () => {
    if (!invalue) {
      return;
    }
    let tempdata = {
      id: Date.now(),
      task: invalue,
    };
    setoutput((pre) => [...pre, tempdata]);
    uploaddata();
    setinvalue(" ");
  };

  let done_deleted = async (id) => {
    await axios.delete(`http://localhost:3000/api/data/data/${id}`);

    setoutput((prev) => prev.filter((item) => item._id !== id));
  };
  return (
    <div className=" m-auto w-[90%] mt-5">
      <h1 className="text-center text-3xl font-bold">Day Planner</h1>
      <div className="flex justify-around grid sm:grid-cols-12 mt-5  w-[70%] m-auto gap-2 p-2">
        <input
          type="text"
          name="tasklist"
          value={invalue || ""}
          onChange={(e) => setinvalue(e.target.value)}
          className="border w-full p-5 text-2xl  rounded-2xl sm:col-span-10 "
        />
        {/* <input type="time" /> */}
        <button
          onClick={submited}
          disabled={isdisable}
          className={`border
            hover:text-black p-5 text-2xl font-bold sm:col-span-2 rounded-2xl
           ${isdisable ? "bg-purple-300" : "bg-purple-600"}
           `}
        >
          Add
        </button>
      </div>
      <div className=" w-[70%] m-auto mt-5 ">
        {output.map((e, i) => (
          <div
            className=" rounded-2xl bg-gray-400 overflow-clip text-black font-bold mt-3 p-3 text-center grid sm:grid-cols-12 gap-4"
            key={i}
          >
            <h1 className="col-span-10 text-2xl">{e.task}</h1>
            <button
              onClick={() => done_deleted(e._id)}
              className="col-span-2 border border-2 rounded-2xl bg-purple-500 hover:text-white p-3"
            >
              Done
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
