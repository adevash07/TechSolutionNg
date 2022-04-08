import {
  RadioButton,
  RadioButtonGroup,
} from "components/radioButton/RadioButton";
import React, { useState } from "react";
import "./filterDropDownMenu.scss";

function FilterDropDownMenu() {
  const [state, setState] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((state) => ({ ...state, [name]: value }));
  };
  return (
    <div className="filter-menu">
      <div className="menu-content">
        <div className="filter-option">
          <small>Period</small>
          <RadioButtonGroup
            onChange={handleChange}
            customClass="acc-type-group"
          >
            <RadioButton
              name="period"
              value={state.MostRecent || false}
              labelText="Most recent"
            />
            <RadioButton
              name="period"
              //value={state.MostRelevent"
              labelText="Most relevant"
            />
          </RadioButtonGroup>
        </div>
        <div className="filter-option">
          <small>Show</small>
          <RadioButtonGroup
            onChange={handleChange}
            customClass="acc-type-group"
          >
            <RadioButton name="show" value="0 to 10" labelText="0 to 10" />
            <RadioButton name="show" value="10 to 30" labelText="10 to 30" />
            <RadioButton name="show" value="30 to end" labelText="30 to end" />
          </RadioButtonGroup>
        </div>
        <div className="action-btns">
          <span>Apply</span>
          <span>Cancel</span>
        </div>
      </div>
    </div>
  );
}

export default FilterDropDownMenu;
