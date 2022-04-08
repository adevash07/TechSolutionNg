import React from "react";
import "./exportCSVDropDownItem.scss";
import propTypes from "prop-types";
function ExportCSVDropDownItem({ label }) {
  return (
    <li className="exportCSVStatus">
      <input type="radio" name="export" className="exportRadio" />
      <span>{label}</span>
    </li>
  );
}

ExportCSVDropDownItem.propTypes = {
  label: propTypes.string,
};

export default ExportCSVDropDownItem;
