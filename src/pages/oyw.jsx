import React, { useState } from "react";
import Layout from "../components/Layout";
import { useIntl } from "gatsby-plugin-intl";
import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";
import GatsbyImage from "gatsby-image";
import Testimonials from "../components/OYW/Testimonials";
import BackgroundImage from "gatsby-background-image";
import { ButtonLink } from "../components/Button";
import Ambassador from "../components/OYW/Ambassador";
import { oyw } from "../data/oyw";
import links from "../data/get-involved/links";

export const query = graphql`
  {
    allFile(
      filter: { relativePath: { regex: "/images\\/oyw\\/.*\\.((png)|(jpg)|(jpeg))/" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 90, maxWidth: 2000)  {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
const VideoList = (props) => {
  const { id, source } = props;
  return (
    <div className="w-full h-full">
      <iframe
        style={{ width: "100%", height: "100%" }}
        key={id}
        title="YouTube video player"
        class="video"
        src={source}
        data-cookieconsent="marketing"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};
const videos = [
  {
    id: "video1",
    source: "https://www.youtube.com/embed/hvJgwPNYnZo",
  },
];

const tabs = {
  supporters: "supporters",
  oyw: "one young world",
  teamLeads: "team Leads",
};

export default function OYW({ data }) {
  const intl = useIntl();
  const [selectedTab, setSelectedTab] = useState(tabs.oyw);

  const images = {};
  // add the images to an object to use in gatsby image
  data.allFile.edges.forEach((edge) => (images[edge.node.name] = edge.node));

  const selectedTabClasses =
    "font-semibold text-lg bg-white xs:text-2xl border-b-4 border-solid border-green focus:outline-none active:outline-none";
  const unselectedTabClasses =
    "bg-white text-gray-500 text-lg xs:text-2xl font-semibold xs:py-2.5";

  return (
    <Layout className="font-montserrat">
      <SEO title="OYW | Virufy" />

      <div className="md:hidden">
        <BackgroundImage
          fluid={images["oyw"].childImageSharp.fluid}
          imgStyle={{ objectFit: "contain" }}
          className=" text-white "
        >
          <GatsbyImage
            className="pt-16 ml-6 xs:w-14 xs:h-6 "
            imgStyle={{ objectFit: "contain" }}
            fluid={images["logoOne"].childImageSharp.fluid}
          />
          <p className="pb-24  xs:px-4 xs:text-sm">
            {intl.formatMessage({ id: "OYW.topbanner.title" })}
          </p>
        </BackgroundImage>
        <h3 className="text-center text-gray-500 pt-4 pb-12 mx-8">
          {intl.formatMessage({ id: "OYW.topbanner.description" })}
        </h3>
      </div>

      <BackgroundImage
        fluid={images["oyw"].childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
        className=" text-white xs:hidden"
      >
        {/* <div className="flex-1 md:pt-10 md:pl-4 text-white md:text-xl">
          {intl.formatMessage({ id: "OYW.topbanner.header" })}
        </div> */}

        <GatsbyImage
          className="mx-16 w-36 h-16"
          imgStyle={{ objectFit: "contain" }}
          fluid={images["logoOne"].childImageSharp.fluid}
        />
        <h3 className="md:mt-2 mx-16 pb-12">
          {intl.formatMessage({ id: "OYW.topbanner.title" })}
        </h3>

        <h3 className="md:text-center pt-32 pb-12 m-12 px-12 font-medium">
          {intl.formatMessage({ id: "OYW.topbanner.description" })}
        </h3>
      </BackgroundImage>

      <div className="xs:flex xs:justify-between md:text-center xs:ml-4 md:ml-8">
        <Link to="/oursupporters#">
          <button className="bg-white text-gray-500 xs:text-2xl xs:mx-2 font-semibold">
            {intl.formatMessage({
              id: "team.teamSection.supportersText",
            })}
          </button>
        </Link>

        <button
          onClick={() => setSelectedTab(tabs.oyw)}
          className={`${
            selectedTab === tabs.oyw ? selectedTabClasses : unselectedTabClasses
          } md:mr-24  md:ml-24 xs:hidden`}
        >
          {intl.formatMessage({
            id: "team.teamSection.oyw",
          })}
        </button>

        <button
          onClick={() => setSelectedTab(tabs.oyw)}
          className={`${
            selectedTab === tabs.oyw ? selectedTabClasses : unselectedTabClasses
          } md:mr-24 md:hidden xs:pt-6 xs:mx-4`}
        >
          {intl.formatMessage({
            id: "team.teamSection.oyw-xs",
          })}
        </button>

        <button
          onClick={() => setSelectedTab(tabs.teamLeads)}
          className={`${
            selectedTab === tabs.teamLeads
              ? selectedTabClasses
              : unselectedTabClasses
          } mr-12 xs:mr-4`}
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
              image={images[amb.imageName]?.childImageSharp?.fluid}
              person={amb}
            />
          ))}
      </div>

      {selectedTab === tabs.oyw && (
        <section className="mx-8">
          {/* youtube */}
          <h2 className="mb-12 xs:text-center">
            {intl.formatMessage({ id: "OYW.headers.header" })}
          </h2>
          <div className="h-auto grid gap-x-4 lg:grid-cols-2 ">
            <div className="flex flex-col justify-center w-full">
              <p
                className="mt-6  md:text-sm"
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "OYW.headers.topbanner" }),
                }}
              ></p>
              <p
                className="md:mt-8 mb-4 xs:mt-8 md:text-sm"
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "OYW.headers.sub-header" }),
                }}
              ></p>

              <div className="flex flex-col text-center">
                <ButtonLink
                  to="/available-roles"
                  className="flex justify-center md:mx-28 my-4 px-6 py-2"
                >
                  {intl.formatMessage({
                    id: `OYW.headers.buttonJoinUs`,
                  })}
                </ButtonLink>
                <a
                  className="no-underline text-center flex md:mx-28 my-4 px-6 py-2 justify-center  text-blue border-2 border-blue rounded-lg"
                  target="_blank"
                  href={links.learMoreOYW}
                >
                  {intl.formatMessage({ id: "index.section2.learnMoreLink" })}
                </a>
              </div>
              <div className=""></div>
            </div>
            <div className="w-full xs:pt-8">
              {videos.map((item) => {
                return <VideoList id={item.id} source={item.source} />;
              })}
            </div>
          </div>

          {/*Why One Young World */}
          <h2 className="font-heading text-left mt-16  xs:text-center mb-4 lg:mb-2 md:pt-24">
            {intl.formatMessage({
              id: `OYW.section2.title`,
            })}
          </h2>
          <div className="md:py-12  h-auto grid gap-10  md:grid-cols-2 grid-rows-2 xl:grid-cols-2 ">
            {/* ambassador impact */}
            <div className="bg-white flex flex-col items-center md:py-10 rounded-2xl">
              <div className="grid md:grid-cols-2 w-full md:w-10/12">
                <GatsbyImage
                  className="mx-auto w-24 h-40"
                  imgStyle={{ objectFit: "contain" }}
                  fluid={images["ambassador"].childImageSharp.fluid}
                />
                <h3 className="md:mt-8 md:mb-4 text-gray-200 xs:text-center">
                  {intl.formatMessage({ id: "OYW.section2.ambassador" })}
                </h3>
              </div>
              <p className="flex-col text-center xs:py-4 ">
                {intl.formatMessage({ id: "OYW.section2.ambassador-des" })}
              </p>
            </div>
            {/* youth */}
            <div className="bg-white flex flex-col items-center md:py-10  rounded-2xl">
              <div className=" grid md:grid-cols-2 w-full md:w-10/12">
                <GatsbyImage
                  className="mx-auto w-24 h-40"
                  imgStyle={{ objectFit: "contain" }}
                  fluid={images["youth"].childImageSharp.fluid}
                />
                <h3 className="md:mt-8 md:mr-28 mb-4 text-gray-200 xs:text-center">
                  {intl.formatMessage({ id: "OYW.section2.youth" })}
                </h3>
              </div>
              <p className="flex-col text-center">
                {intl.formatMessage({ id: "OYW.section2.youth-des" })}
              </p>
            </div>

            {/* global impact */}
            <div className="bg-white flex flex-col items-center md:py-10 rounded-2xl">
              <div className="grid md:grid-cols-2 w-full md:w-10/12">
                <GatsbyImage
                  className="mx-auto my-6 w-16 h-28"
                  imgStyle={{ objectFit: "contain" }}
                  fluid={images["globe"].childImageSharp.fluid}
                />
                <h3 className="md:mt-8 md:mr-18 md:mb-4 text-gray-200 xs:text-center">
                  {intl.formatMessage({ id: "OYW.section2.header" })}
                </h3>
              </div>
              <p className="flex-col text-center">
                {intl.formatMessage({ id: "OYW.section2.sub-header" })}
              </p>
            </div>

            {/* diverse */}
            <div className="bg-white flex flex-col items-center md:pt-10 pb-6 md:px-2 rounded-2xl">
              <div className="grid md:grid-cols-2 w-full md:w-10/12">
                <GatsbyImage
                  className="mx-auto w-24 h-40"
                  imgStyle={{ objectFit: "contain" }}
                  fluid={images["diverse"].childImageSharp.fluid}
                />
                <h3 className="md:my-8 text-gray-200 xs:text-center">
                  {intl.formatMessage({ id: "OYW.section2.diverse" })}
                </h3>
              </div>
              <p className="flex-col text-center md:px-8">
                {intl.formatMessage({ id: "OYW.section2.diverse-des" })}
              </p>
            </div>
          </div>
          <div className="flex gap-0 xl:grid-cols-2 md:mb-12">
            <div className="border-b pb-8 xl:border-r xl:pt-4 xl:border-b-0 xl:pr-12 border-gray-400 border-solid xs:text-center">
              <Testimonials images={images} />
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
