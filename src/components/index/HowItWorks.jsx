import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";

// Data
import worksCards from "../../data/our-approach/works-Cards";

function Card({ title, icon, description }) {
  return (
    <div>
      <div className="md:h-96 md:pt-10 md:px-10 md:mx-8">
        <h2 className="text-center md:pb-4 xs:mb-8">{title}</h2>
        <Img
          className="h-28 px-6 pb-3"
          fluid={icon}
          imgStyle={{ objectFit: "contain" }}
          aria-hidden
        />
        <p className="text-center pt-8 xs:text-md">{description}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const HowItWorks = ({ images }) => {
  const intl = useIntl();

  const findImage = useCallback(
    (imageName) => {
      return images[imageName].childImageSharp.fluid;
    },
    [images]
  );

  return (
    <section className="md:py-10 px-8 lg:px-12 text-center">
      <h2 className="my-8 md:mb-8 md:mt-0">
        {intl.formatMessage({
          id: "ourApproach.howItWorks.HowIt",
        })}
      </h2>
      <p className="font-normal text-black mb-4">
        {intl.formatMessage({
          id: "ourApproach.howItWorks.description",
        })}
      </p>
    </section>
  );
};

export default HowItWorks;
