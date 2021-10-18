import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ click }) {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="nav_logo">
        <Link to="/">My pocket</Link>
      </div>

      {/* links */}
      <ul className="nav_links">
        <li>
          <Link to="/cart" className="cart_links">
            {/* Icon */}
            <i className="fas fa-shopping-cart"></i>
            <span>
              {" "}
              cart
              <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            {/* Icon */}

            <span className="cartlogo_badge">Shop</span>
          </Link>
        </li>
      </ul>

      {/* hamburgermenu */}
      <div className="hamburger_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default Navbar;
