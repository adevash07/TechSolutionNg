import React from "react";
import { Link } from "react-router-dom";

import "./registerNav.scss";

const RegisterNav = () => {
  return (
    <div className='registerNav'>
      <Link to='/login'>
        <span className='registerNav__span'>Already a member?</span>
        <span className='registerNav__span'>Log in</span>
      </Link>
    </div>
  );
};

export default RegisterNav;
