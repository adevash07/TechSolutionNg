import React from "react";
import { FaPen } from "react-icons/fa";
import "./editIcon.scss";
import propTypes from "prop-types";

const EditIcon = ({ size }) => {
  return (
    <>
      <FaPen size={size} />
    </>
  );
};

EditIcon.propTypes = {
  size: propTypes.number,
};
export default EditIcon;
