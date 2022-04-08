import React from "react";
import propTypes from "prop-types";
import "./linkCard.scss";
import { Link } from "react-router-dom";

const LinkCard = ({
  linkIcon,
  linkStatus,
  linkText,
  projectLink,
  handleActive,
}) => {
  return (
    <Link onClick={handleActive} to={projectLink}>
      <div className="linkcard">
        <div className="linkcard__child1">
          <div className="linkcard__icon">{linkIcon}</div>
          <h5 className="linkcard__text">{linkText}</h5>
          <span className="linkcard__textSmall">{linkStatus}</span>
        </div>
      </div>
    </Link>
  );
};

LinkCard.propTypes = {
  linkIcon: propTypes.any,
  onClick: propTypes.any,
  linkStatus: propTypes.string,
  linkText: propTypes.string,
  // status: propTypes.any,
  projectLink: propTypes.any,
  handleActive: propTypes.any,
};

export default LinkCard;
