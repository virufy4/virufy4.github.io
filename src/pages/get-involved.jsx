import React, { useCallback, useState } from "react";
import { graphql } from "gatsby";
import { useIntl, Link } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

// Components
import ModalHandler from "../components/ModalHandler";
import SEO from "../components/SEO";
import { ButtonLink } from "../components/Button";
import Layout from "../components/Layout";
import FormTellStory from "./formtellstory";
import DonateCards from "../components/get-involved/donate/DonateCards";
import ContactUs from "./contactUs";
import GetInvolvedMeta from "../components/meta/getInvolvedMeta";

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

export default function GetInvolved({ data }) {
  const images = data.allFile.edges;
  const intl = useIntl();
  const breakpoints = useBreakpoint();
  const [selectedTab, setSelectedTab] = useState("contribute");
  const tabs = {
    contribute: "contribute",
    collaborate: "collaborate",
    tellStory: "tell your story",
  };
  const selectedTabClasses =
    "font-medium font-semibold text-lg bg-white border-b-4 border-solid border-green focus:outline-none active:outline-none xs:center";
  const unselectedTabClasses =
    "bg-white text-gray-500 text-lg font-semibold xs:center";

  const findImage = useCallback(
    (imageName) => {
      const result = images.find(({ node: { name } }) => {
        return name === imageName;
      });

      if (!result) throw new Error(`Could not find image named: ${imageName}`);

      return result.node.childImageSharp.fluid;
    },
    [images]
  );

  return (
    <ModalHandler>
      {({ openModal }) => (
        <Layout>
          <SEO
            title={intl.formatMessage({
              id: "getInvolved.title",
            })}
          />
          <GetInvolvedMeta />
          {/* Top fold */}
          <h1 className="md:mx-36 md:pr-10 mt-10  xs:text-center md:pb-16 xs:pb-8  xs:mx-2">
            {intl.formatMessage({
              id: "getInvolved.otherWaysContribute.title",
            })}
          </h1>
          <div className="text-center md:ml-28 xs:text-xs xs:px-16 xs:mx-4 md:pb-10">
            {/* Deprecated 11-10-2022, commented out just in case we need this again in the future */}
            <button
              onClick={() => setSelectedTab(tabs.contribute)}
              className={`${
                selectedTab === tabs.contribute
                  ? selectedTabClasses
                  : unselectedTabClasses
              } md:mr-16 pb-2 xs:px-8`}
            >
              <h2>
                <small>
                  {intl.formatMessage({
                    id: "getInvolved.otherWaysContribute.contribute",
                  })}
                </small>
              </h2>
            </button>
            <button
              onClick={() => setSelectedTab(tabs.collaborate)}
              className={`${
                selectedTab === tabs.collaborate
                  ? selectedTabClasses
                  : unselectedTabClasses
              } md:mr-16 pb-2 xs:px-8`}
            >
              <h2>
                <small>
                  {intl.formatMessage({
                    id: "getInvolved.otherWaysContribute.collaborate",
                  })}
                </small>
              </h2>
            </button>
            <button
              onClick={() => setSelectedTab(tabs.tellStory)}
              className={`${
                selectedTab === tabs.tellStory
                  ? selectedTabClasses
                  : unselectedTabClasses
              } md:mr-16 pb-2`}
            >
              <h2>
                <small>
                  {intl.formatMessage({
                    id: "getInvolved.otherWaysContribute.tellStory",
                  })}
                </small>
              </h2>
            </button>
          </div>

          {/* Deprecated 11-10-2022, commented out just in case we need this again in the future */}
          {/* contribute*/}
          {selectedTab === tabs.contribute && (
            <div className="grid grid-cols-1  lg:grid-cols-2 ">
              <div className="pr-2 pl-12 pt-8 md:hidden">
                <GatsbyImage
                  className="mx-auto"
                  fluid={findImage("contribute")}
                  imgStyle={{ objectFit: "contain" }}
                  aria-hidden
                />
              </div>
              <div className="pt-10 mx-8 xs:px-8">
                <p className="text-2xl pb-9 ">
                  {intl.formatMessage({
                    id: "getInvolved.joinusContibute.title",
                  })}
                </p>
                <p className="pt:12 mb-12 text-lg ">
                  {intl.formatMessage({
                    id: "getInvolved.joinusContibute.details",
                  })}
                </p>

                <div className="pb-12 xs:pl-8">
                  <button
                    className="vf-btn-primary mx-auto my-4 px-6 py-2 border-2 border-blue"
                    onClick={() => openModal(<DonateCards />)}
                  >
                    {intl.formatMessage({
                      id: "getInvolved.joinusContibute.buttonDonate",
                    })}
                  </button>
                </div>
              </div>
              <div className="pr-2 pl-12 pt-8 pb-12 xs:hidden">
                <GatsbyImage
                  className="mx-auto"
                  fluid={findImage("contribute")}
                  imgStyle={{ objectFit: "contain" }}
                  aria-hidden
                />
              </div>
            </div>
          )}

          {/* conllaborate*/}
          {selectedTab === tabs.collaborate && (
            <section className="mx-8">
              {/* Join Us in the fight*/}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                <div className="pr-2 pl-12 pt-12 md:hidden">
                  <GatsbyImage
                    className="mx-auto"
                    fluid={findImage("collaborate")}
                    imgStyle={{ objectFit: "contain" }}
                    aria-hidden
                  />
                </div>
                <div className="md:pt-24 ">
                  <p className="text-2xl md:pb-9 xs:pt-8">
                    {intl.formatMessage({
                      id: "getInvolved.joinusCollaborate.joinTitle",
                    })}
                  </p>
                  <p className="mb-12 xs:pt-6">
                    {intl.formatMessage({
                      id: "getInvolved.joinusCollaborate.details",
                    })}
                  </p>
                </div>
                <div className="pr-2 pl-12 pt-8 xs:hidden">
                  <GatsbyImage
                    className="mx-auto h-96"
                    fluid={findImage("collaborate")}
                    imgStyle={{ objectFit: "contain" }}
                    aria-hidden
                  />
                </div>
              </div>
              {/* How you can get involved*/}
              <h2 className="py-16">
                {intl.formatMessage({
                  id: "getInvolved.joinusCollaborate.joinSubTitle",
                })}
              </h2>
              <div className="grid md:grid-cols-2">
                {/* Careers*/}
                <div className="md:pt-18 md:px-16 xs:pt-8">
                  <h3 className="fond-medium text-center pb-9">
                    {intl.formatMessage({
                      id: "getInvolved.joinusCollaborate.careers",
                    })}
                  </h3>
                  <div className="pb-4">
                    <GatsbyImage
                      className="mx-auto h-56 w-60"
                      fluid={findImage("careers")}
                    />
                  </div>
                  <p className="text-center mb-6 md:mx-8">
                    {intl.formatMessage({
                      id: "getInvolved.joinusCollaborate.textcarrers",
                    })}
                  </p>
                  <div className="flex justify-center rounded-xl pt-8 pb-16 mx-8">
                    <ButtonLink
                      to="/opportunities"
                      className="md:my-10  font-normal bg-blue px-10 my-4 border-2 border-blue"
                    >
                      {intl.formatMessage({
                        id: `getInvolved.joinusCollaborate.joinButtonViewAvailable`,
                      })}
                    </ButtonLink>
                  </div>
                </div>
                {/* Become a partner*/}
                <div className="md:pt-18 md:px-16 xs:pt-8 xs:text-xl">
                  <h3 className="fond-medium text-center pb-9 xs:text-xl">
                    {intl.formatMessage({
                      id: "getInvolved.joinusCollaborate.becomeaPartner",
                    })}
                  </h3>
                  <div className="pb-4">
                    <GatsbyImage
                      className="mx-auto h-56 w-60"
                      fluid={findImage("becomeaPartner")}
                    />
                  </div>
                  <p className="text-center md:text-xl mb-6 md:mx-8">
                    {intl.formatMessage({
                      id: "getInvolved.joinusCollaborate.textbecomeaPartner",
                    })}
                  </p>
                  <div className="flex justify-center rounded-xl md:mx-6">
                    <a
                      className="no-underline rounded-xl text-white  bg-primary md:px-20 xs:text-xs px-12 my-10 border-2 border-blue"
                      target="_blank"
                    >
                      <ContactUs />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Tell you story*/}
          {selectedTab === tabs.tellStory && (
            <>
              <div className="pt-20 md:hidden md:overflow-scroll">
                <GatsbyImage
                  className="md:pr-48 "
                  fluid={findImage("background-shareStory")}
                />
                <div className="text-center px-4">
                  <h2 className=" pt-3 pb-3 ">
                    {intl.formatMessage({
                      id: `getInvolved.joinusTellStory.head`,
                    })}
                  </h2>
                  <p className="md:p-8 ">
                    {intl.formatMessage({
                      id: `getInvolved.joinusTellStory.details`,
                    })}
                  </p>
                </div>
                <FormTellStory className="pt-4" />
              </div>

              <div className="pt-20 xs:hidden md:overflow-scroll">
                <BackgroundImage
                  className=" "
                  fluid={findImage("background-shareStory")}
                >
                  <div className="flex flex-col p-24">
                    <h2 className="flex justify-end pb-6 md:pl-72 md:ml-64 mr-24">
                      {intl.formatMessage({
                        id: `getInvolved.joinusTellStory.head`,
                      })}
                    </h2>
                    <p className="flex justify-end md:pl-72 md:ml-64 mr-24">
                      {intl.formatMessage({
                        id: `getInvolved.joinusTellStory.details`,
                      })}
                    </p>
                  </div>
                </BackgroundImage>
                <FormTellStory />
              </div>
            </>
          )}
        </Layout>
      )}
    </ModalHandler>
  );
}
