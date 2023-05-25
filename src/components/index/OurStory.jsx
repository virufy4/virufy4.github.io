import React, { useEffect, useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import supporter_links from "../../data/supporters_links";
import "../../styles/hideScrollbar.css";

export default function OurStory() {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/images\\/logos\\/.*\\.((png)|(jpg)|(jpeg))/"} }
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
    <>
      <section className="md:flex flex-col justify-between pt-12 pb-24 ">
        <h2 className="text-center mb-6 xs:mx-6">
          {intl.formatMessage({ id: "index.section4.header2" })}
        </h2>
        <>
          <div className="grid grid-cols-5 xs:grid-cols-4  xs:gap-6 pt-4 gap-4 mx-6 items-center">
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 max-w-full "
            >
              <a href={supporter_links.stanford} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full  max-h-24"
                  fluid={images["stanford-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250  md:2 max-w-full"
            >
              <a href={supporter_links.lswInstitute} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["lswinstitute"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-8 max-w-full"
            >
              <a href={supporter_links.aws} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["aws-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-14 max-w-full"
            >
              <a href={supporter_links.drive} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["drive-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-14 max-w-full"
            >
              <a href={supporter_links.oneYoungWorld} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["oneyoungworld-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-14 max-w-full"
            >
              <a href={supporter_links.pillsbury} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["pillsbury-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-14 max-w-full"
            >
              <a href={supporter_links.idimi} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["idimi-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-14 max-w-full"
            >
              <a href={supporter_links.cj} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["cj-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-14 max-w-full"
            >
              <a href={supporter_links.xoor} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["xoor-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-8 max-w-full"
            >
              <a href={supporter_links.sherlock} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["sherlock-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-12 max-w-full"
            >
              <a href={supporter_links.nuvu} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["nuvu-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-12 max-w-full"
            >
              <a href={supporter_links.spi} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["spi-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-12 max-w-full"
            >
              <a href={supporter_links.devlights} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["devlights-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-8 max-w-full"
            >
              <a href={supporter_links.fenwick} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["fenwick-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-8 max-w-full"
            >
              <a href={supporter_links.olartemoure} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-4/6 max-h-16"
                  fluid={images["olartemoure"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-8 max-w-full"
            >
              <a href={supporter_links.lockedJar} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["lockedJar-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-8 max-w-full"
            >
              <a href={supporter_links.responseLab} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["responselab-logo-color"]}
                />
              </a>
            </div>
          </div>
        </>

        <div className="flex flex-col items-center">
          <Link
            className="vf-btn-primary  my-4 px-6 py-2 border-2 border-blue"
            to="/our-approach"
          >
            {intl.formatMessage({ id: "index.section4.supporter" })}
          </Link>
        </div>
      </section>
    </>
  );
}
