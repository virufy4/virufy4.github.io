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
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://virufy.org/en/about/"
      />
      <link rel="alternate" hreflang="en" href="https://virufy.org/en/about/" />
      <link rel="alternate" hreflang="es" href="https://virufy.org/es/about/" />
      <link rel="alternate" hreflang="pt" href="https://virufy.org/pt/about/" />
      <link rel="alternate" hreflang="ja" href="https://virufy.org/ja/about/" />
    </Helmet>
  );
}

export default AboutMeta;
