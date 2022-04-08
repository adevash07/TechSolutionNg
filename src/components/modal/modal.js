import React from "react";
import propTypes from "prop-types";
import "./modal.scss";
import { Button } from "components/index";

const Modal = ({
  saveHandler,
  visible,
  title,
  children,
  cancelHandler,
  showHeader = false,
  showFooter = false,
  customClass,
}) => {
  const handleCancel = () => {
    if (cancelHandler) cancelHandler();
  };
  return (
    <div className={`overlay ${visible && "overlay--visible"}`}>
      <div className={`modal ${visible && "modal--visible"} ${customClass}`}>
        {showHeader && (
          <div className="modal__header">
            <label>{title}</label>
          </div>
        )}

        <div className={`modal__body `}>{children}</div>

        {showFooter && (
          <div className="modal__footer">
            <Button btnText="Save" btnType="button" onClick={saveHandler} />
            <Button
              btnText="Cancel"
              btnType="button"
              btnClass="grey"
              onClick={handleCancel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  props: propTypes.object,
  children: propTypes.any,
  saveHandler: propTypes.func,
  cancelHandler: propTypes.func,
  visible: propTypes.bool.isRequired,
  title: propTypes.string,
  showFooter: propTypes.bool,
  showHeader: propTypes.bool,
  customClass: propTypes.string,
};
