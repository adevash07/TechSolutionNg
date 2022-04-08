import React from "react";
import propTypes from "prop-types";
import "./filter.scss";

function Filter(props) {
  return <div className="filter">{props.children}</div>;
}

Filter.propTypes = {
  children: propTypes.any,
};

export default Filter;
