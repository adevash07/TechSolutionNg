import React, { useState } from "react";
import EditIcon from "../../../editIcon";
import CancelIcon from "../../../cancelIcon";
import Button from "components/button/Button";
import "./talentLevel.scss";

const TalentLevel = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };
  if (!edit) {
    return (
      <div className="personalData__item  background--dashed">
        <span className="label--small">Talent level</span>
        <span>Expert</span>
        <span
          className="editIcon positionAbsolute--topRight"
          onClick={handleEdit}
        >
          <EditIcon size={15} />
        </span>
      </div>
    );
  } else {
    return (
      <div className="personalData__item--edit  background--dashed">
        <CancelIcon size={25} onClick={handleEdit} />
        <span className="label--small">Talent level</span>
        <form action="" className="editForm talentLevel__form">
          <div className="level">
            <input type="radio" name="talentLevel" className="level__input" />
            <label className="level__label">Beginner</label>
          </div>
          <div className="level">
            <input type="radio" name="talentLevel" className="level__input" />
            <label className="level__label">Intermediate</label>
          </div>
          <div className="level">
            <input type="radio" name="talentLevel" className="level__input" />
            <label className="level__label">Expert</label>
          </div>
        </form>
        <div className="editForm__btnSave">
          <Button btnText="Save" btnClass="customPadding" />
        </div>
      </div>
    );
  }
};

export default TalentLevel;
