import React, { Component } from "react";
import InstaFeed from "./InstaFeed";
import FeatureBlog from "./FeatureBlog";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h2>welcome to paper trail</h2>
        <FeatureBlog />
        <h3>maybe a social media feed</h3>
        <InstaFeed />
      </div>
    );
  }
}
