import React, { useState, useEffect } from "react";
import { useIntl } from "gatsby-plugin-intl";
import SEO from "../components/SEO";
import Modal from "../components/ModalSupporters";

function ContactUs() {
  const [open, setOpen] = useState(false);
  const triggerRef = React.useRef(null);

  const intl = useIntl();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    console.log(
      "enviando datos..." + data.name + " " + data.email + " " + data.message
    );
  };

  async function handleSignIn(event) {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      setErrorMessage("There was an error");
      setLoading(false);
    } catch (err) {
      setErrorMessage("There was an error");
      setLoading(false);
    }
  }
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
          <form className="m-8 md:px-6" onSubmit={sendData} autoComplete="off">
            <input
              type="text"
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue"
              required
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputname",
              })}
              // value={name}
              onChange={handleInputChange}
            ></input>

            <input
              type="email"
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue"
              required
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputemail",
              })}
              // value={email}
              onChange={handleInputChange}
            ></input>

            <textarea
              type="text"
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue h-36"
              required
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputmessage",
              })}
              // value={message}
              onChange={handleInputChange}
            ></textarea>
            <button
              className={`
            bg-blue border rounded-xl text-white px-12 py-4 hover:bg-blue 
            ${loading ? "bg-blue animate-pulse" : ""}
          `}
              disabled={loading}
              onClick={handleSignIn}
            >
              {intl.formatMessage({ id: "becomeaSupporter.button" })}
            </button>
            <p className="text-blue">{errorMessage}</p>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ContactUs;
