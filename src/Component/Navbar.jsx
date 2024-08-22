import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      <h2>Food Recipe</h2>
      <button className='navbar-toggle' onClick={toggleMenu} aria-label='Toggle navigation'>
        &#9776; {/* Hamburger icon */}
      </button>
      <div className={`links ${isOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/recipes">Recipes</Link>
        <Link to="/awareness">Our Message</Link>
      </div>
    </nav>
  );
};

export default Navbar;
