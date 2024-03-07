import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import BackgroundImage from "gatsby-background-image";
import GastbyImage from "gatsby-image";
import { Link } from "gatsby";

// Data
import links from "../../data/index/links-donate";

export default ({ images }) => {
  const intl = useIntl();
  return (
    <>
      <div className="lg:hidden">
        <GastbyImage
          className="bg-gradient-to-r from-gray-100 h-full max-h-56"
          fluid={images["fondo-hero-mobile"].childImageSharp.fluid}
        />
        <div className="h-auto md:h-xl p-8 lg:px-0 lg:mx-auto  mt-8 lg:w-32 text-center">
          <h1
            className="lg:pb-6 lg:w-3/12"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "index.section1.header" }),
            }}
          />
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center lg:-mt-16 md:w-10/12">
              <p
                className="my-8"
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "index.section1.pg" }),
                }}
              />
              <div className="flex flex-col min-w-max  font-normal ">
                <a
                  className="vf-btn-primary mx-auto my-4 px-6 py-2 w-full border-2 border-blue"
                  target="_blank"
                  href={links.donateLink}
                >
                  {intl.formatMessage({ id: "index.section2.donateyourcough" })}
                </a>
                <Link
                  className="vf-btn-clear mx-auto px-6 py-2 w-full text-blue border-2 border-blue"
                  to="/our-approach"
                >
                  {intl.formatMessage({ id: "index.section1.learnmore" })}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundImage
        fluid={images["fondo-hero"].childImageSharp.fluid}
        imgStyle={{ objectFit: "contain" }}
        className="px-4 py-8 text-black hidden lg:block"
      >
        <div className="h-2xl px-0 lg:px-0 md:mx-auto lg:w-11/12 mt-8 pt-8 md:w-32">
          <p
            className="leading-8 w-96 pb-6 font-bold lg:w-3/12"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "index.section1.header" }),
            }}
          />
          <div className="flex justify-between">
            <div className="flex flex-col items-start  justify-center lg:-mt-16 lg:w-10/12">
              <p
                className="mt-14 md:text-xl pt md:mb-8  w-80"
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "index.section1.pg" }),
                }}
              />
              <div className="flex flex-col min-w-max">
                <a
                  className="vf-btn-primary mx-auto my-4 px-6 py-2 w-full border-2 border-blue"
                  target="_blank"
                  href={links.donateLink}
                >
                  {intl.formatMessage({ id: "index.section2.donateyourcough" })}
                </a>
                <a
                  className="vf-btn-clear px-6 py-2 w-full"
                  target="_blank"
                  href={"/our-approach"}
                >
                  {intl.formatMessage({ id: "index.section1.learnmore" })}
                </a>
              </div>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </>
  );
};
