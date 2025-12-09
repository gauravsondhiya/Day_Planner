import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const showtodo = () => {
   

   let [output,setoutput]= useState([])
    let fetchdata= async ()=>{
       
          await axios.get("http://localhost:3000/api/data/data")
         .then((res)=>{
            console.log(res.data.data)
            setoutput(res.data.data)
         })
    }
    useEffect(()=>{
        fetchdata()
    },[])
  return (
    <div className=" w-[70%] m-auto mt-5 ">
        {output.map((e,i) => (
          <div className=" rounded-2xl bg-gray-400 overflow-clip text-black font-bold mt-3 p-3 text-center grid sm:grid-cols-12 gap-4" key={i}>
            <h1 className="col-span-10 text-2xl">{e.task}</h1>
            <button className="col-span-2 border border-2 rounded-2xl bg-purple-500 hover:text-white p-3">Done</button>
          </div>
        ))}
      </div>
  )
}

export default showtodo