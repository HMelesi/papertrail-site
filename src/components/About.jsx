import React, { useState, useEffect } from "react";
import EEAL from "../images/EEAL.png";
import FIP from "../images/FIP.png";
import { Link } from "@reach/router";

const About = ({ setPathname }) => {
  useEffect(() => {
    setPathname("/about");
  });

  return (
    <div>
      <h2 className="page__header">about papertrail</h2>
      <p className="page__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus
        diam et facilisis ultrices. Pellentesque fringilla pellentesque
        vulputate. Pellentesque nec consequat neque, nec fringilla est.
        Vestibulum dignissim ac lorem et eleifend. Duis accumsan, massa et
        scelerisque sodales, nisl augue efficitur risus, eget interdum tortor
        tellus quis ante. Nulla nec tortor sit amet massa venenatis suscipit.
        Vivamus quis orci sit amet est congue pellentesque id ut massa. Integer
        lobortis cursus semper.
      </p>
      <h2 className="page__header">about the authors</h2>
      <p className="page__content">
        Frances and Lizz are a couple of weenies but you can click on them to
        find out more information.
      </p>
      <div className="author__list">
        <div className="author__list__item">
          <Link to="/about/authors/lizzie-lester" className="link__light">
            <img src={EEAL} alt="lizzie lester" height="300px" />
            <h4>Lizzie Lester</h4>
          </Link>
        </div>
        <div className="author__list__item">
          <Link to="/about/authors/frances-pickworth" className="link__light">
            <img src={FIP} alt="frances pickworth" height="300px" />
            <h4>France Pickworth</h4>
          </Link>
        </div>
      </div>
      <h2 className="page__header">about chipie</h2>
      <p className="page__content">She is awesome.</p>
    </div>
  );
};

export default About;
