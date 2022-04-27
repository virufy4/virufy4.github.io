import React, { useCallback } from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BackgroundImage from "gatsby-background-image";
import GatsbyImage from "gatsby-image";
import AvailableRoles from "./available-roles";

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/get-involved-page" } }) {
      edges {
        node {
          relativePath
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
export default function Opportunities({ data }) {
  const images = data.allFile.edges;
  const intl = useIntl();
  // const breakpoints = useBreakpoint();
  const findImage = useCallback(
    (imageName) => {
      return images.find(({ node: { name } }) => {
        return name === imageName;
      }).node.childImageSharp.fluid;
    },
    [images]
  );
  return (
    <Layout className="font-montserrat">
      <SEO title="Our Approach | Virufy" />
      {/* Top fold */}
      <div className="md:hidden">
        <BackgroundImage
          className="h-52 md:hidden"
          fluid={findImage("background-opportunities-mobile")}
          imgStyle={{ objectFit: "contain" }}
        ></BackgroundImage>
        <h2 className="text-center xs:mt-8 mb-6 mx-8">
          {intl.formatMessage({
            id: `getInvolved.opportunities.head`,
          })}
        </h2>
        <p className="md:text-center mx-8">
          {intl.formatMessage({
            id: `getInvolved.opportunities.Subhead`,
          })}
        </p>
      </div>

      <div className="xs:hidden">
        <BackgroundImage
          className="py-4 px-8"
          imgStyle={{ objectFit: "contain" }}
          fluid={findImage("background-opportunities")}
        >
          <h1 className="text-white text-center font-medium mt-28 md:pt-32 mb-20">
            {intl.formatMessage({
              id: `getInvolved.opportunities.head`,
            })}
          </h1>
        </BackgroundImage>
        <p className="md:pt-8 mx-8">
          {intl.formatMessage({
            id: `getInvolved.opportunities.Subhead`,
          })}
        </p>
      </div>
      {/* JOB OPENINGS */}
      <div className="rounded-2xl shadow-md md:mx-8">
        <AvailableRoles />
      </div>
    </Layout>
  );
}
