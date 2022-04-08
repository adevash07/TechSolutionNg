import propTypes from "prop-types";
import { useReactiveVar } from '@apollo/client';
import { paymentVar } from '../graphql/reactiveVariables';
import PaymentView from "./PaymentView";

const Payment = ({ onNext, onBack }) => {
  const state = useReactiveVar(paymentVar);

  const handleNext = (e) => {
    if(e) e.preventDefault();

    onNext();
  };
  const handleChange = (name, value) => {
    paymentVar({ ...paymentVar(), [name]: value })
  };
  return (
    <PaymentView
      state={state}
      changeHandler={handleChange}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Payment;
Payment.propTypes = {
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
