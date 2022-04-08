import React from "react";
import "./customCheckBox.scss";

const CustomCheckBox = () => {
  return (
    <span>
      <input
        type="checkbox"
        name="talent"
        id="talent"
        className="customCheckBox"
      />
    </span>
  );
};

export default CustomCheckBox;
