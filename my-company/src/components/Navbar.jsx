// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: 'navy', padding: '10px', textAlign: 'center' }}>
      <Link to="/" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>About</Link>
      <Link to="/services" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Services</Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 10px', textDecoration: 'none' }}>Contact</Link>
    </nav>
  );
};

export default Navbar;
