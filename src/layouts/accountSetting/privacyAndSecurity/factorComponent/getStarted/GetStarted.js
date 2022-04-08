import React from "react";
import { Button, Input } from "components/index";
import assets from "assets";
import Modal from "layouts/dashboard/wallets/components/stateUtils/modal/Modal";
import propTypes from "prop-types";

export default function GetStarted({
  isautenticator,
  onClick,
  isModal,
  onSubmit,
}) {
  // const handleChange = (e) => {
  //   if (onClick || onSubmit) {
  //     onClick(e);
  //   }
  // };
  const modalContentLoader = () => {
    return (
      <div className='modalComponent__body'>
        <p>Congratulations</p>
        <small>
          Your <span>2-factor authentication</span>has been setup
          <Input
            inputType='checkboxCustom'
            customCheckBox={true}
            value={true}
          />
        </small>
        <Button btnText='Close' btnClass='medium' onClick={() => onClick()} />
      </div>
    );
  };

  return (
    <form className='getStarted'>
      {isautenticator ? (
        <p>Please enter unique code from the authenticator app</p>
      ) : (
        <p>Enable your 2-Factor authentication</p>
      )}
      <div className={isautenticator ? "barCode unique" : "barCode"}>
        {isautenticator ? (
          <div className='barCode__form'>
            <Input inputType='tel' maxLength={1} />
            <Input inputType='tel' maxLength={1} />
            <Input inputType='tel' maxLength={1} />
            <Input inputType='tel' maxLength={1} />
            <Input inputType='tel' maxLength={1} />
            <Input inputType='tel' maxLength={1} />
          </div>
        ) : (
          <>
            <img src={assets.barCode} />
            <small>
              Scan QR code using the authenticator app on your device
            </small>
          </>
        )}
      </div>
      <Button
        btnClass='medium'
        onClick={() => onSubmit()}
        btnText={isautenticator ? "Submit" : "Next"}
        btnType='submit'
      />
      <Modal modalContent={modalContentLoader()} modalState={isModal} />
    </form>
  );
}

GetStarted.propTypes = {
  isautenticator: propTypes.any,
  onClick: propTypes.any,
  isModal: propTypes.any,
  onSubmit: propTypes.any,
};
