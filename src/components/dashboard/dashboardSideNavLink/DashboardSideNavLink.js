import React from "react";
import { NavLink } from "react-router-dom";
import "./dashboardSideNavLink.scss";
import propTypes from "prop-types";

const DashboardSideNavLink = ({
  slash,
  onClick,
  dashboardnavActive,
  dashboardnavIcon,
  dashboardnavText,
  dashboardLink,
  showNav,
}) => {
  return (
    <NavLink
      exact={slash ? true : false}
      to={dashboardLink}
      onClick={onClick}
      className={dashboardnavActive ? "dashboardnavLink" : "dashboardnavLink"}
    >
      <div className={`dashboardnavLink__container ${showNav && "showNav"}`}>
        <div className={`dashboardnavLink__content ${showNav && "showNav"}`}>
          <span className={`dashboardnavLink__image ${showNav && "showNav"}`}>
            <img src={dashboardnavIcon} />
          </span>
          <span className={`dashboardnavLink__text ${showNav && "showNav"}`}>
            {dashboardnavText}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

DashboardSideNavLink.propTypes = {
  onClick: propTypes.any,
  slash: propTypes.bool,
  dashboardnavActive: propTypes.any,
  dashboardnavIcon: propTypes.string,
  dashboardnavText: propTypes.string,
  dashboardLink: propTypes.string,
  showNav: propTypes.bool,
};

export default DashboardSideNavLink;
