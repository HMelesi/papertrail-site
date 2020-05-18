import React, { Component } from "react";
import { Link } from "@reach/router";
import Navbar from "./Navbar";
import logo from "../images/logo.png";

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Link className="link__dark" to="/">
          <img src={logo} alt="papertrail logo" className="header__logo" />
        </Link>
        <Navbar />
      </header>
    );
  }
}
