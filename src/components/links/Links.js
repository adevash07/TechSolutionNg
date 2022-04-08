import React from "react";
import propTypes from "prop-types";
import "./links.scss";

const Links = ({ nav, linkText, linkClass }) => {
  return (
    <>
      {nav ? (
        <li className={linkClass ? `link-${linkClass} nav` : "link nav"}>
          {linkText}
        </li>
      ) : (
        <li className={linkClass ? `link-${linkClass}` : "link"}>{linkText}</li>
      )}
    </>
  );
};

Links.propTypes = {
  nav: propTypes.any,
  linkText: propTypes.string,
  linkClass: propTypes.string,
};

export default Links;
