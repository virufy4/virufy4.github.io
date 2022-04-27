import React, { useState } from "react";
import PropTypes from "prop-types";
import { useIntl } from "gatsby-plugin-intl";
import CloseIcon from "../../images/our-approach-page/close-icon.svg";
import PlusIcon from "../../images/our-approach-page/plus-icon.svg";

function QuestionCollapse({ categoryId, questionIds }) {
  const intl = useIntl();
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  return (
    <div>
      <button
        className="flex w-full text-left py-3 focus:outline-none"
        onClick={toggleOpen}
      >
        <h2 className="text-xl flex-grow">
          {intl.formatMessage({
            id: `fagstext.tabFaqs.${categoryId}`,
          })}
        </h2>
        {open ? <CloseIcon /> : <PlusIcon />}
      </button>
      {open && (
        <div className="grid grid-cols-1 md:grid-cols-6">
          {questionIds.map((questionId, categoryId) => (
            <div
              className="text-secondary-200 font-bold mb-7 p-20"
              key={questionIds}
            >
              <p className="text-black font-normal mt-2">
                {intl.formatMessage({
                  id: `fagstext.tabFaqs.${questionId}Q`,
                })}
              </p>
              <p className="text-black font-normal mt-2">
                {intl.formatMessage({
                  id: `fagstext.tabFaqs.${questionId}A`,
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
QuestionCollapse.propTypes = {
  categoryId: PropTypes.string.isRequired,
  questionIds: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default QuestionCollapse;
