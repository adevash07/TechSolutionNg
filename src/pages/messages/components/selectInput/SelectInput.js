import { useState } from "react";
import propTypes from "prop-types";
import "./selectInput.scss";
import TriangleIcon from "components/triangleIcon/TriangleIcon";

const defaultOPtions = ["Test", "Option", "Select"];
const SelectInput = ({
  placeHolder = "Select",
  selectCustomClass,
  labelText,
  labelCustomClass,
  value,
  handleChange,
  name,
  data,
  isRequired,
  customWrapperClass
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [options] = useState(data || defaultOPtions);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedption] = useState(value || "");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSelectedption(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(true);
  };
  const handSelect = (value) => {
    setSelectedption(value);
    setIsFocused(false);

    
    if (handleChange) {
      handleChange(name, value);
    }
  };
  const toggleFocus = () => {
    setIsFocused(!isFocused)
  }
  return (
    <div className="select-container">
      <div className={`input-wrapper formgroup--input ${customWrapperClass}`}>
      <label className={` formgroup--label ${labelCustomClass}`}>
          {labelText}
        </label>
        <div className="input-icon">
          <input
            autoComplete="off"
            autoCorrect="off"
            className={`input-text ${selectCustomClass}`}
            onChange={handleSearch}
            placeholder={placeHolder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={selectedOption}
            required={isRequired}
          />
          <div className="icon">
          <TriangleIcon toggleSelect={toggleFocus} select={isFocused} />
          </div>
          
        </div>

        {isFocused ? (
          <ul className="select-list">
            {options
              .filter((option) =>
                String(option)
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase() || "")
              )
              .map((option) => (
                <li
                  className={`select-option ${
                    selectedOption == option && "is-selected"
                  } `}
                  key={option}
                  onClick={() => handSelect(option)}
                >
                  {option}
                </li>
              ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default SelectInput;

SelectInput.propTypes = {
  placeHolder: propTypes.string,
  selectCustomClass: propTypes.string,
  labelText: propTypes.string,
  labelCustomClass: propTypes.string,
  value: propTypes.any,
  handleChange: propTypes.func,
  data: propTypes.array,
  isRequired: propTypes.bool,
  name: propTypes.string.isRequired,
  customWrapperClass: propTypes.string,
};
