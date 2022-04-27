import React, { useState } from "react";
import { useIntl } from "gatsby-plugin-intl";
import ModalFaqs from "../components/ModalFaqs";

function Faqstext({ category, questions }) {
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
    <div id="Faqs" className="md:mx-12 xs:p-6">
      <button
        className="bg-gray-200 rounded-2xl cursor-pointer transition-shadow hover:shadow-lg md:h-80 md:w-80  md:mr-16"
        onClick={handleClick}
        ref={triggerRef}
      >
        <div className="xs:p-8">
          <h4 className="mb-8 ">
            {intl.formatMessage({
              id: `faqstext.questionSection.${category}.${questions?.id}.numberQuestion`,
              //defaultMessage: questions?.numberQuestion,
            })}
          </h4>
          <h4 className=" md:px-4">
            {intl.formatMessage({
              id: `faqstext.questionSection.${category}.${questions?.id}.questionIdQ`,
            })}
          </h4>
        </div>
      </button>
      <ModalFaqs
        show={open}
        triggerRef={triggerRef}
        scale={1.0}
        onClose={handleClose}
      >
        <div className="text-white text-center">
          <h4 className="text-sm pb-4">
            {intl.formatMessage({
              id: `faqstext.tabFaqs.titleAnswer`,
            })}
          </h4>
          <p className="pb-4">
            {intl.formatMessage({
              id: `faqstext.questionSection.${category}.${questions?.id}.questionIdQ`,
            })}
          </p>
          <p
            className="font-medium text-white text-justify text-base"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({
                id: `faqstext.questionSection.${category}.${questions?.id}.questionIdA`,
              }),
            }}
          />
        </div>
      </ModalFaqs>
    </div>
  );
}
export default Faqstext;
