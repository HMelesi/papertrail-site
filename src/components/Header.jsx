import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Navbar from "./Navbar";
import logo from "../images/logo.png";

const Header = ({ pathname }) => {
  return (
    <header className="app-header">
      <Link className="link__dark" to="/">
        <img src={logo} alt="papertrail logo" className="header__logo" />
      </Link>
      <Navbar pathname={pathname} />
    </header>
  );
};

export default Header;
