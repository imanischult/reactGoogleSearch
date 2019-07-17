import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo center">
          Search Google Books
        </a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <a href="#">Search Books</a>
          </li>
          <li>
            <a href="#">View Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
