import propTypes from "prop-types";
import "./paymentCard.scss";
const PaymentCard = ({ logo, label, clickHandler }) => {
  return (
    <div className="payment-card" onClick={clickHandler}>
      <img src={logo} alt={label} />
      <label>{label}</label>
    </div>
  );
};
export default PaymentCard;
PaymentCard.propTypes = {
  logo: propTypes.any,
  label: propTypes.string,
  clickHandler: propTypes.func.isRequired,
};
