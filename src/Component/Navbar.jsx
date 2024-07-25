import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <h2>Food Recipie</h2>
        <div className='links'>
            <Link to= "/">Home</Link>
            <Link to= "/recipes">Recipies</Link>
            <Link to= "/awareness">OurMessage</Link>
        </div>
    </nav>
  )
}

export default Navbar