import React from "react";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";
import CarouselHome from "./CarouselHome";

const StoryCard = ({ title, subtitle, photo, phrase }) => {
  return (
    <div className="rounded-3xl shadow-2xl mx-auto">
      <div className="m-5">
        <p className=" font-bold text-black mb-2">{title}</p>
        <p>{subtitle}</p>
      </div>
      <div className="flex justify-center items-center">
        <GatsbyImage
          className="w-full"
          fluid={photo}
          imgStyle={{ objectFit: "fill" }}
        />
      </div>
      <p className="text-center font-normal my-7 px-10 ">{phrase}</p>
    </div>
  );
};

export default ({ images }) => {
  const intl = useIntl();

  return (
    <section>
      <div className="md:hidden">
        <CarouselHome images={images} />
      </div>
      <div className="xs:hidden pt-20 w-4/5 grid mx-auto grid-col items-start">
        <div className="mx-auto text-center">
          <h2 className="text-black  mb-6 mx-auto">
            {intl.formatMessage({ id: "index.section2.header" })}
          </h2>
          <p
            className="text-black mb-4  font-normal"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "index.section2.pg1" }),
            }}
          />
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-3 gap-6 place-content-center my-5">
          <StoryCard
            title={intl.formatMessage({ id: "nav.name-1" })}
            subtitle={intl.formatMessage({ id: "nav.profession-1" })}
            photo={images["jose"].childImageSharp.fluid}
            phrase={intl.formatMessage({ id: "nav.description-1" })}
          />
          <StoryCard
            title={intl.formatMessage({ id: "nav.name-2" })}
            subtitle={intl.formatMessage({ id: "nav.profession-2" })}
            photo={images["phillipe"].childImageSharp.fluid}
            phrase={intl.formatMessage({ id: "nav.description-2" })}
          />
          <StoryCard
            title={intl.formatMessage({ id: "nav.name-3" })}
            subtitle={intl.formatMessage({ id: "nav.profession-3" })}
            photo={images["sophie"].childImageSharp.fluid}
            phrase={intl.formatMessage({ id: "nav.description-3" })}
          />
        </div>
      </div>
    </section>
  );
};
