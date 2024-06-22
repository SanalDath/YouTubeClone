import React, { useState, useRef, useEffect } from 'react';

const UserefDemo = () => {
    const [values, setvalue ] = useState(10)
    var x = 10;

    const ref = useRef(0);
    const time = useRef(null);
    useEffect(() => {
         time.current = setInterval(() => {
          console.log(Math.random())
        }, 2000)
      return () => clearInterval(time)},[])
  return (
    <div>
      <div className='w-96 h-96 bg-slate-200 ml-5'>
        <button className='text-sm bg-green-800 w-20 h-9'
        onClick={()=>{ x = x+1;
            console.log(x);
        }}>increase x</button>
        <h1 className='font-xl font-bold text-black'>increase x = {x}</h1>
        <button className='text-sm bg-green-800 w-20 h-9'
        onClick={()=>{
            setvalue(values + 1);
            console.log(values);
        }}>increase y</button>
        <h1 className='font-xl font-bold text-black'>increase y = {values}</h1>
        <button className='text-sm bg-green-800 w-20 h-9'
        onClick={()=>{
           ref.current = ref.current + 1;
            console.log("ref", ref.current);
        }}>increase ref</button>
        <h1 className='font-xl font-bold text-black'>increase ref = {ref.current}</h1>
      </div>
      <button className="bg-red-600 w-20 h-9"
      onClick={() => clearInterval(time.current)}>Stop interval</button>
    </div>
  )
}

export default UserefDemo;
