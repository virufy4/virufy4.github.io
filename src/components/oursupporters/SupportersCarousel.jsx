import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { useIntl, FormattedMessage } from "gatsby-plugin-intl";
import supporter_links from "../../data/supporters_links";
import "../../styles/hideScrollbar.css";

export default () => {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
      {
        allFile(
          filter: { relativePath: { regex: "/images\\/logos\\/.*\\.((png)|(jpg)|(jpeg))/" } }
        ) {
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
    <section
      style={{ maxWidth: "calc(100vw - 4rem)" }}
      id="our-supporters"
      className="overflow-x-scroll"
    >
      <h1 className="font-bold text-3xl text-center mb-6 mt-2">
        {intl.formatMessage({ id: "team.supportersSection.header" })}
      </h1>
      <p className="w-10/12 text-center m-auto">
        {intl.formatMessage({ id: "team.supportersSection.description" })}
      </p>
      <div className="">
        {/* grid grid-cols-5 xs:grid-cols-2 pt-4 gap-10 items-center mx-6 */}
        <section name="Transformers" className="my-10">
          <h2 className="flex justify-center">Transformers ($1M +)</h2>
          <div className="flex justify-evenly">
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
              <a href={supporter_links.aws} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-16"
                  fluid={images["aws"]}
                />
              </a>
            </div>
          </div>
        </section>
        <div
          className="place-self-center"
          style={{
            background: "Gainsboro",
            height: "2px",
          }}
        />
        <section name="Innovators" className="my-10">
          <h2 className="flex justify-center">Innovators ($500K +)</h2>
          <div className="flex justify-evenly">
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
          </div>
        </section>
        <div
          className="place-self-center"
          style={{
            background: "Gainsboro",
            height: "2px",
          }}
        />
        <section name="Creators" className="my-10">
          <h2 className="flex justify-center">Creators ($100K +)</h2>
          <div className="flex justify-evenly">
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-14 max-w-full"
            >
              <a href={supporter_links.littler} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["littler-logo-color"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-14 max-w-full"
            >
              <a href={supporter_links.barda} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["barda"]}
                />
              </a>
            </div>
          </div>
        </section>
        <div
          className="place-self-center"
          style={{
            background: "Gainsboro",
            height: "2px",
          }}
        />
        <section name="Collaborators" className="my-10">
          <h2 className="flex justify-center">Collaborators ($50K +)</h2>
          <div className="flex justify-evenly">
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
          </div>
        </section>
        <div
          className="place-self-center"
          style={{
            background: "Gainsboro",
            height: "2px",
          }}
        />
        <section name="Drivers" className="my-10">
          <h2 className="flex justify-center">Drivers ($10K +)</h2>
          <div className="flex justify-evenly">
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-14 max-w-full"
            >
              <a href={supporter_links.stanford} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["h4r-stanford"]}
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
              className="md:min-w-250 md:p-10 max-w-full"
            >
              <a href={supporter_links.serviceBots} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["serviceBots-logo-color"]}
                />
              </a>
            </div>
          </div>
        </section>
        <div
          className="place-self-center"
          style={{
            background: "Gainsboro",
            height: "2px",
          }}
        />
        <section name="Boosters" className="my-10">
          <h2 className="flex justify-center">Boosters (&lt;$10K)</h2>
          <div className="flex justify-evenly">
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-10 max-w-full"
            >
              <a href={supporter_links.jigJP} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["jig.jp"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-10 max-w-full"
            >
              <a href={supporter_links.devlights} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["devlights"]}
                />
              </a>
            </div>
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:pt-12 max-w-full"
            >
              <a href={supporter_links.parrolabs} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-4/6 max-h-16"
                  fluid={images["parrolabs-logo-color"]}
                />
              </a>
            </div>
          </div>
          <div className="flex justify-evenly">
            <div
              style={{ flex: "0 1 20%" }}
              className="md:min-w-250 md:p-8 max-w-full"
            >
              <a href={supporter_links.cccadv} target="_blank">
                <GatsbyImage
                  imgStyle={{ objectFit: "contain" }}
                  className="h-full max-h-24"
                  fluid={images["cccadv-logo-color"]}
                />
              </a>
            </div>
          </div>
        </section>
      </div>
      <p
        className="text-center mx-4 mb-16"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({
            id: "team.supportersSection.supporterText",
          }),
        }}
      />
    </section>
  );
};
