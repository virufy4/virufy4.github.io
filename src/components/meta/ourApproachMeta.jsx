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
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://virufy.org/en/our-approach/"
      />
      <link
        rel="alternate"
        hreflang="en"
        href="https://virufy.org/en/our-approach/"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://virufy.org/es/our-approach/"
      />
      <link
        rel="alternate"
        hreflang="pt"
        href="https://virufy.org/pt/our-approach/"
      />
      <link
        rel="alternate"
        hreflang="ja"
        href="https://virufy.org/ja/our-approach/"
      />
    </Helmet>
  );
}

export default OurApproachMeta;
