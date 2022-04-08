import "./radioButton.scss";
import propTypes from "prop-types";

const RadioButtonGroup = ({ children, value, onChange, customClass }) => {
  return (
    <div
      defaultValue={value || null}
      onChange={onChange}
      className={`${customClass}`}
    >
      {children}
    </div>
  );
};
const RadioButton = ({ name, value, labelText }) => {
  return (
    <>
      <div className="radio-item">
        <input type="radio" id={labelText} name={name} value={value} />
        <label htmlFor={labelText}>{labelText}</label>
      </div>
    </>
  );
};
export { RadioButtonGroup, RadioButton };

RadioButtonGroup.propTypes = {
  onChange: propTypes.func,
  children: propTypes.string.isRequired,
  value: propTypes.any,
  customClass: propTypes.string,
};
RadioButton.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.any.isRequired,
  labelText: propTypes.string.isRequired,
};
