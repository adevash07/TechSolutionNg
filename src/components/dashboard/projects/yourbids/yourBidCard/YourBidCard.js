import React, { useState } from "react";
import Button from "components/button/Button";
import propTypes from "prop-types";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import "./yourBidCard.scss";
import Ratings from "../../ratings/Ratings";
import ToolTip from "components/toolTip/ToolTip";

const YourBidCard = ({
  yourbidDate,
  yourbidHeader,
  yourbidIntro,
  yourbidNumber,
  yourbidParagraph,
  yourbidStatus,
  yourbidBtnText,
  openbids,
  closedbids,
  activeOffers,
  activeOffersTime,
  completedOffers,
  completedStatus,
  ratings,
  ratingValue,
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
    <div
      className={
        openbids
          ? "yourbidCard openbids"
          : closedbids
          ? "yourbidCard closedbids"
          : activeOffers
          ? "yourbidCard activeoffers"
          : completedOffers
          ? "yourbidCard completedOffers"
          : "yourbidCard"
      }
    >
      {activeOffers && (
        <span className="yourbidCard__activeOffersTime">
          {activeOffersTime}
        </span>
      )}
      {completedOffers && (
        <span className="yourbidCard__completed">{completedStatus}</span>
      )}
      <span className="yourbidCard__small">{yourbidIntro}</span>
      <h5 className="yourbidCard__header">{yourbidHeader}</h5>
      <p className="yourbidCard__paragraph">{yourbidParagraph}</p>
      <div className="yourbidCard__info">
        <AiOutlineCalendar className="yourbidCard__icon" />
        <ul className="yourbidCard__infoDetails">
          {yourbidDate && <li className="yourbidCard__date">{yourbidDate}</li>}
          {yourbidStatus && (
            <li className="yourbidCard__status">{yourbidStatus}</li>
          )}
          {yourbidNumber && (
            <li className="yourbidCard__number">{yourbidNumber}</li>
          )}
          {}
        </ul>
      </div>
      {ratings && (
        <div className="yourbidCard__ratings">
          <BsFillPersonFill />
          <Ratings ratingValue={ratingValue} />
        </div>
      )}
      <div className="yourbidCard__btn">
        <Button btnText={yourbidBtnText} onClick={handleBtnClick} />
        {toolTipStatus && (
          <ToolTip
            active={toolTip}
            share="Share via"
            message="Message"
            client="Client"
          />
        )}
      </div>
    </div>
  );
};

YourBidCard.propTypes = {
  yourbidIntro: propTypes.string,
  yourbidHeader: propTypes.string,
  yourbidParagraph: propTypes.string,
  yourbidDate: propTypes.string,
  yourbidStatus: propTypes.string,
  yourbidNumber: propTypes.string,
  yourbidBtnText: propTypes.string,
  openbids: propTypes.bool,
  closedbids: propTypes.bool,
  activeOffers: propTypes.bool,
  activeOffersTime: propTypes.string,
  completedStatus: propTypes.string,
  completedOffers: propTypes.any,
  ratings: propTypes.any,
  ratingValue: propTypes.any,
  modalFunc: propTypes.func,
  toolTipStatus: propTypes.func,
};

export default YourBidCard;
