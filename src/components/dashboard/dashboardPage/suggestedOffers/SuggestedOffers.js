import React from "react";
import "./suggestedOffers.scss";
import propTypes from "prop-types";

const SuggestedOffers = ({
  suggestedAmount,
  suggestedDesignation,
  suggestedHeader,
  suggestedMessage,
  suggestedName,
  suggestedTime,
  suggestedImg,
}) => {
  return (
    <div className="suggestedOffer">
      <div className="suggestedOffer__imgContainer">
        <img className="suggestedOffer__img" src={suggestedImg} alt="" />
      </div>
      <div className="suggestedOffer__body">
        <div className="suggestedOffer__bodyHeader">
          <div className="suggestedOffer__nameContainer">
            <h5 className="suggestedOffer__name">{suggestedName}</h5>
            <span className="suggestedOffer__time">{suggestedTime}</span>
          </div>
          <span className="suggestedOffer__designation">
            {suggestedDesignation}
          </span>
        </div>
        <h5 className="suggestedOffer__header">{suggestedHeader}</h5>
        <p className="suggestedOffer__message">{suggestedMessage}</p>
        <div className="suggestedOffer__info">
          <div className="suggestedOffer__amount">
            N {suggestedAmount}/
            <span className="suggestedOffer__month">month</span>
          </div>
          <span className="suggestedOffer__infoTime">One time offer</span>
        </div>
        <div className="suggestedOffer__btnContainer">
          <span className="suggestedOffer__btn">See all offers</span>
        </div>
      </div>
    </div>
  );
};

SuggestedOffers.propTypes = {
  suggestedDesignation: propTypes.string,
  suggestedAmount: propTypes.string,
  suggestedHeader: propTypes.string,
  suggestedMessage: propTypes.string,
  suggestedName: propTypes.string,
  suggestedTime: propTypes.string,
  suggestedImg: propTypes.any,
};

export default SuggestedOffers;
