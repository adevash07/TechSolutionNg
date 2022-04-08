import propTypes from "prop-types";
const CropImage = ({ currentEdit, setting, changeHandler }) => {
  return (
    <div className="crop">
      <form>
        <div>
          <div className="label-ctn">
            <small>Zoom</small>
            <p>{currentEdit[setting.property]}</p>
          </div>
          <input
            type="range"
            className="input--range-crop"
            name={setting.property}
            value={currentEdit[setting.property]}
            step={setting.step}
            min={setting.min}
            max={setting.max}
            onChange={changeHandler}
          />
        </div>
        <div>
          <div className="label-ctn">
            <small>Strengthen</small>
            <p>0</p>
          </div>
          <input
            type="range"
            className="input--range-crop"
            value={7}
            step={5}
            min={3}
            max={10}
          />
        </div>
      </form>
    </div>
  );
};

export default CropImage;
CropImage.propTypes = {
  currentEdit: propTypes.object.isRequired,
  setting: propTypes.object.isRequired,
  changeHandler: propTypes.func.isRequired,
};
