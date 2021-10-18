import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar({ show }) {
  const sidebarclass = ["sidebar"];
  if (show) {
    sidebarclass.push("show");
  }

  return (
    <div className={sidebarclass.join(" ")}>
      <ul className="sidebar_links">
        <li>
          <Link to="/cart">
            <i className="fas  fa-shopping-cart"></i>
            <span>
              cart <span className="sidebar_cartbadge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
