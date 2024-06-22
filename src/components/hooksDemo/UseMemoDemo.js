import React ,{ useState, useMemo } from "react";
import { findNthPrime } from "../../utils/Helper.js"



const UseMemoDemo = () => {
    const [ text, setText ] = useState(0);
    const [ darkMode, setDarkMode ] = useState(false);
    const [ showButton, setShowButton ] = useState(false);
    console.log(text);
    const prime = useMemo(() => findNthPrime(text), [text]);


  return (
    <div className={`w-96 h-96 ${ darkMode? 'bg-slate-900' : 'bg-slate-300' }`}>
      <input type="number"
      className="w-60 h-6 mx-5 my-5 border-slate-800"
      placeholder="useMemoDemo..."
      value={text}
      onChange={(e) => {
        setText(e.target.value)
      }}
      />
      <h1 className={`${darkMode? "text-white" : "text-black"}`}>The nth Prime number is {prime}</h1>
      {showButton? <button className="bg-slate-900 w-20 h-9 text-white text-sm"
      onClick={() => {
        setDarkMode(true);
        setShowButton(false);
      }}>DarkMode</button> :
      <button className="bg-slate-300 w-20 h-9 text-black text-sm"
      onClick={() => {
        setDarkMode(false);
        setShowButton(true);
      }}>LightMode</button> }
    </div>
  )
};

export default UseMemoDemo;
