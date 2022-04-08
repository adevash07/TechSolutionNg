import React from "react";
import { BsArrowClockwise } from "react-icons/bs";
import Button from "components/button/Button";
import propTypes from "prop-types";
import "./balance.scss";

export default function Balance({
  differencesSign,
  walletCurrency,
  balance,
  balanceDifferences,
}) {
  return (
    <div className='balance'>
      <h6 className='balance__heading'>
        <span>Wallets balance</span>
        <span>
          Refresh <BsArrowClockwise fill='#004CFF' size={18} />
        </span>
      </h6>
      <div className='balance__figure'>
        <span>{walletCurrency}</span>
        <span>{balance}</span>
      </div>
      <p className='balance__difference'>
        {differencesSign}
        {balanceDifferences} within last week
      </p>
      <hr></hr>
      <p>*Updates approproximately every hour</p>
      <Button btnText='Withdraw now' btnType='button' />
    </div>
  );
}

Balance.propTypes = {
  walletCurrency: propTypes.string,
  balance: propTypes.string,
  balanceDifferences: propTypes.any,
  planDifferences: propTypes.any,
  differencesSign: propTypes.any,
};
