import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle={"Welcome To The Strawberry Oolong Tea's Table"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src={
          "https://images.unsplash.com/photo-1701717050657-3dc277736d19?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MzcwMzh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MDI1MzAxNTJ8&ixlib=rb-4.0.3&q=85"
        }
        alt="tree"
      />
      <StaticImage src="../images/icon.png" alt="icon" />
    </Layout>
  );
};

export const Head = () => <Seo title="Welcome to" />;

export default IndexPage;
