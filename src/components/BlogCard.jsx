import React from "react";
import { Link } from "@reach/router";

const BlogCard = ({ title, id, description, imageUrl }) => {
  return (
    <li className="blog__list__item">
      <div>
        <img
          src={imageUrl}
          alt={`${title}`}
          className="blog__list__item__image"
        />
      </div>
      <div className="blog__list__item__content">
        <h2 className="blog__list__item__title">{title}</h2>
        <p className="blog__list__item__description">{description}</p>
        <Link to={`/blog/posts/${id}`} className="link__dark blog__linkto">
          read more
        </Link>
      </div>
    </li>
  );
};

export default BlogCard;
