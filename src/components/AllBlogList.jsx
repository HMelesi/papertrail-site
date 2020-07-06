import React from "react";
import BlogCard from "./BlogCard";
// import * as api from "../utils/api";
import Loading from "./Loading";
// import ArticleSort from "./ArticleSort";
// import { TiChevronLeft, TiChevronRight } from "react-icons/ti";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_POSTS = gql`
  query posts {
    blogPosts(orderBy: createdAt_DESC) {
      title
      description
      id
      createdAt
      heroImage {
        url
      }
    }
  }
`;

const AllBlogList = ({ setPathname }) => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      setPathname("/blog");

      if (loading) return <Loading />;
      if (error) return <div>Error :(</div>;

      return (
        <div>
          <ul className="blog__list">
            {data.blogPosts.map((blog) => {
              return (
                <BlogCard
                  key={blog.id}
                  title={blog.title}
                  id={blog.id}
                  description={blog.description}
                  imageUrl={blog.heroImage.url}
                />
              );
            })}
          </ul>
        </div>
      );
    }}
  </Query>
);

export default AllBlogList;

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
