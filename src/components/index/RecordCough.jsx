import React, { useCallback, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImg from "gatsby-image";

export default () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
      {
        allFile(
          filter: { relativePath: { regex: "/images\\/home\\/.*\\.((png)|(jpg)|(jpeg))/"} }
        )
         {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 1900, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `);
  const images = {};

  data.allFile.edges.forEach(
    (edge) => (images[edge.node.name] = edge.node.childImageSharp.fluid)
  );

  return (
    <section className="grid grid-cols-2 xs:grid-cols-1 items-center">
      <div className="mx-12 ">
        <h2 className="my-4">
          {intl.formatMessage({ id: "index.section3.header" })}
        </h2>
        <div className="flex flex-col items-center w-full mb-6">
          <div className="flex-shrink-0 mb-8">
            <p>{intl.formatMessage({ id: "index.section3.description" })}</p>
          </div>
          <div className="flex flex-col min-w-max">
            <Link
              className="vf-btn-primary mx-auto my-4 px-6 py-2 w-full border-2 border-blue"
              to="/dashboard"
            >
              {intl.formatMessage({ id: "index.section3.header3" })}
            </Link>
            <Link
              className="vf-btn-clear mx-auto px-6 py-2 w-full text-blue border-2 border-blue"
              to="/get-involved"
            >
              {intl.formatMessage({ id: "index.section3.joincommunity" })}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <GatsbyImg
          imgStyle={{ objectFit: "" }}
          className="w-full xs:w-60 md:mr-6 xs:ml-8"
          fluid={images["map-update"]}
        />
      </div>
    </section>
  );
};
