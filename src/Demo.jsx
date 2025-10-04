import React, { useState } from "react";

const Demo = () => {
const[counter,setCounter]=useState(0);

const Inscrement = () =>{
   setCounter(counter + 1);
}

  return (
    <div>
      <p>{counter}</p>
      <button onClick={Inscrement}>Inc</button>
    </div>
  )
}

export default Demo
