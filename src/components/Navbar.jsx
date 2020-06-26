import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

const Navbar = ({ pathname }) => {
  // const path = window.location.pathname;
  return (
    <div className="app-navbar">
      <nav>
        <ul className="navbar-list">
          {/* <li className="navbar-list-item">
            <Link
              to="/"
              className={pathname === "/" ? "link__light" : "link__dark"}
            >
              home
            </Link>
          </li> */}
          <li className="navbar-list-item">
            <Link
              to="/"
              className={pathname === "/" ? "link__light" : "link__dark"}
            >
              about
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link
              to="/how-to"
              className={pathname === "/how-to" ? "link__light" : "link__dark"}
            >
              how to
            </Link>
          </li>
          {/* <li className="navbar-list-item">
            <Link
              to="/blog"
              className={pathname === "/blog" ? "link__light" : "link__dark"}
            >
              blog
            </Link>
          </li> */}
          <li className="navbar-list-item">
            <Link
              to="/contact"
              className={pathname === "/contact" ? "link__light" : "link__dark"}
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
