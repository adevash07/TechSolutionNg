import React from "react";
import { Link } from "react-router-dom";
import "./icons.scss";
import propTypes from "prop-types";

const Icons = ({ iconlinks, icons }) => {
  return (
    <div>
      <Link to={iconlinks}>
        <div className="socilaicon">{icons}</div>
      </Link>
    </div>
  );
};
Icons.propTypes = {
  iconlinks: propTypes.string,
  icons: propTypes.any,
};
export default Icons;
