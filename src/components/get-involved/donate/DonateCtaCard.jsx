import React from "react";
import { callToAction } from "../../../intl/en/donate.json";
import virufyLogo from "../../../images/logos/virufy-logo.png";

// Styles
import "./styles/DonateStyles.css";

// Hooks
import { useIntl } from "gatsby-plugin-intl";

const DonateCtaCard = () => {
  const intl = useIntl();

  return (
    <div className="background-image min-h-225px xl:w-cta lg:w-cta md:w-ctaTablet sm:w-ctaMobile max-h-60 bg-white bg-cover bg-no-repeat bg-center relative m-auto rounded-2xl lg:p-3 md:p-6 p-3 z-50">
      <img
        className="block object-contain h-6 w-16"
        src={virufyLogo}
        alt="logo"
      />
      <h4 className="custom-title my-3 pr-12 pl-4">
        {intl.formatMessage({
          id: "donate.callToAction.title",
          defaultMessage: "Help us fight to end Covid 19",
        })}
      </h4>
      <p className="custom-paragraph font-normal lg:w-4/6 lg:pb-0 pb-4 pr-8 pl-4 ">
        {intl.formatMessage({
          id: "donate.callToAction.paragraph",
          defaultMessage:
            "We need your contribution in order to continue helping millions of people in the fight against Covid.",
        })}
      </p>
    </div>
  );
};

export default DonateCtaCard;
