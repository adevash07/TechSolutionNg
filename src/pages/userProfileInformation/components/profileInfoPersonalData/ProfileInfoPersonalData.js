import React from "react";
import "./profileInfoPersonalData.scss";
import NameInfo from "./component/nameInfo";
import CareerTitle from "./component/careerTitle";
import LanguageFluency from "./component/langFluency";
import TalentLevel from "./component/talentLevel";
import Overview from "./component/overview";

const ProfileInfoPersonalData = () => {
  return (
    <div className="personalData">
      <div className="personalData__container personalData__containerFlex-c">
        <div className="personalData__containerFlex-r">
          <NameInfo />
          <CareerTitle />
        </div>

        <div className="personalData__containerFlex-r">
          <LanguageFluency />
          <TalentLevel />
        </div>

        <div className="background--dashed">
          <div className="personalData__containerFlex-c personalData--overview">
            <Overview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoPersonalData;
