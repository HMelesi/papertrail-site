import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import Navbar from "./Navbar";
import logo from "../images/logo.png";
import minilogo from "../images/minilogo.png";
import useDocumentScrollThrottled from "../hooks/scroll";

const Header = ({ pathname }) => {
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const hiddenStyle = shouldHideHeader ? "hidden" : "";

  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScroll);

    return () => window.removeEventListener("scroll", handleDocumentScroll);
  }, []);

  const handleDocumentScroll = () => {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;
    if (currentScrollTop > 0) {
      setShouldHideHeader(true);
    } else if (currentScrollTop === 0) {
      setShouldHideHeader(false);
    }
  };

  return (
    <header className={`app-header`}>
      <Link className="link__dark" to="/">
        {hiddenStyle ? (
          <img
            src={minilogo}
            alt="papertrail minilogo"
            className={`header__minilogo`}
          />
        ) : (
          <img src={logo} alt="papertrail logo" className={`header__logo`} />
        )}
      </Link>
      <Navbar pathname={pathname} />
    </header>
  );
};

export default Header;
