import propTypes from "prop-types";
import { Button } from "components/index";
import PageHeader from "../components/pageHeader/PageHeader";
import { EducationInfo, Acomplishments, Awards } from "./components/index";
import "./educationView.scss";

const EducationView = ({ state, changeHandler, onNext, onBack }) => {
  return (
    <div className="education-view">
      <PageHeader title="Education" rightText="Skip for later" />
      <form onSubmit={onNext}>
        <EducationInfo data={state} onChange={changeHandler} />
        <Acomplishments data={state} onChange={changeHandler} />
        <Awards data={state} onChange={changeHandler} />

        <div className="action-btns">
          <Button
            btnText="Back"
            btnType="button"
            onClick={onBack}
            btnClass="grey"
          />
          <Button
            btnText="Next"
            btnType="submit"
            btnClass="medium"
            onClick={onNext}
          />
        </div>
      </form>
    </div>
  );
};

export default EducationView;
EducationView.propTypes = {
  state: propTypes.object,
  changeHandler: propTypes.func,
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
