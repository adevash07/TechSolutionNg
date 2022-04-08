import React from "react";
import "./editButton.scss";
import { FaPen } from "react-icons/fa";
import { IconContext } from "react-icons";

const EditButton = () => {
  return (
    <div className="editButton">
      <button type="button" className="button__roundedBorder">
        <IconContext.Provider
          value={{ className: "button__roundedBorder__icon" }}
        >
          <FaPen />
        </IconContext.Provider>
        <span className="button__roundedBorder__text">Edit header</span>
      </button>
    </div>
  );
};

export default EditButton;
