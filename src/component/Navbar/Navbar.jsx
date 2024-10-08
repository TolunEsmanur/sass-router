
import React from 'react'

import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (

    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink exact to="/" className="nav__link" activeClassName="nav__link--active">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className="nav__link" activeClassName="nav__link--active">
              About Me
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/projects" className="nav__link" activeClassName="nav__link--active">
              My Projects
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className="nav__link" activeClassName="nav__link--active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>







  )
}

export default Navbar





