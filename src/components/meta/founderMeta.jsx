import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Helmet } from "react-helmet";

function FounderMeta() {
  const intl = useIntl();
  return (
    <Helmet>
      <meta
        name="description"
        content={intl.formatMessage({ id: `team.meta` })}
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://virufy.org/en/Founder/"
      />
      <link
        rel="alternate"
        hreflang="en"
        href="https://virufy.org/en/Founder/"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://virufy.org/es/Founder/"
      />
      <link
        rel="alternate"
        hreflang="pt"
        href="https://virufy.org/pt/Founder/"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://virufy.org/ja/Founder/"
      />
    </Helmet>
  );
}

export default FounderMeta;
