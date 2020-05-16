import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import * as api from "../utils/api";
import Loading from "./Loading";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [sort_by, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");
  const [p, setP] = useState(1);
  const [limit] = useState(10);
  const [error, setError] = useState(null);
  const [topic, setTopic] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetchBlogs(topic, author, sort_by, order, limit, p);
  }, [topic, p, sort_by, author, limit, order]);

  const fetchBlogs = (topic, author, sort_by, order, limit, p) => {
    api
      .getBlogs(topic, author, sort_by, order, limit, p)
      .then(({ articles, total_count }) => {
        setBlogs(articles);
        setLoading(false);
      })
      .catch(({ response }) => {
        const { status, data } = response;
        setError({ status, msg: data.message });
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
      <ul className="blog__list">
        {blogs.map((blog) => {
          return <BlogCard title={blog.title} />;
        })}
      </ul>
    </div>
  );
};

export default BlogList;
