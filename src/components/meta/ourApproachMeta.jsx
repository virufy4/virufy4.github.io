import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Helmet } from "react-helmet";

function OurApproachMeta() {
  const intl = useIntl();
  return (
    <Helmet>
      <meta
        name="description"
        content={intl.formatMessage({ id: `ourApproach.meta` })}
      />
    </Helmet>
  );
}

export default OurApproachMeta;
