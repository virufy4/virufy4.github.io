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
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://virufy.org/en/get-involved/"
      />
      <link
        rel="alternate"
        hreflang="en"
        href="https://virufy.org/en/get-involved/"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://virufy.org/es/get-involved/"
      />
      <link
        rel="alternate"
        hreflang="pt"
        href="https://virufy.org/pt/get-involved/"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://virufy.org/ja/get-involved/"
      />
    </Helmet>
  );
}

export default GetInvolvedMeta;
