import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const IndexPage = () => {
  return (
    <Layout pageTitle={"Welcome To The Strawberry Oolong Tea's Table"}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export const Head = () => <title>Welcome to the Tea Table</title>;

export default IndexPage;
