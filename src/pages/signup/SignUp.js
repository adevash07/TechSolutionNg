/* eslint-disable react/no-unknown-property */
import React from "react";
import FormComponent from "./component/formComponent/FormComponent";
import { ReactComponent as RocketGirl } from "assets/images/SignUpIcons/RocketGirl.svg";
import Header from "../../layouts/header/Header";
import "./signUp.scss";

export default function SignUp() {
  return (
    <div className='signUpContainer'>
      <Header registerPage={true} />
      <div className='signUp__Aside'>
        <div className='signUp__Aside__content'>
          <h1 className='asideHeading'>
            Hire <span>Talents</span> & <br />
            Get your job done
          </h1>
          <div className='imgContainer--RocketGirl'>
            <RocketGirl />
          </div>
        </div>
      </div>
      <div className='signUp__Content'>
        <div className='signUp__form'>
          <FormComponent linkPath='/Congratespage' signUp={true} />
        </div>
      </div>
    </div>
  );
}
