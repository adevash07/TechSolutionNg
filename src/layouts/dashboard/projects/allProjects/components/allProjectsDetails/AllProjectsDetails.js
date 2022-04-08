import React from "react";
import { Button } from "components/index";
import { BsArrowLeft } from "react-icons/bs";
import { allProjectsDetailsData } from "../../../data/AllProjectsData";
import propTypes from "prop-types";

import girl from "assets/images/girl.png";
import { ReactComponent as Blackball } from "assets/svgs/makeAnOffer/blackball.svg";
import { ReactComponent as Checkbox } from "assets/svgs/makeAnOffer/checkbox.svg";
import { ReactComponent as Location } from "assets/svgs/makeAnOffer/location.svg";
import { ReactComponent as MoneyBag } from "assets/svgs/makeAnOffer/money-bag.svg";
import { ReactComponent as Star } from "assets/svgs/makeAnOffer/star.svg";
import { ReactComponent as QuestionMark } from "assets/svgs/makeAnOffer/questionmark.svg";
import { ReactComponent as Pencil } from "assets/svgs/makeAnOffer/pencil.svg";
import { Link } from "react-router-dom";
import LittleCard from "components/dashboard/projects/littleCard/LittleCard";
import "./allProjectsDetails.scss";

const AllProjectsDetails = ({ match }) => {
  const displayedData = allProjectsDetailsData.find((data) => {
    return parseInt(match.params.id) === data.id;
  });

  if (!displayedData) {
    return <h1>No Offer</h1>;
  }

  const {
    id,
    header,
    timeOut,
    infoHeader,
    paragraph,
    skillsHeader,
    skills,
    locationHeader,
    location,
    priceHeader,
    price,
    budgetHeader,
    budgetType,
    experienceHeader,
    experience,
    questionsHeader,
    question1,
    question2,
    jobHeader,
    jobProposal,
    jobInvites,
    jobUnanswered,
    clientHeader,
    clientLocation,
    clientReview,
    clientSubHeader,
    clientJobOpenings,
    clientMembershipDate,
    verificationHeader,
    verificationName1,
    verificationName2,
    verificationName3,
    verificationName4,
    verificationName5,
    verificationChecked1,
    verificationChecked2,
    verificationChecked3,
    verificationChecked4,
    verificationChecked5,
  } = displayedData;

  const mappedSkills = skills.map((skill) => {
    return <LittleCard key={skill.id} text={skill.text} icon={<Pencil />} />;
  });

  return (
    <div className="allProjectsDetails">
      <div className="allProjectsDetails__arrowContainer">
        <Link to="/dashboard/projects">
          <div>
            <BsArrowLeft />
          </div>
        </Link>
      </div>
      <div className="allProjectsDetails__contentContainer">
        <div className="allProjectsDetails__head">
          <h3 className="allProjectsDetails__header">{header}</h3>
          <div className="allProjectsDetails__headerTime">{timeOut}</div>
        </div>
        <div className="allProjectsDetails__info">
          <h5 className="allProjectsDetails__infoHeader">{infoHeader}</h5>
          <p className="allProjectsDetails__paragraph">{paragraph}</p>
        </div>
        <div className="allProjectsDetails__skills">
          <h5 className="allProjectsDetails__skillsHeader">
            <Star /> {skillsHeader}
          </h5>
          <div className="allProjectsDetails__skillsContent">
            {mappedSkills}
          </div>
        </div>
        <div className="allProjectsDetails__details">
          <div className="allProjectsDetails__detailContainer">
            <div className="allProjectsDetails__detailIcon">
              <Location />
            </div>
            <div className="allProjectsDetails__detailContent">
              <div className="allProjectsDetails__detailHeader">
                {locationHeader}
              </div>
              <div className="allProjectsDetails__detailbody">{location}</div>
            </div>
          </div>
          <div className="allProjectsDetails__detailContainer">
            <div className="allProjectsDetails__detailIcon">
              <MoneyBag />
            </div>
            <div className="allProjectsDetails__detailContent">
              <div className="allProjectsDetails__detailHeader">
                {priceHeader}
              </div>
              <div className="allProjectsDetails__detailbody">{price}</div>
            </div>
          </div>
          <div className="allProjectsDetails__detailContainer">
            <div className="allProjectsDetails__detailIcon"></div>
            <div className="allProjectsDetails__detailContent">
              <div className="allProjectsDetails__detailHeader">
                {budgetHeader}
              </div>
              <div className="allProjectsDetails__detailbody">{budgetType}</div>
            </div>
          </div>
          <div className="allProjectsDetails__detailContainer">
            <div className="allProjectsDetails__detailIcon"></div>
            <div className="allProjectsDetails__detailContent">
              <div className="allProjectsDetails__detailHeader">
                {experienceHeader}
              </div>
              <div className="allProjectsDetails__detailbody">{experience}</div>
            </div>
          </div>
        </div>
        <div className="allProjectsDetails__questions">
          <h5 className="allProjectsDetails__questionsHeader">
            {questionsHeader}
          </h5>
          <div className="allProjectsDetails__questionsContainer">
            <div className="allProjectsDetails__questionsItem">{question1}</div>
            <div className="allProjectsDetails__questionsItem">{question2}</div>
          </div>
        </div>
        <div className="allProjectsDetails__job">
          <h5 className="allProjectsDetails__jobHeader">
            {jobHeader} <QuestionMark />
          </h5>
          <div className="allProjectsDetails__jobContainer">
            <div className="allProjectsDetails__jobItem">{jobProposal}</div>
            <div className="allProjectsDetails__jobItem">{jobInvites}</div>
            <div className="allProjectsDetails__jobItem">{jobUnanswered}</div>
          </div>
        </div>
        <div className="allProjectsDetails__client">
          <div className="allProjectsDetails__clientHeader">{clientHeader}</div>
          <div className="allProjectsDetails__clientdetails">
            <div className="allProjectsDetails__clientImgContainer">
              <img src={girl} alt="" />
            </div>
            <div className="allProjectsDetails__clientlocationReview">
              <div className="allProjectsDetails__clientLocation">
                <Location />
                <span className="allProjectsDetails__clientPlace">
                  {clientLocation}
                </span>
              </div>
              <div className="allProjectsDetails__clientReviews">
                <Location />
                <span className="allProjectsDetails__clientPlace">
                  {clientReview}
                </span>
              </div>
            </div>
          </div>
          <h5 className="allProjectsDetails__clientSubHeader">
            {clientSubHeader}
          </h5>
          <p className="allProjectsDetails__clientParagraph">
            {clientJobOpenings}
          </p>
          <p className="allProjectsDetails__clientParagraph">
            {clientMembershipDate}
          </p>
        </div>
        <div className="allProjectsDetails__verification">
          <h5 className="allProjectsDetails__verificationHeader">
            {verificationHeader}
          </h5>
          <div className="allProjectsDetails__verificationList">
            <div className="allProjectsDetails__verificationItem">
              <span className="allProjectsDetails__verificationName">
                {verificationName1}
              </span>
              <span className="allProjectsDetails__verificationCheck">
                {verificationChecked1 ? <Checkbox /> : <Blackball />}
              </span>
            </div>
            <div className="allProjectsDetails__verificationItem">
              <span className="allProjectsDetails__verificationName">
                {verificationName2}
              </span>
              <span className="allProjectsDetails__verificationCheck">
                {verificationChecked2 ? <Checkbox /> : <Blackball />}
              </span>
            </div>
            <div className="allProjectsDetails__verificationItem">
              <span className="allProjectsDetails__verificationName">
                {verificationName3}
              </span>
              <span className="allProjectsDetails__verificationCheck">
                {verificationChecked3 ? <Checkbox /> : <Blackball />}
              </span>
            </div>
            <div className="allProjectsDetails__verificationItem">
              <span className="allProjectsDetails__verificationName">
                {verificationName4}
              </span>
              <span className="allProjectsDetails__verificationCheck">
                {verificationChecked4 ? <Checkbox /> : <Blackball />}
              </span>
            </div>
            <div className="allProjectsDetails__verificationItem">
              <span className="allProjectsDetails__verificationName">
                {verificationName5}
              </span>
              <span className="allProjectsDetails__verificationCheck">
                {verificationChecked5 ? <Checkbox /> : <Blackball />}
              </span>
            </div>
          </div>
        </div>
        <div className="allProjectsDetails__buttons">
          {/* <Link to={`/dashboard/projects/make-a-bid/${id}`}>
            <Button btnText="Make an Bid" />
          </Link> */}
          <Button
            btnText="Make a Bid"
            btnLink={`/dashboard/projects/make-a-bid/${id}`}
          />
          <Button btnText="Save job" />
        </div>
      </div>
    </div>
  );
};

AllProjectsDetails.propTypes = {
  match: propTypes.any,
};

export default AllProjectsDetails;
