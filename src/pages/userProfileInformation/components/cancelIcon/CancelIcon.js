import React from "react";
import { BsX } from "react-icons/bs";
import propTypes from "prop-types";
import "./cancelIcon.scss";

const CancelIcon = ({ size, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }

    return null;
  };
  return (
    <div onClick={handleClick} className="cancel cancel--absolutePositioned">
      <BsX size={size} />
    </div>
  );
};

CancelIcon.propTypes = {
  size: propTypes.number,
  onClick: propTypes.func,
};
export default CancelIcon;
