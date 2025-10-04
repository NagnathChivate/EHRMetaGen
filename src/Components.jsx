import React from "react";

const Components = () => {
  var a= 10;
  var b = 20;
  return (
    <div>
      <h2>Functional component output</h2>
      <label htmlFor="">User Name</label>
      <input type="text" placeholder="User Name"/><br/>
      <label htmlFor="">Password</label>
      <input type="text" placeholder="Password"/><br/>
      <input type="button" value="Login"/>
      <p>Value of a  Is {a}</p>
       <p>Value of b  Is {b}</p>
    </div>
  )
}

export default Components
