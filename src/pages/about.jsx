import React, { useCallback } from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImg from "gatsby-image";
import Layout from "../components/Layout";
import { ButtonLink } from "../components/Button";
import SEO from "../components/SEO";
import BackgroundImage from "gatsby-background-image";
import values from "../data/our-values";
import OurValues from "../components/our-org/OurValues";
import AboutMeta from "../components/meta/aboutMeta";

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/team" } }) {
      edges {
        node {
          relativePath
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
`;
export default function About({ data }) {
  const images = data.allFile.edges;
  const intl = useIntl();
  const findImage = useCallback(
    (imageName) => {
      return images.find(({ node: { name } }) => {
        return name === imageName;
      }).node.childImageSharp.fluid;
    },
    [images]
  );
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: `team.valuesSection.About` })} />
      <AboutMeta />
      <section id="About us">
        <div className="container-flex ">
          <div>
            <div className="md:hidden">
              <GatsbyImg
                imgStyle={{ objectFit: "contain" }}
                className="h-full"
                fluid={findImage("backgroundaboutvision")}
              />
              <h2 className="flex-1 pt-4 px-6">
                {intl.formatMessage({ id: "team.valuesSection.About" })}
              </h2>
            </div>
            <BackgroundImage
              className="text-white  xs:hidden"
              imgStyle={{ objectFit: "contain" }}
              fluid={findImage("backgroundaboutvision")}
            >
              <div className="flex-container">
                {/* <div className="flex-1 md:pt-10 md:pl-2 text-xl">
                  {intl.formatMessage({ id: "team.valuesSection.About" })}
                </div> */}
                <h1 className="flex md:text-center font-normal mx-36 px-28 py-44">
                  {intl.formatMessage({ id: "team.valuesSection.OurPurpose" })}
                </h1>
              </div>
            </BackgroundImage>

            {/* About us */}
            <div className="md:mx-8 md:pt-10 xs:pt-4 text-left">
              <h2 className="flex-1 pt-2 pb-8 xs:hidden">
                {intl.formatMessage({ id: "team.valuesSection.About" })}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32 xs:p-6">
                <div>
                  <h2 className="py-4 font-semibold">
                    {intl.formatMessage({
                      id: "team.valuesSection.vision.ourVision",
                    })}
                  </h2>
                  <p>
                    {intl.formatMessage({
                      id: "team.valuesSection.vision.ourInnovative",
                    })}
                  </p>
                </div>
                <div>
                  <h2 className="py-4 xs:pt-8">
                    {intl.formatMessage({
                      id: "team.valuesSection.vision.ourCommitment",
                    })}
                  </h2>
                  <p
                    classname="text-black"
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({
                        id: "team.valuesSection.vision.virufyPrivacy",
                      }),
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-8 mx-12">
                <ButtonLink
                  to="/paper"
                  className="vf-btn-primary mx-auto my-4 px-6 py-2 border-2 border-blue"
                >
                  {intl.formatMessage({
                    id: `team.valuesSection.vision.buttonHelpUs`,
                  })}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values*/}
      <div>
        <h2 className="mx-8 my-12 flex-1  font-semibold">
          {intl.formatMessage({ id: "team.valuesSection.values.OurValues" })}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {values.map((info, index) => {
            const cardIcon = findImage(info.imageName);
            return (
              <OurValues
                key={info.id}
                sourceNum={index}
                title={intl.formatMessage({
                  id: `team.valuesSection.values.${info.id}.title`,
                })}
                description={intl.formatMessage({
                  id: `team.valuesSection.values.${info.id}.description`,
                })}
                icon={cardIcon}
                source={intl.formatMessage({
                  id: `team.valuesSection.values.${info.id}.source`,
                })}
              />
            );
          })}
        </div>
      </div>

      {/* Our Story */}
      <div className="pt:16 grid grid-cols-1  lg:grid-cols-3 grid-rows-2 ">
        <div className="col-span-2 row-span-2 md:hidden pt-12 ">
          <GatsbyImg
            className="h-full"
            fluid={findImage("ourStory")}
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
        <div className="md:row-span-2 pt-4 mx-8">
          <h2 className="md:pb-12 xs:py-4 font-semibold">
            {intl.formatMessage({
              id: "team.valuesSection.ourStory.title",
            })}
          </h2>
          <p className="md:pb-28 pb-8 pt-3  lg:pt-6">
            {intl.formatMessage({
              id: "team.valuesSection.ourStory.description",
            })}
          </p>
        </div>
        <div className="ml-28 mb-10 col-span-2 row-span-2 xs:hidden  mt-6 lg:pt-4 px-8">
          <GatsbyImg
            className="h-fit mr-"
            fluid={findImage("ourStory")}
            imgStyle={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </Layout>
  );
}
