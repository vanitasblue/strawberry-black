import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle={"About Strawberry Oolong Tea"}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => {
  return <title>Hi there 🍓</title>;
};

export default AboutPage;
