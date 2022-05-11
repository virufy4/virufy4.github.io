import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Helmet } from "react-helmet";

function PaperMeta() {
  const intl = useIntl();
  return (
    <Helmet>
      <meta
        name="description"
        content={intl.formatMessage({ id: `paper.meta` })}
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://virufy.org/en/paper/"
      />
      <link rel="alternate" hreflang="en" href="https://virufy.org/en/paper/" />
      <link rel="alternate" hreflang="es" href="https://virufy.org/es/paper/" />
      <link rel="alternate" hreflang="pt" href="https://virufy.org/pt/paper/" />
      <link rel="alternate" hreflang="ja" href="https://virufy.org/ja/paper/" />
    </Helmet>
  );
}

export default PaperMeta;
