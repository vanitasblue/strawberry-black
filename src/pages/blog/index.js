import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";

const BlogPage = ({ data }) => {
  console.log(data.allMdx.nodes);
  return (
    <Layout pageTitle="Strawberry Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>Updated: {node.parent.modifiedTime}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          date(formatString: "YY년 MM월 DD일")
          title
          slug
        }
        parent {
          ... on File {
            modifiedTime(formatString: "YY년 MM월 DD일")
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Posts" />;

export default BlogPage;
