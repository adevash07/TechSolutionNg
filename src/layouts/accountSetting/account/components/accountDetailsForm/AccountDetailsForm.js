import React from "react";
import propTypes from "prop-types";
import {
  RadioButtonGroup,
  RadioButton,
} from "components/radioButton/RadioButton";
import { Button, Input } from "components/index";
import "./accountDetailsForm.scss";

const AccountDetailsForm = ({
  closeHandler,
  saveHandler,
  solutionsValue,
  projectValue,
  onChange,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <section className='accDetailsForm'>
      <div className='accDetailsForm__containerInner'>
        <small>Your account type</small>
        <div className='account-card'>
          <RadioButtonGroup
            onChange={handleChange}
            customClass='acc-type-group'>
            <RadioButton
              name='accountType'
              value='Solution providers'
              labelText='Solution providers'
            />
            <RadioButton
              name='accountType'
              value='Enterprise client'
              labelText='Enterprise client'
            />
          </RadioButtonGroup>
        </div>
      </div>

      <div className='accDetailsForm__containerInner'>
        <small>Your directory settings</small>
        <div className='account-card'>
          <Input
            inputType='checkboxCustom'
            customCheckBox={true}
            inputName='solutionProviderFollow'
            value={solutionsValue}
            onChange={(e) => handleChange(e)}
            labelText='Please tick if you want other solution providers to follow you'
          />
          <Input
            inputType='checkboxCustom'
            inputName='projectNotification'
            customCheckBox={true}
            value={projectValue}
            onChange={(e) => handleChange(e)}
            labelText='Please tick if you want to be notified for projects and instant offers'
          />
        </div>
      </div>
      <div className='accDetailsForm__containerInner'>
        <small>Close your account</small>
        <Button
          onClick={closeHandler}
          btnText='Close account'
          btnClass='grey'
        />
      </div>
      <div className='accDetailsForm__containerInner'>
        <Button
          onClick={saveHandler}
          btnText='Save changes'
          btnClass='medium'
        />
      </div>
    </section>
  );
};

export default AccountDetailsForm;
AccountDetailsForm.propTypes = {
  closeHandler: propTypes.func.isRequired,
  saveHandler: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  solutionsValue: propTypes.boolen,
  projectValue: propTypes.boolen,
};
