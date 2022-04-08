import React from "react";
import "./button.scss";
import propTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { IoArrowForwardSharp } from "react-icons/io5";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({
  btnText,
  btnText1,
  btnText2,
  btnType,
  btnClass,
  btnLink,
  link,
  btnBlueIcon,
  btnIcon,
  btnWhiteIcon,
  animateCheck,
  animateIcon,
  onClick,
}) => {
  const history = useHistory();

  const routing = () => {
    if (link) {
      return history.push(link);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();

    if (link) routing();
  };

  return (
    <>
      {btnBlueIcon ? (
        <button
          className={
            btnClass ? `button button--${btnClass} blueIcon` : "button blueIcon"
          }
          type={btnType}
          onClick={handleClick}
        >
          <span className="button__text">{btnText}</span>
          <span className="button__blueIcon">
            <IoArrowForwardSharp className="icon" />
          </span>
        </button>
      ) : btnWhiteIcon ? (
        <button
          className={
            btnClass
              ? `button button--${btnClass} whiteIcon`
              : "button whiteIcon"
          }
          type={btnType}
          onClick={handleClick}
        >
          <span className="button__text">{btnText}</span>
          <span className="button__whiteIcon">
            <FaLongArrowAltRight className="icon" />
          </span>
        </button>
      ) : btnLink ? (
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>
      ) : animateCheck ? (
        <button
          className={
            btnClass ? `button ${btnClass} animateCheck` : "button animateCheck"
          }
          type={btnType}
          onClick={handleClick}
        >
          <span className="button__text1">{btnText1}</span>
          <span className="button__text2Container">
            <span className="button__text2">{btnText2}</span>
            <span className="button__icon">{btnIcon}</span>
          </span>
        </button>
      ) : animateIcon ? (
        <button
          className={
            btnClass ? `button ${btnClass} animateIcon` : "button animateIcon"
          }
          type={btnType}
          onClick={handleClick}
        >
          <span className="button__text">{btnText}</span>
          <span className="button__icon">{btnIcon}</span>
        </button>
      ) : (
        <button
          className={btnClass ? `button button--${btnClass}` : "button"}
          type={btnType}
          onClick={handleClick}
        >
          {btnText}
        </button>
      )}
    </>
  );
};

Button.propTypes = {
  btnType: propTypes.string,
  btnText: propTypes.string,
  btnText1: propTypes.string,
  btnText2: propTypes.string,
  btnClass: propTypes.string,
  btnLink: propTypes.string,
  link: propTypes.string,
  btnBlueIcon: propTypes.any,
  btnIcon: propTypes.any,
  btnWhiteIcon: propTypes.any,
  onClick: propTypes.any,
  animateCheck: propTypes.any,
  animateIcon: propTypes.any,
};

export default Button;
