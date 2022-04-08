import { useState } from "react";
import CongratsModal from "./components/congratsModal/CongratsModal";
import { Button } from "components/index";
import Header from "layouts/header/Header";
import { PageHeader } from "../components/index";
import {
  Certification,
  ProfileAward,
  ProfileEducation,
  ProfileEmployment,
  ProfileInfo,
  ProfileOverView,
  Skills,
  TalentLevel,
  VideoDescription,
} from "./components/index";
import "./profilePreviewView.scss";
import { useHistory } from "react-router-dom";
import { DASHBOARD_ROUTE } from "navigations/CONSTANTS";
import assets from "assets";

const ProfilePreviewView = () => {
  const [showCongrats, setShowCongrats] = useState(false);
  const history = useHistory();

  const handleShowCongrats = () => {
    setShowCongrats(true);
  };
  const handleCloseCongrats = () => {
    setShowCongrats(false);
    history.push(DASHBOARD_ROUTE);
  };
  return (
    <div className="profile-preview">
      <header>
        <Header />
      </header>
      <main className="profile-preview__main">
        <PageHeader title="Profile Preview" />
        <ProfileInfo />
        <Skills />
        <TalentLevel />
        <div className="video-ctn">
          <small>Your video description</small>
          <VideoDescription />
        </div>

        <ProfileOverView />
        <div className="sub-heading">
          <h3 className="heading">Education {"&"} Acomplishment</h3>
          <img src={assets.Triangle_flat} alt="triangle" />
        </div>

        <ProfileEducation />
        <Certification />
        <ProfileAward />
        <div className="sub-heading">
          <h3 className="heading">Employment</h3>
          <img src={assets.Triangle_flat} alt="triangle" />
        </div>

        <ProfileEmployment />
        <div className="action-btns">
          <Button
            btnClass="medium"
            btnText="Submit profile"
            onClick={handleShowCongrats}
          />
        </div>
      </main>
      {showCongrats && (
        <CongratsModal
          visible={showCongrats}
          title="Congratulations!"
          message="You have now submitted your profile, please check your mail for further updates"
          closeHandler={handleCloseCongrats}
        />
      )}
    </div>
  );
};
export default ProfilePreviewView;
