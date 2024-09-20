import React from "react";
import Layout from "../components/Layout";
import Supporters from "../components/oursupporters/Supporters";
import SEO from "../components/SEO";

export default function OurSupporters({ location }) {
  const pathname = location.pathname;
  // remove leading and trailing slashes
  const sections = pathname.replace(/^\/|\/$/g, "").split("/");
  // get locale or fallback to default if invalid
  const lang = sections.length > 0 && sections[0] !== "" ? sections[0] : "en";

  return (
    <Layout>
      <SEO title="Our Supporters | Virufy" />
      <Supporters lang={lang} />
    </Layout>
  );
}
