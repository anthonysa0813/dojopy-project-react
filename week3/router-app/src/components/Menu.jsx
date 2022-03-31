import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header className="">
      <div className="wrapper">
        <div className="headerContainer">
          <h1>Mi Blog</h1>
          <nav className="nav">
            <ul className="">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Menu;
