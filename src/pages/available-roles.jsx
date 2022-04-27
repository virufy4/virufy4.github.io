import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import HeaderImage from "../images/available-roles-page/header.svg";
import { roles } from "../data/available-roles";
import { useIntl } from "gatsby-plugin-intl";

const Role = ({ description, location, title, url, intl }) => (
  <div
    className="flex flex-col md:grid items-center gap-6 bg-white rounded-xl px-6 md:px-11 py-6 mb-8 md:mb-14"
    style={{
      gridTemplateColumns: "4fr max-content max-content",
      filter: "drop-shadow(0px 15px 47px rgba(0, 165, 136, 0.15))",
    }}
  >
    <div className="min-w-0">
      <p className="font-bold font-heading mb-3 md:mb-0 ">{title}</p>

      <p className="font-heading overflow-hidden overflow-ellipsis">
        {description}
      </p>
    </div>

    <div className="hidden md:block mr-4">
      <p className="font-bold font-heading">
        {intl.formatMessage({
          id: `getInvolved.availableRoles.location`,
        })}
      </p>

      <p className="font-heading">{location}</p>
    </div>

    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full text-center font-heading no-underline bg-blue text-white px-6 py-2 inline-block rounded-lg  md:text-md mt-2 md:mt-0"
    >
      {intl.formatMessage({
        id: `getInvolved.availableRoles.applyNow`,
      })}
    </a>
  </div>
);

export default function AvailableRoles() {
  const intl = useIntl();
  return (
    <section className="pb-1">
      <SEO title="Available Roles | Virufy" />

      <div className="">
        <h1 className="my-8  font-heading xs:text-center">
          {intl.formatMessage({
            id: `getInvolved.availableRoles.jobOpenings`,
          })}
        </h1>

        {roles.map((role) => (
          <Role key={role.title} {...role} intl={intl} />
        ))}
      </div>
    </section>
  );
}
