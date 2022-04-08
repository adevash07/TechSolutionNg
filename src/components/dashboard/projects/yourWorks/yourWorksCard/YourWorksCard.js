import React, { useState } from "react";
import propTypes from "prop-types";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";

import "./yourWorksCard.scss";
import Button from "components/button/Button";
import Ratings from "../../ratings/Ratings";
import ToolTip from "components/toolTip/ToolTip";

const YourWorksCard = ({
  id,
  btnLink,
  yourWorkHeader,
  yourWorkParagraph,
  startedTime,
  startedStatus,
  deliveryTime,
  deliveryStatus,
  budgetType,
  budgetStatus,
  priceAmount,
  priceStatus,
  yourWorksLocation,
  yourWorkReviews,
  yourWorkJobs,
  yourWorkMemberDate,
  yourWorkBtnText,
  rating,
  ratingValue,
  ratingParagraph,
  completed,
  terminated,
  modalFunc,
  toolTipStatus,
}) => {
  const [toolTip, setToolTip] = useState(false);

  const handleBtnClick = () => {
    setToolTip(!toolTip);

    if (modalFunc) {
      modalFunc();
    }
  };
  return (
    <div className="yourWorksCard">
      {completed && (
        <div className="yourWorksCard__completed">
          <div className="yourWorksCard__completedFigure">
            <div className="yourWorksCard__completedNumber">100</div>
          </div>
          <span className="yourWorksCard__completedText">
            Certified as complete
          </span>
        </div>
      )}
      {terminated && (
        <div className="yourWorksCard__terminated">
          <span className="yourWorksCard__terminatedText">Terminated</span>
        </div>
      )}
      <h4 className="yourWorksCard__header">{yourWorkHeader}</h4>
      <p className="yourWorksCard__paragraph">{yourWorkParagraph}</p>
      <div className="yourWorksCard__grid">
        {startedTime && (
          <div className="yourWorksCard__gridContainer">
            <span className="yourWorksCard__gridHeader">{startedTime}</span>
            <div className="yourWorksCard__gridDetail">
              <AiOutlineCalendar className="yourWorksCard__icon" />
              <span className="yourWorksCard__gridInfo">{startedStatus}</span>
            </div>
          </div>
        )}
        {deliveryTime && (
          <div className="yourWorksCard__gridContainer">
            <span className="yourWorksCard__gridHeader">{deliveryTime}</span>
            <div className="yourWorksCard__gridDetail">
              <AiOutlineCalendar className="yourWorksCard__icon" />
              <span className="yourWorksCard__gridInfo">{deliveryStatus}</span>
            </div>
          </div>
        )}
        {budgetType && (
          <div className="yourWorksCard__gridContainer">
            <span className="yourWorksCard__gridHeader">{budgetType}</span>
            <div className="yourWorksCard__gridDetail">
              <span className="yourWorksCard__gridInfo">{budgetStatus}</span>
            </div>
          </div>
        )}
        {priceAmount && (
          <div className="yourWorksCard__gridContainer">
            <span className="yourWorksCard__gridHeader">{priceAmount}</span>
            <div className="yourWorksCard__gridDetail">
              <span className="yourWorksCard__gridInfo">{priceStatus}</span>
            </div>
          </div>
        )}
      </div>
      <div className="yourWorksCard__client">
        <h5 className="yourWorksCard__clientHeader">Client review</h5>

        {rating && (
          <div className="yourWorksCard__rating">
            <div>
              <BsFillPersonFill />
              <Ratings ratingValue={ratingValue} />
            </div>
            <div>
              <p>{ratingParagraph}</p>
            </div>
          </div>
        )}
        {yourWorksLocation && (
          <>
            <div>
              <div className="yourWorksCard__location">
                <IoLocationSharp />
                <span>{yourWorksLocation}</span>
              </div>
              <div className="yourWorksCard__review">
                <BsFillPersonFill />
                <span>{yourWorkReviews}</span>
              </div>
            </div>
            <div className="yourWorksCard__jobs">
              <span>{yourWorkJobs}</span>
            </div>
            <div className="yourWorksCard__member">
              <span>{yourWorkMemberDate}</span>
            </div>
          </>
        )}
        <div className="yourWorksCard__btn">
          {/* <Button btnText={yourWorkBtnText} onClick={handleBtnClick} /> */}
          {btnLink ? (
            <Link to={`${btnLink}${id}`}>
              <Button btnText={yourWorkBtnText} onClick={handleBtnClick} />
            </Link>
          ) : (
            <Button btnText={yourWorkBtnText} onClick={handleBtnClick} />
          )}
          {toolTipStatus && (
            <ToolTip
              active={toolTip}
              share="Share Via"
              message="Message"
              client="Client"
            />
          )}
        </div>
      </div>
    </div>
  );
};

YourWorksCard.propTypes = {
  id: propTypes.any,
  btnLink: propTypes.string,
  yourWorkHeader: propTypes.string,
  yourWorkParagraph: propTypes.string,
  //   yourWorkParagraph2: propTypes.string,
  startedTime: propTypes.string,
  startedStatus: propTypes.string,
  deliveryTime: propTypes.string,
  deliveryStatus: propTypes.string,
  budgetType: propTypes.string,
  budgetStatus: propTypes.string,
  priceAmount: propTypes.string,
  priceStatus: propTypes.string,
  yourWorksLocation: propTypes.string,
  yourWorkReviews: propTypes.string,
  yourWorkJobs: propTypes.string,
  yourWorkMemberDate: propTypes.string,
  yourWorkBtnText: propTypes.string,
  rating: propTypes.any,
  ratingParagraph: propTypes.string,
  ratingValue: propTypes.any,
  completed: propTypes.bool,
  terminated: propTypes.bool,
  modalFunc: propTypes.func,
  toolTipStatus: propTypes.bool,
};

export default YourWorksCard;
