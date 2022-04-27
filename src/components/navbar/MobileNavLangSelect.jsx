import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";
import { Link } from "gatsby";

export default ({ bgColor, textColor }) => {
  const langText = {
    en: "Language - English",
    es: "Español - Español",
    pt: "Português - Potuguês",
    hi: "हिन्दी - HI",
    ja: "日本語 - Japonés",
  };

  const locale = {
    en: "english",
    es: "español",
    pt: "portugues",
    ja: "日本語 - Japanese",
  };

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => {
        return (
          <>
            {languages.map((lang) => (
              <Link
                style={{ textDecoration: "none" }}
                onClick={() => changeLocale(lang)}
                to={`/${locale[lang]}/`}
              >
                <div className="mobileNavLinks">{langText[lang]}</div>
              </Link>
            ))}
          </>
        );
      }}
    </IntlContextConsumer>
  );
};
