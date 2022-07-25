import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import BackgroundImage from "gatsby-background-image";
import links from "../../data/get-involved/links";
import GastbyImage from "gatsby-image";

export default function MissionSupporte({}) {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
      {
        allFile(
          filter: { relativePath: { regex: "/images\\/our-approach-page\\/.*\\.((png)|(jpg)|(jpeg))/"} }
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
    <div>
      <div className="md:hidden">
        <GastbyImage
          imgStyle={{ objectFit: "" }}
          className="h-full"
          fluid={images["supportmission"]}
        />
        <div className="flex-1">
          <h1 className="text-2xl pt-3  text-center">
            {intl.formatMessage({
              id: `ourApproach.supportourmission.title`,
            })}
          </h1>
          <p className="pt-4 px-4 text-sm">
            {intl.formatMessage({
              id: `ourApproach.supportourmission.description`,
            })}
          </p>
          <div className="px-24 py-8 ">
            <a
              className="no-underline font-normal rounded-xl text-white bg-primary px-4 py-2 xs:text-sm  mt-24"
              target="_blank"
            >
              {intl.formatMessage({
                id: "index.section1.donateLinkResponsive",
              })}
            </a>
          </div>
        </div>
      </div>
      <BackgroundImage
        className="py-24 px-24 text-center xs:hidden"
        imgStyle={{ objectFit: "contain" }}
        fluid={images["supportmission"]}
      >
        <div className="flex-1 ">
          <h1 className="pt-16 pb-3 text-white">
            {intl.formatMessage({
              id: `ourApproach.supportourmission.title`,
            })}
          </h1>
          <p className="md:p-8 text-xl font-medium text-white">
            {intl.formatMessage({
              id: `ourApproach.supportourmission.description`,
            })}
          </p>
          <div className="">
            <a
              className="no-underline rounded-xl  text-2xl text-white bg-primary md:px-4 py-2  mt-24"
              target="_blank"
              href={links.donateLink}
            >
              {intl.formatMessage({ id: "index.section1.donateLink" })}
            </a>
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
}
