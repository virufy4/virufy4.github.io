import React, { useState } from "react";
import GatsbyImage from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";

export default function Ambassador(props) {
  const intl = useIntl();

  const {
    image,
    person: { id, defaultName, mediaLink },
  } = props;

  return (
    <div className="flex flex-col text-left	 mx-auto mb-4 w-full">
      <a className="w-full" target="_blank" rel="noreferrer" href={mediaLink}>
        <GatsbyImage
          className="mx-auto my-2 rounded-md overflow-hidden team-icons"
          imgStyle={{ objectFit: "fill" }}
          fluid={image}
        />
        <h4 className="mt-4 text-center font-semibold text-black no-underline	">
          {intl.formatMessage({
            id: `OYW.ambassador.ambassador-list.${id}.name`,
            defaultMessage: defaultName,
          })}
        </h4>
      </a>
      <div className=""></div>
      <p className="font-medium text-center text-lg  ">
        {intl.formatMessage({
          id: `OYW.ambassador.ambassador-list.${id}.descriptionOYW`,
        })}
      </p>
      <p className="break-normal mt-6 leading-4 text-lg text-center xs:pb-8">
        {intl.formatMessage({
          id: `OYW.ambassador.ambassador-list.${id}.descriptionVirufy`,
        })}
      </p>
    </div>
  );
}
