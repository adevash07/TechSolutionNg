import React from "react";
import propTypes from "prop-types";

import "./yourBidsBtnSection.scss";
import ProjectBtn from "components/dashboard/projects/projectBtn/ProjectBtn";
import { Link } from "react-router-dom";

const YourBidsBtnSection = ({
  url,
  btn1Status,
  btn2Status,
  handleBtn1Change,
  handleBtn2Change,
  dataLength1,
  dataLength2,
}) => {
  return (
    <div
      className={
        btn1Status ? "yourBidsBtnSection active1" : "yourBidsBtnSection active2"
      }
    >
      <Link to={url}>
        <ProjectBtn
          status={btn1Status}
          handleBtnChange={handleBtn1Change}
          projectBtnText="Open bids"
          projectBtnNumber={dataLength1}
        />
      </Link>
      <Link to={`${url}/closed-bids`}>
        <ProjectBtn
          status={btn2Status}
          handleBtnChange={handleBtn2Change}
          projectBtnText="Closed bids"
          projectBtnNumber={dataLength2}
        />
      </Link>
    </div>
  );
};

YourBidsBtnSection.propTypes = {
  btn1Status: propTypes.any,
  btn2Status: propTypes.any,
  handleBtn1Change: propTypes.any,
  handleBtn2Change: propTypes.any,
  dataLength1: propTypes.any,
  dataLength2: propTypes.any,
  url: propTypes.any,
};

export default YourBidsBtnSection;
