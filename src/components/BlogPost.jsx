import React, { useState, useEffect } from "react";
import RelatedPosts from "./RelatedPosts";
import * as api from "../utils/api";
import Loading from "./Loading";

const BlogPost = ({ articleid }) => {
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {
    title,
    body,
    topic,
    author,
    votes,
    comment_count,
    article_id,
    created_at,
  } = article;

  useEffect(() => {
    fetchArticle(articleid);
  }, [articleid]);

  const fetchArticle = (article_id) => {
    api
      .getBlog(article_id)
      .then((article) => {
        setArticle(article);
        setLoading(false);
      })
      .catch(({ response }) => {
        const { status, data } = response;
        setError({ status: status, msg: data.message });
        setLoading(false);
      });
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>error!</p>;
  }
  return (
    <div>
      <h2 className="page__header">{title}</h2>
      <p className="page__content">{body}</p>
      <RelatedPosts _topic={topic} _author={null} />
      <RelatedPosts _author={author} _topic={null} />
    </div>
  );
};

export default BlogPost;
