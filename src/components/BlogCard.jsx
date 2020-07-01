import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

const BlogCard = ({ title, id, description }) => {
  return (
    <li className="blog__list__item">
      <h2 className="blog__list__item__title">{title}</h2>
      <p className="blog__list__item__content">{description}</p>
      <Link to={`/blog/posts/${id}`} className="link__dark blog__linkto">
        read more
      </Link>
    </li>
  );
};

export default BlogCard;
