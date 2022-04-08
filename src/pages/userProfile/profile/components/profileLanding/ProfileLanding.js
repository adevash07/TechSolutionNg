import propTypes from "prop-types";
import { PageHeader } from "pages/userProfile/components";
import { Button, ProgressIndicator } from "components/index";
import "./profileLanding.scss";
import ProfileComponent from "../profileComponent/ProfileComponent";

const ProfileLanding = ({ onNext, onBack }) => {
  return (
    <div className="profile-landing">
      <PageHeader title="Profile" rightText="Skip for later" />
      <section className="main">
        <div className="heading">
          <h4>Hey David, adding a photo helps people recorgnise you</h4>
          <ProgressIndicator components={2} activeComponent={1} />
        </div>
        <ProfileComponent url="" />
        <div className="action-btns">
          <Button
            btnText="Add a picture"
            btnType="button"
            btnClass="medium"
            onClick={onNext}
          />
        </div>
      </section>
      <div className="actions">
        <Button
          btnText="Back"
          btnType="button"
          btnClass="grey"
          onClick={onBack}
        />
      </div>
    </div>
  );
};

export default ProfileLanding;
ProfileLanding.propTypes = {
  onNext: propTypes.func,
  onBack: propTypes.func,
};
