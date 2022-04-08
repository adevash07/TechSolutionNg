import { Button } from "components/index";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { openBidsModal } from "layouts/dashboard/projects/data/yourBidsData";
import { ReactComponent as Star } from "assets/svgs/star.svg";
import { ReactComponent as Award } from "assets/svgs/project3.svg";
import { ReactComponent as Checkbox } from "assets/svgs/makeAnOffer/checkbox.svg";
import { ReactComponent as Timer } from "assets/svgs/project1.svg";
import React, { useState } from "react";
import propTypes from "prop-types";
import "./openBidsModalBody.scss";

const OpenBidsModalBody = ({ modalFunc }) => {
  const [btnClick, setBtnClick] = useState(false);
  const {
    modalHeader,
    bodyHeader,
    paragraph,
    startTime,
    started,
    deliveryTime,
    delivery,
    budgetType,
    budget,
    priceAmount,
    price,
    skillsHeader,
    skills,
    bidsNumber,
    bidStatus,
    clientHeader,
    clientLocation,
    clientReviews,
    clientPostedJobs,
    clientMembership,
  } = openBidsModal;

  const handleWithdraw = () => {
    setBtnClick(!btnClick);
  };

  return (
    <div className="openBidsModalBody">
      <div className="openBidsModalBody__container">
        <div className="openBidsModalBody__image">
          <div className="openBidsModalBody__imgContainer"></div>
        </div>
        <div className="openBidsModalBody__body">
          <div className="openBidsModalBody__head">
            <h5 className="openBidsModalBody__header">{modalHeader}</h5>
            <span onClick={modalFunc} className="openBidsModalBody__headClose">
              <FaRegTimesCircle />
            </span>
          </div>
          <h4 className="openBidsModalBody__bodyHeader">{bodyHeader}</h4>
          <p className="openBidsModalBody__paragraph">{paragraph}</p>
          <div className="openBidsModalBody__details">
            <div className="openBidsModalBody__detailsContainer">
              <div className="openBidsModalBody__detailsHeader">
                {startTime}
              </div>
              <div className="openBidsModalBody__detailsBody">
                <AiOutlineCalendar /> {started}
              </div>
            </div>
            <div className="openBidsModalBody__detailsContainer">
              <div className="openBidsModalBody__detailsHeader">
                {deliveryTime}
              </div>
              <div className="openBidsModalBody__detailsBody">
                <AiOutlineCalendar /> {delivery}
              </div>
            </div>
            <div className="openBidsModalBody__detailsContainer">
              <div className="openBidsModalBody__detailsHeader">
                {budgetType}
              </div>
              <div className="openBidsModalBody__detailsBody">{budget}</div>
            </div>
            <div className="openBidsModalBody__detailsContainer">
              <div className="openBidsModalBody__detailsHeader">
                {priceAmount}
              </div>
              <div className="openBidsModalBody__detailsBody">{price}</div>
            </div>
          </div>
          <div className="openBidsModalBody__skillsBids">
            <div className="openBidsModalBody__skills">
              <div className="openBidsModalBody__skillsStar">
                <Star />
              </div>
              <h4 className="openBidsModalBody__skillsHeader">
                {skillsHeader}:
              </h4>
              <span className="openBidsModalBody__skillsdetails">{skills}</span>
            </div>
            <div className="openBidsModalBody__bid">
              <div className="openBidsModalBody__bidStatus">
                <span>
                  <Timer />
                </span>{" "}
                {bidStatus}
              </div>
              <div className="openBidsModalBody__bidNumber">
                <span>
                  <Award />
                </span>{" "}
                {bidsNumber}
              </div>
            </div>
          </div>
          <div className="openBidsModalBody__client">
            <h4 className="openBidsModalBody__clientHeader">{clientHeader}</h4>
            <div className="openBidsModalBody__clientDetails">
              <div className="openBidsModalBody__clientLocation">
                <IoLocationSharp />
                {clientLocation}
              </div>
              <div className="openBidsModalBody__clientReviews">
                <BsFillPersonFill />
                {clientReviews}
              </div>
              <div className="openBidsModalBody__clientJobs">
                {clientPostedJobs}
              </div>
              <div className="openBidsModalBody__clientMember">
                {clientMembership}
              </div>
            </div>
          </div>
          <div className="openBidsModalBody__btn">
            <Button
              animateCheck={true}
              onClick={handleWithdraw}
              btnText1="Withdraw bid"
              btnText2="Withdrawn"
              btnIcon={<Checkbox />}
              btnClass={btnClick ? "animate" : ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

OpenBidsModalBody.propTypes = {
  modalFunc: propTypes.any,
};

export default OpenBidsModalBody;
