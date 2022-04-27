import React, { useCallback } from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import { ButtonLink } from "../components/Button";
import InfoCard from "../components/ourApproach/InfoCard";
import learnMoreCards from "../data/our-approach/learn-more-cards";
import SEO from "../components/SEO";
import BackgroundImage from "gatsby-background-image";
import OurApproachMeta from "../components/meta/ourApproachMeta";

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "images/our-approach-page" } }) {
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
export default function OurApproach({ data }) {
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
      <SEO
        title={intl.formatMessage({
          id: `ourApproach.title`,
        })}
      />
      <OurApproachMeta />
      {/* Top fold */}
      <div>
        <div className="md:hidden font-medium">
          <BackgroundImage
            className="text-white"
            fluid={findImage("background-OurApproch")}
            imgStyle={{ objectFit: "contain" }}
          >
            <div className="flex-container">
              <h2 className="flex-1 text-lg text-left text-black xs:pt-8 xs:pb-12 xs:pl-8 xs:mr-32">
                {intl.formatMessage({
                  id: `ourApproach.topFold.diagnoseDisease`,
                })}
              </h2>
            </div>
          </BackgroundImage>
          <div className="flex-1">
            <p className="text-center xs:px-6 pt-4 xs:pb-4">
              {intl.formatMessage({
                id: `ourApproach.topFold.healthcare`,
              })}
            </p>
          </div>
        </div>

        <BackgroundImage
          className="xs:hidden font-medium"
          imgStyle={{ objectFit: "contain" }}
          fluid={findImage("background-OurApproch")}
        >
          <div className="flex-container">
            {/* <div className="flex-1 md:pt-10 md:pl-2 text-white text-xl">
              {intl.formatMessage({ id: `ourApproach.topFold.ourTech` })}
            </div> */}
            <h2 className="flex-1 md:pt-32 pb-6 md:pr-60 pl-32 mr-56">
              {intl.formatMessage({
                id: `ourApproach.topFold.diagnoseDisease`,
              })}
            </h2>
            <h3 className="flex-1 md:pb-32 md:pr-60 pl-32 mr-56 font-bold">
              {intl.formatMessage({
                id: `ourApproach.topFold.healthcare`,
              })}
            </h3>
          </div>
        </BackgroundImage>
        <p className="font-normal md:pt-8 px-10 md:mx-18 xs:pt-4 xs:px-12 xs:text-sm">
          {intl.formatMessage({
            id: `ourApproach.topFold.algorithmInfo`,
          })}
        </p>
      </div>
      <h1 className="pt-2 pb-8 mx-8">
        {intl.formatMessage({ id: "ourApproach.topFold.ourTech" })}
      </h1>
      {/* The usingTechnology */}
      <div className="md:pt-12 md:py-14 mx-8 xs:py-8">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6">
          <div className=" whitespace-pre-line  md:p-4 xs:pt-4">
            <h2>
              {intl.formatMessage({
                id: "ourApproach.topFold.usingTechnology",
              })}
            </h2>
            <p className="py-4  text-blue">
              {intl.formatMessage({
                id: "ourApproach.topFold.ourAI",
              })}
            </p>
            <p className="pb-8 md:text-sm">
              {intl.formatMessage({
                id: `ourApproach.topFold.edgeResearch`,
              })}
            </p>
            <ButtonLink
              to="/paper"
              className="vf-btn-primary mx-auto my-4 px-6  border-2 border-blue"
            >
              {intl.formatMessage({
                id: `ourApproach.topFold.checkOutResearch`,
              })}
            </ButtonLink>
          </div>
          <div className="md:p-2 md:shadow-lg rounded-lg  ">
            <Img
              className="md:h-full"
              fluid={findImage("thetecnology")}
              imgStyle={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>

      {/* Research  */}
      <div className="flex-container md:py-14 md:px-10 mx-8">
        <h2 className="md:mb-6 lg:mb-4">
          {intl.formatMessage({
            id: "ourApproach.research.resourcestolear",
          })}
        </h2>
        <p className="font-heading font-medium my-6 lg:mb-4">
          {intl.formatMessage({
            id: "ourApproach.research.wantToLearnMore",
          })}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {learnMoreCards.map((info, index) => {
            const cardIcon = findImage(info.imageName);
            return (
              <InfoCard
                key={info.id}
                sourceNum={index + 1}
                title={intl.formatMessage({
                  id: `ourApproach.research.${info.id}.title`,
                })}
                description={intl.formatMessage({
                  id: `ourApproach.research.${info.id}.description`,
                })}
                icon={cardIcon}
                source={intl.formatMessage({
                  id: `ourApproach.research.${info.id}.source`,
                })}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
