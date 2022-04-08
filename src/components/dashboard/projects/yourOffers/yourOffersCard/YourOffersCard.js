import React from "react";
import propTypes from "prop-types";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { ReactComponent as Star } from "assets/svgs/star.svg";
import { Link } from "react-router-dom";

import "./yourOffersCard.scss";
import Button from "components/button/Button";

const YourOffersCard = ({
  id,
  yourWorkHeader,
  yourWorkParagraph,
  timeStatus,
  timeLeft,
  typeStatus,
  type,
  priceAmount,
  price,
  entriesStatus,
  entries,
  yourWorksLocation,
  yourWorkReviews,
  yourWorkJobs,
  yourWorkMemberDate,
  yourWorkBtnText,
  rating,
  ratingParagraph,
  skills,
  btnLink,
}) => {
  return (
    <div className="yourOffersCard">
      <h4 className="yourOffersCard__header">{yourWorkHeader}</h4>
      <p className="yourOffersCard__paragraph">{yourWorkParagraph}</p>
      <div className="yourOffersCard__grid">
        {timeStatus && (
          <div className="yourOffersCard__gridContainer">
            <span className="yourOffersCard__gridHeader">{timeStatus}</span>
            <div className="yourOffersCard__gridDetail">
              <AiOutlineCalendar className="yourOffersCard__icon" />
              <span className="yourOffersCard__gridInfo">{timeLeft}</span>
            </div>
          </div>
        )}
        {typeStatus && (
          <div className="yourOffersCard__gridContainer">
            <span className="yourOffersCard__gridHeader">{typeStatus}</span>
            <div className="yourOffersCard__gridDetail">
              <span className="yourOffersCard__gridInfo">{type}</span>
            </div>
          </div>
        )}
        {priceAmount && (
          <div className="yourOffersCard__gridContainer">
            <span className="yourOffersCard__gridHeader">{priceAmount}</span>
            <div className="yourOffersCard__gridDetail">
              <span className="yourOffersCard__gridInfo">{price}</span>
            </div>
          </div>
        )}
        {entriesStatus && (
          <div className="yourOffersCard__gridContainer">
            <span className="yourOffersCard__gridHeader">{entriesStatus}</span>
            <div className="yourOffersCard__gridDetail">
              <span className="yourOffersCard__gridInfo">{entries}</span>
            </div>
          </div>
        )}
      </div>
      {skills && (
        <div className="yourOffersCard__skills">
          <span className="yourOffersCard__skillsIcon">
            <Star />
          </span>
          <span className="yourOffersCard__skillsHeader">Skills needed : </span>
          <span className="yourOffersCard__skillsDetails">{skills}</span>
        </div>
      )}
      <div className="yourOffersCard__client">
        <h5 className="yourOffersCard__clientHeader">Client details</h5>

        {rating && (
          <div className="yourOffersCard__rating">
            <div>
              <BsFillPersonFill />
            </div>
            <div>
              <p>{ratingParagraph}</p>
            </div>
          </div>
        )}
        {yourWorksLocation && (
          <>
            <div>
              <div className="yourOffersCard__location">
                <IoLocationSharp />
                <span>{yourWorksLocation}</span>
              </div>
              <div className="yourOffersCard__review">
                <BsFillPersonFill />
                <span>{yourWorkReviews}</span>
              </div>
            </div>
            <div className="yourOffersCard__jobs">
              <span>{yourWorkJobs}</span>
            </div>
            <div className="yourOffersCard__member">
              <span>{yourWorkMemberDate}</span>
            </div>
          </>
        )}
        <div className="yourOffersCard__btn">
          {btnLink ? (
            <Link to={`${btnLink}${id}`}>
              <Button btnText={yourWorkBtnText} />
            </Link>
          ) : (
            <Button btnText={yourWorkBtnText} />
          )}
        </div>
      </div>
    </div>
  );
};

YourOffersCard.propTypes = {
  id: propTypes.any,
  yourWorkHeader: propTypes.string,
  yourWorkParagraph: propTypes.string,
  timeStatus: propTypes.string,
  timeLeft: propTypes.string,
  typeStatus: propTypes.string,
  type: propTypes.string,
  priceAmount: propTypes.string,
  price: propTypes.string,
  entriesStatus: propTypes.string,
  entries: propTypes.string,
  yourWorksLocation: propTypes.string,
  yourWorkReviews: propTypes.string,
  yourWorkJobs: propTypes.string,
  yourWorkMemberDate: propTypes.string,
  yourWorkBtnText: propTypes.string,
  rating: propTypes.any,
  ratingParagraph: propTypes.string,
  skills: propTypes.string,
  btnLink: propTypes.string,
};

export default YourOffersCard;
