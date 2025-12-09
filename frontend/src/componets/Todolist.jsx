import React, { useState } from "react";

const Todolist = () => {
  let [invalue, setinvalue] = useState({
    tasklist: "",
  });
  let [output, setoutput] = useState([]);
  let handler = (e) => {
    let { name, value } = e.target;
    setinvalue((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  let datafetch 
  let submited = () => {
    setoutput((pre) => [...pre, invalue]);
    setinvalue(" ");
  };
  return (
    <div className="border m-auto w-[90%] mt-5">
      <h1 className="text-center text-3xl font-bold">Day Planner</h1>
      <div className="flex justify-around   mt-5 border">
        <input
          type="text"
          name="tasklist"
          value={invalue.tasklist || ""}
          onChange={handler}
          className="border w-[40%] p-5 text-2xl  rounded-2xl"
        />
        <input type="time" />
        <button
          onClick={submited}
          className="border p-5 text-2xl font-bold  rounded-2xl"
        >
          Add
        </button>
      </div>

      {/* output */}
      <div className="border">
        {output.map((e, i) => (
          <div className="border text-center" key={i}>
            <h1>{e.tasklist}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
