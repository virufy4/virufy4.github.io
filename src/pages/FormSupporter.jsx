import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";
import ModalSupporters from "../components/ModalSupporters";

function FormSupportes() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const triggerRef = React.useRef(null);
  const intl = useIntl();

  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
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
      "enviando datos..." +
        data.name +
        " " +
        data.email +
        " " +
        data.company +
        " " +
        data.message
    );
  };

  async function handleSignIn(event) {
    event.preventDefault();
    setErrorMessage("");
    setLoading(true);
    try {
      // Sign In logic using signInEmail and signInPassword state
      setErrorMessage("There was an error");
      setLoading(false);
    } catch (err) {
      // Remediation logic
      setErrorMessage("There was an error ");
      setLoading(false);
    }
  }
  // const handle = (e) => {
  //   e.preventDefault();

  //   setgetData([...getData, data]);
  //   setName("");
  //   setEmail("");
  //   setCompany("");
  //   setMessage("");
  // };

  function handleClick() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  function handleData() {
    console.log("Click");
  }

  return (
    <>
      <button
        className="flex flex-col md:px-8 rounded-2xl cursor-pointer transition-shadow  text-lg  xs:text-sm"
        onClick={handleClick}
        ref={triggerRef}
      >
        {intl.formatMessage({
          id: `team.supportersSection.buttonSupporter`,
        })}
      </button>

      <ModalSupporters
        show={open}
        triggerRef={triggerRef}
        scale={2.0}
        onClose={handleClose}
      >
        <div className="text-center pt-4 text-black">
          <h1 className="md:pb-4 xs:text-lg">
            {intl.formatMessage({
              id: "becomeaSupporter.title-BecomeaSuporter",
            })}
          </h1>
          <p>{intl.formatMessage({ id: "becomeaSupporter.sub-header" })}</p>
        </div>

        <div className="flex flex-col items-center justify-center text-center text-black">
          <form className="m-8 md:px-6" onSubmit={sendData} autoComplete="off">
            <input
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue"
              required
              type="text"
              name="name"
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputname",
              })}
              id="name"
              // value={name}
              onChange={handleInputChange}
            ></input>

            <input
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue"
              required
              type="email"
              name="email"
              id="email"
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputemail",
              })}
              // value={email}
              onChange={handleInputChange}
            ></input>

            <input
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue"
              required
              type="text"
              name="company"
              id="company"
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputcompany",
              })}
              // value={company}
              onChange={handleInputChange}
            ></input>

            <textarea
              className="mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue h-48"
              required
              type="text"
              name="message"
              id="message"
              placeholder={intl.formatMessage({
                id: "becomeaSupporter.inputmessage",
              })}
              // value={message}
              onChange={handleInputChange}
            ></textarea>
            <button
              className={`
                bg-blue border-2 rounded-xl text-white px-6 my-4 py-2 mt-10
                ${loading ? "bg-blue  animate-pulse" : ""}
              `}
              disabled={loading}
              onClick={handleData}
              type="submit"
            >
              {intl.formatMessage({ id: "becomeaSupporter.button" })}
            </button>
            <p className="text-blue">{handleSignIn}</p>
          </form>
        </div>
      </ModalSupporters>
    </>
  );
}
FormSupportes.propTypes = {
  icon: PropTypes.any.isRequired,
};
export default FormSupportes;
