import React from "react";
import { BsX } from "react-icons/bs";
import propTypes from "prop-types";
import "./cancelIconSmall.scss";

const CancelIconSmall = ({ size }) => {
  return (
    <div className="cancel__small">
      <BsX size={size} />
    </div>
  );
};

CancelIconSmall.propTypes = {
  size: propTypes.number,
};
export default CancelIconSmall;
