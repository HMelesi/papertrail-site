import React, { useState, useEffect } from "react";
import RelatedPosts from "./RelatedPosts";
import * as api from "../utils/api";
import Loading from "./Loading";
import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";

const BlogPost = ({ articleid }) => {
  const [article, setArticle] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [optimisticVotes, setOptimisticVotes] = useState(0);

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

  // useEffect(() => {
  //   fetchArticle(articleid);
  // }, [articleid]);

  // const fetchArticle = (article_id) => {
  //   api
  //     .getBlog(article_id)
  //     .then((article) => {
  //       setArticle(article);
  //       setLoading(false);
  //     })
  //     .catch(({ response }) => {
  //       const { status, data } = response;
  //       setError({ status: status, msg: data.message });
  //       setLoading(false);
  //     });
  // };

  const changeVote = () => {
    if (optimisticVotes === 0) {
      //TODO: actually change the votes in the database
      setOptimisticVotes(1);
    } else if (optimisticVotes === 1) {
      //TODO: actually change the votes in the database
      setOptimisticVotes(0);
    }
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
      <h3 className="page__subheader">
        votes: {votes + optimisticVotes}
        <button
          onClick={() => {
            changeVote();
          }}
          className="button--arrow"
        >
          {optimisticVotes === 0 ? <TiHeartOutline /> : <TiHeartFullOutline />}
        </button>
      </h3>
      <p className="page__content">{body}</p>
      <RelatedPosts _topic={topic} _author={null} />
      <RelatedPosts _author={author} _topic={null} />
    </div>
  );
};

export default BlogPost;
