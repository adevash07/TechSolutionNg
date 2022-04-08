import React, { useState } from "react";
// import { Button, Input } from "components/index";
import { BsArrowLeft } from "react-icons/bs";
import { allProjectsDetailsData } from "../../../data/AllProjectsData";
import propTypes from "prop-types";

// import girl from "assets/images/girl.png";
// import { ReactComponent as Blackball } from "assets/svgs/makeAnOffer/blackball.svg";
import { ReactComponent as Checkbox } from "assets/svgs/makeAnOffer/checkbox.svg";
import { ReactComponent as Location } from "assets/svgs/makeAnOffer/location.svg";
import { ReactComponent as MoneyBag } from "assets/svgs/makeAnOffer/money-bag.svg";
import { ReactComponent as Star } from "assets/svgs/makeAnOffer/star.svg";
import { ReactComponent as QuestionMark } from "assets/svgs/makeAnOffer/questionmark.svg";
import { ReactComponent as Pencil } from "assets/svgs/makeAnOffer/pencil.svg";
import { Link } from "react-router-dom";
import "./makeABid.scss";
import LittleCard from "components/dashboard/projects/littleCard/LittleCard";
import { Button, Input } from "components/index";

const MakeABid = ({ match }) => {
  const [btnSubmit, setBtnSubmit] = useState(false);
  const displayedData = allProjectsDetailsData.find((data) => {
    return parseInt(match.params.id) === data.id;
  });

  if (!displayedData) {
    return <h1>No Offer</h1>;
  }

  const {
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
    formHeader,
    formHeader2,
    formSubHeader,
  } = displayedData;

  const mappedSkills = skills.map((skill) => {
    return <LittleCard key={skill.id} text={skill.text} icon={<Pencil />} />;
  });

  const url = window.location.href;

  const id = url.slice(url.length - 1, url.length);

  const submitBtn = () => {
    setBtnSubmit(!btnSubmit);
  };
  // timer();

  if (btnSubmit) {
    setTimeout(() => {
      window.location.href = "/dashboard/projects/your-bids";
    }, 3000);
  }

  return (
    <div className="makeABid">
      <div className="makeABid__arrowContainer">
        <Link to={`/dashboard/projects/all-projects-detail/${id}`}>
          <div>
            <BsArrowLeft />
          </div>
        </Link>
      </div>
      <div className="makeABid__contentContainer">
        <div className="makeABid__head">
          <h3 className="makeABid__header">{header}</h3>
          <div className="makeABid__headerTime">{timeOut}</div>
        </div>
        <div className="makeABid__info">
          <h5 className="makeABid__infoHeader">{infoHeader}</h5>
          <p className="makeABid__paragraph">{paragraph}</p>
        </div>
        <div className="makeABid__skills">
          <h5 className="makeABid__skillsHeader">
            <Star /> {skillsHeader}
          </h5>
          <div className="makeABid__skillsContent">{mappedSkills}</div>
        </div>
        <div className="makeABid__details">
          <div className="makeABid__detailContainer">
            <div className="makeABid__detailIcon">
              <Location />
            </div>
            <div className="makeABid__detailContent">
              <div className="makeABid__detailHeader">{locationHeader}</div>
              <div className="makeABid__detailbody">{location}</div>
            </div>
          </div>
          <div className="makeABid__detailContainer">
            <div className="makeABid__detailIcon">
              <MoneyBag />
            </div>
            <div className="makeABid__detailContent">
              <div className="makeABid__detailHeader">{priceHeader}</div>
              <div className="makeABid__detailbody">{price}</div>
            </div>
          </div>
          <div className="makeABid__detailContainer">
            <div className="makeABid__detailIcon"></div>
            <div className="makeABid__detailContent">
              <div className="makeABid__detailHeader">{budgetHeader}</div>
              <div className="makeABid__detailbody">{budgetType}</div>
            </div>
          </div>
          <div className="makeABid__detailContainer">
            <div className="makeABid__detailIcon"></div>
            <div className="makeABid__detailContent">
              <div className="makeABid__detailHeader">{experienceHeader}</div>
              <div className="makeABid__detailbody">{experience}</div>
            </div>
          </div>
        </div>
        <div className="makeABid__questions">
          <h5 className="makeABid__questionsHeader">{questionsHeader}</h5>
          <div className="makeABid__questionsContainer">
            <div className="makeABid__questionsItem">{question1}</div>
            <div className="makeABid__questionsItem">{question2}</div>
          </div>
        </div>
        <form action="" className="makeABid__form" noValidate>
          <h2 className="makeABid__formHeader">
            {formHeader} <QuestionMark />
          </h2>
          <h5 className="makeABid__formSubHeader">{formSubHeader}</h5>
          <Input
            inputType="textArea"
            labelText="Explain your bid"
            inputPlaceholder="Please, explain why you may be the best fit for the project"
          />
          <Input
            inputType="text"
            labelText="How many years of design experience do you have?"
          />
          <Input
            inputType="customFile"
            labelText="Please, attach files for further clarity"
          />
          <h2 className="makeABid__formHeader">
            {formHeader2} <span>(Optional)</span>
          </h2>
          <Input inputType="customFile" labelText="Project schedule" />
          <Input inputType="customFile" labelText="Work breakdown structure" />
          <Input inputType="customFile" labelText="Risk register log" />
          <Input inputType="customFile" labelText="Progress report plan" />
          <div className="makeABid__formBtn">
            <Button
              onClick={submitBtn}
              btnClass={btnSubmit ? "animate" : ""}
              animateCheck={true}
              btnType="button"
              btnText1="Submit"
              btnText2="Submitted"
              btnIcon={<Checkbox />}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

MakeABid.propTypes = {
  match: propTypes.any,
};

export default MakeABid;
