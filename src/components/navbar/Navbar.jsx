// src/components/Navbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaCalendarAlt, FaSearch, FaEnvelope, FaChartBar, FaUserShield, FaSignOutAlt } from 'react-icons/fa';
import './Navbar.css';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="app-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-logo">
          GENMETAEHR
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard"> Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/scheduler"> Scheduler</Nav.Link>
            <Nav.Link as={Link} to="/search"> Search</Nav.Link>
            <Nav.Link as={Link} to="/messages"> Messages</Nav.Link>
            <Nav.Link as={Link} to="/reports"> Reports</Nav.Link>
            <Nav.Link as={Link} to="/admin"> Admin</Nav.Link>
          </Nav>
          <Button variant="outline-light" className="logout-btn">
            <FaSignOutAlt /> Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
