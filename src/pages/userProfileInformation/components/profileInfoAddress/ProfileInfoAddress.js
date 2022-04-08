import React from "react";
import EditIcon from "../editIcon";
import "./profileInfoAddress.scss";

const ProfileInfoAddress = () => {
  return (
    <div className="address background--dashed">
      <span className="label--small">Address</span>
      <address>
        <b>15 Belle-Terre, Vacoas-Phoenix, Mauritius</b>
      </address>
      <span className="editIcon positionAbsolute--topRight">
        <EditIcon size={15} />
      </span>
    </div>
  );
};

export default ProfileInfoAddress;
