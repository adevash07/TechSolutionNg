import React from "react";
import propTypes from "prop-types";
import "./littleCard.scss";

const LittleCard = ({ icon, text }) => {
  return (
    <div className="littleCard">
      <span className="littleCard__icon">{icon}</span>
      <span className="littleCard__text">{text}</span>
    </div>
  );
};

LittleCard.propTypes = {
  icon: propTypes.any,
  text: propTypes.string,
};

export default LittleCard;
