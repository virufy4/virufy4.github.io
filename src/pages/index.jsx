import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

// Components
import Layout from "../components/Layout";

// Sections
import CoughSection from "../components/index/ContributeCough";
import HowItWorks from "../components/index/HowItWorks";
import RecordCough from "../components/index/RecordCough";
import OurStory from "../components/index/OurStory";
import IndexQuestion from "../components/index/IndexQuestion";
import { useIntl } from "gatsby-plugin-intl";
import IndexMeta from "../components/meta/indexMeta";

function transformImageArrayToDict(array) {
  // add the images to an object to use in gatsby image
  let images = {};

  array.forEach((edge) => (images[edge.node.name] = edge.node));

  return images;
}

export default function Home({ data }) {
  const images = transformImageArrayToDict(data.allFile.edges);
  const intl = useIntl();

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: `index.title` })} />
      <IndexMeta />
      <CoughSection images={images} />
      <HowItWorks images={images} />
      <RecordCough images={images} />
      <OurStory images={images} />
      <IndexQuestion images={images} />
    </Layout>
  );
}

// prettier-ignore
export const query = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/images\\/home\\/.*\\.((png)|(jpg)|(jpeg))/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
