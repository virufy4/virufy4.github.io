import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Helmet } from "react-helmet";

function IndexMeta() {
  const intl = useIntl();
  return (
    <Helmet>
      <meta
        name="description"
        content={intl.formatMessage({ id: `index.meta` })}
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://virufy.org/en/"
      />
      <link rel="alternate" hreflang="en" href="https://virufy.org/en/" />
      <link rel="alternate" hreflang="es" href="https://virufy.org/es/" />
      <link rel="alternate" hreflang="pt" href="https://virufy.org/pt/" />
      <link rel="alternate" hreflang="ja" href="https://virufy.org/ja/" />
    </Helmet>
  );
}

export default IndexMeta;
