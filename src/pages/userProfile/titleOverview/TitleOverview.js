import propTypes from "prop-types";
import { useReactiveVar } from '@apollo/client';
import { titleOverviewVar } from '../graphql/reactiveVariables';
import TitleOverviewView from "./TitleOverviewView";

const TitleOverview = ({ onNext, onBack }) => {
  const state = useReactiveVar(titleOverviewVar);

  const handleNext = (e) => {
    if(e) e.preventDefault();

    onNext();
  };
  const handleChange = (name, value) => {
    console.log(name, value)
    titleOverviewVar({ ...titleOverviewVar(), [name]: value })
  };
  return (
    <TitleOverviewView
      state={state}
      changeHandler={handleChange}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default TitleOverview;
TitleOverview.propTypes = {
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
