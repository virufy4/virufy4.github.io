import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

function HowItWorks({ title, icon, description }) {
  return (
    <div>
      <div className="md:h-96 md:pt-10 md:px-10 ">
        <h1 className="font-bold text-center md:pb-4">{title}</h1>
        <Img
          className="h-28 px-6 pb-3"
          fluid={icon}
          imgStyle={{ objectFit: "contain" }}
          aria-hidden
        />
        <p className="text-center pt-2 xs:text-sm ">{description}</p>
      </div>
    </div>
  );
}

HowItWorks.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default HowItWorks;
