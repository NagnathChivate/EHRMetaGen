import "../assets/EmpDetail.css";
import React, { useState } from "react";

export default function EmpDetail() {

    const[Empno, SetEmpno] = useState("");
    const[EmpName, SetEmpName] = useState("");
    const[EmpDept, SetEmpDept] = useState("");
    const[EmpEmail,SetEmpEmail] = useState("");
    const[EmpSalary, SetEmpSalary] = useState("");
    const[empobj,Setempobj] = useState([]);

    const EmpSave = () =>{
        // if(!(Empno && EmpName && EmpDept && EmpEmail && EmpSalary).trim()) return;

         if (
      !Empno.trim() ||
      !EmpName.trim() ||
      !EmpDept.trim() ||
      !EmpEmail.trim() ||
      !EmpSalary.trim()
    )
      return;

        const emp = {
            Empno, EmpName, EmpDept, EmpEmail,EmpSalary
        };

        Setempobj([...empobj,emp]);

        SetEmpno("");
        SetEmpName("");
        SetEmpDept("");
        SetEmpEmail("");
        SetEmpSalary("");

    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <div className="col-sm-12">
                    <label className="form-label">Employee Number</label>
                    <input type="text" className="form-control" value={Empno} onChange={(e) => SetEmpno(e.target.value)}  />
                </div>
                 <div className="col-sm-12">
                    <label className="form-label">Employee Full Name</label>
                    <input type="text" className="form-control" value={EmpName} onChange={(e) => SetEmpName(e.target.value)}  />
                </div>
                 <div className="col-sm-12">
                    <label className="form-label">Employee Dept</label>
                    <input type="text" className="form-control" value={EmpDept} onChange={(e) => SetEmpDept(e.target.value)}  />
                </div>
                 <div className="col-sm-12">
                    <label className="form-label">Employee Email</label>
                    <input type="text" className="form-control" value={EmpEmail} onChange={(e) => SetEmpEmail(e.target.value)}  />
                </div>
                 <div className="col-sm-12">
                    <label className="form-label">Employee Salary</label>
                    <input type="text" className="form-control" value={EmpSalary} onChange={(e) => SetEmpSalary(e.target.value)} />
                </div>
                 <div className="col-sm-12 mt-2 text-center">
                  <button className="btn btn-primary btn-sm w-50" type="button" onClick={EmpSave}>Create</button>
                </div>               
            </div>
            <div className="col-sm-6">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Employee Number</th>
                            <th>Employee Name</th>
                            <th>Employee Deprtment</th>
                            <th>Employee Email</th>
                            <th>Employee Salary</th>
                        </tr>
                        {empobj.length === 0?(<tr><td colSpan="5">Not Found</td></tr>):(
                        empobj.map((e,i) => {
                            return(
                                <tr key={i}>                                   
                                    <td>{e.Empno}</td>
                                    <td>{e.EmpName}</td>
                                    <td>{e.EmpDept}</td>
                                    <td>{e.EmpEmail}</td>
                                    <td>{e.EmpSalary}</td>
                                </tr>)
                        })                    
                        )}  
                    </tbody>
                </table>
            </div>
        </div>
      <div className="row mt-4">
        <div className="col-sm-12">
          <h5>Employee Data (JSON Format)</h5>
          <pre>{JSON.stringify(empobj, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
