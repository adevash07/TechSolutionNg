import React, { useState } from "react";
import propTypes from "prop-types";
import "./reportTab.scss";

const ReportTab = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.month);

  const handleClick = (event, newActiveTab) => {
    event.preventDefault();
    setActiveTab(newActiveTab);
  };
  return (
    <>
      <ul className="reportTab--lists">
        {children.map((tab, index) => {
          const label = tab.props.month;
          return (
            <li
              key={index}
              className={`reportTab--list ${
                label === activeTab ? "text-blue" : ""
              }`}
            >
              <button
                type="button"
                onClick={(event) => handleClick(event, label)}
              >
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
      {children.map((content, index) => {
        if (content.props.month === activeTab) {
          return (
            <section key={index} className="dataBox">
              {content}
            </section>
          );
        }
      })}
    </>
  );
};
ReportTab.propTypes = {
  children: propTypes.array,
};
export default ReportTab;
