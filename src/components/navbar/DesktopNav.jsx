// Helpers
import React, { useState } from "react";
import { navLinks, buttonJoinUs } from "./nav_links";
import { graphql, Link } from "gatsby";
import { LanguageSelectorDropdown } from "./LangSelect";
import { useLocation } from "@reach/router";
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl";
import { isActivePath } from "./helpers/navHelper";
import Modal from "../ModalJoin";
import ModalHandler from "../ModalHandler";
import DonateCards from "../get-involved/donate/DonateCards";

export default ({ bgColor, textColor, virufyLogo }) => {
  const intl = useIntl();
  const location = useLocation();
  // index in array of nav links that mouse is hovering over empty -1 = none
  const [mouseOverLinkIdx, setMouseOverLinkIdx] = useState(-1);

  const [open, setOpen] = useState(false);
  const triggerRef = React.useRef(null);

  function handleClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  const getLinkClasses = (link) => {
    const isActiveLink = isActivePath(location, link);
    return link.btnStyle
      ? `ml-4 mr-0 pb-2 no-underline text-white py-2 px-6 whitespace-nowrap ${
          isActiveLink ? "bg-black" : "bg-blue"
        }`
      : `ml-4 mr-0 pb-2 no-underline whitespace-nowrap ${textColor} ${
          isActiveLink ? "font-bold border-b-4 border-green" : ""
        }`;
  };

  return (
    <IntlContextConsumer>
      {({ language: currentLocale }) => (
        <ModalHandler>
          {({ openModal }) => (
            // Inner Nav Container
            <div className="hidden xl:block">
              <div className="flex justify-between py-3">
                <Link
                  to="/"
                  className="inline-block w-40 h-12 mx-8 xl:w-24 xl:mx-4 xl:pt-3 2xl:pt-0 2xl:w-40 2xl:mx-8"
                >
                  <img
                    className="logo"
                    src={virufyLogo}
                    alt={intl.formatMessage({
                      id: "nav.logoAlt",
                      defaultMessage: "home",
                    })}
                  />
                </Link>
                <div className="flex items-center text-black font-medium space-x-2 text-sm mr-5 xl:space-x-1 2xl:mr-8 3xl:space-x-4">
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
                        <span className="px-3 xl:px-1 2xl:px-3">
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
                  <div className="px-4 xl:px-1 2xl:px-4">
                    {" "}
                    <LanguageSelectorDropdown currentLang={intl.locale} />
                  </div>
                  <div className="flex gap-4">
                    {buttonJoinUs.map((button) => (
                      <div className="flex">
                        {button.intlId === "nav.joinUs" ? (
                          <Link
                            to={`/${intl.locale}${button.path}`}
                            className="vf-btn-clear py-2 px-5 xl:px-3 2xl:px-5 whitespace-nowrap border-2 border-blue"
                          >
                            {intl.formatMessage({
                              id: button.intlId,
                              defaultMessage: button.defMsg,
                            })}
                          </Link>
                        ) : (
                          <div className="ml-8 xl:ml-0 2xl:ml-8">
                            <button
                              onClick={() => openModal(<DonateCards />)}
                              className="vf-btn-primary py-2 px-5 xl:px-3 2xl:px-5 whitespace-nowrap border-2 border-blue"
                            >
                              {intl.formatMessage({
                                id: button.intlId,
                                defaultMessage: button.defMsg,
                              })}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </ModalHandler>
      )}
    </IntlContextConsumer>
  );
};
