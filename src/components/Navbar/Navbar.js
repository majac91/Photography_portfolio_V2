import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__item">
          <NavLink
            exact
            to="/"
            activeClassName="navbar__active"
            className="navbar__link"
            href="#"
          >
            Hey,
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            exact
            to="/stories"
            activeClassName="navbar__active"
            className="navbar__link"
            href=""
          >
            Stories,
          </NavLink>
        </li>
        <li className="navbar__item">
          <NavLink
            exact
            to="/about"
            activeClassName="navbar__active"
            className="navbar__link"
            href="#"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
