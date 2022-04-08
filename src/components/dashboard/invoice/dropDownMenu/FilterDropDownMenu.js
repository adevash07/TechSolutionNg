import React from "react";
import Search from "../search/Search";
import DropDownItem from "./dropDownItem/DropDownItem";
import propTypes from "prop-types";

import "./filterDropDownMenu.scss";

function FilterDropDownMenu({ search }) {
  return (
    <aside className="dropDown">
      {search ? (
        <ul>
          <Search placeholder="Search Transactions" />
        </ul>
      ) : null}
      <ul>
        <DropDownItem sortOne="Old" sortTwo="New" category="Period" />
      </ul>

      <ul>
        <DropDownItem
          sortOne="Low to High"
          sortTwo="High to low"
          category="Amount"
        />
      </ul>

      <ul>
        <DropDownItem sortOne="0 to 10" sortTwo="30" category="No. in page" />
      </ul>
    </aside>
  );
}

FilterDropDownMenu.propTypes = {
  search: propTypes.string,
};

export default FilterDropDownMenu;
