import React from "react";
import propTypes from "prop-types";
import "./paymentcomponent.scss";
// import { useState } from "react";
export const PaymentComponent = ({
  ptext,
  img,
  divclass,
  htext,
  ptextimg1,
  ptextimg2,
  btntextclick,
  btntext,
  click,
}) => {
  return (
    <>
      <div className="payment">
        <p className="paragraphy-Header">{ptext}</p>
        <div className={divclass ? `div-${divclass}` : "div-class-bg"}>
          <div className="paymentImg__Paragraph">
            <div className="payment__Img">
              <img src={img} alt="img" />
            </div>
            <div className="payment-Header">
              <h6>{htext}</h6>
              <p>{ptextimg1}</p>
              <p>{ptextimg2}</p>
            </div>
          </div>
          <div className="payment__button">
            {btntextclick && <button onClick={click}>{btntextclick}</button>}
            {btntext && <button>{btntext}</button>}
          </div>
        </div>
      </div>
      {/* <div> {changleModal ? <ChangePaymentModal /> : ""}</div> */}
    </>
  );
};
PaymentComponent.propTypes = {
  ptext: propTypes.string,
  btntextclick: propTypes.string,
  click: propTypes.string,
  btntext: propTypes.string,
  htext: propTypes.string,
  ptextimg1: propTypes.string,
  ptextimg2: propTypes.string,
  divclass: propTypes.string,
  img: propTypes.any,
};
export default PaymentComponent;
