import React, { useState } from "react";
import "./factorComponent.scss";
import Group2204 from "assets/images/loginImages/Group2204.png";
import GetStarted from "./getStarted/GetStarted";
import PenComponent from "../privacyNavigation/penComponent/PenComponent";
import { Input } from "components/index";
export const FactorComponent = () => {
  const [isGetStarted, setisGetStarted] = useState(false);
  const [isautenticator, setIsAutenticator] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isauthEnabled, setIsauthEnabled] = useState(false);

  const handleSubmit = () => {
    isautenticator ? setIsModal(!isModal) : setIsAutenticator(!isautenticator);
  };

  const handleClose = () => {
    setIsModal(!isModal);
    setIsauthEnabled(!isauthEnabled);
    setIsAutenticator(!isautenticator);
  };

  const loadGetStarted = () => {
    return isauthEnabled ? (
      <PenComponent
        ptext='2-factor authentication'
        pinfo={
          <div className='linkComponent'>
            <div className='linkComponent__Text'>
              <p>turn off</p>
            </div>
            <Input
              inputType='toggler'
              onChange={() => setIsauthEnabled(!isauthEnabled)}
              inputName='auth'
              inputId='auth'
              value={isauthEnabled}
            />
          </div>
        }
      />
    ) : (
      <GetStarted
        isautenticator={isautenticator}
        isModal={isModal}
        onClick={handleClose}
        onSubmit={handleSubmit}
      />
    );
  };

  const loadDefault = () => {
    return (
      <div>
        <p>
          Its easier than you think for your password to be stolen. Here are a
          few ways
        </p>
        <ul>
          <li>Using same passwords on many sites</li>
          <li>No verification on those password</li>
          <li>Using your account on another PC may put your account at risk</li>
        </ul>
        <p>What you will gain?</p>
        <ul>
          <li>
            This ensures only trusted devices have access to your IT solutions
            account
          </li>
          <li>
            This ensures only trusted devices have access to your IT solutions
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className='factor'>
      <div className='factor__flex'>
        <div onClick={() => setisGetStarted(false)}>
          <p className={isGetStarted ? "factor--bgWhite" : "factor--bgRed"}>
            Why you need it
          </p>
        </div>
        <div onClick={() => setisGetStarted(true)}>
          <p className={isGetStarted ? "factor--bgBlue" : "factor--bgWhite"}>
            Get started
          </p>
        </div>
      </div>
      <div className='factor__text'>
        {isGetStarted ? loadGetStarted() : loadDefault()}

        <div
          className={`factor__img ${
            isGetStarted === false ? "show" : "unshow"
          }`}>
          <img src={Group2204} alt='img' />
        </div>
      </div>
    </div>
  );
};
