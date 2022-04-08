/* eslint-disable no-constant-condition */
import React, { useState } from "react";
import TranSacCard from "../../modules/recentTransaction/TranSacCard";
import propTypes from "prop-types";
import assets from "assets/index";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

import "./recentComponent.scss";

const RecentTransData = [
  {
    id: 1,
    bankName: "MasterCard",
    amount: "50,000",
    cardDigit: "123",
    currency: "$",
  },
  {
    id: 2,
    bankName: "MasterCard",
    amount: "50,000",
    cardDigit: "123",
    currency: "$",
  },
  {
    id: 3,
    bankName: "MasterCard",
    amount: "50,000",
    cardDigit: "123",
    currency: "$",
  },
  {
    id: 4,
    bankName: "ITSOLUTIONCard",
    amount: "50,000",
    cardDigit: "123",
    currency: "$",
  },
  {
    id: 5,
    bankName: "ITSOLUTIONCard",
    amount: "50,000",
    cardDigit: "123",
    currency: "$",
  },
  {
    id: 6,
    bankName: "ITSOLUTIONCard",
    amount: "50,000",
    cardDigit: "123",
    currency: "$",
  },
];

export default function RecentComponent({ transactionTotal }) {
  const [displayedElement, setdisplayedElement] = useState(0);
  console.log(displayedElement);
  const toggleDisplay = (e) => {
    e.preventDefault();
    if (displayedElement < 3) {
      setdisplayedElement(displayedElement + 1);
      console.log(displayedElement);
    } else {
      setdisplayedElement(displayedElement - displayedElement);
      console.log(displayedElement);
    }
  };
  return (
    <div className='recentTransaction'>
      <h4>
        <span>
          Recent Transaction <span>{transactionTotal}</span>
        </span>
        <div
          onClick={(e) => {
            toggleDisplay(e);
          }}
          className='arrow'>
          {displayedElement === 3 ? (
            <FaLongArrowAltLeft id='arrowBackward' color='white' size={23} />
          ) : (
            <FaLongArrowAltRight id='arrowForward' color='white' size={23} />
          )}
        </div>
      </h4>
      <div
        id='carousel'
        className={`"carousel"  ${
          displayedElement === 0
            ? "zero"
            : displayedElement === 1
            ? "first"
            : displayedElement === 2
            ? "second"
            : displayedElement === 3
        }`}>
        {RecentTransData
          ? RecentTransData.map((card) => (
              <TranSacCard
                key={card.id}
                bankName={card.bankName}
                cardDigit={card.cardDigit}
                bankLogo={assets.Gtb}
                amount={card.amount}
                currency={card.currency}
              />
            ))
          : "NO DATA ENTRY"}
      </div>
    </div>
  );
}
RecentComponent.propTypes = {
  transactionTotal: propTypes.string,
};
