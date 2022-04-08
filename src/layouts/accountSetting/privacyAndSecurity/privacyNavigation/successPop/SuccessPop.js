import propTypes from "prop-types";
import "./successPop.scss";
const SuccessPop = ({ message, value }) => {
  return (
    <div className="success-pop">
      <p>{message}</p>
      <p>{value}</p>
    </div>
  );
};

export default SuccessPop;
SuccessPop.propTypes = {
  message: propTypes.string,
  value: propTypes.string,
};