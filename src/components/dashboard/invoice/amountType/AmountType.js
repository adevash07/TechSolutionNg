import React from "react";
import "./amountType.scss";
import propTypes from "prop-types";
function AmountType({ nameLabel, amountLabel }) {
  return (
    <div className="containerFlex">
      <span className="containerFlex--label">{nameLabel}</span>
      <span className="amount">{amountLabel}</span>
    </div>
  );
}

AmountType.propTypes = {
  nameLabel: propTypes.string,
  amountLabel: propTypes.string,
};

export default AmountType;
