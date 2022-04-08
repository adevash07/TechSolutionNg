import { useState } from "react";
import propTypes from "prop-types";
import {
  PaymentMethods,
  PaymentVerifacation,
  VerifyPaymentSlide,
} from "./components/index";
import "./paymentView.scss";

const PaymentView = ({ state = {}, changeHandler, onNext, onBack }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((currentState) => currentState + 1);
  };
  const handleBack = () => {
    setCurrent((currentState) => currentState - 1);
  };
  const renderComponents = () => {
    switch (current) {
      case 0:
        return (
          <PaymentMethods
            data={state}
            onNext={handleNext}
            onBack={onBack}
            changeHandler={changeHandler}
          />
        );
      case 1:
        return (
          <VerifyPaymentSlide
            onNext={handleNext}
            onBack={handleBack}
            changeHandler={changeHandler}
            data={state}
          />
        );
      case 2:
        return (
          <PaymentVerifacation
            onNext={onNext}
            onBack={handleBack}
            changeHandler={changeHandler}
            data={state}
          />
        );

      default:
        return null;
    }
  };
  return <div className="payment">{renderComponents()}</div>;
};

export default PaymentView;
PaymentView.propTypes = {
  state: propTypes.object,
  changeHandler: propTypes.func,
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
