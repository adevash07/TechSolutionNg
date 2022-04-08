import React from "react";
import "./membershiplane.scss";
import propTypes from "prop-types";
export const MembershiPlan = ({ ptext, icon, icont, icontimes }) => {
  return (
    <div className="membershipPlan">
      <div className="membershipPlan__Div">
        <p>{ptext}</p>
      </div>
      <div className="membershipPlan__DivIcon">
        <div>{icon && <i>{icon}</i>}</div>
        {icontimes && (
          <div className="membershipPlan__IconRed">
            <i>{icontimes}</i>
          </div>
        )}
      </div>

      <div className="membershipPlan__IconTwo">
        <div>{icont && <i>{icont}</i>}</div>
      </div>
    </div>
  );
};

MembershiPlan.propTypes = {
  ptext: propTypes.string,
  icontimes: propTypes.any,
  icon: propTypes.any,
  icont: propTypes.any,
};
export default MembershiPlan;
