import React from "react";
import { FiCopy } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import propTypes from "prop-types";
import "./tranSacCard.scss";

export default function TranSacCard({
  bankName,
  cardDigit,
  bankLogo,
  amount,
  currency,
}) {
  return (
    <div id='recentCard' className='recentCard'>
      <div className='recentCard__diploRow'>
        <p className='recentCard__details'>
          <span>{bankName}</span>
          <span>
            {cardDigit} &#42;&#42;&#42;&#42; &#42;&#42;&#42;{" "}
            <a href='##sksk'>
              <FiCopy fill='white' color='#85979f' />
            </a>
          </span>
        </p>
        <p className='recentCard__imgCon'>
          <img src={bankLogo} alt='BankLogo' />
        </p>
      </div>
      <div className='recentCard__diploRow'>
        <p>
          {" "}
          <span>{currency}</span> {amount}
        </p>
        <BsThreeDotsVertical color='#b7c3c7' size={30} />
      </div>
    </div>
  );
}

TranSacCard.propTypes = {
  bankName: propTypes.string,
  cardName: propTypes.string,
  cardDigit: propTypes.any,
  bankLogo: propTypes.any,
  amount: propTypes.any,
  currency: propTypes.any,
};
