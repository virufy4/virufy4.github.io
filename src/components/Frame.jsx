import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import ModalSupporters from "./ModalSupporters";
import { useStaticQuery, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";
import { ButtonLink } from "../components/Button";

function FrameCallStory() {
  const intl = useIntl();
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativePath: { regex: "/images\\/get-involved-page\\/.*\\.((png)|(jpg)|(jpeg))/"} }
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

  const [open, setOpen] = useState(false);
  const triggerRef = React.useRef(null);
  function handleClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <button
        className="flex flex-col rounded-2xl cursor-pointer transition-shadow hover:shadow-xl md:overflow-scroll"
        onClick={handleClick}
        ref={triggerRef}
      >
        {intl.formatMessage({ id: "becomeaSupporter.button" })}
      </button>
      <ModalSupporters
        show={open}
        triggerRef={triggerRef}
        scale={1.0}
        onClose={handleClose}
      >
        <div className="">
          <GatsbyImage
            fluid={images["background-modaltellsrory"]}
            imgStyle={{ objectFit: "contain" }}
            className="h-44"
          />
        </div>
        <p className="font-bold pb-4 text-center text-black">
          {intl.formatMessage({
            id: `getInvolved.joinusTellStory.yourStory`,
          })}
        </p>
        <p className="py-8  text-black">
          {intl.formatMessage({
            id: `getInvolved.joinusTellStory.thankyou`,
          })}
        </p>

        <div className="flex justify-center rounded-xl pt-8 mx-12">
          <ButtonLink
            to="/our-approach#tech-behind"
            className="px-18 py-4 text-lg"
          >
            {intl.formatMessage({
              id: `getInvolved.joinusTellStory.learnmore`,
            })}
          </ButtonLink>
        </div>
      </ModalSupporters>
    </>
  );
}

export default FrameCallStory;
