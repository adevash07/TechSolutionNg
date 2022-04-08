import React from "react";
import "./projectStatus.scss";
import propTypes from "prop-types";

const ProjectStatus = ({ name, active }) => {
  return (
    <div className={`projectStatus ${active && "active"}`}>
      <div className="projectStatus__container">
        <div className="projectStatus__circle"></div>
        <div className="projectStatus__dash"></div>
        <div className="projectStatus__name">{name}</div>
      </div>
    </div>
  );
};

ProjectStatus.propTypes = {
  name: propTypes.string,
  active: propTypes.bool,
};

export default ProjectStatus;
