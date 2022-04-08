import React from "react";
import { Input } from "components/index";
import propTypes from "prop-types";
import "./sort.scss";

const Sort = ({ sortName, sortValue, onSelect, sortDropdown }) => {
  return (
    <div className="sortComponent">
      <span className="sortComponent__span">Sort by</span>
      <Input
        dropdown={true}
        inputName={sortName}
        value={sortValue}
        onSelect={onSelect}
        optionArray={sortDropdown}
      />
    </div>
  );
};

Sort.propTypes = {
  sortName: propTypes.string,
  onSelect: propTypes.func,
  sortValue: propTypes.string,
  sortDropdown: propTypes.array,
};

export default Sort;
