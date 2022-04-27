import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { leadership, advisors } from "../../data/team-members";
import TeamMember from "./TeamMember";

export default function Teams({ images }) {
  const intl = useIntl();
  const [selectedTab, setSelectedTab] = useState("advisors");
  const tabs = {
    advisors: "advisors",
    teamLeads: "team leads",
  };
  const selectedTabClasses =
    "font-medium font-semibold  text-lg xs:text-2xl bg-white border-b-4 border-solid border-green focus:outline-none active:outline-none ";
  const unselectedTabClasses =
    " bg-white text-gray-500 text-lg   xs:text-2xl font-semibold xs:py-2.5 ";

  return (
    <section className="p-8">
      <div className="md:pb-12">
        <h1 className="text-left md:mb-2 text-black xs:pt-4 xs:pb-8">
          {intl.formatMessage({ id: "team.teamSection.header" })}
        </h1>
      </div>
      <div className="md:text-center  xs:px-2">
        <button
          onClick={() => setSelectedTab(tabs.advisors)}
          className={`${
            selectedTab === tabs.advisors
              ? selectedTabClasses
              : unselectedTabClasses
          } md:mr-24 xs:mr-8`}
        >
          {intl.formatMessage({
            id: "team.teamSection.advisorText",
          })}
        </button>
        <button
          onClick={() => setSelectedTab(tabs.teamLeads)}
          className={`${
            selectedTab === tabs.teamLeads
              ? selectedTabClasses
              : unselectedTabClasses
          }`}
        >
          {/* {intl.formatMessage({
            id: "team.teamSection.teamLeadText",
          })} */}
        </button>
      </div>

      <div className="mt-4 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-6 xl:grid-cols-4">
        {selectedTab === tabs.teamLeads &&
          leadership.map((leader, idx) => (
            <TeamMember
              key={`leaders${idx}`}
              role="leadership"
              image={images[leader.imageName]?.childImageSharp?.fluid}
              person={leader}
            />
          ))}

        {selectedTab === tabs.advisors &&
          advisors.map((advisor, idx) => (
            <TeamMember
              key={`advisors${idx}`}
              role="advisors"
              image={images[advisor.imageName]?.childImageSharp?.fluid}
              person={advisor}
            />
          ))}
      </div>
    </section>
  );
}
