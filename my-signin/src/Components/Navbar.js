import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/help">Help</Link>
    </nav>
  );
};

export default Navbar;



