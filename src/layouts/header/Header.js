import React from "react";
import LandingNav from "./components/landingNav/LandingNav";

import BrandLogo from "../../assets/images/itsln_logo.png";
import propTypes from "prop-types";
import "./header.scss";
import DashboardNav from "./components/dashboardNav/DashboardNav";
import LoginNav from "./components/login/LoginNav";
import RegisterNav from "./components/registerNav/RegisterNav";
import UserProfile from "./components/userProfile/UserProfile";

const Header = ({
  registerPage,
  landingPage,
  loginPage,
  dashboardPage,
  userProfile,
}) => {
  return (
    <header className={loginPage || registerPage ? "header none" : "header"}>
      <div className="header__container">
        <div className="header__brand">
          <img src={BrandLogo} alt="Brand Logo" />
        </div>
        {landingPage ? (
          <LandingNav />
        ) : dashboardPage ? (
          <DashboardNav />
        ) : loginPage ? (
          <LoginNav />
        ) : registerPage ? (
          <RegisterNav />
        ) : userProfile ? (
          <UserProfile />
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  registerPage: propTypes.any,
  landingPage: propTypes.any,
  loginPage: propTypes.any,
  dashboardPage: propTypes.any,
  userProfile: propTypes.any,
};

export default Header;
