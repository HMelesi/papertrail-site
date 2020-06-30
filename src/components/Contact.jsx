import React, { useState, useEffect } from "react";
import shapes from "../images/shapes.png";

const Contact = ({ setPathname }) => {
  useEffect(() => {
    setPathname("/contact");
  });
  return (
    <div>
      <h2 className="page__header">Contact</h2>
      <p className="page__content">
        Still worried? Any questions? <br></br>
        <br></br>Drop us an email:{" "}
        <a href="mailto:thepapertrailbegins@gmail.com" className="link__pink">
          thepapertrailbegins@gmail.com
        </a>
        <br></br>
        <br></br>or a DM on{" "}
        <a
          href="https://www.twitter.com/the_papertrail_"
          target="blank"
          className="link__pink"
        >
          Twitter
        </a>{" "}
        or{" "}
        <a
          href="https://www.instagram.com/the_papertrail_"
          target="blank"
          className="link__pink"
        >
          Instagram{" "}
        </a>
        and we’ll do our best to get back to you asap.<br></br>
        <br></br>
        (Apologies in advance for any delay in getting back to you. We do this
        as a hobby so we have to balance it around our full-time jobs!)
      </p>
    </div>
  );
};

export default Contact;
