import React from "react";
import propTypes from "prop-types";
import "./yourOffersBtnSection.scss";
import ProjectBtn from "components/dashboard/projects/projectBtn/ProjectBtn";
import { Link } from "react-router-dom";

const YourOffersBtnSection = ({
  url,
  btn1Status,
  btn2Status,
  btn3Status,
  handleBtn1Change,
  handleBtn2Change,
  handleBtn3Change,
  dataLength1,
  dataLength2,
  dataLength3,
}) => {
  return (
    <div
      className={
        btn1Status
          ? "yourOffersBtnSection active1"
          : btn2Status
          ? "yourOffersBtnSection active2"
          : "yourOffersBtnSection active3"
      }
    >
      <Link to={url}>
        <ProjectBtn
          status={btn1Status}
          handleBtnChange={handleBtn1Change}
          projectBtnText="Active offers"
          projectBtnNumber={dataLength1}
        />
      </Link>

      <Link to={`${url}/completed-offers`}>
        <ProjectBtn
          status={btn2Status}
          handleBtnChange={handleBtn2Change}
          projectBtnText="Completed offers"
          projectBtnNumber={dataLength2}
        />
      </Link>

      <Link to={`${url}/saved-offers`}>
        <ProjectBtn
          status={btn3Status}
          handleBtnChange={handleBtn3Change}
          projectBtnText="Saved offers"
          projectBtnNumber={dataLength3}
        />
      </Link>
    </div>
  );
};

YourOffersBtnSection.propTypes = {
  btn1Status: propTypes.any,
  btn2Status: propTypes.any,
  btn3Status: propTypes.any,
  handleBtn1Change: propTypes.any,
  handleBtn2Change: propTypes.any,
  handleBtn3Change: propTypes.any,
  dataLength1: propTypes.any,
  dataLength2: propTypes.any,
  dataLength3: propTypes.any,
  url: propTypes.any,
};

export default YourOffersBtnSection;
