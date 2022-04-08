import React from "react";
import { useHistory } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import propTypes from "prop-types";
import { ReactComponent as Project1 } from "assets/svgs/project1.svg";
import { ReactComponent as Project2 } from "assets/svgs/project2.svg";
import { ReactComponent as Project3 } from "assets/svgs/project3.svg";
import "./instantOfferCard.scss";

const InstantOfferCard = ({
  id,
  instantOfferBody,
  instantOfferHeader,
  instantOfferIcon4,
  instantOfferInfo1,
  instantOfferInfo2,
  instantOfferInfo3,
  instantOfferInfo4,
  instantOfferPrice,
}) => {
  const history = useHistory();

  const goToMakeAnOffer = (id) => {
    history.push(`/dashboard/projects/make-an-offer/${id}`);
  };

  return (
    <div onClick={() => goToMakeAnOffer(id)} className="instantCard">
      <div className="instantCard__container">
        <div className="instantCard__icon">
          <div className="instantCard__iconContainer">
            <BsFillBellFill />
          </div>
        </div>
        <div className="instantCard__body">
          <h5 className="instantCard__header">{instantOfferHeader}</h5>
          <p className="instantCard__paragraph">{instantOfferBody}</p>
          <div className="instantCard_details">
            <div className="instantCard__detailsContainer">
              <div className="instantCard__detailsImg">
                <Project1 />
              </div>
              <span className="instantCard__detailsText">
                {instantOfferInfo1}
              </span>
            </div>
            <div className="instantCard__detailsContainer">
              <div className="instantCard__detailsImg">
                <Project3 />
              </div>
              <span className="instantCard__detailsText">
                {instantOfferInfo2}
              </span>
            </div>
            <div className="instantCard__detailsContainer">
              <div className="instantCard__detailsImg">
                <Project2 />
              </div>
              <span className="instantCard__detailsText">
                {instantOfferInfo3}
              </span>
            </div>
            <div className="instantCard__detailsContainer">
              <div className="instantCard__detailsImg">{instantOfferIcon4}</div>
              <span className="instantCard__detailsText">
                {instantOfferInfo4}
              </span>
            </div>
          </div>
        </div>
        <div className="instantCard__budget">
          <h5 className="instantCard__budgetHeader">Budget price</h5>
          <h4 className="instantCard__budgetAmount">N{instantOfferPrice}</h4>
        </div>
      </div>
    </div>
  );
};

InstantOfferCard.propTypes = {
  id: propTypes.any,
  instantOfferBody: propTypes.string,
  instantOfferHeader: propTypes.string,
  instantOfferIcon1: propTypes.any,
  instantOfferIcon2: propTypes.any,
  instantOfferIcon3: propTypes.any,
  instantOfferIcon4: propTypes.any,
  instantOfferInfo1: propTypes.string,
  instantOfferInfo2: propTypes.string,
  instantOfferInfo3: propTypes.string,
  instantOfferInfo4: propTypes.string,
  instantOfferPrice: propTypes.string,
};

export default InstantOfferCard;
