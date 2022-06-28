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
    <section className="md:py-10">
      <h2 className="mb-8 text-center">
        {intl.formatMessage({
          id: "ourApproach.howItWorks.HowIt",
        })}
      </h2>
      <div className="grid grid-cols-3 gap-2 max-w-5xl mx-auto">
        {worksCards.map((info, index) => {
          const cardIcon = findImage(info.imageName);
          return (
            <Card
              key={info.id}
              sourceNum={index}
              title={intl.formatMessage({
                id: `ourApproach.howItWorks.${info.id}.title`,
              })}
              description={intl.formatMessage({
                id: `ourApproach.howItWorks.${info.id}.description`,
              })}
              icon={cardIcon}
              source={intl.formatMessage({
                id: `ourApproach.howItWorks.${info.id}.source`,
              })}
            />
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
