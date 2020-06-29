import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Navbar from "./Navbar";
import logo from "../images/logo.png";
// import useDocumentScrollThrottled from "../hooks/scroll";

const Header = ({ pathname }) => {
  // const [shouldHideHeader, setShouldHideHeader] = useState(false);
  // const hiddenStyle = shouldHideHeader ? "hidden" : "";

  // const MINIMUM_SCROLL = 80;
  // const TIMEOUT_DELAY = 400;

  // useDocumentScrollThrottled((callbackData) => {
  //   const { previousScrollTop, currentScrollTop } = callbackData;

  //   const isScrolledDown = previousScrollTop < currentScrollTop;

  //   const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

  //   setTimeout(() => {
  //     setShouldHideHeader(isScrolledDown && isMinimumScrolled);
  //   }, TIMEOUT_DELAY);
  // });

  return (
    <header className={`app-header`}>
      <Link className="link__dark" to="/">
        <img src={logo} alt="papertrail logo" className={`header__logo`} />
      </Link>
      <Navbar pathname={pathname} />
    </header>
  );
};

export default Header;
