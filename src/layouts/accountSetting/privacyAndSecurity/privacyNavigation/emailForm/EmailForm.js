import { useState } from "react";
import { Input } from "components/index";
import "./emailForm.scss";

const EmailForm = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((state) => ({ ...state, [name]: value }));
  };
  return (
    <form className="email-form">
      <div className="form-group">
        <Input
          inputName="oldEmail"
          value={state.oldEmail || ""}
          labelText="Old email"
          handleChange={handleChange}
          inputType="email"
        />
      </div>
      <div className="form-group">
        <Input
          inputName="newEmail"
          value={state.newEmail || ""}
          labelText="New email"
          onChange={handleChange}
          inputType="email"
        />
      </div>
    </form>
  );
};
export default EmailForm;
