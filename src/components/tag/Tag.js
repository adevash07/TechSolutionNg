import propTypes from "prop-types";
import "./tag.scss";

const Tag = ({ title, customClass, showClose = false, closeHandler }) => {
  const handleClose = () => {
    if (closeHandler) closeHandler();
  };
  return (
    <span className={`tag tag--${customClass}`}>
      {title}
      {showClose && <button className="close-btn" onClick={handleClose}>x</button>}
    </span>
  );
};
export default Tag;
Tag.propTypes = {
  title: propTypes.string,
  customClass: propTypes.string,
  showClose: propTypes.bool,
  closeHandler: propTypes.func,
};
