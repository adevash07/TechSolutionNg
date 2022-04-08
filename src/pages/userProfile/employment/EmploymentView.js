import propTypes from "prop-types";
import { Button } from "components/index";
import PageHeader from "../components/pageHeader/PageHeader";
import { EmploymentDetails } from "./components/index";
import "./employmentView.scss";

const EmploymentView = ({ state, changeHandler, onNext, onBack }) => {
  return (
    <div className="employment-view">
      <PageHeader title="Employment" rightText="Skip for later" />
      <form onSubmit={onNext}>
        <EmploymentDetails data={state} onChange={changeHandler} />
        <div className="action-btns">
          
          <Button
            btnText="Back"
            btnType="button"
            onClick={onBack}
            btnClass="grey"
          />
          <Button btnText="Next" btnType="submit" btnClass="medium" onClick={onNext} />
        </div>
      </form>
    </div>
  );
};

export default EmploymentView;
EmploymentView.propTypes = {
  state: propTypes.object,
  changeHandler: propTypes.func,
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
