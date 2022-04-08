import React, { useState } from "react";
import "./passwordComponent.scss";
import PenComponent from "../privacyNavigation/penComponent/PenComponent";
import { UnderlinedTitleModal } from "components/index";
import PasswordForm from "./passwordForm/PasswordForm";
import VerificationForm from "../privacyNavigation/verificationForm/VerificationForm";
import SuccessPop from "../privacyNavigation/successPop/SuccessPop";

const PasswordComponent = () => {
  const [state, setState] = useState({});

  const handlePasswordEdit = () => {
    setState((state) => ({ ...state, showPasswordeModal: true }));
  };

  const handleClosePasswordeModal = () => {
    setState((state) => ({
      ...state,
      showPasswordeModal: false,
      showVerificationModal: true,
    }));
  };
  const handleCloseVerificationModal = () => {
    setState((state) => ({
      ...state,
      showVerificationModal: false,
      showSuccessModal: true,
    }));
  };

  const handleCloseSuccessModal = () => {
    setState((state) => ({ ...state, showSuccessModal: false }));
  };
  return (
    <>
      <PenComponent
        ptext="Password"
        pinfo="Change 2 weeks ago"
        handleClick={handlePasswordEdit}
      />
      {state.showPasswordeModal && (
        <UnderlinedTitleModal
          visible={state.showPasswordeModal}
          title="Change password"
          closeHandler={handleClosePasswordeModal}
          btnText="Next"
        >
          <PasswordForm />
        </UnderlinedTitleModal>
      )}
      {state.showVerificationModal && (
        <UnderlinedTitleModal
          visible={state.showVerificationModal}
          title={`Verify new password`}
          closeHandler={handleCloseVerificationModal}
          showFooter={false}
        >
          <VerificationForm
            verificationHandler={handleCloseVerificationModal}
            label="johnd@jjs.com"
          />
        </UnderlinedTitleModal>
      )}
      {state.showSuccessModal && (
        <UnderlinedTitleModal
          visible={state.showSuccessModal}
          title="Congratulations"
          closeHandler={handleCloseSuccessModal}
          showFooter
          showCheckIcon
        >
           <SuccessPop message="Your password has been changed" value="successfully" />
        </UnderlinedTitleModal>
      )}
    </>
  );
};
export default PasswordComponent