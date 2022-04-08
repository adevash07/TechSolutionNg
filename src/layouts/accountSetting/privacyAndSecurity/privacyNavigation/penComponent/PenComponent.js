import React from "react";
import "./penComponent.scss";
import propTypes from "prop-types";
import { FaPen } from "react-icons/fa";

export const PenComponent = ({ ptext, pinfo, unpen, handleClick }) => {
  const clickHandler = () => {
    if (handleClick) handleClick();
  };
  return (
    <>
      <div className='penComponent' onClick={clickHandler}>
        <div className='penComponent__Header'>
          <p>{ptext}</p>
          {unpen ? (
            " "
          ) : (
            <p>
              <i className='penComponentIcon__Pen'>
                <FaPen />
              </i>
            </p>
          )}
        </div>
        <p className='penComponent__Body'>{pinfo}</p>
      </div>
    </>
  );
};
PenComponent.propTypes = {
  ptext: propTypes.string,
  pinfo: propTypes.string,
  handleClick: propTypes.func,
  unpen: propTypes.bool,
};
export default PenComponent;
