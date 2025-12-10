import React from "react";

const Graph = (days) => {
  let num = Number(days.props) || 0;
  const arr = new Array(num).fill(0);

  return (
    <div className="w-[70%] m-auto  mt-5">
      <h1 className="text-center text-2xl font-bold">
        Daily performance Graph
      </h1>

      <div className="grid sm:grid-cols-12 border mt-5 gap-3 p-3 text-center">
        {arr.map((e, i) => (
          <div
            className="border sm:col-span-2  h-12 flex justify-center items-center"
            key={i}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;
