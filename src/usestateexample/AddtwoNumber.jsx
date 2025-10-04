import React, { useRef, useState } from "react";

export default function AddtwoNumber() {

    const fnum = useRef("");
    const snum = useRef("");
    const [sum,setSum] = useState("0")
    const getsum = () => {
         setSum(parseInt(fnum.current.value) + parseInt(snum.current.value));
    }
    
  return (
    <div>
      <input type="text" ref={fnum} placeholder="Ender First Number"/><br/>
      <input type="text" ref={snum} placeholder="Enter Second Number"/><br/>
      <p>{sum}</p>
      <button onClick={getsum} >Addition</button>
    </div>
  )
}
