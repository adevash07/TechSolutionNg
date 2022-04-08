import React, { useEffect, useState, useRef } from "react";
import Icon1 from "../../../assets/images/Dashboard Icons/Dashboard icon.png";
import Icon2 from "../../../assets/images/Dashboard Icons/Project Icon.png";
import Icon3 from "../../../assets/images/Dashboard Icons/Invoice Icon.png";
import Icon4 from "../../../assets/images/Dashboard Icons/Report Icon.png";
import { ReactComponent as Hamburger } from "assets/svgs/hamburger.svg";
import propTypes from "prop-types";
import Icon5 from "../../../assets/images/Dashboard Icons/Wallet Icon.png";
import DashboardSideNavLink from "../../../components/dashboard/dashboardSideNavLink/DashboardSideNavLink";

import "./dashboardSideNav.scss";

const DashboardSideNav = ({ url }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showNav, setShowNav] = useState(false);
  const navbar = useRef();

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  let width = screenWidth <= 1199 ? true : false;
  // let width = screenWidth <= 1024 ? true : false;

  const handleDashboardNav = (e) => {
    const dashboardNavLinks = document.querySelectorAll(".dashboardnavLink");

    dashboardNavLinks.forEach((link) => {
      link.classList.remove("active");
    });

    let clickedLink = e.target;
    clickedLink.classList.add("active");
  };

  const handleNavBlur = () => {
    let nav = navbar.current;
    console.log(nav);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div
      ref={navbar}
      onBlur={handleNavBlur}
      className={`dashboardSideNav ${showNav && "showNav"}`}
    >
      <div className={`dashboardSideNav__container ${showNav && "showNav"}`}>
        <div className="dashboardSideNav__links">
          {width && (
            <div
              className={`dashboardSideNav__hamburger ${showNav && "showNav"}`}
            >
              <Hamburger onClick={toggleNav} />
            </div>
          )}
          <DashboardSideNavLink
            dashboardLink={`${url}`}
            slash={true}
            showNav={showNav}
            onClick={handleDashboardNav}
            dashboardnavIcon={Icon1}
            dashboardnavText="Dashboard"
          />
          <DashboardSideNavLink
            dashboardLink={`${url}/projects`}
            showNav={showNav}
            onClick={handleDashboardNav}
            dashboardnavActive={true}
            dashboardnavIcon={Icon2}
            dashboardnavText="Projects"
          />
          <DashboardSideNavLink
            dashboardLink={`${url}/invoices`}
            showNav={showNav}
            onClick={handleDashboardNav}
            dashboardnavIcon={Icon3}
            dashboardnavText="Invoices"
          />
          <DashboardSideNavLink
            dashboardLink={`${url}/reports`}
            showNav={showNav}
            onClick={handleDashboardNav}
            dashboardnavIcon={Icon4}
            dashboardnavText="Reports"
          />
          <DashboardSideNavLink
            dashboardLink={`${url}/wallets`}
            showNav={showNav}
            onClick={handleDashboardNav}
            dashboardnavIcon={Icon5}
            dashboardnavText="Wallets"
          />
        </div>
        <div className={`dashboardSideNav__contact ${showNav && "showNav"}`}>
          <span>Having troubles?</span>
          <h4>Contact us</h4>
        </div>
      </div>
    </div>
  );
};

DashboardSideNav.propTypes = {
  url: propTypes.any,
};

export default DashboardSideNav;
