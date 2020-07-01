import React from "react";
// import RelatedPosts from "./RelatedPosts";
// import * as api from "../utils/api";
import Loading from "./Loading";
// import { TiHeartOutline, TiHeartFullOutline } from "react-icons/ti";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { convertDate } from "../utils/utils.js";
// const ReactDOM = require("react-dom");
const ReactMarkdown = require("react-markdown");

// import { TypeKind } from "graphql";

const GET_POST_DETAIL = gql`
  query blogPostById($ID: ID!) {
    blogPost(where: { id: $ID }) {
      title
      author
      guestAuthor
      votes
      tags
      type
      content {
        markdown
      }
      createdAt
      heroImage {
        url
      }
    }
  }
`;

const BlogPost = ({ setPathname, id }) => (
  <Query query={GET_POST_DETAIL} variables={{ ID: id }}>
    {({ loading, error, data }) => {
      setPathname("/blog");

      if (loading) return <Loading />;
      if (error) return <div>Error :(</div>;

      const xmlString = data.blogPost.content.markdown;
      const dateString = convertDate(data.blogPost.createdAt);

      console.log(data.blogPost.heroImage.url);
      return (
        <div className="blogpost">
          <p className="blogpost__type">{data.blogPost.type}</p>
          <h2 className="page__header">{data.blogPost.title}</h2>
          <h3 className="page__subheader">
            {data.blogPost.author === "Guest"
              ? `Guest author: ${data.blogPost.guestAuthor}`
              : data.blogPost.author}
          </h3>
          <p className="blogpost__date">{dateString}</p>

          <ul className="blog__tags">
            {data.blogPost.tags.map((tag) => {
              return <li className="blog__tag">{tag}</li>;
            })}
          </ul>

          <div className="page__content">
            {<ReactMarkdown source={xmlString} escapeHtml={false} />}
          </div>
          {/* <div className="page__content">{doc}</div> */}
          {/* <h3 className="page__subheader">
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
      <RelatedPosts _author={author} _topic={null} /> */}
        </div>
      );
    }}
  </Query>

  // const changeVote = () => {
  //   if (optimisticVotes === 0) {
  //     //TODO: actually change the votes in the database
  //     setOptimisticVotes(1);
  //   } else if (optimisticVotes === 1) {
  //     //TODO: actually change the votes in the database
  //     setOptimisticVotes(0);
  //   }
  // };
  // if (isLoading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <p>error!</p>;
  // }
  // return (
  //   <div>
  //     <h2 className="page__header">{title}</h2>
  //     <h3 className="page__subheader">
  //       votes: {votes + optimisticVotes}
  //       <button
  //         onClick={() => {
  //           changeVote();
  //         }}
  //         className="button--arrow"
  //       >
  //         {optimisticVotes === 0 ? <TiHeartOutline /> : <TiHeartFullOutline />}
  //       </button>
  //     </h3>
  //     <p className="page__content">{body}</p>
  //     <RelatedPosts _topic={topic} _author={null} />
  //     <RelatedPosts _author={author} _topic={null} />
  //   </div>
  // );
);

export default BlogPost;
