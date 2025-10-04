import React, { useRef } from "react";

export default function UseRefExample() {4

    const[fnum,setFun]=useRef("");

  return (
    <div>
        <input type="number" ref="firsrNumber" placeholder="Enter First Number"/><br/>
        <input type="number" ref="SecondNumber" placeholder="Enter Second Number"/>
        <button onClick={getsum}>Add</button>
        <p></p>
      
    </div>
  )
}
