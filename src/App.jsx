import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./assets/CSS/font-family.css";
import "./index.css";
import Admin from "./pages/Admin";
import AppNavbar from "./components/AppNavbar";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import React from "react";
import Reports from "./pages/Reports";
import Scheduler from "./pages/Scheduler";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function Home() {
  return <h2>This Is home</h2>;
}
function App() {
  return (
    <>
    <div className="top_menu">
        <AppNavbar />
    </div>     
      <div className="container-fluid p-0 sub_menu">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/search" element={<Search />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
