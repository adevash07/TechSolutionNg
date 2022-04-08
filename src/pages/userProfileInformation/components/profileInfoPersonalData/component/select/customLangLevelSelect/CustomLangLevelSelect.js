import React from "react";
import "../select.scss";
import { BsFillCaretDownFill } from "react-icons/bs";

const CustomLangLevelSelect = () => {
  const levels = ["Fluent", "Non-fluent"];

  return (
    <div className="customSelect">
      <select className="customSelect__input">
        {levels.map((level, index) => (
          <option key={index} value={level}>
            {level}
          </option>
        ))}
      </select>
      <div className="customSelect__arrowDown">
        <BsFillCaretDownFill />
      </div>
    </div>
  );
};

export default CustomLangLevelSelect;
