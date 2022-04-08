import React from "react";
import propTypes from "prop-types";
import "./modal.scss";

const Modal = ({ modalState, modalContent, modalDirection }) => {
  return (
    <div className={`modalComponent ${modalDirection} ${modalState && "show"}`}>
      {modalContent}
    </div>
  );
};

Modal.propTypes = {
  modalContent: propTypes.any,
  modalState: propTypes.bool,
  modalDirection: propTypes.string,
};

export default Modal;
