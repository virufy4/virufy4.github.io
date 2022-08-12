import React from "react";
import { paymentTitles } from "../../../intl/en/donate.json";

import gofundlogo from "../../../images/logos/gofundme-logo-color.png";
// Hooks
import { useIntl } from "gatsby-plugin-intl";

const PaymentCard = () => {
  const intl = useIntl();

  return (
    // lg:h-1/2 50% large screen

    <div className=" h-ctaBtm lg:w-cta xl:w-cta md:w-ctaTablet sm:w-ctaMobile xxs:h-64 bg-white m-auto rounded-b-2xl lg:p-9 md:p-10 sm:p-10 p-3 z-40">
      {
        <div>
          <h4 className="my-1 xs:px-4 text-center mb-6">
            {intl.formatMessage({
              id: "donate.paymentTitles.paymentOption",
              defaultMessage: "Help us fight to end Covid 19",
            })}
          </h4>
          <div className="relative text-center">
            <div className="flex justify-center items-center p-2 bg-gray-200 rounded-lg  h-16 hover:bg-lightBlue">
              <a
                href="https://www.paypal.com/us/fundraiser/charity/4348461"
                className="w-full text-center m-0"
              >
                <img
                  src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png"
                  alt="PayPal Logo"
                  className="inline-block w-24"
                />
              </a>
            </div>
            <div className="flex justify-center items-center p-2 bg-gray-200 rounded-lg mt-5 h-16 hover:bg-lightBlue">
              <a
                href="https://www.gofundme.com/f/virufy-covid19"
                className="w-full text-center m-0"
              >
                <img
                  src={gofundlogo}
                  alt=""
                  className="inline-block h-16 mr-0"
                />
              </a>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default PaymentCard;
