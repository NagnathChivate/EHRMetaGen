import React, { useRef, useState } from "react";

export default function TotalSalary() {
    const basicSal = useRef("");
    const [ba,setBa] = useState("0");
    const[hra, setHra] = useState("0");
    const [da, setDa] = useState("0");
    const[tol,setTotal] = useState("0");

    const gettotalSal = () =>{
        const basic = parseInt(basicSal.current.value);
        const basicallowance = basic * 0.05;
        const dailyAllow = basic * 0.04;
        const hracal = basic * 0.02;
        
        const total = basic + basicallowance + dailyAllow + hracal ;        
        setBa(basicallowance);
        setHra(hracal);
        setDa(dailyAllow);
        setTotal(total);

    }
  return (
    <div>
      <input type="text" ref={basicSal} placeholder="Enter Total Salary"/><br/>
        <button onClick={gettotalSal}>Get Total Salary</button>

        <p>Basic Allowance Is {ba}</p>
        <p>Hra Is {hra}</p>
        <p>dailyAllow Is {da}</p>
        <p>Total Salary of EMP Is {tol}</p>
    </div>
  )
}
