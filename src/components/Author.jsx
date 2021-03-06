import React, { Component } from "react";

export default class Author extends Component {
  render() {
    const { author } = this.props;
    return (
      <div>
        <h2 className="page__header">on the page of {author}</h2>
        <p className="page__content">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <h2 className="page__header">most recent posts by {author}</h2>
        <ul className="blog__list">
          <li className="blog__list__item">first post</li>
          <li className="blog__list__item">second post</li>
          <li className="blog__list__item">third post</li>
        </ul>
      </div>
    );
  }
}
