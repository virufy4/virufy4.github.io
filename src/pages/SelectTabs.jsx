import React, { useState } from "react";
import {
  questionsVirufyApp,
  questionsAboutVirufy,
  questionsAboutAI,
  questionsFinances,
  questionsPrivacy,
  questionsOthers,
} from "../data/our-approach/faq";
import Faqstext from "./Faqstext";
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl";

export default function SelectTabs({ bgColor, textColor }) {
  //   const langText = {
  //     en: "Language - EN",
  //     es: "Español - ES",
  //     pt: "Português - PT",
  //     hi: "हिन्दी - HI",
  //     ja: "日本語 - JA",
  //   };

  const [selectedTab, setSelectedTab] = useState("virufyApp");

  const intl = useIntl();
  // const breakpoints = useBreakpoint();
  const tabs = {
    virufyApp: "VirufyApp",
    aboutVirufy: "About Virufy",
    aboutAI: "About AI",
    aboutFinances: "Finances",
    privacy: "Privacy",
    other: "Other",
  };

  const selectedTabClasses = "font-bold ";
  const unselectedTabClasses = "bg-white text-gray-500 font-semibold";

  return (
    <>
      {/* <div className=""> */}
      {/* <button
          onClick={() => setSelectedTab(tabs.virufyApp)}
          className={`${
            selectedTab === tabs.virufyApp
              ? selectedTabClasses
              : unselectedTabClasses
          } mr-24 `}
        >
          {intl.formatMessage({
            id: "faqstext.tabFaqs.virufyApp",
          })}
        </button> */}
      {/* <button
          onClick={() => setSelectedTab(tabs.aboutVirufy)}
          className={`${
            selectedTab === tabs.aboutVirufy
              ? selectedTabClasses
              : unselectedTabClasses
          } mr-24`}
        >
          {intl.formatMessage({
            id: "faqstext.tabFaqs.aboutVirufy",
          })}
        </button>

        <button
          onClick={() => setSelectedTab(tabs.aboutAI)}
          className={`${
            selectedTab === tabs.aboutAI
              ? selectedTabClasses
              : unselectedTabClasses
          } mr-24 `}
        >
          {intl.formatMessage({
            id: "faqstext.tabFaqs.aboutAI",
          })}
        </button>
        <button
          onClick={() => setSelectedTab(tabs.aboutFinances)}
          className={`${
            selectedTab === tabs.aboutFinances
              ? selectedTabClasses
              : unselectedTabClasses
          } mr-24`}
        >
          {intl.formatMessage({
            id: "faqstext.tabFaqs.aboutFinances",
          })}
        </button>
        <button
          onClick={() => setSelectedTab(tabs.privacy)}
          className={`${
            selectedTab === tabs.privacy
              ? selectedTabClasses
              : unselectedTabClasses
          } mr-24`}
        >
          {intl.formatMessage({
            id: "faqstext.tabFaqs.privacyDetails",
          })}
        </button>
        <button
          onClick={() => setSelectedTab(tabs.other)}
          className={`${
            selectedTab === tabs.other
              ? selectedTabClasses
              : unselectedTabClasses
          } mr-24`}
        >
          {intl.formatMessage({
            id: "faqstext.tabFaqs.otherDetails",
          })}
        </button>
      </div> */}

      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => {
          return (
            <select
              value={currentLocale}
              onChange={(event) => changeLocale(event.target.value)}
              className={`cursor-pointer ${bgColor} ${textColor} w-2/3`}
            >
              {languages.map((question, idx) => (
                <option onClick={() => setSelectedTab(tabs.virufyApp)}>
                  {/* <Faqstext
              key={`questions${idx}`}
              category="questionsVirufyApp"
              questions={question}
              value={`questions${idx}`}
            /> */}
                  {intl.formatMessage({
                    id: "faqstext.tabFaqs.virufyApp",
                  })}
                </option>
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
            </select>
          );
        }}
      </IntlContextConsumer>
    </>
  );
}
