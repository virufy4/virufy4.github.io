import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import BackgroundImage from "gatsby-background-image";
import GastbyImage from "gatsby-image";

export default ({ images }) => {
  const intl = useIntl();

  return (
    <>
      <section id="our-vision">
        <div className="container-flex ">
          <div className="md:hidden">
            <GastbyImage
              imgStyle={{ objectFit: "" }}
              className="h-full"
              fluid={images["background-OurPeople"].childImageSharp.fluid}
            />
            <div className="flex-1">
              <h3 className="text-center md:m-8 xs:mt-8 xs:px-10">
                {intl.formatMessage({ id: "team.teamSection.weUnite" })}
              </h3>
            </div>
          </div>
          <div>
            <BackgroundImage
              fluid={images["background-OurPeople"].childImageSharp.fluid}
              imgStyle={{ objectFit: "contain" }}
              className="text-white xs:hidden"
            >
              <div className="flex-container">
                {/* <div className="flex-1 md:pt-10 md:pl-2 md:text-xl">
                  {intl.formatMessage({
                    id: "team.teamSection.title-ourpeople",
                  })}
                </div> */}
                <h1 className="flex text-center font-normal px-16 pt-72 pb-24">
                  {intl.formatMessage({ id: "team.teamSection.weUnite" })}
                </h1>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </section>
    </>
  );
};
