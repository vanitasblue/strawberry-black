/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Strawberry Black Tea`,
    description: `딸기홍차의 블로그`,
    siteUrl: `https://www.yourdomain.tld`,
    keywords: `딸기홍차,딸기우롱차`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.GATSBY_ADOBE_FONTS_PROJECT_ID,
        },
      },
    },
  ],
};
