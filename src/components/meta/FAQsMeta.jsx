import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Helmet } from "react-helmet";

function FAQsMeta() {
  const intl = useIntl();
  return (
    <Helmet>
      <meta
        name="description"
        content={intl.formatMessage({ id: `faqstext.meta` })}
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://virufy.org/en/FAQs/"
      />
      <link rel="alternate" hreflang="en" href="https://virufy.org/en/FAQs/" />
      <link rel="alternate" hreflang="es" href="https://virufy.org/es/FAQs/" />
      <link rel="alternate" hreflang="pt" href="https://virufy.org/pt/FAQs/" />
      <link rel="alternate" hreflang="ja" href="https://virufy.org/ja/FAQs/" />
    </Helmet>
  );
}

export default FAQsMeta;
