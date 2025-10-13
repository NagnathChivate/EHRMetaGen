import React, { Use, useState } from "react";

export default function UsestateEX1() {

const[color,setColor] = useState("red");
const [brand,setbrand] = useState("gleenwalk");
const[model,setModel] = useState("2019");
const[year,setYear] = useState("2025");

const getcolor = () =>{
    setColor("Blue");
    setModel("Ok");
    setbrand("Like");
    setYear("Current");
}
  return (
    <div>
      <h1>my favorite colo Is {color}!<br/> Brand is {brand} <br/> model is {model} <br/> Year Is {year}</h1>
      <button onClick={getcolor}>Change Modal</button>
    </div>
  )
}
