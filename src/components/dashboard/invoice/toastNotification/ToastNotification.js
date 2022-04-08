import React from "react";
import propTypes from "prop-types";
import "./toastNotification.scss";
import { AiFillCheckCircle, AiOutlineWarning } from "react-icons/ai";
function ToastNotification({ status, message }) {
  return (
    <div className={status === "success" ? "bgSuccess" : "bgWarning"}>
      <div className="toastNotification">
        <span className="notificationIcon">
          {status === "success" ? (
            <AiFillCheckCircle />
          ) : status === "warning" ? (
            <AiOutlineWarning />
          ) : (
            `No Icon for this ${status}`
          )}
        </span>
        <span className="successText">{message}</span>
      </div>
    </div>
  );
}

ToastNotification.propTypes = {
  status: propTypes.string,
  message: propTypes.string,
  // closeToast: propTypes.function,
};

export default ToastNotification;
