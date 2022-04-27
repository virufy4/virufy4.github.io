import React, { useState } from "react";
import { graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import {
  questionsVirufyApp,
  questionsAboutVirufy,
  questionsAboutAI,
  questionsFinances,
  questionsPrivacy,
  questionsOthers,
} from "../data/our-approach/faq";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Faqstext from "./Faqstext";
import FAQsMeta from "../components/meta/FAQsMeta";

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

const tabs = {
  virufyApp: "VirufyApp",
  aboutVirufy: "About Virufy",
  aboutAI: "About AI",
  aboutFinances: "Finances",
  privacy: "Privacy",
  other: "Other",
};

function Faqs() {
  const intl = useIntl();
  // const breakpoints = useBreakpoint();
  const [selectedTab, setSelectedTab] = useState(tabs.virufyApp);

  const selectedTabClasses =
    "font-medium font-semibold text-lg bg-white border-b-4 border-solid border-green focus:outline-none active:outline-none xs:center";
  const unselectedTabClasses =
    "bg-white text-gray-500 text-lg font-semibold xs:center xs:py-2.5";

  return (
    <Layout className="font-montserrat">
      <SEO title={intl.formatMessage({ id: `faqstext.tabFaqs.pageTitle` })} />
      <FAQsMeta />

      <h1 className="font-heading md:mb-6 lg:mb-4 md:ml-20  p-8">
        {intl.formatMessage({ id: "faqstext.tabFaqs.title" })}
      </h1>

      {/* Top fold */}
      <div className="text-center md:pl-18 md:pt-6 xs:px-10 xs:mx-12">
        <button
          onClick={() => setSelectedTab(tabs.virufyApp)}
          className={`${
            selectedTab === tabs.virufyApp
              ? selectedTabClasses
              : unselectedTabClasses
          } md:mr-16`}
        >
          <h2>
            <small>
              {intl.formatMessage({
                id: "faqstext.tabFaqs.virufyApp",
              })}
            </small>
          </h2>
        </button>
        <button
          onClick={() => setSelectedTab(tabs.aboutVirufy)}
          className={`${
            selectedTab === tabs.aboutVirufy
              ? selectedTabClasses
              : unselectedTabClasses
          } md:mr-16 xs:px-8`}
        >
          <h2>
            <small>
              {intl.formatMessage({
                id: "faqstext.tabFaqs.aboutVirufy",
              })}
            </small>
          </h2>
        </button>

        <button
          onClick={() => setSelectedTab(tabs.aboutAI)}
          className={`${
            selectedTab === tabs.aboutAI
              ? selectedTabClasses
              : unselectedTabClasses
          } md:mr-16 xs:px-8`}
        >
          <h2>
            <small>
              {intl.formatMessage({
                id: "faqstext.tabFaqs.aboutAI",
              })}
            </small>
          </h2>
        </button>
        <button
          onClick={() => setSelectedTab(tabs.aboutFinances)}
          className={`${
            selectedTab === tabs.aboutFinances
              ? selectedTabClasses
              : unselectedTabClasses
          } md:mr-16 xs:px-8`}
        >
          <h2>
            <small>
              {intl.formatMessage({
                id: "faqstext.tabFaqs.aboutFinances",
              })}
            </small>
          </h2>
        </button>
        <button
          onClick={() => setSelectedTab(tabs.privacy)}
          className={`${
            selectedTab === tabs.privacy
              ? selectedTabClasses
              : unselectedTabClasses
          } md:mr-16 xs:px-8`}
        >
          <h2>
            <small>
              {intl.formatMessage({
                id: "faqstext.tabFaqs.privacyDetails",
              })}
            </small>
          </h2>
        </button>
        <button
          onClick={() => setSelectedTab(tabs.other)}
          className={`${
            selectedTab === tabs.other
              ? selectedTabClasses
              : unselectedTabClasses
          } md:mr-16 xs:px-8`}
        >
          <h2>
            <small>
              {intl.formatMessage({
                id: "faqstext.tabFaqs.otherDetails",
              })}
            </small>
          </h2>
        </button>
      </div>

      <div className="md:mt-10 grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-2 xl:grid-cols-3 pb-8">
        {selectedTab === tabs.virufyApp &&
          questionsVirufyApp.map((question, idx) => (
            <Faqstext
              key={`questions${idx}`}
              category="questionsVirufyApp"
              questions={question}
            />
          ))}

        {selectedTab === tabs.aboutVirufy &&
          questionsAboutVirufy.map((question, idx) => (
            <Faqstext
              key={`questions${idx}`}
              category="questionsAboutVirufy"
              questions={question}
            />
          ))}
        {selectedTab === tabs.aboutAI &&
          questionsAboutAI.map((question, idx) => (
            <Faqstext
              key={`questions${idx}`}
              category="questionsAboutAI"
              questions={question}
            />
          ))}
        {selectedTab === tabs.aboutFinances &&
          questionsFinances.map((question, idx) => (
            <Faqstext
              key={`questions${idx}`}
              category="questionsFinances"
              questions={question}
            />
          ))}
        {selectedTab === tabs.privacy &&
          questionsPrivacy.map((question, idx) => (
            <Faqstext
              key={`questions${idx}`}
              category="questionsPrivacy"
              questions={question}
            />
          ))}
        {selectedTab === tabs.other &&
          questionsOthers.map((question, idx) => (
            <Faqstext
              key={`questions${idx}`}
              category="questionsOthers"
              questions={question}
            />
          ))}
      </div>
    </Layout>
  );
}
export default Faqs;
