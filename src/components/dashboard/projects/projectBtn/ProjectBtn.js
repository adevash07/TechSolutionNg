import React from "react";
import propTypes from "prop-types";
import "./projectBtn.scss";

const ProjectBtn = ({
  projectBtnNumber,
  projectBtnText,
  status,
  handleBtnChange,
}) => {
  return (
    <div
      onClick={handleBtnChange}
      className={status ? "projectBtn active" : "projectBtn"}
    >
      <button className="projectBtn__btn">{projectBtnText}</button>
      <span className="projectBtn__number">{projectBtnNumber}</span>
    </div>
  );
};

ProjectBtn.propTypes = {
  projectBtnNumber: propTypes.any,
  projectBtnText: propTypes.string,
  status: propTypes.any,
  handleBtnChange: propTypes.any,
};

export default ProjectBtn;
