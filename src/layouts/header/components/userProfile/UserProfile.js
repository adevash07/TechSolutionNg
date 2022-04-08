import React from "react";
import "./userProfile.scss";
import propTypes from "prop-types";
import headerPic from "assets/images/headerIcon.png";

const UserProfile = ({ headerIconImg }) => {
  return (
    <div className="headerIcon">
      <img src={headerIconImg ? headerIconImg : headerPic} alt="" />
    </div>
  );
};

UserProfile.propTypes = {
  headerIconImg: propTypes.any,
};

export default UserProfile;
