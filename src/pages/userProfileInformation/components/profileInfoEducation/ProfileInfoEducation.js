import React from "react";
import EditIcon from "../editIcon";
import { ReactComponent as Rings } from "assets/svgs/rings.svg";
import "./profileInfoEducation.scss";
import AddIcon from "../addIcon";

const ProfileInfoEducation = () => {
  return (
    <div className="education background--dashed">
      <header className="education__header">
        <h1 className="header--title">Your education</h1>
        <span className="label--small">
          Information on all your education undergone
        </span>
      </header>
      <div className="educationInformation">
        <div className="educationInformation--logo">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.t2qcf3j_o-HhS1QQypOTbQHaGs&pid=Api&P=0&w=202&h=183"
            alt="employerLogo"
          />
        </div>
        <div className="educationInformation__details">
          <span>Physics &amp; Eletronics</span>
          <span className="eductaionInformation__university label--medium">
            <span>University of Calabar</span>

            <span className="eductaionInformation__date">June 2018</span>
          </span>

          <div className="positionAbsolute--topRight moreActions">
            <span className="addIcon hasMarginBottom">
              <AddIcon size={30} />
            </span>
            <span className="editIcon">
              <EditIcon size={15} />
            </span>
            <span className="ringsPositionBottom">
              <Rings />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoEducation;
