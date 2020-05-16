import React, { Component } from "react";

export default class Author extends Component {
  render({ author }) {
    return (
      <div>
        <h2>{author}</h2>
      </div>
    );
  }
}
