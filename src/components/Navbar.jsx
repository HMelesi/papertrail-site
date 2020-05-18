import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

const Navbar = ({ pathname }) => {
  // const path = window.location.pathname;
  return (
    <div className="app-navbar">
      <nav>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <Link
              to="/"
              className={pathname === "/" ? "link__pink" : "link__light"}
            >
              home
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link
              to="/blog"
              className={pathname === "/blog" ? "link__pink" : "link__light"}
            >
              all blog posts
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link
              to="/your-stories"
              className={
                pathname === "/your-stories" ? "link__pink" : "link__light"
              }
            >
              your stories
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link
              to="/social-media"
              className={
                pathname === "/social-media" ? "link__pink" : "link__light"
              }
            >
              social media
            </Link>
          </li>
          <li className="navbar-list-item">
            <Link
              to="/about"
              className={pathname === "/about" ? "link__pink" : "link__light"}
            >
              about
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
