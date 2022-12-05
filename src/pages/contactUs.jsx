import React, { useState, useEffect } from "react";
import { useIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import Modal from "../components/ModalSupporters";

function ContactUs() {
  const [open, setOpen] = useState(false);
  const triggerRef = React.useRef(null);

  const intl = useIntl();

  function handleClick() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <SEO title="Contact-Us | Virufy" />
      <button
        className="flex flex-col p-3 font-normal rounded-2xl cursor-pointer transition-shadow hover:shadow-xl"
        onClick={handleClick}
        ref={triggerRef}
      >
        {intl.formatMessage({
          id: `getInvolved.joinusCollaborate.joinButtonContactuS`,
        })}
      </button>
      <Modal
        show={open}
        triggerRef={triggerRef}
        scale={1.0}
        onClose={handleClose}
      >
        <div className="text-center p-10 text-black">
          <h1 className="md:pb-6 xs:text-lg">
            {intl.formatMessage({
              id: "becomeaSupporter.title-BecomeaPartner",
            })}
          </h1>
          <p className="font-normal">
            {intl.formatMessage({ id: "becomeaSupporter.sub-header" })}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-black">
          <form
            className="m-8 md:px-6"
            action="https://docs.google.com/forms/d/e/1FAIpQLScEla6lpxn12t7xoDSNPSJFHlMyU4xRrBMyK0hGP4jQA5sWmA/formResponse"
            target="_blank"
            autoComplete="off"
          >
            <input
              name="entry.754199290"
              type="text"
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue"
              required
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputname",
              })}
            ></input>

            <input
              name="entry.1513725803"
              type="email"
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue"
              required
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputemail",
              })}
            ></input>

            <textarea
              name="entry.1150067396"
              type="text"
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue h-36"
              required
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputmessage",
              })}
            ></textarea>
            <button
              type="submit"
              className={`
            bg-blue border rounded-xl text-white px-12 py-4 hover:bg-blue
          `}
            >
              {intl.formatMessage({ id: "becomeaSupporter.button" })}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ContactUs;
