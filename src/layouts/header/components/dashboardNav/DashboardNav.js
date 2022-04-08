import React, { useState } from "react";
import Input from "components/input/Input";
// import SubmenuLink from "components/submenuLink/SubmenuLink";
import headerLogo from "assets/images/headerPic.png";
import Triangle from "assets/svgs/triangle.svg";
import messageIcon from "assets/svgs/messageIcon.svg";
import notificationIcon from "assets/svgs/notificationIcon.svg";
import NavigationLink from "../navigationLink/NavigationLink";

import "./dashboardNav.scss";
import { data1, data2, data3, data4 } from "./data/submenuData";
import { FiSearch } from "react-icons/fi";
// import { Button } from "components/index";
import { useHistory } from "react-router-dom";
import { MESSAGES_ROUTE } from "navigations/CONSTANTS";

const DashboardNav = () => {
  // state to store value of search input
  const [search, setSearch] = useState("");

  // state for dropdowns
  const [data, setSelect] = useState({
    select: false,
    select1: false,
    select2: false,
    select3: false,
    select4: false,
  });

  // to prevent the animation of submenu when the page loads
  const [display, setDisplay] = useState({
    display1: "none",
    display2: "none",
    display3: "none",
    display4: "none",
  });

  const history = useHistory();

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  };

  const toggleSelect = () => {
    setSelect(() => ({
      select: !data.select,
      select1: false,
      select2: false,
      select3: false,
      select4: false,
    }));
  };
  const toggleSelect1 = () => {
    setSelect(() => ({
      ...data,
      select1: !data.select1,
      select2: false,
      select3: false,
      select4: false,
    }));

    setDisplay(() => ({
      ...display,
      display1: "flex",
    }));
  };
  const toggleSelect2 = () => {
    setSelect(() => ({
      ...data,
      select1: false,
      select2: !data.select2,
      select3: false,
      select4: false,
    }));

    setDisplay(() => ({
      ...display,
      display2: "flex",
    }));
  };
  const toggleSelect3 = () => {
    setSelect(() => ({
      ...data,
      select1: false,
      select2: false,
      select3: !data.select3,
      select4: false,
    }));

    setDisplay(() => ({
      ...display,
      display3: "flex",
    }));
  };
  const toggleSelect4 = () => {
    setSelect(() => ({
      ...data,
      select1: false,
      select2: false,
      select3: false,
      select4: !data.select4,
    }));

    setDisplay(() => ({
      ...display,
      display4: "flex",
    }));
  };
  const handleSeeAllMessages = () => {
    history.push(MESSAGES_ROUTE);
  };

  return (
    <div className="dashboardNav">
      <div className="dashboardNav__searchForm">
        <Input
          inputPlaceholder="Search"
          inputId="search"
          inputName="search"
          inputType="text"
          onFocus={toggleSelect}
          onBlur={toggleSelect}
          onChange={(e) => handleSearchInput(e)}
          value={search}
        />
        <FiSearch className="dashboardNav__searchIcon" />
        <img
          className={`dashboardNav__triangle ${data.select ? "rotate" : ""}`}
          src={Triangle}
          alt=""
        />
      </div>
      <nav>
        <ul className="dashboardNav__navigation">
          <NavigationLink
            func={toggleSelect1}
            navText="Dashboard"
            rotate={data.select1}
            displayValue={display.display1}
            submenuData={data1}
          />
          <span className="stroke"></span>
          <NavigationLink
            func={toggleSelect2}
            navText="Messages"
            rotate={data.select2}
            displayValue={display.display2}
            submenuData={data2}
            msg={true}
            msgFunc={handleSeeAllMessages}
            icon={notificationIcon}
            submenuNotification="2"
          />
          <span className="stroke"></span>
          <NavigationLink
            func={toggleSelect3}
            navText="Notification"
            rotate={data.select3}
            displayValue={display.display3}
            submenuData={data3}
            msg={true}
            msgFunc={handleSeeAllMessages}
            icon={messageIcon}
            submenuNotification="2"
          />
          <span className="stroke"></span>
          <NavigationLink
            func={toggleSelect4}
            navText="John Martin"
            rotate={data.select4}
            displayValue={display.display4}
            submenuData={data4}
            msg={true}
            msgFunc={handleSeeAllMessages}
            icon={headerLogo}
          />
          {/* <li onClick={toggleSelect4} className="dashboardNav__item">
            <span className="pic">
              <img src={headerLogo} alt="" />
            </span>
            <span className="dashboardNav__navText">John Martin</span>
            <span className="numberBadge">2</span>
            <img
              className={`dashboardNav__triangle ${
                data.select4 ? "rotate" : ""
              }`}
              src={Triangle}
              alt=""
            />
            <ul
              style={{
                display: display.display4,
              }}
              className={
                data.select4
                  ? "dashboardNav__submenu show"
                  : "dashboardNav__submenu hide"
              }
            >
              <SubmenuLink {...data2[0]} />
              <SubmenuLink {...data2[1]} />
              <SubmenuLink {...data2[2]} />
              <SubmenuLink {...data2[3]} />
            </ul>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNav;
