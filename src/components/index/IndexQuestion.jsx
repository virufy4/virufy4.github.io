import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import GatsbyBgImage from "gatsby-background-image";
import { Link } from "gatsby";
import links from "../../data/index/links-donate";

export default ({ images }) => {
  const intl = useIntl();

  return (
    <div className="relative h-auto lg:h-80">
      <GatsbyBgImage
        className="bg-gradient-to-r w-full h-64 lg:h-full"
        fluid={images["HERO_DONATING_01"].childImageSharp.fluid}
        style={{ backgroundPosition: "right" }}
      />

      <div className="flex flex-col justify-center items-center w-full h-full text-center p-5 md:bg-transparent md:absolute md:top-0">
        <p className="w-80 mb-10 font-semibold">
          {intl.formatMessage({
            id: "index.section5.messagehero",
          })}
        </p>
        <Link
          className="vf-btn-primary  mx-auto my-4 px-6 py-2 border-2 border-blue"
          target="_blank"
          href={links.donateLink}
        >
          {intl.formatMessage({
            id: "index.section5.donatebuttonhero",
          })}
        </Link>
      </div>
    </div>
  );
};
