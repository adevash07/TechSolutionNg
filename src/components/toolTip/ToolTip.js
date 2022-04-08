import React from "react";
import propTypes from "prop-types";
import { FiShare2 } from "react-icons/fi";
import "./toolTip.scss";

const ToolTip = ({ share, message, client, active }) => {
  return (
    <div className={`toolTip ${active && "active"}`}>
      <div className="toolTip__container">
        <div className="toolTip__share">
          {share} <FiShare2 />
        </div>
        <div className="toolTip__message">{message}</div>
        <div className="toolTip__client">{client}</div>
      </div>
    </div>
  );
};

ToolTip.propTypes = {
  share: propTypes.string,
  message: propTypes.string,
  client: propTypes.string,
  active: propTypes.bool,
};

export default ToolTip;
