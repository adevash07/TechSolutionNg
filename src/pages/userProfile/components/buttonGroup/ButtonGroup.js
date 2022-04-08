import { useState } from "react";
import propTypes from "prop-types";
import "./buttonGroup.scss";

const ButtonGroup = ({ level, onChange }) => {
  const [active, setActive] = useState(level || "Expert");

  const handleClick = (level) => {
    setActive(level);
    onChange(level);
  };
  return (
    <div className="btn-group">
      <p className="btn-group__tool-tip">
        Select talent level according to your skill proficiency. This will aid
        us in providing the best job for you on iT solutions
      </p>
      <button
        type="button"
        className={active === "Beginner" && "active"}
        onClick={() => handleClick("Beginner")}
      >
        Beginner
      </button>
      <button
        type="button"
        className={active === "Intermediate" && "active"}
        onClick={() => handleClick("Intermediate")}
      >
        Intermidiate
      </button>
      <button
        type="button"
        className={active === "Expert" && "active"}
        onClick={() => handleClick("Expert")}
      >
        Expert
      </button>
    </div>
  );
};

export default ButtonGroup;
ButtonGroup.propTypes = {
  level: propTypes.string,
  onChange: propTypes.func.isRequired,
};
