import React from "react";
import "./emptyCard.scss";
import propTypes from "prop-types";

export default function EmptyCard({ remove }) {
  return (
    <div className={`emptyCard  ${remove}`}>
      <div className='emptyCard__firstCard'>
        <div className='emptyCard__secondCard'></div>
        <div className='emptyCard__thirdCard'></div>
        <div className='emptyCard__Logo'></div>
        <div className='emptyCard__addCard'>
          <div className='emptyCard__dash'></div>
          <a href='#lfd'> Add Card</a>
        </div>
      </div>
    </div>
  );
}

EmptyCard.propTypes = {
  remove: propTypes.any,
};
