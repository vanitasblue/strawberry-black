import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  console.log(data.allMdx.nodes);
  return (
    <Layout pageTitle="Strawberry Posts">
      {data.allMdx.nodes.map((node) => {
        const image = getImage(node.frontmatter.hero_image);
        return (
          <Link to={`/blog/${node.frontmatter.slug}`} key={node.id}>
            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>Updated: {node.parent.modifiedTime}</p>
              <GatsbyImage
                image={image}
                alt={node.frontmatter.hero_image_alt}
              />
            </article>
          </Link>
        );
      })}
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
          hero_image_alt
          hero_image_credit_link
          hero_image_credit_text
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
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
