import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";

const Seo = ({ title, keywords }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `);
  let newKeywords = data.site.siteMetadata.keywords;
  if (keywords !== undefined) {
    newKeywords = keywords.join(",");
    newKeywords += `,${data.site.siteMetadata.keywords}`;
  }
  console.log(keywords);
  return (
    <>
      <title>{`${title} 🍓 ${data.site.siteMetadata.title}`}</title>
      <meta
        name="description"
        content={`${data.site.siteMetadata.description} 🍓 ${title}`}
      />
      <meta name="keywords" content={newKeywords} />
    </>
  );
};

export default Seo;
