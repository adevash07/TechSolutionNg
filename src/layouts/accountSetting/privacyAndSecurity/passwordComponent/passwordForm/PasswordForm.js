import { useState } from "react";
import { Input } from "components/index";
import "./passwordForm.scss";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const PasswordForm = () => {
  const [state, setState] = useState({});
  const [passwordState, setPasswordState] = useState("password");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((state) => ({ ...state, [name]: value }));
  };
  const togglePasswordState = () => {
    setPasswordState((prevState) =>
      prevState === "password" ? "text" : "password"
    );
  };
  return (
    <form className="password-form">
      <div className="form-group">
        <Input
          inputName="oldPassword"
          value={state.oldPassword || ""}
          labelText="Old password"
          onChange={handleChange}
          inputType={passwordState}
        />

        <div className="eye-icon-ctn">
          <div
            className={`eye-ic`}
            id="togglePassword"
            onClick={togglePasswordState}
          >
            {passwordState === "password" ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
      </div>
      <div className="form-group">
        <Input
          inputName="newPassword"
          value={state.newPassword || ""}
          labelText="New password"
          onChange={handleChange}
          inputType="password"
        />
      </div>
      <div className="form-group">
        <Input
          inputName="confirmPassword"
          value={state.confirmPassword || ""}
          labelText="Confirm password"
          onChange={handleChange}
          inputType="password"
        />
      </div>
    </form>
  );
};
export default PasswordForm;
