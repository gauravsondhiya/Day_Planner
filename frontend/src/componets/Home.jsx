import React, { useState } from "react";
import Graph from "./Graph/Graph";

const Home = () => {
  let [input_value, setinputvalue] = useState();
  let [valuesend, setvaluesend] = useState();
  let add = () => {
    setvaluesend(input_value);
    setinputvalue("");
  };
  let isdisable = !input_value;
  return (
    <div>
      <h1 className="text-center mt-3 text-3xl font-bold">
        {" "}
        How much days you target{" "}
      </h1>

      <div className="flex gap-5 justify-evenly border mt-5  w-[70%] m-auto  p-2">
        <input
          type="number"
          value={input_value}
          onChange={(e) => setinputvalue(e.target.value)}
          className="border  p-5 text-2xl  rounded-2xl "
        />
        {/* <input type="time" /> */}
        <button
          onClick={add}
          disabled={isdisable}
          className={`border
            hover:text-black p-5 text-2xl font-bold  rounded-2xl
           ${isdisable ? "bg-purple-300" : "bg-purple-600"}
           `}
        >
          Add
        </button>
      </div>
      <Graph props={valuesend} />
    </div>
  );
};

export default Home;
