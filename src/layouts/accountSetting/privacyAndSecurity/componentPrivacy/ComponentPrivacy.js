import React from "react";
import "./componentPrivacy.scss";
import propTypes from "prop-types";

const ComponentPrivacy = ({ text, handleClick, className }) => {
  return (
    <>
      <div className='privacy'>
        <p
          onClick={() => handleClick(text)}
          className={`privacy__element ${
            className === text ||
            (className === "") & (text === "Phone number & Email")
              ? "privacy__element--active"
              : null
          }`}>
          {text}
        </p>
      </div>
    </>
  );
};
ComponentPrivacy.propTypes = {
  text: propTypes.string,
  className: propTypes.string,
  handleClick: propTypes.func.isRequired,
};
export default ComponentPrivacy;
