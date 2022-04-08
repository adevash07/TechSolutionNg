import React, { useState } from "react";
import EditIcon from "../../../editIcon";
import Button from "components/button/Button";
import "./nameInfo.scss";
import CancelIcon from "../../../cancelIcon";
const NameInfo = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };
  if (edit === false) {
    return (
      <>
        <div className="personalData__item  background--dashed">
          <span className="label--small">Full Name</span>
          <span>David Mark</span>
          <span
            className="editIcon positionAbsolute--topRight"
            onClick={handleEdit}
          >
            <EditIcon size={15} />
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="personalData__item--edit background--dashed">
          <CancelIcon size={25} onClick={handleEdit} />
          <form action="" className="editForm">
            <div className="editForm__item">
              <label>First name</label>
              <input type="text" name="first name" value="David" />
            </div>
            <div className="editForm__item">
              <label>Last name</label>
              <input type="text" name="last name" value="Mark" />
            </div>
            <div className="editForm__btnSave">
              <Button btnText="Save" btnClass="customPadding" />
            </div>
          </form>
        </div>
      </>
    );
  }
};

export default NameInfo;
