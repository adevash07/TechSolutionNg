import React from "react";
import "./dropdown.scss";
import propTypes from "prop-types";
import Input from "components/input/Input";

const Dropdown = ({ dropdownName, dropdownOptions }) => {
  return (
    <div className="dropdown">
      <span className="dropdown__text">Sort by</span>
      <Input
        dropdown={true}
        selectName={dropdownName}
        selectId={dropdownName}
        optionArray={dropdownOptions}
      />
    </div>
  );
};

Dropdown.propTypes = {
  dropdownName: propTypes.string,
  dropdownOptions: propTypes.array,
};

export default Dropdown;
