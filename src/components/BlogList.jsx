import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import * as api from "../utils/api";
import Loading from "./Loading";
import ArticleSort from "./ArticleSort";
import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { Link } from "@reach/router";

const GET_POSTS = gql`
  query posts {
    blogPosts(orderBy: createdAt_DESC) {
      title
      description
      id
      createdAt
      heroImage {
        fileName
      }
    }
  }
`;

const BlogList = ({ setPathname }) => (
  // const [blogs, setBlogs] = useState([]);
  // const [isLoading, setLoading] = useState(true);
  // const [sort_by, setSortBy] = useState("created_at");
  // const [order, setOrder] = useState("desc");
  // const [p, setP] = useState(1);
  // const [limit] = useState(10);
  // const [error, setError] = useState(null);
  // const [topic, setTopic] = useState(null);
  // const [author, setAuthor] = useState(null);
  // const [totalArticles, setTotalArticles] = useState(0);

  // useEffect(() => {
  //   setPathname("/blog");
  //   fetchBlogs(topic, author, sort_by, order, limit, p);
  // }, [topic, p, sort_by, author, limit, order]);

  // const handleInputChange = (event) => {
  //   const lookup = {
  //     "newest first": { sort_by: "created_at", order: "desc" },
  //     "oldest first": { sort_by: "created_at", order: "asc" },
  //     "most votes": { sort_by: "votes", order: "desc" },
  //     "least votes": { sort_by: "votes", order: "asc" },
  //   };
  //   const { value } = event.target;
  //   const { sort_by, order } = lookup[value];
  //   setSortBy(sort_by);
  //   setOrder(order);
  //   setP(1);
  // };

  // const changePage = (num) => {
  //   setP(p + num);
  // };

  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      setPathname("/blog");

      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <div>
          <section>
            <h2 className="page__header">papertrail blog</h2>
            <p className="page__content">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </p>
          </section>
          <ul className="blog__list">
            {data.blogPosts.map((blog) => {
              return (
                <BlogCard
                  title={blog.title}
                  id={blog.id}
                  description={blog.description}
                />
              );
            })}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default BlogList;

// if (isLoading) {
//   return <Loading />;
// }
// if (error) {
//   return <p>error!</p>;
// }
// return (
//   <div>

// {
/* <section className="page__sort">
        <ArticleSort
          sort_by={sort_by}
          order={order}
          handleInputChange={handleInputChange}
        />
      </section> */
// }
// {
/* <ul className="blog__list">
        {blogs.map((blog) => {
          return <BlogCard title={blog.title} articleid={blog.article_id} />;
        })}
      </ul>
      <div className="page__buttons">
        <button
          onClick={() => {
            changePage(-1);
          }}
          className="button--arrow"
          disabled={p === 1}
        >
          <TiChevronLeft />
        </button>
        <p className="page__subheader">page {p}</p>
        <button
          onClick={() => {
            changePage(1);
          }}
          className="button--arrow"
          disabled={p * limit > totalArticles}
        >
          <TiChevronRight />
        </button>
      </div> */
// }
//   </div>
// );
