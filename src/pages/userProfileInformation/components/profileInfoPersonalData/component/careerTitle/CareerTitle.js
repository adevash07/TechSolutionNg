import React, { useState } from "react";
import EditIcon from "../../../editIcon";
import CancelIcon from "../../../cancelIcon";
import Button from "components/button/Button";
import "./careerTitle.scss";
const CareerTitle = () => {
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
  };

  if (edit === false) {
    return (
      <div className="personalData__item  background--dashed">
        <span className="label--small">Title</span>
        <span>Product Designer</span>
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
        <span className="label--small">Title</span>
        <form action="" className="editForm">
          <div className="editForm__item w-long">
            <input
              type="text"
              name="first name"
              value="Product Designer"
              className="newInput__skillTitle"
            />
          </div>
          <div className="editForm__btnSave">
            <Button btnText="Save" btnClass="customPadding" />
          </div>
        </form>
      </div>
    );
  }
};

export default CareerTitle;
