import { useState } from "react";
import { PhoneInput } from "components/index";
import "./phoneForm.scss"

const PhoneForm = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((state) => ({ ...state, [name]: value }));
  };
  return (
    <form className="phone-form">
      <div className="form-group">
        <PhoneInput
          name="oldNumber"
          value={state.oldNumber || ""}
          labelText="Old number"
          handleChange={handleChange}
          inputCustomClass="phone-input"
          labelCustomClass="phone-label"
        />
      </div>
      <div className="form-group">
        <PhoneInput
          name="newNumber"
          value={state.newNumber || ""}
          labelText="New number"
          handleChange={handleChange}
          inputCustomClass="phone-input"
          labelCustomClass="phone-label"
        />
      </div>
    </form>
  );
};
export default PhoneForm;
