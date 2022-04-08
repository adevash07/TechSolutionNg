import React, { useState, useCallback } from "react";
import "./tabs.scss";
import propTypes from "prop-types"

const  Tabs = ({ children, customClass="tab active-tab" }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const handleActiveTab = useCallback((label) => setActiveTab(label), []);

  const tabs = children.map((child) => (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleActiveTab(child.props.label);
      }}
      className={
        child.props.label === activeTab
          ? ["tabs__tab", "tabs__tab-active", customClass].join(" ")
          : "tabs__tab"
      }
      key={child.props.label}
    >
      {child.props.tabName}
    </button>
  ));
  const tabContent = children.filter(
    (child) => child.props.label === activeTab
  );
  return (
    <div>
      <div className="tabs__box">{tabs}</div>
      <div>{tabContent}</div>
    </div>
  );
}

const  Tab = (props) => {
  return <>{props.children}</>;
}

export { Tabs, Tab };

Tabs.propTypes = {
    children: propTypes.any,
    customClass: propTypes.string
}

Tab.propTypes = {
    children: propTypes.any
}