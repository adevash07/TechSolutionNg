import React from "react";
import propTypes from "prop-types";
import "./progressIndicator.scss";

const ProgressIndicator = ({ components = 3, activeComponent = 1 }) => {
  const renderIndicators = () => {
    const indicators = [];
    for (let i = 0; i < components; i += 1) {
      indicators.push(
        <span
          key={i}
          className={`${i + 1 === activeComponent && "active"}`}
        ></span>
      );
    }
    return indicators;
  };
  return <div className="progress-indicator">{renderIndicators()}</div>;
};
export default ProgressIndicator;
ProgressIndicator.propTypes = {
  components: propTypes.number,
  activeComponent: propTypes.number,
};
