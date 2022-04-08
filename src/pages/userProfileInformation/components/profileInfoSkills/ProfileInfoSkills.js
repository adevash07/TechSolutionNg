import React, { useState } from "react";
import EditIcon from "../editIcon";
import CancelIcon from "../cancelIcon";
import CancelIconSmall from "../cancelIconSmall";
import "./profileInfoSkills.scss";
import "./profileInfoEditSkills.scss";
import Button from "components/button/Button";

const ProfileInfoSkills = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  if (!edit) {
    return (
      <div className="skills background--dashed">
        <span className="label--small">Your skills</span>
        <ul className="skills__list">
          <li className="skills__list--item">Ui/Ux Design</li>
          <li className="skills__list--item">React JS</li>
          <li className="skills__list--item">Frontend Development</li>
          <li className="skills__list--item">Web Design</li>
          <li className="skills__list--item">Hosting</li>
          <li className="skills__list--item">CSS</li>
        </ul>
        <span
          className="editIcon positionAbsolute--topRight"
          onClick={handleEdit}
        >
          <EditIcon size={20} />
        </span>
      </div>
    );
  } else {
    return (
      <div className="editSkills background--dashed">
        <span className="label--small">Your skills</span>
        <CancelIcon onClick={handleEdit} size={30} />
        <ul className="editSkills__list">
          <li className="editSkills__list__item">
            <span className="editSkills__item__name">Ui/Ux Design</span>
            <CancelIconSmall size={20} />
          </li>
          <li className="editSkills__list__item">
            <span className="editSkills__item__name">React JS</span>
            <CancelIconSmall size={20} />
          </li>
          <li className="editSkills__list__item">
            <span className="editSkills__item__name">Frontend Development</span>
            <CancelIconSmall size={20} />
          </li>
          <li className="editSkills__list__item">
            <span className="editSkills__item__name">Web Design</span>
            <CancelIconSmall size={20} />
          </li>
          <li className="editSkills__list__item">
            <span className="editSkills__item__name">Hosting</span>
            <CancelIconSmall size={20} />
          </li>
          <li className="editSkills__list__item">
            <span className="editSkills__item__name">CSS</span>
            <CancelIconSmall size={20} />
          </li>
          <li className="editSkills__list__item moreSkills">
            <input
              type="text"
              className="moreSkills__inputField"
              placeholder="Enter more skills"
            />
          </li>
        </ul>
        <div className="saveSkills saveSkills--absolutePositioned">
          <Button btnText="Save" btnClass="customPadding" />
        </div>
      </div>
    );
  }
};

export default ProfileInfoSkills;
