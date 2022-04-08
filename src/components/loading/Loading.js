import React from "react";
import "./loading.scss";
import propTypes from "prop-types";

const Loading = ({ loadingAbsolute }) => {
  return (
    <>
      {loadingAbsolute ? (
        <div className="loadingPage__cube">
          <div className="loadingPage__cubeBox">
            <div className="loadingPage__cubeContainer">
              <span className="loadingPage__side"></span>
              <span className="loadingPage__side"></span>
              <span className="loadingPage__side"></span>
              <span className="loadingPage__side"></span>
              <span className="loadingPage__side"></span>
              <span className="loadingPage__side"></span>
            </div>
          </div>
        </div>
      ) : (
        <div className="loadingPage">
          <div className="loadingPage__container">
            <div className="loadingPage__letterDiv">
              <span className="loadingPage__letter">I</span>
              <span className="loadingPage__letter">T</span>
              <span className="loadingPage__letter">S</span>
              <span className="loadingPage__letter">o</span>
              <span className="loadingPage__letter">l</span>
              <span className="loadingPage__letter">u</span>
              <span className="loadingPage__letter">t</span>
              <span className="loadingPage__letter">i</span>
              <span className="loadingPage__letter">o</span>
              <span className="loadingPage__letter">n</span>
              <span className="loadingPage__letter">s</span>
            </div>
            <div className="loadingPage__line"></div>
          </div>
        </div>
      )}
    </>
  );
};

Loading.propTypes = {
  loadingAbsolute: propTypes.bool,
};

export default Loading;
