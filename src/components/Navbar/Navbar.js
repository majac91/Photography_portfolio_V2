import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li className="navbar__item">
          <Link to="/" className="navbar__link" href="#">
            Hey,
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/stories" className="navbar__link" href="">
            Stories,
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link" href="#">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
