import React, { useState } from "react";
import { FiUpload } from "react-icons/fi";
import propTypes from "prop-types";
// import TriangleIcon from "../triangleIcon/TriangleIcon";
import Calendar from "react-calendar";
import { ReactComponent as Cloud } from "assets/svgs/makeAnOffer/cloud-computing.svg";
import triangleIcon from "assets/svgs/triangle.svg";
import moment from "moment";
import "react-calendar/dist/Calendar.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import "./input.scss";

const Input = ({
  dropdown,
  labelText,
  inputType,
  inputPlaceholder,
  inputName,
  inputId,
  optionArray,
  value,
  onChange,
  onFocus,
  onSelect,
  onBlur,
  isRequired = false,
  rows,
  cols,
  maxLength = 500,
  customCheckBox,
  triangle,
  currentDate,
}) => {
  const [select, setSelect] = useState(false);
  // const [selectValue, setSelectValue] = useState("Oldest");
  const [chars, setChars] = useState(value || "");
  const [date, setdate] = useState();

  const changeDate = (e) => {
    setdate(e);
    toggleSelect();
    console.log("changeDate");
  };

  const toggleSelect = () => {
    setSelect(!select);
  };

  const handleSelectValue = (e) => {
    onSelect(e);
    toggleSelect();
  };

  // const toggleBlur = () => {
  //   if (select) {
  //     setSelect(false);
  //   } else {
  //     setSelect(false);
  //   }
  // };
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    if (onFocus) {
      onFocus(e);
    }

    setChars(e.target.value);
  };
  const getCharsLength = () => chars.length;

  let selectOptions;
  if (optionArray) {
    selectOptions = optionArray.map((option) => {
      return (
        <span
          key={option.id}
          className={`${inputName} formgroup__option`}
          // onClick={onSelect}
          onClick={handleSelectValue}
          // className="formgroup__option"
        >
          {option.value}
        </span>
      );
    });
  }

  let sortSpans = document.querySelectorAll(".formgroup__option");

  for (let i = 0; i < sortSpans.length; i++) {
    if (sortSpans[i].innerHTML == value) {
      sortSpans[i].classList.add("active");
    } else {
      sortSpans[i].classList.remove("active");
    }
  }

  // useLayoutEffect(() => {
  //   toggleSelect();
  // }, [date]);

  return (
    <>
      {dropdown ? (
        <div
          className={
            select ? "formgroup select transparent" : "formgroup select"
          }
        >
          <input
            type="text"
            placeholder={inputPlaceholder}
            name={inputName}
            id={inputId}
            value={value}
            onClick={toggleSelect}
            disabled
          />
          <div
            className="formgroup__transparentBg"
            onClick={toggleSelect}
          ></div>
          <div
            className={
              select
                ? "formgroup__selectOptions active"
                : "formgroup__selectOptions"
            }
          >
            {selectOptions}
          </div>
          <img
            src={triangleIcon}
            className={select ? "triangleicon rotate" : "triangleicon"}
            alt=""
          />
          {/* <TriangleIcon toggleSelect={toggleSelect} select={select} /> */}
        </div>
      ) : inputType === "file" ? (
        <div className="formgroup">
          <label className="formgroup--label" htmlFor={inputId}>
            {labelText}
          </label>
          <input
            className="formgroup--input"
            type={inputType}
            placeholder={inputPlaceholder}
            name={inputName}
            id={inputId}
          />
          <FiUpload />
        </div>
      ) : inputType === "customFile" ? (
        <div className="formgroup customFile">
          <div className="formgroup--labelText">{labelText}</div>
          <label className="formgroup--label" htmlFor={inputId}>
            <div className="formgroup--fileGroup">
              <span className="formgroup--fileText">
                <Cloud />
                Drag your files here or{" "}
                <span className="formGroup--fileUnderline">Browse files</span>
              </span>
            </div>
            <input
              name={inputName}
              id={inputId}
              className="formgroup--input"
              type="file"
            />
          </label>
        </div>
      ) : inputType === "checkbox" ? (
        <div className="formgroup check">
          <input
            className="formgroup--input"
            type={inputType}
            name={inputName}
            id={inputId}
            checked={value || false}
            onChange={handleChange}
            required={isRequired}
          />
          <label className="formgroup--label" htmlFor={inputId}>
            {labelText}
          </label>
        </div>
      ) : inputType === "textArea" ? (
        <div className="formgroup">
          <label htmlFor={inputId} className="formgroup--label">
            {labelText}
          </label>
          <textarea
            className="formgroup--input formgroup--input--textarea"
            onChange={handleChange}
            name={inputName}
            value={value}
            placeholder={inputPlaceholder}
            required={isRequired}
            rows={rows || 6}
            cols={cols || 20}
            maxLength={maxLength}
          ></textarea>
          <small className="counter-label">
            {getCharsLength()} out of {maxLength}{" "}
          </small>
        </div>
      ) : inputType === "checkboxCustom" ? (
        <div className={`formgroup check ${customCheckBox ? "custom" : " "}`}>
          <label className="formgroup--label" htmlFor={inputId}>
            {labelText}
          </label>
          <input
            className={`formgroup--input ${customCheckBox ? "custom" : " "}`}
            type="checkbox"
            name={inputName}
            id={inputId}
            checked={value || false}
            onChange={handleChange}
            required={isRequired}
          />
        </div>
      ) : inputType === "toggler" ? (
        <div className="toggler">
          <label className="toggler__Switch" htmlFor={inputId}>
            <input
              className="toggler__Input"
              type="checkbox"
              name={inputName}
              id={inputId}
              checked={value || false}
              onChange={handleChange}
              required={isRequired}
            />
            <div className="toggler__Slide"></div>
          </label>
        </div>
      ) : inputType === "date" ? (
        <div
          className={
            select ? "formgroup select transparent" : "formgroup select"
          }
        >
          <input
            className="formgroup--input"
            name={inputName}
            type="text"
            value={
              date === currentDate
                ? inputPlaceholder
                : moment(date).format("DD/MM/YYYY")
            }
            id={inputId}
            onFocus={(e) => {
              handleChange(e);
              toggleSelect();
            }}
            required={isRequired}
          ></input>

          {triangle ? (
            <img
              onClick={toggleSelect}
              src={triangleIcon}
              className={select ? "triangleicon rotate" : "triangleicon"}
              alt=""
            />
          ) : (
            // <TriangleIcon toggleSelect={toggleSelect} select={select} />
            " "
          )}

          {select ? (
            <div
              // onBlur={() => {
              //   toggleSelect();
              //   console.log("blur");

              //               }
              //               }
              className="startCal"
            >
              <Calendar
                className="Calender"
                onClickDay={changeDate}
                name="Calender"
              />
            </div>
          ) : (
            " "
          )}
        </div>
      ) : inputType === "password" ? (
        <div className="formgroup">
          <label className="formgroup--label" htmlFor={inputId}>
            {labelText}
          </label>
          <input
            className="formgroup--input"
            type={select ? "text" : inputType}
            placeholder={inputPlaceholder}
            name={inputName}
            value={value || ""}
            id={inputId}
            onFocus={onFocus}
            onBlur={() => {
              onBlur();
              setSelect(false);
            }}
            onChange={handleChange}
            maxLength={maxLength}
            required={isRequired}
          />
          {select ? (
            <label
              htmlFor={inputId}
              className="passwordEye"
              onClick={toggleSelect}
            >
              <BsEyeFill />
            </label>
          ) : (
            <label
              htmlFor={inputId}
              className="passwordEye"
              onClick={toggleSelect}
            >
              <BsEyeSlashFill id="passwordEye" />
            </label>
          )}
        </div>
      ) : (
        <div className="formgroup">
          <label className="formgroup--label" htmlFor={inputId}>
            {labelText}
          </label>
          <input
            className="formgroup--input"
            type={inputType}
            placeholder={inputPlaceholder}
            name={inputName}
            value={value || ""}
            id={inputId}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={handleChange}
            maxLength={maxLength}
            required={isRequired}
          />
        </div>
      )}
    </>
  );
};

Input.propTypes = {
  dropdown: propTypes.any,
  labelText: propTypes.string,
  inputType: propTypes.string,
  inputName: propTypes.string,
  inputPlaceholder: propTypes.string,
  inputId: propTypes.string,
  selectId: propTypes.string,
  optionArray: propTypes.any,
  selectName: propTypes.string,
  value: propTypes.any,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onSelect: propTypes.func,
  onBlur: propTypes.func,
  isRequired: propTypes.bool,
  rows: propTypes.number,
  cols: propTypes.number,
  maxLength: propTypes.number,
  customCheckBox: propTypes.bool,
  triangle: propTypes.bool,
  currentDate: propTypes.any,
};

export default Input;
