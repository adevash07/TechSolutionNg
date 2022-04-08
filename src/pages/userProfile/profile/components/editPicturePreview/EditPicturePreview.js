import propTypes from "prop-types";
import { PageHeader } from "pages/userProfile/components";
import { Button, ProgressIndicator } from "components/index";
import "./editPicturePreview.scss";
import ProfileComponent from "../profileComponent/ProfileComponent";
import assets from "assets";

const ProfileLanding = ({ onNext, onBack }) => {
  return (
    <div className="picture-preview">
      <PageHeader title="Profile" rightText="Skip for later" />
      <section className="picture-preview__main">
        <div className="heading">
          <h4>Hey David, adding a photo helps people recorgnise you</h4>
          <ProgressIndicator components={2} activeComponent={1} />
        </div>
        <ProfileComponent url={assets.User} editHandler={onBack} />
        <div className="picture-preview__action-btns">
        <Button
          btnText="Save"
          btnType="button"
          btnClass="medium"
          onClick={onNext}
        />
      </div>
      </section>
      
    </div>
  );
};

export default ProfileLanding;
ProfileLanding.propTypes = {
  onNext: propTypes.func,
  onBack: propTypes.func,
};
