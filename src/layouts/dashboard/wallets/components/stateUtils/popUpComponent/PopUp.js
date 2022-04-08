import React from "react";
import "./popUp.scss";
import propTypes from "prop-types";

export default function PopUp({ show, tagPosition, content, className }) {
  return (
    <div className={`popUp ${className} ${show ? "show" : " "} ${tagPosition}`}>
      {content}
    </div>
  );
}

PopUp.propTypes = {
  show: propTypes.any,
  tagPosition: propTypes.any,
  content: propTypes.any,
  className: propTypes.any,
};
