import React from "react";
import BlogCard from "./BlogCard";
import Loading from "./Loading";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Error from "./Error";

const GET_POSTS = gql`
  query posts($type: Types!) {
    blogPosts(orderBy: createdAt_DESC, where: { type: $type }) {
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

const TypeBlogList = ({ setPathname, type }) => (
  <Query query={GET_POSTS} variables={{ type: type }}>
    {({ loading, error, data }) => {
      setPathname("/blog");

      if (loading) return <Loading />;
      if (error) return <Error />;

      if (data.blogPosts.length === 0)
        return (
          <div className="blog__list">
            <h4 className="page__subheader">
              There are no blogs of this type yet, check back soon!
            </h4>
          </div>
        );
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

export default TypeBlogList;
