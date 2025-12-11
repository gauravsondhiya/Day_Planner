import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../../context/taskcontext";

const Todolist = (value) => {
  const day = Number(value.props) || 0; // fallback 0 if undefined
  // console.log(day)
  const { user, setUser } = useContext(UserContext);

 

  const [invalue, setinvalue] = useState({
    key: "",
    day: 0,
    completed: false,
    task: "",
  });
  const [output, setoutput] = useState([]);
  const [deleted_count, setdeleted_count] = useState(0);

  // disable submit when task is empty/whitespace or when loading
  const isDisabled = !invalue.task || !invalue.task.trim();

  const handler = (e) => {
    const { name, value } = e.target;
    setinvalue((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const fetchdata = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/data/data");
      setoutput(res.data?.data || []);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const submited = async (e) => {
    e.preventDefault();
    if (!invalue.task || !invalue.task.trim()) {
      return;
    }

    const tempdata = {
      key: Date.now().toString(),
      day: day,
      completed: false,
      task: invalue.task.trim(),
    };

    try {
      // post the new task (send tempdata)
      const res = await axios.post(
        "http://localhost:3000/api/data/data",
        tempdata
      );

      // add saved to local state (prepend)
      setoutput((prev) => [tempdata, ...prev]);

      // reset input
      // setinvalue({ ...initialInput, day }); // keep correct day
    } catch (error) {
      console.error("Post error:", error);
    }
    setinvalue(" ")
  };

  const done_deleted = async (key) => {
    try {
      await axios.delete(`http://localhost:3000/api/data/data`);
      setoutput((prev) => prev.filter((item) => item.key !== key));
      setdeleted_count((c) => c + 1);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="m-auto w-[90%] mt-5">
      <h1 className="text-center text-3xl font-bold">Day Planner</h1>

      <form
        onSubmit={submited}
        className="flex border justify-around grid mt-5 w-[70%] m-auto gap-2 p-2"
      >
        <input
          type="text"
          name="task"
          value={invalue.task||""}
          placeholder="task"
          onChange={handler}
          className="border w-full p-5 text-2xl rounded-2xl"
        />

        <input
          type="submit"
          disabled={isDisabled}
          className={`border hover:text-black p-5 text-2xl font-bold rounded-2xl ${
            isDisabled ? "bg-purple-300" : "bg-purple-600"
          }`}
        />
      </form>

      <div className="w-[70%] m-auto mt-5">
        {output.map((e, i) => (
          <div
            className="rounded-2xl bg-gray-400 h-auto text-black font-bold mt-3 p-3 grid sm:grid-cols-12 gap-4"
            key={e.key || i}
          >
            <h1 className="col-span-10 border truncate text-2xl flex items-center">
              {e.task}
            </h1>
            <button
              onClick={() => done_deleted(e.key)}
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
