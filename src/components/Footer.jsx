import React, { Component } from "react";
import { GrInstagram, GrTwitter } from "react-icons/gr";

export default class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        <a
          href="https://github.com/HMelesi"
          target="blank"
          className="link__light"
        >
          <p className="footer--content">site build by Harriet Melesi 2020</p>
        </a>

        <div className="footer--social">
          <a
            href="https://www.instagram.com/the_papertrail_/"
            target="blank"
            className="link__light social__link"
          >
            <GrInstagram />
          </a>
          <a
            href="https://twitter.com/the_papertrail_"
            target="blank"
            className="link__light social__link"
          >
            <GrTwitter />
          </a>
        </div>
      </footer>
    );
  }
}
