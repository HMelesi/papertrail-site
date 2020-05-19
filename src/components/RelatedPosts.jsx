import React, { useState, useEffect } from "react";
import BlogTile from "./BlogTile";
import * as api from "../utils/api";
import Loading from "./Loading";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";

const RelatedPosts = ({ _topic, _author }) => {
  const [blogs, setBlogs] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [p, setP] = useState(1);
  const [limit] = useState(3);
  const [error, setError] = useState(null);
  const [topic, setTopic] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    if (_topic) {
      fetchBlogs(_topic, author, sort_by, order, limit, p);
    } else if (_author) {
      fetchBlogs(topic, _author, sort_by, order, limit, p);
    } else {
      fetchBlogs(topic, author, sort_by, order, limit, p);
    }
  }, [topic, p, sort_by, author, limit, order]);

  const fetchBlogs = (topic, author, sort_by, order, limit, p) => {
    api
      .getBlogs(topic, author, sort_by, order, limit, p)
      .then(({ articles, total_count }) => {
        setBlogs(articles);
        setLoading(false);
        setTotalArticles(total_count);
      })
      .catch(({ response }) => {
        const { status, data } = response;
        setError({ status, msg: data.message });
        setLoading(false);
      });
  };

  const arrowClick = (num) => {
    setP(p + num);
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <p>error!</p>;
  }

  return (
    <div>
      <section className="button__control">
        <button
          className="button--arrow"
          onClick={() => arrowClick(-1)}
          disabled={p * limit <= 2}
        >
          <TiChevronLeft />
        </button>
        <h3 className="button__control__text">
          {_topic ? (
            <p>related posts</p>
          ) : _author ? (
            <p>more posts by this author</p>
          ) : (
            <p>most recent posts</p>
          )}
        </h3>
        <button
          className="button--arrow"
          onClick={() => arrowClick(1)}
          disabled={p * limit >= totalArticles}
        >
          <TiChevronRight />
        </button>
      </section>

      <ul className="blog__tilelist">
        {blogs.map((blog) => {
          return <BlogTile title={blog.title} articleid={blog.article_id} />;
        })}
      </ul>
    </div>
  );
};

export default RelatedPosts;
