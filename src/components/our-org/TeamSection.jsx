import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { leadership, advisors } from "../../data/team-members";
import { ButtonLink } from "../../components/Button";
import TeamMember from "./TeamMember";
import GastbyImage from "gatsby-image";

export default function Teams({ images }) {
  const intl = useIntl();
  const [selectedTab, setSelectedTab] = useState("advisors");
  const tabs = {
    advisors: "advisors",
    teamLeads: "team leads",
  };

  return (
    <section className="p-8">
      <div className="md:pb-12">
        <h2 className="text-left md:mb-2 text-black xs:pt-4 xs:pb-8">
          {intl.formatMessage({ id: "team.teamSection.header" })}
        </h2>
      </div>
      <h2 className="text-center md:mb-2 text-black xs:pt-4 xs:pb-8">
        {intl.formatMessage({ id: "team.ourFounder.subtitleOurFounder" })}
      </h2>
      <div className="grid grid-cols-2 xs:grid-cols-1 gap-6 rounded-2xl md:py-10">
        <div className="xs:px-2">
          <GastbyImage
            imgStyle={{ objectFit: "contain" }}
            className="md:ml-36 rounded-2xl overflow-hidden team-icons md:max-h-96 md:w-96 "
            fluid={images["amil"].childImageSharp.fluid}
          />
        </div>
        <div className="xs:px-2 md:pr-8 xs:text-center">
          <p className="md:mb-2 font-bold text-black  xs:pt-4 xs:pb-4">
            {intl.formatMessage({ id: "team.ourFounder.amil.name" })}
          </p>
          {/* <p className="md:mb-2 text-blue md:pt-4 xs:pb-8">
            {intl.formatMessage({ id: "team.ourFounder.amil.email" })}
          </p> */}
          <p className="md:mb-2 text-black md:pr-24 md:pt-4 xs:pb-4">
            {intl.formatMessage({ id: "team.ourFounder.amil.description1" })}
          </p>
          <p className="md:mb-2 text-black md:pr-36 md:pt-4 xs:pb-4">
            {intl.formatMessage({ id: "team.ourFounder.amil.description2" })}
          </p>
          <div className="flex rounded-xl pt-6 xs:justify-center">
            <ButtonLink
              to="/Founder"
              className="md:px-6 md:text-lg xs:text-center xs:text-sm"
            >
              {intl.formatMessage({
                id: `team.title`,
              })}
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="text-center  xs:px-2">
        <h2 className="md:mb-2 text-black xs:pt-4 xs:pb-8">
          {intl.formatMessage({ id: "team.ourFounder.title-advisors" })}
        </h2>
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
