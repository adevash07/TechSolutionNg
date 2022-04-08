import React from "react";
import Button from "components/button/Button";
import propTypes from "prop-types";
import "./paymentPlan.scss";
export default function PaymentPlan({ planName, planLogo }) {
  return (
    <div className='paymentPlan'>
      <h6>Payment Plan</h6>
      <div className='paymentPlan__current'>
        <p>Current plan</p>
        <p>
          {planName} <img src={planLogo} alt='Logo' />
        </p>
      </div>
      <Button btnText='Change plan' btnType='button' />
    </div>
  );
}
PaymentPlan.propTypes = {
  planName: propTypes.any,
  planLogo: propTypes.any,
};
