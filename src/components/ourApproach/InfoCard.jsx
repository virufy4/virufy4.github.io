import React, { useState } from "react";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";
import Modal from "../Modal";
import { useIntl } from "gatsby-plugin-intl";
function InfoCard({ title, description, source, icon }) {
  const intl = useIntl();
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
        className="flex flex-col  rounded-2xl cursor-pointer  hover:shadow-xl"
        onClick={handleClick}
        ref={triggerRef}
      >
        <div className="flex-grow flex justify-center w-full bg-gray rounded-xl shadow-2xl md:hover:text-white md:hover:bg-blue ">
          <div className="h-48 pt-4">
            <BackgroundImage
              className="h-36 w-36 md:opacity-75"
              fluid={icon}
              imgStyle={{ objectFit: "contain" }}
              aria-hidden
            >
              <div className="font-normal text-center py-6 ">
                <h4>{`${title}`}</h4>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </button>
      <Modal
        show={open}
        triggerRef={triggerRef}
        scale={1.0}
        onClose={handleClose}
      >
        <h2 className="pb-2 text-center border-b-2  border-gray-300">
          {title}
        </h2>
        <p className="px-4 md:py-4 xs:text-center xs:py-2 xs:px-2">
          {description}
        </p>

        <div className="flex flex-col min-w-max">
          <button
            className="vf-btn-primary mx-auto px-6 py-2  text-blue border-2 border-blue "
            onClick={handleClose}
          >
            {" "}
            {intl.formatMessage({
              id: `ourApproach.topFold.bottonClose`,
            })}
          </button>
        </div>
      </Modal>
    </>
  );
}
InfoCard.propTypes = {
  sourceNum: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
};
export default InfoCard;
