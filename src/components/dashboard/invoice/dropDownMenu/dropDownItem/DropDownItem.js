import React from "react";
import "./dropDownItem.scss";
import { BsCaretRightFill } from "react-icons/bs";
import propTypes from "prop-types";
function DropDownItem({ category, sortOne, sortTwo, icon, hasArrow }) {
  return (
    <>
      {icon ? (
        <>
          <span className="category">{category}</span>
          <span className="icon">{icon}</span>
          {hasArrow ? (
            <span className="icon-1">
              <BsCaretRightFill />
            </span>
          ) : null}
        </>
      ) : (
        <>
          <li>{category}</li>
          <li>
            <input
              type="radio"
              value={sortOne}
              name="filter"
              id={sortOne.split(" ").join("-")}
            />
            <label htmlFor={sortOne.split(" ").join("-")}>{sortOne}</label>
          </li>
          <li>
            <input
              type="radio"
              value={sortTwo}
              name="filter"
              id={sortTwo.split(" ").join("-")}
            />
            <label htmlFor={sortTwo.split(" ").join("-")}>{sortTwo}</label>
          </li>
        </>
      )}
    </>
  );
}

DropDownItem.propTypes = {
  category: propTypes.string,
  sortOne: propTypes.string,
  sortTwo: propTypes.string,
  icon: propTypes.any,
  hasArrow: propTypes.bool,
};
export default DropDownItem;
