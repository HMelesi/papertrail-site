import React, { useState, useEffect } from "react";

const SocialMedia = ({ setPathname }) => {
  useEffect(() => {
    setPathname("/social-media");
  });
  return (
    <div>
      <h2>not sure if you'd want a page specifically</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus
        diam et facilisis ultrices. Pellentesque fringilla pellentesque
        vulputate. Pellentesque nec consequat neque, nec fringilla est.
        Vestibulum dignissim ac lorem et eleifend. Duis accumsan, massa et
        scelerisque sodales, nisl augue efficitur risus, eget interdum tortor
        tellus quis ante. Nulla nec tortor sit amet massa venenatis suscipit.
        Vivamus quis orci sit amet est congue pellentesque id ut massa. Integer
        lobortis cursus semper.
      </p>
    </div>
  );
};

export default SocialMedia;
