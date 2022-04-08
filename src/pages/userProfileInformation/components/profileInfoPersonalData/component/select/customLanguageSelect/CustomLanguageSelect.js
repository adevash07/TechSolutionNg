import React from "react";
import "../select.scss";
import { BsFillCaretDownFill } from "react-icons/bs";
const CustomLanguageSelect = () => {
  const languages = [
    "English",
    "Spanish",
    "French",
    "Italian",
    "Hindi",
    "Arabic",
    "Chinese",
    "Portugese",
    "German",
  ];

  return (
    <div className="customSelect">
      <select className="customSelect__input">
        {languages.map((language, index) => (
          <option key={index}>{language}</option>
        ))}
      </select>
      <div className="customSelect__arrowDown">
        <BsFillCaretDownFill />
      </div>
    </div>
  );
};

export default CustomLanguageSelect;
