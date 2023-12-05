import React from "react"; 
import { useState } from "react"; 
import { Link, NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Inicio
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/moviecards">Movie Cards </NavLink>
        </li>
        <li>
          <NavLink to="/sesion">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar


