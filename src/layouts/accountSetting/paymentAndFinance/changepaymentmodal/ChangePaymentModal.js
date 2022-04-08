import React from "react";
import "./changepaymentmodal.scss";
import { FaTimes } from "react-icons/fa";
import propTypes from "prop-types";

export const ChangePaymentModal = ({ click }) => {
  return (
    <>
      <div className="changePayment">
        <div className="changePayment__Modal">
          <div className="changepayment__Header">
            <h4>Change payment type</h4>
            <i>
              <FaTimes onClick={click} />
            </i>
          </div>
          <p>
            please be aware that you will be directed to
            <span> Flutterwave</span> to complete your payment rigestration
          </p>
          <div className="changepayment__Button">
            <button onClick={click} className="btn__brown">
              Cancel
            </button>
            <button className="btn__blue">Continue</button>
          </div>
        </div>
      </div>
    </>
  );
};
ChangePaymentModal.propTypes = {
  click: propTypes.string,
};
export default ChangePaymentModal;
