import React, { useState } from "react";
import assets from "assets/index";
import Input from "components/input/Input";
import Button from "components/button/Button";
import { Link, useHistory } from "react-router-dom";
import "./formComponent.scss";
import propTypes from "prop-types";

export default function FormComponent({ linkPath, signUp, login }) {
  const [user, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    tel: "",
    email: "",
    passWord: "",
    termCheck: false,
  });
  const history = useHistory();

  const submitForm = () => {
    history.push(linkPath);
  };

  const inputFiller = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...user, [name]: value });
  };

  return (
    <div className='formContainer'>
      {signUp ? (
        <h3>
          Sign Up to
          <span>
            &nbsp;
            <img src={assets.It} alt='IT' />
          </span>
          &nbsp;Solutions with{" "}
        </h3>
      ) : (
        <h3>Members Login With</h3>
      )}
      <ul className='formContainer__Social'>
        <li className='formContainer__BtnSocial'>
          <a href='#thanks'>
            <img src={assets.Linkedin} alt='linkedin' />
          </a>
        </li>
        <li className='formContainer__BtnSocial'>
          <a href='#thanks'>
            <img src={assets.Gmail} alt='Gmail' />
          </a>
        </li>
        <li className='formContainer__BtnSocial'>
          <a href='#thanks'>
            <img src={assets.Twitter} alt='Twitter' />
          </a>
        </li>
        <li className='formContainer__BtnSocial'>
          <a href='#thanks'>
            <img src={assets.FB} alt='Faxebook' />
          </a>
        </li>
      </ul>
      <div className='hr'></div>
      {signUp && (
        <form className='formContainer__form'>
          <div className='formgroup row'>
            <Input
              inputType='text'
              inputId='firstName'
              inputName='firstName'
              labelText='First Name'
              inputPlaceholder='adeyemi'
              onChange={(e) => inputFiller(e)}
              value={user.firstName}
            />
            <Input
              inputType='text'
              inputId='lastName'
              inputName='lastName'
              labelText='Last Name'
              inputPlaceholder='Ibrahim'
              onChange={(e) => inputFiller(e)}
              value={user.lastName}
            />
          </div>
          <Input
            inputType='tel'
            inputId='tel'
            inputName='tel'
            labelText='Phone number'
            inputPlaceholder='+2341234567890'
            onChange={(e) => inputFiller(e)}
            value={user.tel}
          />
          <Input
            inputType='email'
            inputId='email'
            inputName='email'
            labelText='Email'
            inputPlaceholder='adeyemiibrahim223@gmail.com'
            onChange={(e) => inputFiller(e)}
            value={user.email}
          />
          <Input
            inputType='password'
            inputId='password'
            inputName='passWord'
            labelText='Password'
            inputPlaceholder='**********'
            onChange={(e) => inputFiller(e)}
            value={user.passWord}
          />
          {/* <Input
            inputType='checkbox'
            inputId='termCheck'
            inputName='termsCheck'
            labelText='I agree to IT SOLUTIONS terms and policies'
            onChange={(e) => inputFiller(e)}
            value={termCheck}
          /> */}
          <Button
            btnText='Create account'
            btnType='submit'
            onClick={() => submitForm()}
          />
        </form>
      )}
      {login && (
        <>
          <form className='formContainer__form'>
            <Input
              inputType='email'
              inputId='email'
              inputName='email'
              labelText='Email Address'
              inputPlaceholder='adeyemiibrahim223@gmail.com'
              onChange={(e) => inputFiller(e)}
              value={user.email}
            />
            <Input
              inputType='password'
              inputId='password'
              inputName='passWord'
              labelText='Password'
              inputPlaceholder='**********'
              onChange={(e) => inputFiller(e)}
              value={user.passWord}
            />
            <div className='loginform__ForgetPassword'>
              <p>Forgot password?</p>
            </div>
            <div className='formContainer__btnDiv'>
              <Button
                btnText='Login'
                btnType='submit'
                onClick={() => submitForm()}
              />
            </div>
          </form>
          <div className='formContainer__otherLink'>
            <span>
              Not a member? <Link to='/signup'>Sign up now</Link>
            </span>
          </div>
        </>
      )}
    </div>
  );
}

FormComponent.propTypes = {
  linkPath: propTypes.any,
  signUp: propTypes.any,
  login: propTypes.any,
};
