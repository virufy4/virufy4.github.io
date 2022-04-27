import React, { useState } from "react";
import GatsbyImage from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";

export default function TeamMember(props) {
  const intl = useIntl();

  const {
    role,
    image,
    person: { id, defaultName, mediaLink },
  } = props;

  return (
    <div
      id="our-team"
      className="flex flex-col mx-auto mb-10 w-full text-center"
    >
      <a className="w-full" target="_blank" rel="noreferrer" href={mediaLink}>
        <GatsbyImage
          className="mx-auto my-2 rounded-md overflow-hidden team-icons"
          imgStyle={{ objectFit: "fill" }}
          fluid={image}
        />

        <p className="mt-4 font-semibold text-black no-underline">
          {intl.formatMessage({
            id: `team.teamSection.${role}.${id}.name`,
            defaultMessage: defaultName,
          })}
        </p>
      </a>
      <p className="font-semibold">
        {intl.formatMessage({
          id: `team.teamSection.${role}.${id}.title`,
        })}
      </p>
      <div className="text-lg my-2"></div>
      {intl
        .formatMessage({
          id: `team.teamSection.${role}.${id}.description`,
        })
        .split("\n")
        .map((str, i) => (
          <p key={i} className="w 5/6 text-lg">
            {str}
          </p>
        ))}
    </div>
  );
}
