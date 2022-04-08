import { useState } from "react";
import CountrySelect from "./CountrySelect";
import "./phoneInput.scss";
import propTypes from "prop-types";

const PhoneInput = ({
  htmlFor,
  name,
  labelCustomClass,
  labelText,
  inputCustomClass,
  placeHolder = "+234xxxx",
  handleChange,
  value,
  isRequired,
}) => {
  const [phoneNumber, setPhoneNumber] = useState(value || "+234");

  const setDialCode = (dialCode) => {
    setPhoneNumber(dialCode);
  };
  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
    handleChange(e);
  };
  return (
    <div className="phone-input">
      <label htmlFor={htmlFor} className={`label ${labelCustomClass}`}>
        {labelText}
      </label>
      <div className="input-wrap">
        <CountrySelect setDialCode={setDialCode} phoneNumber={phoneNumber} />
        <input
          name={name}
          value={phoneNumber}
          className={`input-field ${inputCustomClass}`}
          onChange={handleInputChange}
          pattern="^\+[1-9]{1}[0-9]{11,14}$"
          placeholder={placeHolder}
          title="eg +2340292929292"
          required={isRequired}
          autoComplete="off"
          autoCorrect="off"
          
        />
      </div>
    </div>
  );
};

export default PhoneInput;
PhoneInput.propTypes = {
  htmlFor: propTypes.string,
  name: propTypes.string,
  labelCustomClass: propTypes.string,
  labelText: propTypes.string,
  inputCustomClass: propTypes.string,
  placeHolder: propTypes.string,
  handleChange: propTypes.func.isRequired,
  value: propTypes.string,
  isRequired: propTypes.bool,
};
