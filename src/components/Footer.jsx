import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";
import githubLogo from "../images/logos/github-small.png";
import instagramLogo from "../images/logos/instagram-small.png";
import twitterLogo from "../images/logos/twitter-small.png";
import facebookLogo from "../images/logos/facebook-small.png";
import linkedinLogo from "../images/logos/linkedin-small.png";
import youtubeLogo from "../images/logos/youtube-small.png";
import virufySmall from "../images/logos/virufy-logo-small.png";

const socialLinks = [
  {
    name: "GitHub",
    logo: githubLogo,
    address: "https://github.com/virufy",
  },

  {
    name: "Instagram",
    logo: instagramLogo,
    address: "https://www.instagram.com/virufyorg/",
  },
  {
    name: "Twitter",
    logo: twitterLogo,
    address: "https://twitter.com/VirufyOrg",
  },
  {
    name: "Facebook",
    logo: facebookLogo,
    address: "https://www.facebook.com/Virufy/",
  },
  {
    name: "LinkedIn",
    logo: linkedinLogo,
    address: "https://www.linkedin.com/company/virufy/",
  },
  {
    name: "Youtube",
    logo: youtubeLogo,
    address: "https://www.youtube.com/channel/UC-son5uPvzhCHoBr3-Std-A",
  },
];

const footerLinks = [
  {
    intlId: "footer.cookiePolicy",
    address: "/cookie_policy",
  },
  {
    intlId: "footer.cookieSettings",
    address: "/index#cookie",
  },
  {
    intlId: "footer.privacyPolicy",
    address: "/privacy_policy",
  },
  {
    intlId: "footer.dontSellPersonalInfo",
    address: "/ccpa",
  },
  {
    intlId: "footer.CodeofConduct",
    address:
      "https://github.com/virufy/virufy-covid/blob/main/CODE_OF_CONDUCT.md",
  },
];

export default () => {
  const intl = useIntl();
  const informationEmail = intl.formatMessage({
    id: "footer.email",
    defaultMessage: "info@virufy.org",
  });

  const getHrefFromId = (footerLink) => {
    return footerLink.intlId === "footer.cookieSettings"
      ? "javascript: Cookiebot.renew()"
      : footerLink.address;
  };

  return (
    <div className="m-0 md:grid-rows-2">
      <div className="mr-10 md:grid md:grid-cols-3 md:gap-4 text-white px-6 md:mx-8 ">
        <div>
          <img
            className="md:flex flex-initial md:flex-row block underline mb-10"
            src={virufySmall}
            alt={intl.formatMessage({
              id: "nav.logoAlt",
              defaultMessage: "logoSmall",
            })}
          />
          <div>
            <p className="text-2xl mb-4">
              {intl.formatMessage({ id: "footer.title", defaultMessage: "" })}
            </p>
            <p className="block no-underline mb-6 text-white text-base">
              {intl.formatMessage({
                id: "footer.nonprofit",
                defaultMessage: "",
              })}
            </p>
          </div>
        </div>
        <div className=" ml-32 md:flex xs:ml-2 flex-initial md:flex-col mt-24 divide-y">
          {/* <p className="text-2xl mb-4">
            {intl.formatMessage({ id: "footer.navigate", defaultMessage: "" })}
          </p> */}
          <div className="flex flex-col mb-4 text-base border-white divide-y lg:w-40">
            <Link to="/about" className="no-underline text-white py-3">
              {intl.formatMessage({
                id: "footer.about",
                defaultMessage: "",
              })}{" "}
            </Link>
            <Link
              to="/our-approach"
              className="py-3 no-underline text-white divide-y"
            >
              {intl.formatMessage({
                id: "footer.ourtech",
                defaultMessage: "",
              })}
            </Link>
            <Link to="/FAQs" className="py-3 no-underline text-white divide-y">
              {intl.formatMessage({ id: "footer.faqs", defaultMessage: "" })}
            </Link>
            <Link
              to="/get-involved"
              className="py-3 no-underline text-white divide-y"
            >
              {intl.formatMessage({
                id: "footer.joinUs",
                defaultMessage: "",
              })}
            </Link>
          </div>
        </div>

        <div className="md:flex flex-initial md:flex-col mt-24 ml-8">
          <div>
            <p className="text-2xl mb-4">
              {intl.formatMessage({ id: "footer.get", defaultMessage: "" })}
            </p>
            <a
              className="md:flex flex-initial md:flex-row block no-underline text-white pb-8"
              href={`mailto:${informationEmail}`}
            >
              {informationEmail}
            </a>
          </div>
          <div className="flex flex-grow">
            {socialLinks.map((socialLinkInformation) => (
              <a
                href={socialLinkInformation.address}
                key={socialLinkInformation.name}
                className="mr-6"
              >
                <img
                  src={socialLinkInformation.logo}
                  alt={socialLinkInformation.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-12 bg-black">
        <div className="md:py-8 md:ml-6 text-white py-8">
          {footerLinks.map((footerLink, index) => (
            <>
              <a
                className="underline text-sm text-white"
                href={getHrefFromId(footerLink)}
                key={footerLink.intlId}
              >
                {intl.formatMessage({ id: footerLink.intlId })}
              </a>
              {index + 1 !== footerLinks.length && (
                <>
                  {
                    "  |  " // Only show vertical line after when not the last element
                  }
                </>
              )}
            </>
          ))}
          <p className="text-sm">
            {intl.formatMessage({
              id: "footer.copyrightInformation",
              defaultMessage: "©2021 Virufy  | All rights reserved",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
