import React from "react";
import { Link } from "react-router-dom";

import "./loginNav.scss";

const LoginNav = () => {
  return (
    <div className="loginNav">
      <Link to="/signup">
        <span className="loginNav__span">Not a member?</span>
        <span className="loginNav__span">Sign up now</span>
      </Link>
    </div>
  );
};

export default LoginNav;
