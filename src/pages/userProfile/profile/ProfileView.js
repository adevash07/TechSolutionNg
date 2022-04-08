import { useState } from "react";
import propTypes from "prop-types";
import {
  ProfileLanding,
  EditPicture,
  EditPicturePreview,
  ProfileLanguage
} from "./components/index";

const PaymentView = ({ state = {}, changeHandler, onBack }) => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((currentState) => currentState + 1);
  };
  const handleBack = () => {
    setCurrent((currentState) => currentState - 1);
  };
  const renderComponents = () => {
    switch (current) {
      case 0:
        return (
          <ProfileLanding
            data={state}
            onNext={handleNext}
            onBack={onBack}
            changeHandler={changeHandler}
          />
        );
      case 1:
        return (
          <EditPicture
            data={state}
            onNext={handleNext}
            onBack={handleBack}
            changeHandler={changeHandler}
          />
        );
      case 2:
        return <EditPicturePreview onNext={handleNext} onBack={handleBack} />;
        case 3:
        return <ProfileLanguage onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };
  return <div className="profile">{renderComponents()}</div>;
};

export default PaymentView;
PaymentView.propTypes = {
  state: propTypes.object,
  changeHandler: propTypes.func,
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
