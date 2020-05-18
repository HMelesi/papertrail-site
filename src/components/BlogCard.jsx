import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

const BlogCard = ({ articleid, title }) => {
  return (
    <li className="blog__list__item">
      <h2 className="blog__list__item__title">{title}</h2>
      <p className="blog__list__item__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus
        diam et facilisis ultrices. Pellentesque fringilla pellentesque
        vulputate. Pellentesque nec consequat neque, nec fringilla est.
        Vestibulum dignissim ac lorem et eleifend. Duis accumsan, massa et
        scelerisque sodales, nisl augue efficitur risus, eget interdum tortor
        tellus quis ante. Nulla nec tortor sit amet massa venenatis suscipit.
        Vivamus quis orci sit amet est congue pellentesque id ut massa. Integer
        lobortis cursus semper.
      </p>
      <Link to={`/blog/posts/${articleid}`} className="link__dark blog__linkto">
        read more
      </Link>
    </li>
  );
};

export default BlogCard;
