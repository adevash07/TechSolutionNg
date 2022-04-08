import propTypes from "prop-types";
import "./badge.scss"
const Badge = ({ customBadgeClass }) => {
  return <span className={`badge badge--${customBadgeClass}`}></span>;
};

export default Badge;
Badge.propTypes = {
  customBadgeClass: propTypes.string,
};
