import React from 'react'

const Graph = () => {
    const arr = new Array(21).fill(0);  

  return (
    <div className='w-[70%] m-auto border mt-5'>
       <h1 className='text-center text-2xl font-bold'>Daily performance </h1>

       <div className='grid sm:grid-cols-12 border  gap-3 p-3 text-center'>
           {
            arr.map((e,i)=>(
              <div className='border sm:col-span-2  h-12 flex justify-center items-center' key={i}>{i+1}</div>
            ))
           }
       </div>

    </div>
  )
}

export default Graph