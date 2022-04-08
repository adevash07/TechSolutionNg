import React from "react";
import propTypes from "prop-types";

import "./allProjectBtnSection.scss";
import ProjectBtn from "components/dashboard/projects/projectBtn/ProjectBtn";
import { Link } from "react-router-dom";

const AllProjectBtnSection = ({
  // url,
  btn1Status,
  btn2Status,
  dataLength1,
  dataLength2,
  handleBtn1Change,
  handleBtn2Change,
}) => {
  return (
    <div
      className={
        btn1Status ? "projectBtnSection active1" : "projectBtnSection active2"
      }
    >
      <Link to={`/dashboard/projects`}>
        <ProjectBtn
          status={btn1Status}
          handleBtnChange={handleBtn1Change}
          projectBtnText="All projects"
          projectBtnNumber={dataLength1}
        />
      </Link>

      <Link to={`/dashboard/projects/instant-offers`}>
        <ProjectBtn
          status={btn2Status}
          handleBtnChange={handleBtn2Change}
          projectBtnText="Instant Offers"
          projectBtnNumber={dataLength2}
        />
      </Link>
    </div>
  );
};

AllProjectBtnSection.propTypes = {
  btn1Status: propTypes.any,
  btn2Status: propTypes.any,
  handleBtn1Change: propTypes.any,
  handleBtn2Change: propTypes.any,
  dataLength1: propTypes.any,
  dataLength2: propTypes.any,
  // url: propTypes.any,
};

export default AllProjectBtnSection;
