import React, { useState } from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import classNames from "classnames";
import "./mobile.css";

// Data
import { mobileNavLinks, buttonJoinUs } from "./nav_links";

// Components
import { IoIosArrowForward } from "react-icons/io";
import Overlay from "../Overlay";
import MobileNavToggle from "./MobileNavToggle";
import ModalHandler from "../ModalHandler";
import DonateCards from "../get-involved/donate/DonateCards";
//import { LanguageSelectorList } from "./LangSelect";
import { LanguageSelectorDropdown } from "./LangSelect";

// Hooks
import { useLocation } from "@reach/router";
import useEscape from "../../hooks/useEscape";

// Utils
import {
  checkLinkMatchingStatus,
  checkLinksMatchingStatus,
} from "../../utils/routing";

const CollapsibleLink = ({
  title,
  children,
  isOpen,
  isActive,
  onCollapseAction,
  onExpandAction,
  className,
}) => {
  return (
    <>
      <div className={classNames(className)}>
        <div
          className={classNames("mobileNavLinks text-lg flex-1", {
            "font-bold": isActive,
          })}
        >
          {title}
        </div>
        <div
          className="flex justify-center items-center w-8 h-8"
          onClick={() => {
            if (isOpen) {
              onCollapseAction();
            } else {
              onExpandAction();
            }
          }}
        >
          <IoIosArrowForward
            color="#8C8CA1"
            className={classNames("arrow", {
              open: isOpen,
            })}
          />
        </div>
      </div>
      {isOpen && <div>{children}</div>}
    </>
  );
};

const MobileNav = ({ textColor, bgColor, virufyLogo }) => {
  const location = useLocation();
  const intl = useIntl();
  const [navOpen, setNavOpen] = useState(false);
  const [expanded, setExpanded] = useState([]);

  useEscape(true, () => setNavOpen(false));

  const expandLink = (id) => {
    setExpanded((expanded) => [...expanded, id]);
  };

  const collapseLink = (id) => {
    const index = expanded.findIndex((expandedLink) => expandedLink === id);

    if (index >= 0) {
      setExpanded((expanded) => [
        ...expanded.slice(0, index),
        ...expanded.slice(index + 1),
      ]);
    }
  };

  return (
    <ModalHandler>
      {({ openModal }) => (
        <>
          <div className="pt-6 flex items-start justify-between 2xl:hidden p-4">
            <MobileNavToggle
              mobileNavOpen={navOpen}
              setMobileNavOpen={setNavOpen}
              textColor={textColor}
            />
            <span className="flex items-start">
              <Link to="/">
                <img
                  src={virufyLogo}
                  alt="virufy"
                  className="mr-16 inline-block w-32"
                />
              </Link>
            </span>
            <Link to="/get-involved" className="vf-btn-primary px-5 py-2">
              {intl.formatMessage({
                id: "nav.joinUs",
                defaultMessage: "",
              })}
            </Link>
          </div>
          <Overlay active={navOpen} onClick={() => setNavOpen(false)}>
            <div
              className="inline-flex flex-col bg-white w-full h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mobileNavHeader">
                <MobileNavToggle
                  mobileNavOpen={navOpen}
                  setMobileNavOpen={setNavOpen}
                  textColor={textColor}
                />
              </div>
              <div>
                {mobileNavLinks.map((navLink, linkIndex) =>
                  navLink.paths ? (
                    <CollapsibleLink
                      key={"mobile_" + navLink.intlId + linkIndex}
                      title={intl.formatMessage({
                        id: navLink.intlId,
                        defaultMessage: navLink.defaultMessage,
                      })}
                      isActive={checkLinksMatchingStatus(
                        location,
                        navLink.paths.map((subLink) => subLink.path)
                      )}
                      isOpen={expanded.includes(navLink.id)}
                      onCollapseAction={() => collapseLink(navLink.id)}
                      onExpandAction={() => expandLink(navLink.id)}
                      className="flex w-full p-4 border-t"
                    >
                      {navLink.paths.map((subLink, sublinkIndex) => (
                        <Link
                          key={"mobile_" + subLink.intlId + sublinkIndex}
                          to={subLink.path}
                          className={classNames("sublink", {
                            "font-bold": checkLinkMatchingStatus(
                              location,
                              subLink.path
                            ),
                          })}
                        >
                          {intl.formatMessage({ id: subLink.intlId })}
                        </Link>
                      ))}
                    </CollapsibleLink>
                  ) : (
                    <Link
                      key={navLink.intlId}
                      to={navLink.path}
                      className="mobileNavLinks text-lg no-underline flex w-full p-4 border-t"
                      activeClassName="font-bold"
                    >
                      {intl.formatMessage({
                        id: navLink.intlId,
                        defaultMessage: navLink.defaultMessage,
                      })}
                    </Link>
                  )
                )}
                {/* Language selection collapsible link is special and it shouldn't be in mobileNavLinks array*/}
                <div className="px-4">
                  {" "}
                  <LanguageSelectorDropdown currentLang={intl.locale} />
                </div>
              </div>
              <div>
                {buttonJoinUs.map((button) => (
                  <div className="flex ml-6 ">
                    {button.intlId === "nav.joinUs" ? (
                      <Link
                        to={`${button.path}`} // removed dup
                        className="vf-btn-clear py-2 px-5 whitespace-nowrap border-2 border-blue"
                      >
                        {intl.formatMessage({
                          id: button.intlId,
                          defaultMessage: button.defMsg,
                        })}
                      </Link>
                    ) : (
                      <div className="mt-4">
                        <button
                          onClick={() => openModal(<DonateCards />)}
                          className="vf-btn-primary py-2 px-5 whitespace-nowrap border-2 border-blue"
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
          </Overlay>
        </>
      )}
    </ModalHandler>
  );
};

export default MobileNav;
