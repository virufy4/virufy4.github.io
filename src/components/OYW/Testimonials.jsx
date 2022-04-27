import React, { useState, useCallback } from "react";
import GatsbyImage from "gatsby-image";
import { useIntl } from "gatsby-plugin-intl";
import { oyw } from "../../data/oyw";
import { useStaticQuery, graphql } from "gatsby";

// Styles
import "./styles/Testimonials.css";

const Slide = ({ testimonial, active }) => {
  const intl = useIntl();

  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativePath: { regex: "/images\\/oyw\\/.*\\.((png)|(jpg)|(jpeg))/" } }
      )
       {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 1900, quality: 80)  {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const images = {};

  data.allFile.edges.forEach(
    (edge) => (images[edge.node.name] = edge.node.childImageSharp.fluid)
  );

  return (
    <div style={{ display: `${active ? "block" : "none"}` }} className={`fade`}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full h-auto rounded-2xl bg-blue-100 md:py-10 text-left">
        <div className="w-auto mt-6 xs:pl-12">
          <GatsbyImage
            className="w-24 md:w-32 rounded-full "
            imgStyle={{ objectFit: "fill" }}
            fluid={images[testimonial.id]}
            alt="Annelisse Torrez Daza"
          />
        </div>

        <div className="md:ml-3 md:py-16  col-span-2">
          <p className="font-bold text-xl">{testimonial.defaultName}</p>
          <p className="text-left xs:pl-2 ">{testimonial.country}</p>
        </div>

        <div className="col-span-2 md:py-8 xs:py-2">
          <p>
            {intl.formatMessage({
              id: `OYW.testimonials.${testimonial.id}`,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ({ images }) => {
  const intl = useIntl();
  const [currentSlide, setCurrentSlide] = useState(1);

  const updateCurrentSlide = useCallback(
    (number) => {
      let currectUpdated = currentSlide + number;
      if (currectUpdated <= 0) {
        currectUpdated = oyw.testimonials.length;
      }

      if (currectUpdated >= oyw.testimonials.length + 1) {
        currectUpdated = 1;
      }

      setCurrentSlide(currectUpdated);
    },
    [currentSlide, setCurrentSlide]
  );
  return (
    <section style={{ maxWidth: "calc(100vw - 4rem)" }} className="w-full">
      <h2 className="md:mb-6 mt-2 xs:text-center">
        {intl.formatMessage({ id: `OYW.testimonials.title` })}
      </h2>
      <div className="mb-8  xs:mt-6">
        <p>{intl.formatMessage({ id: `OYW.testimonials.intro` })}</p>
      </div>
      <div className="slideshow-container">
        {oyw.testimonials.map((testimonial, idx) => (
          <Slide
            key={`testimonial-${idx}`}
            images={images}
            testimonial={testimonial}
            active={currentSlide === idx + 1}
          />
        ))}
      </div>
      <div style={{ marginTop: "24px", textAlign: "center" }}>
        {oyw.testimonials.map((_, idx) => (
          <span
            className={`${currentSlide === idx + 1 ? " active " : ""} dot`}
            onClick={() => setCurrentSlide(idx + 1)}
          ></span>
        ))}
      </div>
    </section>
  );
};
