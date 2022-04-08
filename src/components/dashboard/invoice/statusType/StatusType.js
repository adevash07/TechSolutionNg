import React from "react";
import "./statusType.scss";
import { BsArrowUpRight } from "react-icons/bs";
function StatusType({ status }) {
  {
    if (status === "resend") {
      return (
        <div className="resend">
          <span className="resend__text">{status}</span>
          <span className="resend__icon">
            <BsArrowUpRight />
          </span>
        </div>
      );
    } else {
      return (
        <div className={status !== "" ? status : ""}>
          <span>{status}</span>
        </div>
      );
    }
  }
}

export default StatusType;
