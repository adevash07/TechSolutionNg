import React from "react";
import SideNavLink from "../../components/sideNavLink/SideNavLink";
import { FaRegStar } from "react-icons/fa";

import "./SideNav.scss";

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav--container">
        <SideNavLink
          sidenavFirstChild={true}
          sidenavActive={true}
          sidenavIcon={<FaRegStar />}
          sidenavText="Talent"
        />
        <SideNavLink
          sidenavActive={true}
          sidenavIcon={<FaRegStar />}
          sidenavText="Education"
        />
        <SideNavLink
          sidenavActive={true}
          sidenavIcon={<FaRegStar />}
          sidenavText="Employment"
        />
        <SideNavLink
          sidenavActive={false}
          sidenavIcon={<FaRegStar />}
          sidenavText="Payment"
        />
        <SideNavLink
          sidenavActive={false}
          sidenavIcon={<FaRegStar />}
          sidenavText="Title & overview"
        />
        <SideNavLink
          sidenavActive={false}
          sidenavIcon={<FaRegStar />}
          sidenavText="Profile"
        />
      </div>
    </div>
  );
};

export default SideNav;
