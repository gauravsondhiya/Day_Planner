import React, { useState } from "react";
import Graph from "./Graph/Graph";
import Todolist from "./todo/Todolist";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const [selectedDays, setSelectedDays] = useState(null);

  const add = () => {
    const n = Number(inputValue);

    if (!Number.isFinite(n) || n <= 0) return; // guard
    setSelectedDays(n);
    setInputValue("");
  };

  const isDisabled = !inputValue || Number(inputValue) <= 0;

  return (
    <div>
      <h1 className="text-center mt-3 text-3xl font-bold">
        How many days do you target
      </h1>

      <div className="flex gap-5 justify-evenly border mt-5 w-[70%] m-auto p-2">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-5 text-2xl rounded-2xl"
          min="1"
          placeholder="Enter number of days"
        />

        <button
          onClick={add}
          disabled={isDisabled}
          className={`border hover:text-black p-5 text-2xl font-bold rounded-2xl ${
            isDisabled ? "bg-purple-300" : "bg-purple-600"
          }`}
        >
          Add
        </button>
      </div>

      <Graph props={selectedDays} />
    </div>
  );
};

export default Home;
