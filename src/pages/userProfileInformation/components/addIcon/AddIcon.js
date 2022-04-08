import React from "react";
import { IoAddSharp } from "react-icons/io5";
import "./addIcon.scss";
import propTypes from "prop-types";

const AddIcon = ({ size }) => {
  return (
    <>
      <IoAddSharp size={size} />
    </>
  );
};

AddIcon.propTypes = {
  size: propTypes.number,
};
export default AddIcon;
