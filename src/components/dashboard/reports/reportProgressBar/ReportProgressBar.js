import React from "react";
import propTypes from "prop-types";

const ReportProgressBar = ({ mileStone }) => {
  const fillerStyles = {
    width: `${mileStone}%`,
    height: 10,
    borderRadius: `${10}px`,
    background: "linear-gradient(180deg, #00D4FF 0%, #004CFF 100%)",
    display: "inline-block",
  };

  return <span style={fillerStyles}></span>;
};

ReportProgressBar.propTypes = {
  mileStone: propTypes.number,
};
export default ReportProgressBar;
