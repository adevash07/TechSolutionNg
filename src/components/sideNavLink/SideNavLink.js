import React from "react";
import propTypes from "prop-types";
import "./sidenavLink.scss";

const SideNavLink = ({
  sidenavFirstChild,
  sidenavActive,
  sidenavText,
  sidenavIcon,
  showTitle = false,
}) => {
  return (
    <div
      className={`${sidenavActive ? "sidenavLink" : "sidenavLink inactive"} ${
        !showTitle && "sidenavLink--collapse"
      }`}
    >
      {sidenavFirstChild ? null : <div className="sidenavLink--child1"></div>}
      <div className="sidenavLink--child2">
        <div className="info">
          <span>{sidenavIcon}</span>
          <span className={`title ${showTitle && "title--visible"}`}>
            {sidenavText}
          </span>
        </div>
        <span className="check">
          <input type="checkbox" />
        </span>
      </div>
    </div>
  );
};

SideNavLink.propTypes = {
  sidenavFirstChild: propTypes.any,
  sidenavActive: propTypes.any,
  sidenavText: propTypes.string,
  sidenavIcon: propTypes.object,
  showTitle: propTypes.bool,
};

export default SideNavLink;
