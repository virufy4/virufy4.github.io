import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";
import supporter_links from "../../data/supporters_links";
import BackgroundImage from "gatsby-background-image";
import FormSupportes from "../../pages/FormSupporter";
import Ambassador from "../../components/OYW/Ambassador";
import { oyw } from "../../data/oyw";
import links from "../../data/index/links-donate";

const tabs = {
  supporters: "Our supporters",
  oyw: "one young world",
  teamLeads: "team leads",
};

export default function Supporters() {
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

  const [selectedTab, setSelectedTab] = useState(tabs.supporters);
  const selectedTabClasses =
    "font-medium font-semibold text-lg  xs:text-2xl bg-white border-b-4 border-solid border-green focus:outline-none active:outline-none";
  const unselectedTabClasses =
    "bg-white text-gray-500 text-lg  xs:text-2xl font-semibold xs:py-2.5";
  return (
    <>
      <section>
        <div className="md:hidden">
          <GatsbyImage
            imgStyle={{ objectFit: "" }}
            className="h-full"
            fluid={images["background-supporters"]}
          />
          <h3 className="flex-1 pt-4 px-6 text-center m-4 text-gray-600">
            {intl.formatMessage({ id: "team.supportersSection.description" })}
          </h3>
        </div>

        <BackgroundImage
          fluid={images["background-supporters"]}
          imgStyle={{ objectFit: "contain" }}
          className="text-white xs:hidden"
        >
          <div className="flex-container">
            <h1 className="flex text-center font-normal px-12 py-44">
              {intl.formatMessage({ id: "team.supportersSection.description" })}
            </h1>
          </div>
        </BackgroundImage>

        <section
          id="our-supporters"
          className="flex flex-col md:items-center py-10 md:px-14"
        >
          <div className="flex justify-between md:text-center  xs:px-2">
            <button
              onClick={() => setSelectedTab(tabs.supporters)}
              className={`${
                selectedTab === tabs.supporters
                  ? selectedTabClasses
                  : unselectedTabClasses
              } md:mr-24`}
            >
              {intl.formatMessage({
                id: "team.teamSection.supportersText",
              })}
            </button>
            <Link to="/oyw" className="xs:hidden">
              <button className="bg-white text-gray-500 text-lg font-semibold  md:mr-24">
                {intl.formatMessage({
                  id: "team.teamSection.oyw",
                })}
              </button>
            </Link>
            <Link to="/oyw" className="md:hidden">
              <button className="bg-white text-gray-500 xs:text-2xl xs:mx-2 font-semibold ">
                {intl.formatMessage({
                  id: "team.teamSection.oyw-xs",
                })}
              </button>
            </Link>
            <button
              onClick={() => setSelectedTab(tabs.teamLeads)}
              className={`${
                selectedTab === tabs.teamLeads
                  ? selectedTabClasses
                  : unselectedTabClasses
              } `}
            >
              {intl.formatMessage({
                id: "team.teamSection.teamLeadText",
              })}
            </button>
          </div>
          <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4 pt-10 px-10">
            {selectedTab === tabs.teamLeads &&
              oyw.ambassadors.map((amb, idx) => (
                <Ambassador
                  key={`ambs${idx}`}
                  role="ambassadors"
                  image={images[amb.imageName]}
                  person={amb}
                />
              ))}
          </div>

          {selectedTab === tabs.supporters && (
            <>
              <div className="grid grid-cols-5 xs:grid-cols-2 pt-4 gap-10 items-center mx-6">
                <div
                  style={{ flex: "0 1 20%" }}
                  className="md:min-w-250 md:p-2 max-w-full "
                >
                  <a href={supporter_links.stanford} target="_blank">
                    <GatsbyImage
                      imgStyle={{ objectFit: "contain" }}
                      className="h-full max-h-24"
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
                  className="md:min-w-250  md:2 max-w-full"
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
                  className="md:min-w-250 md:p-10 max-w-full"
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
              <div className="flex justify-center md:mx-12">
                <a
                  className="no-underline rounded-lg  text-white bg-blue px-6 my-4 border-2 border-blue py-2 mt-24"
                  target="_blank"
                >
                  <FormSupportes />
                </a>
              </div>
            </>
          )}
        </section>

        <div className="relative h-auto lg:h-80 xs:hidden">
          <BackgroundImage
            className="bg-gradient-to-r w-full h-64 lg:h-full"
            fluid={images["HERO_DONATING_01"]}
            style={{ backgroundPosition: "right" }}
          />

          <div className="flex flex-col justify-center items-center w-full h-full text-center p-5 md:bg-transparent md:absolute md:top-0">
            <p className="w-80 mb-10 font-semibold">
              {intl.formatMessage({
                id: "index.section5.messagehero",
              })}
            </p>
            <Link
              className="vf-btn-primary  mx-auto my-4 px-6 py-2 border-2 border-blue"
              target="_blank"
              href={links.donateLink}
            >
              {intl.formatMessage({
                id: "index.section5.donatebuttonhero",
              })}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
