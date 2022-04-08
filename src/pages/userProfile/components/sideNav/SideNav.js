import propTypes from "prop-types";
import { GiHamburgerMenu } from "react-icons/gi";
import SidenavLink from "components/sideNavLink/SideNavLink";
import sideNavContent from "./sideNavContent";
import "./sideNav.scss";
import { useState } from "react";

const SideNav = ({ active }) => {
  const [showTitle, setShowTitle] = useState(false);

  const toggleSideNav = () => {
    setShowTitle(!showTitle);
  };
  return (
    <div className={`sidenav ${!showTitle && "sidenav--collapse"}`}>
      <div className="sidenav__container">
        <span className="menu-icon" onClick={toggleSideNav}>
          <GiHamburgerMenu />
        </span>
        {sideNavContent.map(({ title, icon }, index) => (
          <SidenavLink
            key={title}
            sidenavFirstChild={index ? false : true}
            sidenavActive={active >= index}
            sidenavIcon={icon}
            sidenavText={title}
            showTitle={showTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default SideNav;
SideNav.propTypes = {
  active: propTypes.number.isRequired,
};
