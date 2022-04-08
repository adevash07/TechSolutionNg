import React from "react";
import propTypes from "prop-types";
import "./triangleIcon.scss";

const TriangleIcon = ({ toggleSelect, select }) => {
  return (
    <span
      className={select ? "triangleicon select" : "triangleicon"}
      onClick={toggleSelect}
      // className="triangleicon"
    ></span>
  );
};

TriangleIcon.propTypes = {
  toggleSelect: propTypes.any,
  select: propTypes.any,
};

export default TriangleIcon;
