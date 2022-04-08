import propTypes from "prop-types";
import { useReactiveVar } from '@apollo/client';
import { educationVar } from '../graphql/reactiveVariables';
import EducationView from "./EducationView";

const Education = ({ onNext, onBack }) => {
  const state = useReactiveVar(educationVar);

  const handleNext = (e) => {
    if(e) e.preventDefault();

    onNext();
  };
  const handleChange = (name, value) => {
    educationVar({ ...educationVar(), [name]: value })
  };
  return (
    <EducationView
      state={state}
      changeHandler={handleChange}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Education;
Education.propTypes = {
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
