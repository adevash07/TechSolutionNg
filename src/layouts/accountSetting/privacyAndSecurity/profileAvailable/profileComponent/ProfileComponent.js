import React from "react";
import "./profilecomponent.scss";
import propTypes from "prop-types";
import { GrPowerReset } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { TiArrowSortedDown } from "react-icons/ti";

export const ProfileComponent = ({
  ptext,
  daytext,
  spanclass,
  resetext,
  duration,
  pwrite,
  onClick,
  iconstate,
}) => {
  return (
    <>
      <div className='profileComponent'>
        {ptext && (
          <p>
            <span
              className={
                spanclass ? `spancolor-${spanclass}` : "spancolor"
              }></span>
            {ptext}
          </p>
        )}
      </div>
      <div className='profileComponent__resetDiv'>
        {resetext && (
          <p>
            <span>
              <i className='profileComponent__resetIcon'>
                <GrPowerReset />
              </i>
            </span>
            {resetext}
          </p>
        )}
      </div>
      <div className='profileComponent__resetDiv'>
        {duration && (
          <p onClick={onClick}>
            <span>
              <i className='profileComponent__resetIcon'>
                <BsClock />
              </i>
            </span>
            <span>{duration}</span>
            <span className='profileComponent__spanArrowdownIcon'>
              <TiArrowSortedDown
                className={
                  iconstate
                    ? "profileComponent__arrowdownIcon rotate"
                    : "profileComponent__arrowdownIcon"
                }
              />
            </span>
          </p>
        )}
      </div>
      <div className='profileComponent__day'>
        {daytext && (
          <p>
            <span
              className={
                spanclass ? `spancolor-${spanclass}` : "spancolor"
              }></span>
            {daytext}
          </p>
        )}
      </div>
      <div className='profileComponent__durationForm'>
        {pwrite && (
          <div>
            <p>{pwrite}</p>
            <form>
              <input type='text' />
              <button type='button' className='btn'>
                Set duration
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
ProfileComponent.propTypes = {
  ptext: propTypes.string,
  daytext: propTypes.string,
  spanclass: propTypes.string,
  resetext: propTypes.string,
  duration: propTypes.string,
  pwrite: propTypes.string,
  iconstate: propTypes.string,

  onClick: propTypes.any,
};
export default ProfileComponent;
