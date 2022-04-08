import React from "react";
import "./customRadioInput.scss";
import propTypes from "prop-types";

const CustomRadioInput = ({ htmlForLabel }) => {
  return (
    <span className="customRadio">
      <input
        type="radio"
        name="presentStatus"
        id={htmlForLabel}
        className="customRadio__input"
      />
    </span>
  );
};

CustomRadioInput.propTypes = {
  htmlForLabel: propTypes.string,
};
export default CustomRadioInput;
