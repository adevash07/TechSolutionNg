import propTypes from "prop-types";
import { useReactiveVar } from '@apollo/client';
import { employmentVar } from '../graphql/reactiveVariables';
import EmploymentView from "./EmploymentView";

const Employment = ({ onNext, onBack }) => {
  const state = useReactiveVar(employmentVar);

  const handleNext = (e) => {
    if(e) e.preventDefault();

    onNext();
  };
  const handleChange = (name, value) => {
    employmentVar({ ...employmentVar(), [name]: value })
  };
  return (
    <EmploymentView
      state={state.employment}
      changeHandler={handleChange}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Employment;
Employment.propTypes = {
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
