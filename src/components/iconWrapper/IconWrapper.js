import propTypes from "prop-types";
import "./iconWrapper.scss";
const IconWrapper = ({IconName, handleClick }) => {
  return (
    <button className="edit-icon" onClick={handleClick}>
      <IconName />
    </button>
  );
};

export default IconWrapper;
IconWrapper.propTypes = {
  handleClick: propTypes.func.isRequired,
  IconName: propTypes.any
};
