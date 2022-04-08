import React, { useState } from "react";
import "./privacyNavigation.scss";
import PenComponent from "./penComponent/PenComponent";
import { UnderlinedTitleModal } from "components/index";
import PhoneForm from "./phoneForm/PhoneForm";
import VerificationForm from "./verificationForm/VerificationForm";
import EmailForm from "./emailForm/EmailForm";
import SuccessPop from "./successPop/SuccessPop";

export const PrivacyNavigation = () => {
  const [state, setState] = useState({
    showPhoneModal: false,
    showEmailModal: false,
    showVerificationModal: false,
    showSuccessModal: false,
  });
  const [type, setType] = useState({});

  const handlePhoneEdit = () => {
    setState((state) => ({ ...state, showPhoneModal: true }));
  };
  const handleEmailEdit = () => {
    setState((state) => ({ ...state, showEmailModal: true }));
  };
  const handleClosePhoneModal = () => {
    setType({ name: "number", value: "0808069669" });
    setState((state) => ({
      ...state,
      showPhoneModal: false,
      showVerificationModal: true,
    }));
  };
  const handleCloseVerifyPhoneModal = () => {
    setState((state) => ({
      ...state,
      showVerificationModal: false,
      showSuccessModal: true,
    }));
  };

  const handleCloseEmailModal = () => {
    setType({ name: "email", value: "jdoe@gm.com" });
    setState((state) => ({
      ...state,
      showEmailModal: false,
      showVerificationModal: true,
    }));
  };

  const handleCloseSuccessModal = () => {
    setState((state) => ({ ...state, showSuccessModal: false }));
  };
  return (
    <div className="privacyNavigation__Pen">
      <PenComponent
        ptext="Phone Number"
        pinfo="+234805678373"
        handleClick={handlePhoneEdit}
      />
      <PenComponent
        ptext="Email Address"
        pinfo="okeoghene247@gmail.com"
        handleClick={handleEmailEdit}
      />
      {state.showPhoneModal && (
        <UnderlinedTitleModal
          visible={state.showPhoneModal}
          title="Change number"
          closeHandler={handleClosePhoneModal}
          btnText="Next"
        >
          <PhoneForm />
        </UnderlinedTitleModal>
      )}

      {state.showEmailModal && (
        <UnderlinedTitleModal
          visible={state.showEmailModal}
          title="Change email"
          closeHandler={handleCloseEmailModal}
          btnText="Next"
        >
          <EmailForm />
        </UnderlinedTitleModal>
      )}
      {state.showVerificationModal && (
        <UnderlinedTitleModal
          visible={state.showVerificationModal}
          title={`Verify new ${type.name}`}
          closeHandler={handleCloseVerifyPhoneModal}
          showFooter={false}
        >
          <VerificationForm
            verificationHandler={handleCloseVerifyPhoneModal}
            label={type.value}
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
          <SuccessPop
            message={`Your ${type.name} has been changed to`}
            value={type.value}
          />
        </UnderlinedTitleModal>
      )}
    </div>
  );
};
export default PrivacyNavigation;
