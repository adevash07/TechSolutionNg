import propTypes from "prop-types";
import { useReactiveVar } from "@apollo/client";
import { talentVar } from "../graphql/reactiveVariables";
import TalentView from "./TalentView";

const Talent = ({ onNext }) => {
  const state = useReactiveVar(talentVar);

  const handleNext = (e) => {
    if(e)
    e.preventDefault();

    onNext();
  };
  const handleChange = (name, value) => {
    talentVar({ ...talentVar(), [name]: value });
  };
  return (
    <TalentView
      state={state}
      changeHandler={handleChange}
      onNext={handleNext}
    />
  );
};

export default Talent;
Talent.propTypes = {
  onNext: propTypes.func.isRequired,
};
