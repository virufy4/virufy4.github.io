import React, { Fragment, useState, useEffect } from "react";
import FrameCallStory from "../components/Frame";
import { useIntl } from "gatsby-plugin-intl";

function FormTellStory() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [story, setstory] = useState("");
  const [fileupload, setFileupload] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const intl = useIntl();

  const [data, setData] = useState({
    email: "",
    name: "",
    story: "",
    fileupload: "",
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
        data.email +
        " " +
        data.name +
        " " +
        data.story +
        " " +
        data.fileupload
    );
  };
  // const handle = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     email,
  //     name,
  //     story,
  //     fileupload,
  //   };
  //   setgetData([...getData, data]);
  //   setEmail("");
  //   setName("");
  //   setstory("");
  //   setFileupload("");
  // };

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
    <Fragment>
      <div className="overflow-visible flex flex-col items-center justify-center text-center text-black">
        <form
          className="m-8 md:px-6 pb-10 overflow "
          onSubmit={sendData}
          autoComplete="off"
        >
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
            type="text"
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

          <textarea
            className="mt-2 w-full p-2 h-44 border-gray-500 shadow-lg focus:border-blue"
            required
            type="text"
            name="story"
            id="story"
            placeholder={intl.formatMessage({
              id: "becomeaSupporter.inputstory",
            })}
            // value={story}
            onChange={handleInputChange}
          ></textarea>
          <div>
            <label className="block text-sm font-medium text-gray-700 mt-2 w-full p-2 border-gray-500 shadow-lg focus:border-blue"></label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <div className="flex text-sm ">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer bg-white rounded-md font-medium  focus-within:ring-gray"
                  >
                    <span className="text-gray-500 text-lg font-medium">
                      {intl.formatMessage({
                        id: "becomeaSupporter.inputupLoadyourPicture",
                      })}
                    </span>
                    <input
                      className="sr-only"
                      required
                      id="file-upload"
                      name="fileupload"
                      type="file"
                      value={fileupload}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <button
              className={`
              bg-blue  border-2 rounded-xl text-white  px-6 my-4  py-2
            ${loading ? "bg-blue text-black animate-pulse" : ""}
          `}
              disabled={loading}
              onClick={handleSignIn}
              type="submit"
            >
              <FrameCallStory />
            </button>
            <p className="text-blue">{errorMessage}</p>
          </div>
        </form>
      </div>
    </Fragment>
  );
}

export default FormTellStory;
