import React, { useState } from "react";

export default function InsertCurd() {
    const[Studentname,setStudentname] = useState("");
    const [students,setStudents] = useState([]);//intilize empty array


    const insertSName = () => {
        if(!Studentname.trim()) return;
        setStudents([...students,Studentname]);
        setStudentname('');
    }
  return (
    <div className="m-4">
      <input type="text" value={Studentname} onChange={(e) =>setStudentname(e.target.value)} placeholder="Enter Student Name"></input><br/>
      <button onClick={insertSName} className="btn btn-primary m-4" >Insert</button>
      <table border="1" className="table">
        <tbody>           
                <tr>
                <th>SNo</th>
                <th>Student Name</th>
                <th>Action</th>
                </tr>
                {students.length === 0?(<tr><td colSpan="2">Not Found</td></tr>):(
                students.map((n,i) => {
                     return(
                        <tr>
                          <td>{i+1}</td>
                          <td>{n}</td>
                          <td><button className="btn btn-success">Edit</button></td>
                        </tr>)
                 })                    
                )}            
        </tbody>
      </table>
    </div>
  )
}
