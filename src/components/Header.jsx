import React, { Component } from "react";
import { Link } from "@reach/router";

export default class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Link className="link__white" to="/">
          <h1>papertrail</h1>
        </Link>
      </header>
    );
  }
}
