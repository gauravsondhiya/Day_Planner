import React, { useEffect, useState } from "react";
import axios from 'axios';
const Todolist = () => {
  let [invalue, setinvalue] = useState({
    tasklist: "",
  });
  let [error,seterror]= useState()
  let isdisable = !invalue.tasklist 
  

  let [output, setoutput] = useState([]);
  let handler = (e) => {
    let { name, value } = e.target;
    setinvalue((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  let fetchdata= async()=>{
     try {
       let post = await axios.post("http://localhost:3000/api/data/daily",{
              task:invalue.tasklist 
       })
      console.log(post)
     } catch (error) {
      console.log(error)
     }
  }

  let submited = () => {
    if(!invalue.tasklist){
      seterror("Enter some task")
      return 
    }
    fetchdata()
    setoutput((pre) => [...pre, invalue]);
    setinvalue(" ");
  };
  return (
    <div className=" m-auto w-[90%] mt-5">
      <h1 className="text-center text-3xl font-bold">Day Planner</h1>
      <div className="flex justify-around grid sm:grid-cols-12 mt-5  w-[70%] m-auto gap-2 p-2">
        <input
          type="text"
          name="tasklist"
          value={invalue.tasklist || ""}
          onChange={handler}
          className="border w-full p-5 text-2xl  rounded-2xl sm:col-span-10 "
        />
        {/* <input type="time" /> */}
        <button
          onClick={submited}
          disabled={isdisable}
          className={`border
            hover:text-black p-5 text-2xl font-bold sm:col-span-2 rounded-2xl
           ${isdisable?"bg-purple-300":"bg-purple-600"}
           `}
        >
          Add
        </button>
      </div>
      <p className="text-white">{error}</p>
      {/* output */}
      <div className=" w-[70%] m-auto mt-5 ">
        {output.map((e, i) => (
          <div className=" rounded-2xl bg-gray-400 overflow-clip text-black font-bold mt-3 p-3 text-center grid sm:grid-cols-12 gap-4" key={i}>
            <h1 className="col-span-10 text-2xl">{e.tasklist}</h1>
            <button className="col-span-2 border border-2 rounded-2xl bg-purple-500 hover:text-white p-3">Done</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todolist;
