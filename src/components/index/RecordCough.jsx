import React from "react";
import { Link } from "gatsby";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyImage from "gatsby-image";

export default ({ images }) => {
  const intl = useIntl();

  function constructHeader(num) {
    return (
      <div className="flex w-full">
        <div
          style={{ position: "relative", top: "-5px" }}
          className="bg-black mr-4 text-white test-white text-lg rounded-full font-header w-8 h-8 flex justify-center items-center flex-shrink-0"
        >
          {num}
        </div>
        <h2 className="text-black text-md text-xl font-bold">
          {intl.formatMessage({
            id: `index.section3.header${num}`,
          })}
        </h2>
      </div>
    );
  }

  function constructImage(id, className, width = "60vw") {
    return (
      <div
        className="flex justify-center items-center xs:ml-12"
        style={{ width }}
      >
        <GatsbyImage
          className={className}
          fluid={images[id].childImageSharp.fluid}
          imgStyle={{ objectFit: "fill" }}
        />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-12 items-center">
      <div className="w-5/6 flex flex-col mx-auto items-start col-span-12 lg:col-span-4">
        <h2 className="my-10">
          {intl.formatMessage({ id: "index.section3.header" })}
        </h2>
        <div className="flex flex-col items-center w-full mb-6">
          <div className="flex-shrink-0 mb-8">
            <p>{intl.formatMessage({ id: "index.section3.description" })}</p>
          </div>
          <div className="flex flex-col min-w-max">
            <Link
              className="vf-btn-primary mx-auto my-4 px-6 py-2 w-full border-2 border-blue"
              to="/dashboard"
            >
              {intl.formatMessage({ id: "index.section3.header3" })}
            </Link>
            <Link
              className="vf-btn-clear mx-auto px-6 py-2 w-full text-blue border-2 border-blue"
              to="/get-involved"
            >
              {intl.formatMessage({ id: "index.section3.joincommunity" })}
            </Link>
          </div>
        </div>
      </div>
      <div className=" md:block col-span-8">
        {constructImage("map-update", "w-full")}
      </div>
    </section>
  );
};
