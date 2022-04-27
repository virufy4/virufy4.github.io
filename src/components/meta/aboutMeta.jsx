import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Helmet } from "react-helmet";

function AboutMeta() {
  const intl = useIntl();
  return (
    <Helmet>
      <meta
        name="description"
        content={intl.formatMessage({ id: `team.valuesSection.meta` })}
      />
    </Helmet>
  );
}

export default AboutMeta;
