import React, { useRef, useState } from "react";

export default function UseRefExample() {
  const firstNumber = useRef();
  const secondNumber = useRef();
  const [sum, setSum] = useState(null);

  const getSum = () => {
    const num1 = Number(firstNumber.current.value);
    const num2 = Number(secondNumber.current.value);
    setSum(num1 + num2);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <input
        type="number"
        ref={firstNumber}
        placeholder="Enter First Number"
        style={{ marginBottom: "10px" }}
      />
      <br />
      <input
        type="number"
        ref={secondNumber}
        placeholder="Enter Second Number"
        style={{ marginBottom: "10px" }}
      />
      <br />
      <button onClick={getSum}>Add</button>
      <p>Sum: {sum !== null ? sum : "-"}</p>
    </div>
  );
}
