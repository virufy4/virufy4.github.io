import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

function OurValues({ title, icon, description }) {
  return (
    <div className="pt-10 ">
      <div className="font-montserrat md:h-96 ">
        <Img
          className="h-28 px-6 pb-4"
          fluid={icon}
          imgStyle={{ objectFit: "contain" }}
          aria-hidden
        />
        <h3 className="py-4 text-center">{title}</h3>
        <p className="text-center px-8 pb-4">{description}</p>
      </div>
    </div>
  );
}

OurValues.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default OurValues;
