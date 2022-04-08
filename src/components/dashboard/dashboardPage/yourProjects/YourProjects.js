import React from "react";
import "./YourProjects.scss";
import propTypes from "prop-types";

const YourProjects = ({ projectImg, projectHeader, projectTime }) => {
  return (
    <div className="dashboardProject">
      <div className="dashboardProject__imgContainer">
        <img className="dashboardProject__img" src={projectImg} alt="" />
      </div>
      <div className="dashboardProject__details">
        <h5 className="dashboardProject__header">{projectHeader}</h5>
        <span className="dashboardProject__time">{projectTime}</span>
      </div>
    </div>
  );
};

YourProjects.propTypes = {
  projectHeader: propTypes.string,
  projectTime: propTypes.string,
  projectImg: propTypes.any,
};

export default YourProjects;
