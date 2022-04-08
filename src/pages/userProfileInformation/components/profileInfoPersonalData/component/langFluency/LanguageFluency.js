import React, { useState } from "react";
import EditIcon from "../../../editIcon";
import CancelIcon from "../../../cancelIcon";
import Button from "components/button/Button";
import CustomLanguageSelect from "../select/customLanguageSelect";
import CustomLangLevelSelect from "../select/customLangLevelSelect";
import "./languageFluency.scss";

const LanguageFluency = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  if (!edit) {
    return (
      <div className="personalData__item  background--dashed">
        <span className="label--small">Language &amp; Fluency level</span>
        <span className="language__proficiency">
          <span>English</span>
          <span>Fluent</span>
        </span>
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
      <div className="personalData__item--edit background--dashed">
        <CancelIcon size={25} onClick={handleEdit} />
        <form action="" className="editForm">
          <div className="select__language editForm__item">
            <label>Language</label>
            <CustomLanguageSelect />
          </div>
          <div className="select__fluency  editForm__item">
            <label>Level</label>
            <CustomLangLevelSelect />
          </div>
          <div className="editForm__btnSave">
            <Button btnText="Save" btnClass="customPadding" />
          </div>
        </form>
      </div>
    );
  }
};

export default LanguageFluency;
