import React, { useCallback } from "react";
import { graphql, Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImg from "gatsby-image";
import Layout from "../components/Layout";
import links from "../data/index/links-donate";
import SEO from "../components/SEO";
import BackgroundImage from "gatsby-background-image";
import FounderMeta from "../components/meta/founderMeta";

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
export default function Founder({ data }) {
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
      <SEO title={intl.formatMessage({ id: `team.title` })} />
      <FounderMeta />
      <section className="" id="Our Founder">
        <div className="md:hidden">
          <GatsbyImg
            imgStyle={{ objectFit: "contain" }}
            className="h-full"
            fluid={findImage("background-OurPeople")}
          />
          <div className="flex-1">
            <h3 className="text-center md:m-8 xs:mt-8 xs:px-10">
              {intl.formatMessage({ id: "team.teamSection.weUnite" })}
            </h3>
          </div>
        </div>
        <BackgroundImage
          className="text-white  xs:hidden"
          imgStyle={{ objectFit: "contain" }}
          fluid={findImage("background-OurPeople")}
        >
          <div className="flex-container">
            <h1 className="flex text-center font-normal md:px-16 pt-72 pb-24">
              {intl.formatMessage({ id: "team.teamSection.weUnite" })}
            </h1>
          </div>
        </BackgroundImage>

        {/* Amil´s Story */}
        <div className="md:mx-8 md:pt-10 xs:pt-4 md:text-left">
          <div className="md:pb-12 xs:m-6">
            <h1 className="text-left md:mb-2 text-black xs:pt-4 xs:pb-8">
              {intl.formatMessage({ id: "team.teamSection.header" })}
            </h1>
          </div>
          <h2 className="text-center md:mb-2 text-black xs:pt-4 xs:pb-8">
            {intl.formatMessage({ id: "team.ourFounder.titleAmilStory" })}
          </h2>
        </div>

        <div className="grid grid-cols-3 xs:grid-cols-1 md:gap-x-16 md:py-8 md:mx-10">
          <div className="xs:px-2 pt-4">
            <GatsbyImg
              imgStyle={{ objectFit: "contain" }}
              className="rounded-2xl md:mr-24 overflow-hidden  md:max-h-96 md:w-96"
              fluid={findImage("amil")}
            />
          </div>
          <div className="md:col-span-2 xs:m-6 md:px-8 md:mr-10 ">
            <p className="md:mb-2  text-black  xs:pt-4 xs:pb-8">
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.firstParagraph.one",
              })}
            </p>
            <p className="md:mb-2 pr-6 text-black  xs:pt-4 xs:pb-8">
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.firstParagraph.two",
              })}
            </p>
            <p className="md:mb-2 pr-6 text-black  xs:pt-4 xs:pb-8">
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.firstParagraph.three",
              })}
            </p>
          </div>
        </div>
        <div className="xs:mx-6 md:mx-12 ">
          <p className="md:mr-16 xs:pb-8">
            {intl.formatMessage({
              id: "team.ourFounder.amilStory.secondParagraph",
            })}
          </p>
        </div>
        <div className="grid grid-cols-3 xs:grid-cols-1 md:gap-x-16 md:py-8 md:mx-10">
          <div className="xs:px-2">
            <GatsbyImg
              imgStyle={{ objectFit: "contain" }}
              className="rounded-2xl md:basis-1/4 overflow-hidden  md:max-h-96 md:w-96"
              fluid={findImage("AmilFirstImg")}
            />
          </div>
          <div className="md:col-span-2 xs:m-6 md:px-8 md:mr-10 md:mt-10 ">
            <p className="text-black  xs:pt-4 xs:pb-8">
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.thirdParagraph",
              })}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-3 xs:grid-cols-1 md:gap-x-16 md:py-8 md:mx-10">
          <div className="xs:px-2 pt:6">
            <GatsbyImg
              imgStyle={{ objectFit: "contain" }}
              className="rounded-2xl md:mr-24 overflow-hidden  md:max-h-96 md:w-96"
              fluid={findImage("AmilSecondImg")}
            />
          </div>
          <div className="md:col-span-2 xs:m-6 md:px-8 md:mr-10  ">
            <p className="md:mb-2  text-black  xs:pt-4 xs:pb-8">
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.fourthParagraph.one",
              })}
            </p>
            <p
              classname="text-black"
              dangerouslySetInnerHTML={{
                __html: intl.formatMessage({
                  id: "team.ourFounder.amilStory.fourthParagraph.two",
                }),
              }}
            />
          </div>
        </div>
        <div className="xs:mx-6 md:mx-12 ">
          <p className="md:mr-16  mb-2 xs:pb-8">
            {intl.formatMessage({
              id: "team.ourFounder.amilStory.fivethParagraph",
            })}
          </p>
          <p className="md:mr-16 xs:pb-8">
            {intl.formatMessage({
              id: "team.ourFounder.amilStory.sixthParagraph",
            })}
          </p>
        </div>
        <div className="xs:mx-6 md:m-12">
          <h2 className="md:mb-6 text-bold text-center text-black  p-8">
            {intl.formatMessage({
              id: "team.ourFounder.amilStory.Amil-Publications",
            })}
          </h2>
          <div className="my-4">
            <a
              className="md:mb-8 pb-10 text-blue underline text-lg  xs:pt-4 xs:pb-8"
              target="_blank"
              href="https://dl.acm.org/doi/10.1145/3556384.3556414"
            >
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.fifthParagraph.zero",
              })}
            </a>
          </div>
          <div className="my-4">
            <a
              className="md:mb-8 pb-10 text-blue underline text-lg  xs:pt-4 xs:pb-8"
              target="_blank"
              href="https://arxiv.org/abs/2201.01669"
            >
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.fifthParagraph.one",
              })}
            </a>
          </div>
          <div className="my-4">
            <a
              className="md:mb-8  text-blue underline    xs:pt-4 xs:pb-8"
              target="_blank"
              href="https://arxiv.org/abs/2201.11109"
            >
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.fifthParagraph.two",
              })}
            </a>
          </div>

          <div className="my-4">
            <a
              className="md:mb-8 text-blue underline  xs:pt-4 xs:pb-8"
              target="_blank"
              href="https://ui.adsabs.harvard.edu/abs/2020arXiv201113320C/abstract"
            >
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.fifthParagraph.three",
              })}
            </a>
          </div>

          <div className="my-4">
            <a
              className="md:mb-8 text-blue underline  xs:pt-4 xs:pb-8"
              target="_blank"
              href="https://dl.acm.org/doi/abs/10.1145/3382507.3417966"
            >
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.fifthParagraph.four",
              })}
            </a>
          </div>

          <div className="my-4">
            <a
              className="md:mb-8  text-blue underline xs:pt-4 xs:pb-8"
              target="_blank"
              href="https://arxiv.org/abs/2004.11823"
            >
              {intl.formatMessage({
                id: "team.ourFounder.amilStory.fifthParagraph.five",
              })}
            </a>
          </div>
        </div>
      </section>

      {/* Donate*/}
      <section className="xs:hidden">
        <BackgroundImage
          className="text-white "
          imgStyle={{ objectFit: "contain" }}
          fluid={findImage("hero-donating")}
        >
          <div className="grid grid-rows-2 justify-center text-center">
            <p className="w-80  m-12 font-semibold">
              {intl.formatMessage({
                id: "index.section5.messagehero",
              })}
            </p>
            <div className=" ">
              <Link
                className="vf-btn-primary  my-4 px-6 py-2 border-2 border-blue"
                target="_blank"
                href={links.donateLink}
              >
                {intl.formatMessage({
                  id: "index.section5.donatebuttonhero",
                })}
              </Link>
            </div>
          </div>
        </BackgroundImage>
      </section>
    </Layout>
  );
}
