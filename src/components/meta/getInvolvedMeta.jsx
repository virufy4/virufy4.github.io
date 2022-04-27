import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Helmet } from "react-helmet";

function GetInvolvedMeta() {
  const intl = useIntl();
  return (
    <Helmet>
      <meta
        name="description"
        content={intl.formatMessage({ id: `getInvolved.meta` })}
      />
    </Helmet>
  );
}

export default GetInvolvedMeta;
