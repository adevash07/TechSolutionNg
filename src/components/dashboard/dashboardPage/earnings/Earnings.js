import React from "react";
import propTypes from "prop-types";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

import "./earnings.scss";
import { Link } from "react-router-dom";

const Earnings = ({ earningAmount, earningStatus, earningProfit }) => {
  return (
    <section className="earnings">
      <h5 className="earnings__header">Earnings</h5>
      <div className="earnings__details">
        <p className="earnings__paragraph">
          {earningStatus}
          <span className="earnings__arrowIcon">
            {earningProfit ? (
              <BiUpArrowAlt />
            ) : (
              <BiDownArrowAlt className="loss" />
            )}
          </span>
        </p>
        <div className="earnings__amount">
          <span className="earnings__amountContainer">
            <span className="earnings__amountCurrency">N</span>{" "}
            <span className="earnings__amountFigure">{earningAmount}</span>
          </span>
          <span className="earnings__amountInfo">Total earnings</span>
        </div>
      </div>
      <div className="earnings__btn">
        <span className="earnings__link">
          <Link to="/dashboard/wallets">See all earnings</Link>
        </span>
      </div>
    </section>
  );
};

Earnings.propTypes = {
  earningAmount: propTypes.any,
  earningStatus: propTypes.string,
  earningProfit: propTypes.bool,
};

export default Earnings;
