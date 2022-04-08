import React from "react";
import "./accountSettingCard.scss";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
const AccountSettingCard = ({ icon, htext, ptextact, linkpath, slash }) => {
  return (
    <>
      <Link exact={slash ? true : false} to={linkpath}>
        <div className="accountSettingCard ">
          <div className="accountSettingCard__Icon">
            <i>{icon}</i>

            <div>
              <span>..</span>
            </div>
          </div>
          <div className=" accountSettingCard__Hearder">
            <h4>{htext}</h4>
            <p>{ptextact}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
AccountSettingCard.propTypes = {
  icon: propTypes.any,
  htext: propTypes.string,
  ptextact: propTypes.string,
  linkpath: propTypes.string,
  slash: propTypes.string,
};
export default AccountSettingCard;
