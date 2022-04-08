import { Button } from "components/index";
import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import "./instantOffersCard.scss";
import propTypes from "prop-types";

const InstantOffersCard = ({
  name,
  rating,
  days,
  hours,
  project,
  price,
  jobs,
  reviews,
  paragraph,
  image,
}) => {
  return (
    <div className="instantOffersCard">
      <div className="instantOffersCard__info">
        <div className="instantOffersCard__img">
          <img src={image} alt="" />
        </div>
        <div>
          <h5 className="instantOffersCard__name">
            {name} <BiCheck />
          </h5>
          <div className="instantOffersCard__rating">
            <span>Ratings:</span>
            <span>
              {!rating && (
                <>
                  <BsStar />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                </>
              )}
              {rating == 1 && (
                <>
                  <BsStarFill className="fill" />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                </>
              )}
              {rating == 2 && (
                <>
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                  <BsStar />
                  <BsStar />
                  <BsStar />
                </>
              )}
              {rating == 3 && (
                <>
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                  <BsStar />
                  <BsStar />
                </>
              )}
              {rating == 4 && (
                <>
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                  <BsStar />
                </>
              )}
              {rating == 5 && (
                <>
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                  <BsStarFill className="fill" />
                </>
              )}
            </span>
          </div>
          <div className="instantOffersCard__jobs">
            <span>Jobs Completed:</span>
            <span>{jobs}</span>
          </div>
          <div className="instantOffersCard__reviews">
            <span>Reviews:</span>
            <span>{reviews}</span>
          </div>
        </div>
      </div>
      <h5 className="instantOffersCard__project">{project}</h5>
      <p className="instantOffersCard__price">
        Price: <span>N{price}</span>
      </p>
      <div>
        <div className="instantOffersCard__days">
          <span></span>
          <span>{days}</span>
        </div>
        <div className="instantOffersCard__hours">
          <span></span>
          <span>{hours}</span>
        </div>
      </div>
      <p className="instantOffersCard__paragraph">{paragraph}</p>
      <div className="instantOffersCard__button">
        <Button btnText="Choose Offer" btnClass="large" />
      </div>
      <div className="instantOffersCard__clip">
        <span>Instant</span>
        <span>offer</span>
      </div>
    </div>
  );
};

InstantOffersCard.propTypes = {
  name: propTypes.string,
  rating: propTypes.any,
  days: propTypes.string,
  jobs: propTypes.any,
  reviews: propTypes.any,
  hours: propTypes.string,
  project: propTypes.string,
  price: propTypes.any,
  paragraph: propTypes.string,
  image: propTypes.any,
};

export default InstantOffersCard;
