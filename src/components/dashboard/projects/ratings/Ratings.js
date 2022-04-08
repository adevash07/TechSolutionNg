import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import propTypes from "prop-types";

import "./ratings.scss";

const Ratings = ({ ratingValue }) => {
  return (
    <div className="ratings">
      {ratingValue ? (
        <>
          <span className="ratings__value">{ratingValue} .5 Star ratings</span>
          <div className="ratings__stars">
            {ratingValue == 1 && (
              <>
                <BsStarFill className="ratings__fill" />
                <BsStar />
                <BsStar />
                <BsStar />
                <BsStar />
              </>
            )}
            {ratingValue == 2 && (
              <>
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
                <BsStar />
                <BsStar />
                <BsStar />
              </>
            )}
            {ratingValue == 3 && (
              <>
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
                <BsStar />
                <BsStar />
              </>
            )}
            {ratingValue == 4 && (
              <>
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
                <BsStar />
              </>
            )}
            {ratingValue == 5 && (
              <>
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
                <BsStarFill className="ratings__fill" />
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <span className="ratings__value">No ratings yet</span>
          <div className="ratings__stars">
            <BsStar className="ratings__nofill" />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
        </>
      )}
    </div>
  );
};

Ratings.propTypes = {
  ratingValue: propTypes.any,
};

export default Ratings;
