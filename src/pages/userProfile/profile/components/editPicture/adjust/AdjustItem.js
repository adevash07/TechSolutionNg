import { useState } from "react";
import propTypes from "prop-types";
const AdjustItem = ({ currentEdit, setting, changeHandler }) => {
  const [showRange, setShowRange] = useState(false);

  const toggleShowState = () => {
    setShowRange((state) => !state);
  };
  return (
    <div className="adjust-item">
      <span onClick={toggleShowState}>
        {setting.icon}
      </span>
      <small>{setting.property}</small>
      {showRange && (
        <form>
          <input
            type="range"
            className="input--range"
            name={setting.property}
            value={currentEdit[setting.property]}
            step={setting.step}
            min={setting.min}
            max={setting.max}
            onChange={changeHandler}
          />
          {/*<input
          type="number"
          name={setting.property}
          value={currentEdit[setting.property]}
          step={setting.step}
          onChange={changeHandler}
        />*/}
        </form>
      )}
    </div>
  );
};
export default AdjustItem;
AdjustItem.propTypes = {
  currentEdit: propTypes.object.isRequired,
  setting: propTypes.object.isRequired,
  changeHandler: propTypes.func.isRequired,
};
