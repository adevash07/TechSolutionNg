import React from "react";
import propTypes from "prop-types";
import "./submenuLink.scss";
import { Link } from "react-router-dom";

const SubmenuLink = ({
  submenuHeader,
  submenuLink,
  submenuIcon,
  submenuText,
  submenuNotification,
}) => {
  return (
    <li className="submenuLink">
      <Link to={submenuLink}>
        {submenuNotification ? (
          <div className="child1">
            {/* //   {submenuIcon && ( */}
            <div className="submenu--icon">{submenuIcon}</div>
            <span className="submenu__numberBadge">{submenuNotification}</span>
            {/* // )} */}
            <div className="submenu--info">
              <h5>{submenuHeader}</h5>
              <p>{submenuText}</p>
            </div>
          </div>
        ) : (
          <div className="child1">
            {/* {submenuIcon && ( */}
            <div className="submenu--icon">{submenuIcon}</div>
            {/* // )} */}
            {/* <div className="submenu--icon">{submenuIcon}</div> */}
            <div className="submenu--info">
              <h5>{submenuHeader}</h5>
              <p>{submenuText}</p>
            </div>
          </div>
        )}
      </Link>
    </li>
  );
};

SubmenuLink.propTypes = {
  submenuHeader: propTypes.string,
  submenuIcon: propTypes.any,
  submenuText: propTypes.string,
  submenuLink: propTypes.string,
  submenuNotification: propTypes.any,
};

export default SubmenuLink;
