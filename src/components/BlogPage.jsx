import React from "react";
import { Router, Link } from "@reach/router";
import AllBlogList from "./AllBlogList";
import TypeBlogList from "./TypeBlogList";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import Loading from "./Loading";

const GET_TYPES = gql`
  query types {
    __type(name: "Types") {
      name
      enumValues {
        name
      }
    }
  }
`;

const BlogPage = ({ setPathname }) => (
  <Query query={GET_TYPES}>
    {({ loading, error, data }) => {
      setPathname("/blog");

      if (loading) return <Loading />;
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
          <section>
            <ul className="typelink__list">
              <li className="typelink__list__item">
                <Link to="/blog/">all</Link>
              </li>
              {data.__type.enumValues.map((type) => {
                return (
                  <li key={`${type.name}`} className="typelink__list__item">
                    <Link to={`/blog/${type.name}`}>{type.name}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
          <Router>
            <AllBlogList path="/" setPathname={setPathname} />
            <TypeBlogList path="/:type" setPathname={setPathname} />
          </Router>
        </div>
      );
    }}
  </Query>
);

export default BlogPage;
