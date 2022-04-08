import React from "react";
import { useHistory } from "react-router-dom";
import "./formslogin.scss";
import propTypes from "prop-types";

const FormsLogin = ({
  labeltext,
  inputName,
  inputId,
  inputype,
  placetext,
  btntype,
  btntext,
  btnclass,
  linkPath,
}) => {
  const history = useHistory();

  return btntype ? (
    <div className="formm-btn">
      <button
        onClick={() => history.push(linkPath)}
        type={btntype}
        className={btnclass}
      >
        {btntext}
      </button>
    </div>
  ) : (
    <div className="form__group">
      {labeltext && <label htmlFor={inputId}>{labeltext}</label>}
      <input
        id={inputId}
        name={inputName}
        className="form__control"
        type={inputype}
        placeholder={placetext}
      />
    </div>
  );
};

FormsLogin.propTypes = {
  labeltext: propTypes.string,
  inputName: propTypes.string,
  inputId: propTypes.string,
  inputype: propTypes.string,
  placetext: propTypes.string,
  btntype: propTypes.string,
  btntext: propTypes.string,
  btnclass: propTypes.string,
  linkPath: propTypes.string,
};
export default FormsLogin;
