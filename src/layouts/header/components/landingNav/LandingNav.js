import React from "react";
import Button from "components/button/Button";
// import Links from "components/links/Links";

import "./landingNav.scss";
import { Link } from "react-router-dom";

const LandingNav = () => {
  return (
    <>
      <nav className="landingNav">
        {/* <Links nav={true} linkText="How it works" /> */}
        <span className="landingNav__link">
          <Link to="/">How it works</Link>
        </span>
        <Button btnText="Post Project" />
        <div>
          <span className="landingNav__link">
            <Link to="/login">Log In</Link>
          </span>
          <span></span>
          <span className="landingNav__link">
            <Link to="/signup">Sign Up</Link>
          </span>
        </div>
      </nav>
    </>
  );
};

export default LandingNav;
