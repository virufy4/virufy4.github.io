import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#___gatsby");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.40)",
    zIndex: 50,
  },
  content: {
    zIndex: 50,
  },
};

const ModalHandler = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (modal) => {
    setIsOpen(true);
    setModalContent(modal);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onClose={closeModal}
        style={modalStyles}
        className="absolute bg-transparent top-0 z-1 mt-5 "
        shouldFocusAfterRender={true}
      >
        <div className=" w-screen h-8 m-auto xs:pr-8 flex justify-center items-center z-50">
          <button
            className="relative md:left-64 left-44 md:top-10 top-16 text-white text-lg md:mt-3 z-50"
            onClick={closeModal}
          >
            &#x2715;
          </button>
        </div>
        {modalContent}
      </Modal>
      {typeof children === "function"
        ? children({ isOpen, openModal, closeModal })
        : children}
    </>
  );
};

export default ModalHandler;
