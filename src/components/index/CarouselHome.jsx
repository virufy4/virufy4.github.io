import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import { arrayCarousel } from "../../data/home/arrayCarousel";
// Styles
import "./styleCarousel.css";

const Slide = ({ image, info, active }) => {
  return (
    <div style={{ display: `${active ? "block" : "none"}` }} className={`fade`}>
      <div className="flex flex-col w-full h-auto rounded-3xl shadow-2xl">
        <div className="w-auto flex justify-center items-center">
          <div className="flex flex-col text-2xl">
            <div className="p-6">
              <p className="font-bold">{info.defaultName}</p>
              <p>{info.profession}</p>
            </div>
            <GatsbyImage
              className="w-full"
              imgStyle={{ objectFit: "fill" }}
              fluid={image}
              alt="Jose"
            />
            <p className="px-6 py-8 text-center">{info.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ({ images }) => {
  const intl = useIntl();
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <section
      style={{ maxWidth: "calc(100vw - 8rem)" }}
      className="w-full mx-auto "
    >
      <h2 className="mb-6 mt-2">
        {intl.formatMessage({ id: "index.section2.header" })}
      </h2>
      <div className="mb-8 ">
        <p>{intl.formatMessage({ id: "index.section2.pg1" })} </p>
      </div>
      <div className="slideshow-container">
        {arrayCarousel.info.map((info, idx) => (
          <Slide
            key={`info-${idx}`}
            image={images[info.id].childImageSharp.fluid}
            info={info}
            active={currentSlide === idx + 1}
          />
        ))}
      </div>
      <div style={{ marginTop: "24px", textAlign: "center" }}>
        {arrayCarousel.info.map((_, idx) => (
          <span
            className={`${currentSlide === idx + 1 ? " active " : ""} dot`}
            onClick={() => setCurrentSlide(idx + 1)}
          ></span>
        ))}
      </div>
    </section>
  );
};
