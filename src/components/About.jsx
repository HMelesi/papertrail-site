import React, { Component } from "react";
import EEAL from "../images/EEAL.png";
import FIP from "../images/FIP.png";

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>about papertrail</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus
          diam et facilisis ultrices. Pellentesque fringilla pellentesque
          vulputate. Pellentesque nec consequat neque, nec fringilla est.
          Vestibulum dignissim ac lorem et eleifend. Duis accumsan, massa et
          scelerisque sodales, nisl augue efficitur risus, eget interdum tortor
          tellus quis ante. Nulla nec tortor sit amet massa venenatis suscipit.
          Vivamus quis orci sit amet est congue pellentesque id ut massa.
          Integer lobortis cursus semper.
        </p>
        <h2>about the authors</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus
          diam et facilisis ultrices. Pellentesque fringilla pellentesque
          vulputate. Pellentesque nec consequat neque, nec fringilla est.
          Vestibulum dignissim ac lorem et eleifend. Duis accumsan, massa et
          scelerisque sodales, nisl augue efficitur risus, eget interdum tortor
          tellus quis ante. Nulla nec tortor sit amet massa venenatis suscipit.
          Vivamus quis orci sit amet est congue pellentesque id ut massa.
          Integer lobortis cursus semper.
        </p>
        <div>
          <img src={EEAL} alt="lizzie lester" height="300px" />
          <img src={FIP} alt="frances pickworth" height="300px" />
        </div>
        <h2>about chipie</h2>
        <p>She is awesome.</p>
      </div>
    );
  }
}
