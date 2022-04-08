import { Button } from "components/index";
import { useState } from "react";
import propTypes from "prop-types";
import "./verificationForm.scss";

const VerificationForm = ({ verificationHandler, label }) => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((state) => ({ ...state, [name]: value }));
  };
  const handleSubmit = (e) => {
    if(e) e.preventDefault();
    verificationHandler();
  };
  return (
    <form className="verification-form" onSubmit={handleSubmit}>
      <div className="verification-form__label">
        <p>Please enter 6 digit verification code sent to </p>
        <small>{label}</small>
      </div>

      <div className="verification-form__digits-ctn">
        <input
          name="one"
          value={state.one || ""}
          onChange={handleChange}
          required
          maxLength={1}
        />
        <input
          name="two"
          value={state.two || ""}
          onChange={handleChange}
          required
          maxLength={1}
        />
        <input
          name="three"
          value={state.three || ""}
          onChange={handleChange}
          required
          maxLength={1}
        />
        <input
          name="four"
          value={state.four || ""}
          onChange={handleChange}
          required
          maxLength={1}
        />
        <input
          name="five"
          value={state.five || ""}
          onChange={handleChange}
          required
          maxLength={1}
        />
        <input
          name="six"
          value={state.six || ""}
          onChange={handleChange}
          required
          maxLength={1}
        />
      </div>
      <div className="verification-form__action-btns">
        <Button btnText="Submit" btnClass="medium" onClick={handleSubmit}/>
      </div>

      <div className="verification-form__note">
        <p>
          It may take a minute to get code, you can{" "}
          <button type="button">resend it here</button>{" "}
        </p>
      </div>
    </form>
  );
};
export default VerificationForm;
VerificationForm.propTypes = {
  verificationHandler: propTypes.func.isRequired,
  label: propTypes.string,
};
