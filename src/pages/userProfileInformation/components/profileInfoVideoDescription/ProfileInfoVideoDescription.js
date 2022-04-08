import React, { useState } from "react";
import EditIcon from "../editIcon";
import { ReactComponent as Rings } from "assets/svgs/rings.svg";
import VideoPoster from "./image/freelancer_poster_image.jpg";
import { ReactComponent as RoundedPlayButton } from "assets/svgs/roundedPlayButton.svg";
import CancelIcon from "../cancelIcon";
import Button from "components/button/Button";
import "./profileInfoVideoDescription.scss";

const ProfileInfoVideoDescription = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  if (!edit) {
    return (
      <div className="videoDescription  background--dashed">
        <span className="label--small">Your video description</span>
        <div className="videoDescription__container">
          <div className="player">
            <video controls={false} poster={VideoPoster}></video>
            <div className="controls">
              <div className="controls__container">
                <div className="button--play">
                  <RoundedPlayButton />
                </div>
              </div>
            </div>
          </div>

          <span
            className="editIcon positionAbsolute--topRight"
            onClick={handleEdit}
          >
            <EditIcon size={15} />
          </span>
          <span className="positionAbsolute--bottomRight">
            <Rings />
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="videoDescription  background--dashed">
        <span className="label--small">Your video description</span>
        <CancelIcon size={25} onClick={handleEdit} />
        <div className="videoDescription__container">
          <div className="player">
            <video
              controls={false}
              poster={VideoPoster}
              className="video__app"
            ></video>
            <div className="controls">
              <div className="controls__container">
                <div className="button--play">
                  <RoundedPlayButton />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="videoDescription__cta">
          <input type="button" value="Change video" />
          <input type="button" value="Delete video" />
        </div>
        <div className="editForm__btnSave">
          <Button btnText="Save" btnClass="customPadding" />
        </div>
      </div>
    );
  }
};

export default ProfileInfoVideoDescription;
