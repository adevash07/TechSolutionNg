import React from "react";
import propTypes from "prop-types";
import Ratings from "components/dashboard/projects/ratings/Ratings";
import { Button } from "components/index";
import { BsArrowLeft } from "react-icons/bs";
import { makeAnOfferData } from "../../../data/ProjectsData";

import { ReactComponent as Star } from "assets/svgs/makeAnOffer/star.svg";
import { ReactComponent as Blackball } from "assets/svgs/makeAnOffer/blackball.svg";
import { ReactComponent as Checkbox } from "assets/svgs/makeAnOffer/checkbox.svg";
import { ReactComponent as File } from "assets/svgs/makeAnOffer/file.svg";
import { ReactComponent as Flag } from "assets/svgs/makeAnOffer/flag.svg";
// import { ReactComponent as Html } from "assets/svgs/makeAnOffer/html.svg";
import { ReactComponent as Location } from "assets/svgs/makeAnOffer/location.svg";
import { ReactComponent as MoneyBag } from "assets/svgs/makeAnOffer/money-bag.svg";
import { ReactComponent as Pencil } from "assets/svgs/makeAnOffer/pencil.svg";
import { ReactComponent as QuestionMark } from "assets/svgs/makeAnOffer/questionmark.svg";
import { ReactComponent as Person } from "assets/svgs/makeAnOffer/person.svg";
import "./makeAnOffer.scss";
import LittleCard from "components/dashboard/projects/littleCard/LittleCard";
import { Link } from "react-router-dom";

const MakeAnOffer = ({ match }) => {
  const displayedData = makeAnOfferData.find((data) => {
    return parseInt(match.params.id) === data.id;
  });

  if (!displayedData) {
    return <h1>No Offer</h1>;
  }

  const {
    id,
    header,
    report,
    timeOut,
    infoHeader,
    paragraph,
    skillsHeader,
    skills,
    priceAmount,
    priceHeader,
    formatHeader,
    formatAmount,
    filesHeader,
    clientHeader,
    clientLocation,
    clientRating,
    clientJobOpenings,
    clientMembershipDate,
    verificationHeader,
    verificationChecked1,
    verificationChecked2,
    verificationChecked3,
    verificationChecked4,
    verificationChecked5,
    verificationName1,
    verificationName2,
    verificationName3,
    verificationName4,
    verificationName5,
  } = displayedData;

  const mappedSkills = skills.map((skill) => {
    return <LittleCard key={skill.id} text={skill.text} icon={<Pencil />} />;
  });

  return (
    <>
      {displayedData ? (
        <div className="makeAnOffer">
          <div className="makeAnOffer__arrowContainer">
            <Link to="/dashboard/projects/instant-offers">
              <div>
                <BsArrowLeft />
              </div>
            </Link>
          </div>
          <div className="makeAnOffer__contentContainer">
            <div className="makeAnOffer__head">
              <h3 className="makeAnOffer__header">{header}</h3>
              <div className="makeAnOffer__headDetails">
                <div className="makeAnOffer__report">
                  <Flag /> {report}
                </div>
                <div className="makeAnOffer__headerTime">{timeOut}</div>
              </div>
            </div>
            <div className="makeAnOffer__info">
              <h5 className="makeAnOffer__infoHeader">{infoHeader}</h5>
              <p className="makeAnOffer__paragraph">{paragraph}</p>
            </div>
            <div className="makeAnOffer__skills">
              <h5 className="makeAnOffer__skillsHeader">
                <Star /> {skillsHeader}
              </h5>
              <div className="makeAnOffer__skillsContent">{mappedSkills}</div>
            </div>
            <div className="makeAnOffer__priceFormat">
              <div className="makeAnOffer__price">
                <div className="makeAnOffer__priceIcon">
                  <MoneyBag />
                </div>
                <div className="makeAnOffer__priceContent">
                  <div className="makeAnOffer__priceHeader">{priceHeader}</div>
                  <div className="makeAnOffer__priceAmount">{priceAmount}</div>
                </div>
              </div>
              <div className="makeAnOffer__format">
                <div className="makeAnOffer__formatIcon">
                  <File />
                </div>
                <div className="makeAnOffer__formatContent">
                  <div className="makeAnOffer__formatHeader">
                    {formatHeader}
                  </div>
                  <div className="makeAnOffer__formatAmount">
                    {formatAmount}
                  </div>
                </div>
              </div>
            </div>
            <div className="makeAnOffer__files">
              <h5 className="makeAnOffer__filesHeader">
                {filesHeader} <QuestionMark />
              </h5>
            </div>
            <div className="makeAnOffer__client">
              <div className="makeAnOffer__clientHeader">{clientHeader}</div>
              <div className="makeAnOffer__clientdetails">
                <div className="makeAnOffer__clientLocation">
                  <Location />
                  <span className="makeAnOffer__clientPlace">
                    {clientLocation}
                  </span>
                </div>
                <div className="makeAnOffer__clientRating">
                  {clientRating ? (
                    <>
                      <Person />
                      <Ratings ratingValue={clientRating} />
                    </>
                  ) : (
                    <>
                      <Person />
                      <span className="makeAnOffer__rating">
                        No ratings yet
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="makeAnOffer__clientJobOpenings">
                {clientJobOpenings}
              </div>
              <div className="makeAnOffer__clientMembershipDate">
                {clientMembershipDate}
              </div>
            </div>
            <div className="makeAnOffer__verification">
              <h5 className="makeAnOffer__verificationHeader">
                {verificationHeader}
              </h5>
              <div className="makeAnOffer__verificationList">
                <div className="makeAnOffer__verificationItem">
                  <span className="makeAnOffer__verificationName">
                    {verificationName1}
                  </span>
                  <span className="makeAnOffer__verificationCheck">
                    {verificationChecked1 ? <Checkbox /> : <Blackball />}
                  </span>
                </div>
                <div className="makeAnOffer__verificationItem">
                  <span className="makeAnOffer__verificationName">
                    {verificationName2}
                  </span>
                  <span className="makeAnOffer__verificationCheck">
                    {verificationChecked2 ? <Checkbox /> : <Blackball />}
                  </span>
                </div>
                <div className="makeAnOffer__verificationItem">
                  <span className="makeAnOffer__verificationName">
                    {verificationName3}
                  </span>
                  <span className="makeAnOffer__verificationCheck">
                    {verificationChecked3 ? <Checkbox /> : <Blackball />}
                  </span>
                </div>
                <div className="makeAnOffer__verificationItem">
                  <span className="makeAnOffer__verificationName">
                    {verificationName4}
                  </span>
                  <span className="makeAnOffer__verificationCheck">
                    {verificationChecked4 ? <Checkbox /> : <Blackball />}
                  </span>
                </div>
                <div className="makeAnOffer__verificationItem">
                  <span className="makeAnOffer__verificationName">
                    {verificationName5}
                  </span>
                  <span className="makeAnOffer__verificationCheck">
                    {verificationChecked5 ? <Checkbox /> : <Blackball />}
                  </span>
                </div>
              </div>
            </div>
            <div className="makeAnOffer__buttons">
              <Button
                btnText="Make a Bid"
                btnLink={`/dashboard/projects/make-an-offer2/${id}`}
              />
              <Button btnText="Save offer" />
            </div>
          </div>
        </div>
      ) : (
        <h1>no offer</h1>
      )}
    </>
  );
};

MakeAnOffer.propTypes = {
  match: propTypes.object,
};

export default MakeAnOffer;
