import React, { useState } from "react";
import "./tabs.scss";
import propTypes from "prop-types";
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const tabletWidthPortrait = 768;
  const tabletWidthLandscape = 1024;

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="buttonTabs">
      <ul className="buttonTabs__lists">
        {children.map((tab, index) => {
          const label = tab.props.label;
          const count = tab.props.count;
          return (
            <li key={index} className={label === activeTab ? "current" : ""}>
              <button
                type="button"
                onClick={(event) => handleClick(event, label)}
              >
                <span
                  className={
                    label === activeTab &&
                    window.innerWidth > tabletWidthLandscape
                      ? label.split(" ").join("-")
                      : label === activeTab &&
                        window.innerWidth <= tabletWidthPortrait
                      ? label.replace(label, `${label}-text`)
                      : ""
                  }
                >
                  {label}
                </span>
                <span className={label.split(" ", 1).join("")}>{count}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {children.map((content, index) => {
        if (content.props.label === activeTab) {
          return (
            <section key={index} className="tabContent__box">
              {content}
            </section>
          );
        }
      })}
    </div>
  );
};

Tabs.propTypes = {
  children: propTypes.array,
  count: propTypes.string,
};

export default Tabs;
