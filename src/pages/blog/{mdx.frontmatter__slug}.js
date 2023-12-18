import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  console.log(data.mdx.frontmatter);
  console.log(image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <p>{data.mdx.parent.modifiedTime}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit :{" "}
        <a
          href={data.mdx.frontmatter.hero_image_credit_link}
          target="_blank"
          rel="noreferrer"
        >
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YY년 MM월 DD일")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        keywords
      }
      parent {
        ... on File {
          modifiedTime(formatString: "YY년 MM월 DD일")
        }
      }
    }
  }
`;

export const Head = ({ data }) => (
  <Seo
    title={data.mdx.frontmatter.title}
    keywords={data.mdx.frontmatter.keywords}
  />
);

export default BlogPost;
