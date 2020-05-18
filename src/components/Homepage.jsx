import React, { Component } from "react";
import InstaFeed from "./InstaFeed";
import FeatureBlog from "./FeatureBlog";
import RelatedPosts from "./RelatedPosts";
import teddy from "../images/teddy.png";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <img src={teddy} alt="teddy" height="100px" />
        <h2 className="page__header">welcome to paper trail</h2>
        <p className="page__content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
        <h2 className="page__header">feature blog post</h2>

        <FeatureBlog />
        <RelatedPosts _topic={null} _author={null} />
        <h3 className="page__subheader">maybe a social media feed</h3>
      </div>
    );
  }
}
