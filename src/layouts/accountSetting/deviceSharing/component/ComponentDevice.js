import React from "react";
import "./componentDevice.scss";
import propTypes from "prop-types";

export const ComponentDevice = ({
  pstate,
  psession,
  iconstele,
  osversion,
  browsername,
  monthname,
  datetime,
  pclass,
}) => {
  return (
    <div className="deviceComponent">
      <div className="deviceComponent__DivTelevision">
        <i>{iconstele}</i>
        <p>{osversion}</p>
        <p>{browsername}</p>
      </div>
      <div className="deviceComponent__ParagraphState">
        <p>{pstate}</p>
      </div>
      <div className="deviceComponent__DivTelevision">
        <p>
          <span>{monthname}</span>
          <span>{datetime}</span>
        </p>
      </div>
      <div className="deviceComponent__ParagraphState">
        <p className={pclass ? `pc-${pclass}` : "pc"}>{psession}</p>
      </div>
    </div>
  );
};
ComponentDevice.propTypes = {
  pclass: propTypes.string,
  monthname: propTypes.string,
  datetime: propTypes.number,
  browsername: propTypes.string,
  osversion: propTypes.string,
  iconstele: propTypes.any,
  pstate: propTypes.string,
  psession: propTypes.string,
};
export default ComponentDevice;
