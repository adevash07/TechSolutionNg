import React from "react";
import propTypes from "prop-types";
import "./textbtnplan.scss";

export const TextbtnPlan = ({
  num,
  str,
  btntext,
  btnclass,
  btntype,
  ptextplan,
  htext,
  icon,
  ptext,
  iconclass,
  textclass,
}) => {
  return ptextplan ? (
    <>
      <div className="textBtnPlan">
        <p>{ptextplan}</p>
        <p>
          <span>{num}</span>
          <span>{str}</span>
        </p>
        <button type={btntype} className={btnclass ? `btn-${btnclass}` : "btn"}>
          {btntext}
        </button>
      </div>
    </>
  ) : (
    <div
      className={
        textclass
          ? `textBtnPlan__ParagraphtextIcon-${textclass}`
          : " textBtnPlan__ParagraphtextIcon"
      }
    >
      <p>
        <i className={iconclass ? `iconc-${iconclass}` : "iconc"}>
          <img src={icon} alt="img" className="img-icon" />
        </i>
        {/* className="img-icon" */}
      </p>
      <p className=" textBtnPlan__Header">{htext}</p>
      <p className=" textBtnPlan__Paragraph">{ptext}</p>
    </div>
  );
};

TextbtnPlan.propTypes = {
  htext: propTypes.string,
  textclass: propTypes.string,
  ptext: propTypes.string,
  icon: propTypes.any,
  iconclass: propTypes.any,
  str: propTypes.string,
  btntext: propTypes.string,
  num: propTypes.number,
  ptextplan: propTypes.string,
  btnclass: propTypes.string,
  btntype: propTypes.string,
};
export default TextbtnPlan;
