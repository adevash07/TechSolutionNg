import React from "react";
import Triangle from "assets/svgs/triangle.svg";
import SubmenuLink from "components/submenuLink/SubmenuLink";
import propTypes from "prop-types";
import { Button } from "components/index";

const NavigationLink = ({
  func,
  icon,
  navText,
  rotate,
  displayValue,
  submenuData,
  msg,
  msgFunc,
  submenuNotification,
}) => {
  let mappedSubmenu = submenuData.map((data) => {
    return <SubmenuLink key={data.id} {...data} />;
  });
  return (
    <li onClick={func} className="dashboardNav__item">
      {icon && (
        <span className="dashboardNav__itemIcon">
          <img src={icon} alt="" />
        </span>
      )}
      <span className="dashboardNav__navText">{navText}</span>
      {submenuNotification && (
        <span className="numberBadge">{submenuNotification}</span>
      )}
      <img
        className={`dashboardNav__triangle ${rotate ? "rotate" : ""}`}
        src={Triangle}
        alt=""
      />
      <ul
        style={{
          display: displayValue,
        }}
        className={
          rotate ? "dashboardNav__submenu show" : "dashboardNav__submenu hide"
        }
      >
        {/* <SubmenuLink {...data2[0]} />
        <SubmenuLink {...data2[1]} />
        <SubmenuLink {...data2[2]} />
        <SubmenuLink {...data2[3]} /> */}
        {mappedSubmenu}
        {msg && (
          <li className="submenuLink msg">
            <Button
              btnText="See all messages"
              btnClass="medium"
              onClick={msgFunc}
            />
          </li>
        )}
      </ul>
    </li>
  );
};

NavigationLink.propTypes = {
  func: propTypes.func,
  icon: propTypes.any,
  navText: propTypes.string,
  rotate: propTypes.bool,
  submenuNotification: propTypes.string,
  displayValue: propTypes.bool,
  submenuData: propTypes.array,
  msg: propTypes.bool,
  msgFunc: propTypes.func,
};

export default NavigationLink;
