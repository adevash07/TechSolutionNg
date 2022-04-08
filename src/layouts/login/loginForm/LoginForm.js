import React from "react";
import "./loginForm.scss";

// import Icons from "../../../components/socialIcons/Icons";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

// import { AiOutlineTwitter } from "react-icons/ai";

// import { ImFacebook } from "react-icons/im";
import FormComponent from "pages/signup/component/formComponent/FormComponent";

export const LoginForm = () => {
  return (
    <div className="login__Form">
      {/* <div className='loginForm__Div'>
        <h3>Members Login With</h3>
        <div className='loginForm__Icon'>
          <Icons iconlinks='#' icons={<FaLinkedinIn />} />
          <Icons iconlinks='#' icons={<FcGoogle />} />
          <Icons
            iconlinks='#'
            icons={<AiOutlineTwitter className='fa__Twitter' />}
          />
          <Icons iconlinks='#' icons={<ImFacebook />} />
        </div>
        <div className='loginForm__Hr'>
          <div className='Hr__Line'></div>
          <div>
            <p>Or</p>
          </div>
          <div className='Hr__Line'></div>
        </div> */}
      <FormComponent linkPath="/dashboard" login={true} />
      {/* <form className="Form-form">
          <FormsLogin
            labeltext="Email Address"
            inputId="email"
            inputName="email"
            inputype="email"
          />
          <FormsLogin
            labeltext="Password"
            inputId="password"
            inputName="password"
            inputype="password"
          />
          <div className="loginform__ForgetPassword">
            <p>Forgot password?</p>
          </div>
          {/* <Link to="/Congrates"> */}
      {/* <FormsLogin
            btntype="submit"
            btnclass="form-btn"
            btntext="Login"
            // linkPath="/Congratespage"
            linkPath="/dashboard"
          />
          {/* </Link> */}
      {/* </form> */}
    </div>
    // </div>

    // </div>
  );
};
