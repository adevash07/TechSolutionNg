import propTypes from "prop-types";
import { useReactiveVar } from "@apollo/client";
import { profileVar } from "../graphql/reactiveVariables";
import ProfileView from "./ProfileView";

const Profile = ({ onNext, onBack }) => {
  const state = useReactiveVar(profileVar);

  const handleNext = (e) => {
    e.preventDefault();

    onNext();
  };
  const handleChange = (name, value) => {
    profileVar({ ...profileVar(), [name]: value });
  };
  return (
    <ProfileView
      state={state}
      changeHandler={handleChange}
      onNext={handleNext}
      onBack={onBack}
    />
  );
};

export default Profile;
Profile.propTypes = {
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
