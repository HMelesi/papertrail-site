import React, { Component } from "react";
import { Link } from "@reach/router";
import Navbar from "./Navbar";

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Link className="link__light" to="/">
          <h1>papertrail</h1>
        </Link>
        <Navbar />
      </header>
    );
  }
}
