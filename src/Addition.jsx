import React, { useState } from "react";

export default function Addition() {

    const[a,setA]=useState();
    const[b,setB]=useState();
    const[sum,setSum] = useState(0);

    const addperform = () => {
        setSum(Number(a) + Number(b));
    };

  return (
    <div>
      <input type="text" onChange={e => setA(e.target.value)}/> <br/>
      <input type="text" onChange={e => setB(e.target.value)}/>
      <button onClick={addperform}>Add</button>
      <p>Addition of 2 number is {sum}</p>
    </div>
  )
}
