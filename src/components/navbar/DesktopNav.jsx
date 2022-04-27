// Helpers
import React, { useState } from "react";
import { navLinks, buttonJoinUs } from "./nav_links";
import { Link } from "gatsby";
import { LanguageSelectorDropdown } from "./LangSelect";
import { useLocation } from "@reach/router";
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl";
import { isActivePath } from "./helpers/navHelper";

export default ({ bgColor, textColor, virufyLogo }) => {
  const intl = useIntl();
  const location = useLocation();
  // index in array of nav links that mouse is hovering over empty -1 = none
  const [mouseOverLinkIdx, setMouseOverLinkIdx] = useState(-1);

  const getLinkClasses = (link) => {
    const isActiveLink = isActivePath(location, link);
    return link.btnStyle
      ? `ml-4 mr-0 pb-2 no-underline text-white py-2 px-6 ${
          isActiveLink ? "bg-black" : "bg-blue"
        }`
      : `ml-4 mr-0 pb-2 no-underline ${textColor} ${
          isActiveLink ? "font-bold border-b-4 border-green" : ""
        }`;
  };

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <div className="md:hidden xs:hidden lg:block ">
          <div className="flex justify-between py-3">
            <Link to="/" className="inline-block w-40 h-12 mx-8 ">
              <img
                className="logo"
                src={virufyLogo}
                alt={intl.formatMessage({
                  id: "nav.logoAlt",
                  defaultMessage: "home",
                })}
              />
            </Link>
            <div className="flex items-center text-black font-medium space-x-4 text-sm mr-5">
              {navLinks.map((link, idx) => (
                <span
                  onMouseEnter={() => setMouseOverLinkIdx(idx)}
                  onMouseLeave={() => setMouseOverLinkIdx(-1)}
                  key={idx}
                >
                  <Link
                    className={getLinkClasses(link)}
                    to={`/${currentLocale}${link.path}`}
                    activeClassName="font-bold border-b-4 border-green"
                  >
                    <span className="px-3">
                      {intl.formatMessage({
                        id: link.intlId,
                        defaultMessage: link.defMsg,
                      })}
                    </span>
                  </Link>
                  {link.dropDownLinks && mouseOverLinkIdx === idx && (
                    // have to include locale in url or intl plugin will redirect without the id...
                    <div className="absolute ml-4 bg-gray-100">
                      {link.dropDownLinks.map(
                        ({ intlId, sectionId, path }, idx) => (
                          <Link
                            className="p-4 block text-black hover:bg-gray-300"
                            // to={path}
                            to={`/${currentLocale}${
                              path || link.path
                            }#${sectionId}`}
                            key={idx}
                          >
                            {intl.formatMessage({ id: intlId })}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </span>
              ))}
              <div className="px-4">
                {" "}
                <LanguageSelectorDropdown currentLang={intl.locale} />
              </div>
              <div>
                {buttonJoinUs.map((button) => (
                  <div className="ml-8 mr-4 ">
                    <Link
                      to={`/${intl.locale}${button.path}`}
                      className="vf-btn-primary py-2 px-5 whitespace-nowrap border-2 border-blue"
                    >
                      {intl.formatMessage({
                        id: button.intlId,
                        defaultMessage: button.defMsg,
                      })}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </IntlContextConsumer>
  );
};
