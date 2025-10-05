import "../assets/CSS/AppNavbar.css";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function AppNavbar() {
  return (
    <Navbar className="Navbar" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand as={NavLink} to="/">
          EHRMetaGen
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/dashboard" className="nav-link" >
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/scheduler" className="nav-link">
              Scheduler
            </Nav.Link>
            <Nav.Link as={NavLink} to="/search" className="nav-link">
              Search
            </Nav.Link>
            <Nav.Link as={NavLink} to="/messages" className="nav-link">
              Messages
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reports" className="nav-link">
              Reports
            </Nav.Link>
            <Nav.Link as={NavLink} to="/admin" className="nav-link">
              Admin
            </Nav.Link>
          </Nav>
          <Button variant="outline-light" className="d-flex align-items-center">
            <FaSignOutAlt className="me-2" />
            Logout
          </Button>
        </Navbar.Collapse>
     </div>
    </Navbar>
  );
}
