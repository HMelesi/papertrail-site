import React, { useState, useEffect } from "react";
import EEAL from "../images/EEAL.png";
import FIP from "../images/FIP.png";
import { Link } from "@reach/router";

const About = ({ setPathname }) => {
  useEffect(() => {
    setPathname("/");
  });

  return (
    <div>
      <h2 className="page__header">about papertrail</h2>
      <p className="page__content">
        Papertrail is an idea created by two friends, Franny and Lizzie, who
        wanted to share books that made them think and challenged them - and
        occasionally caused them #pagerage (‘page rage’ = to feel righteous
        anger over injustices revealed by the pages of a book)...<br></br>
        <br></br>
        After starting to swap books with each other, we realised that we were
        both expanding our horizons and finding out about things we might not
        have come across on our own. So, we decided we wanted to involve as many
        people as possible - to help us to broaden our outlook and understanding
        even further and to help others do the same.<br></br>
        <br></br>
        That’s when we came up with the idea of a ‘papertrail’ - a journey that
        a book embarks on to reach as many people as possible and to get them
        talking and discussing important issues with each other.<br></br>
        <br></br>A Papertrail book can be anything; a history book, novel,
        collection of poetry, non-fiction - whatever you like, as long as it
        makes you think. Personally, we’re particularly interested in books that
        teach us more about issues surrounding race (especially in light of the
        Black Lives Matter movement, which has shown us how much more we have to
        listen and learn), gender equality, trans rights and human rights, as
        well as questions around the environment and sustainability.<br></br>
        <br></br>
        Books are a vital tool in our efforts to listen, educate ourselves, and
        confront our biases and prejudices - and Papertrail is our way to try to
        bring those books to more people and to get those important
        conversations started.<br></br>
        <br></br>
        Want to join in? It’s really easy - just read our step-by-step guide to
        joining a papertrail or starting your own!<br></br>
        <br></br>
        <Link to="/how-to" className="link__pink">
          get involved!
        </Link>
      </p>
      {/* <h2 className="page__header">about the authors</h2>
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
      </div> */}
    </div>
  );
};

export default About;
