import "./index.css";
import Addition from "./Addition.jsx";
import AddtwoNumber from "./usestateexample/AddtwoNumber.jsx";
import App from "./App.jsx";
import Components from "./Components.jsx";
import Demo from "./Demo.jsx";
import EmpDetail from "./components/EmpDetail.jsx";
import InsertCurd from "./components/InsertCurd.jsx";
import TotalSalary from "./usestateexample/TotalSalary.jsx";
import UsestateEX1 from "./usestateexample/UsestateEX1.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InsertCurd />
  </StrictMode>,
)
