import React from "react";
import propTypes from "prop-types";
import "./modal.scss";

const Modal = ({ modalState, modalContent }) => {
  return (
    <div className={`modalComponent ${modalState && "show"}`}>
      {modalContent}
    </div>
  );
};

Modal.propTypes = {
  modalContent: propTypes.any,
  modalState: propTypes.bool,
  //   modalToggle: propTypes.func,
};

export default Modal;
