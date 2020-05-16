import React, { Component } from "react";
import { Link } from "@reach/router";

export default class Navbar extends Component {
  render() {
    return (
      <div className="app-navbar">
        <nav>
          <ul className="navbar-list">
            <li className="navbar-list-item">
              <Link to="/" className="link__white">
                home
              </Link>
            </li>
            <li className="navbar-list-item">
              <Link to="/blog" className="link__white">
                all blog posts
              </Link>
            </li>
            <li className="navbar-list-item">
              <Link to="/your-stories" className="link__white">
                your stories
              </Link>
            </li>
            <li className="navbar-list-item">
              <Link to="/social-media" className="link__white">
                social media
              </Link>
            </li>
            <li className="navbar-list-item">
              <Link to="/about" className="link__white">
                about
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
