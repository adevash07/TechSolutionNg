import React from "react";
import microsoftImage from "assets/images/microsoft.png";
import LabelInitials from "../labelInitials";
import "./profileInfoServiceCategory.scss";
import ShowAll from "../showAll";

const ProfileInfoServiceCategory = () => {
  return (
    <div className="serviceCategory background--dashed">
      <header className="serviceCategory__header">
        <h1 className="header--title">Your service category</h1>
        <span className="label--small">Your service category details</span>
      </header>
      <div className="serviceCategory__info">
        <div className="info--textDefined">
          <LabelInitials />
          <div className="stackedData">
            <span>User Interface Design (UI)</span>
            <span className="label--small">30, 000 members</span>
          </div>
        </div>
        <div className="info--imgDefined">
          <span>
            <img src={microsoftImage} alt="microsoftIcon" />
          </span>
          <div className="stackedData">
            <span>Microsoft</span>
            <span className="label--small">15, 000 members</span>
          </div>
        </div>
      </div>
      <ShowAll />
    </div>
  );
};

export default ProfileInfoServiceCategory;
