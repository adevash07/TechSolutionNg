import { useState } from "react";
import propTypes from "prop-types";
import { PageHeader } from "pages/userProfile/components";
import { Button, ProgressIndicator, Input } from "components/index";
import "./profileLanguage.scss";
import { useHistory } from "react-router-dom";
import { PROFILE_PREVIEW_ROUTE } from "navigations/CONSTANTS";
import {
  RadioButton,
  RadioButtonGroup,
} from "components/radioButton/RadioButton";

const ProfileLanguage = ({ onBack }) => {
  const [state, setState] = useState({});
  const history = useHistory();
  const handlePreview = () => {
    history.push(PROFILE_PREVIEW_ROUTE);
  };
  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setState((state) => ({ ...state, [name]: value }));
  };
  return (
    <div className="profile-lang">
      <PageHeader title="Profile" rightText="Skip for later" />
      <section className="profile-lang__main">
        <div className="heading">
          <h4>You are almost done, please select language</h4>
          <ProgressIndicator components={2} activeComponent={2} />
        </div>
        <section>
          <form>
            <div className="form-group">
              <small>Select language</small>
              <Input dropdown={true} />
            </div>
            <small>Fluency level</small>
            <RadioButtonGroup
              customClass="flex-row"
              onChange={handleChange}
              value={state.level || null}
            >
              <RadioButton name="level" value="Low" labelText="Low" />
              <RadioButton
                name="level"
                value="Intermediate"
                labelText="Intermediate"
              />
              <RadioButton name="level" value="Fluent" labelText="Fluent" />
            </RadioButtonGroup>
          </form>
        </section>
        <div className="profile-lang__action-btns">
          <Button
            btnText="Back"
            btnType="button"
            btnClass="grey"
            onClick={onBack}
          />
          <Button
            btnText="Preview profle"
            btnType="button"
            btnClass="medium"
            onClick={handlePreview}
          />
        </div>
      </section>
    </div>
  );
};

export default ProfileLanguage;
ProfileLanguage.propTypes = {
  onNext: propTypes.func,
  onBack: propTypes.func,
};
