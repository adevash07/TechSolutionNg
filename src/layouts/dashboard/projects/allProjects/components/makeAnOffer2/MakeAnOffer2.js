import React, { useState } from "react";
import { makeAnOfferData } from "../../../data/ProjectsData";
import { BsArrowLeft } from "react-icons/bs";
import { ReactComponent as Star } from "assets/svgs/makeAnOffer/star.svg";
import { ReactComponent as File } from "assets/svgs/makeAnOffer/file.svg";
import { ReactComponent as Flag } from "assets/svgs/makeAnOffer/flag.svg";
import { ReactComponent as MoneyBag } from "assets/svgs/makeAnOffer/money-bag.svg";
import { ReactComponent as Pencil } from "assets/svgs/makeAnOffer/pencil.svg";
import Modal from "../../../components/modal/Modal";
import "./makeAnOffer2.scss";
import LittleCard from "components/dashboard/projects/littleCard/LittleCard";
import { Input, Button } from "components/index";
import MakeAnOffer2Modal from "./makeAnOffer2Modal/MakeAnOffer2Modal";
import { Link } from "react-router-dom";

const MakeAnOffer2 = ({ match }) => {
  const displayedData = makeAnOfferData.find((data) => {
    return parseInt(match.params.id) === data.id;
  });

  const [makeAnOfferModal, setMakeAnOfferModal] = useState(false);

  if (!displayedData) {
    return <h1>No Offer</h1>;
  }

  const {
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
  } = displayedData;

  const mappedSkills = skills.map((skill) => {
    return <LittleCard key={skill.id} text={skill.text} icon={<Pencil />} />;
  });

  const toggleModal = () => {
    setMakeAnOfferModal(!makeAnOfferModal);
  };

  const url = window.location.href;

  const id = url.slice(url.length - 1, url.length);

  return (
    <div className="makeAnOffer2">
      <div className="makeAnOffer2__arrowContainer">
        <Link to={`/dashboard/projects/make-an-offer/${id}`}>
          <div>
            <BsArrowLeft />
          </div>
        </Link>
      </div>
      <div className="makeAnOffer2__contentContainer">
        <div className="makeAnOffer2__container">
          <div className="makeAnOffer2__head">
            <h3 className="makeAnOffer2__header">{header}</h3>
            <div className="makeAnOffer2__headDetails">
              <div className="makeAnOffer2__report">
                <Flag /> {report}
              </div>
              <div className="makeAnOffer2__headerTime">{timeOut}</div>
            </div>
          </div>
          <div className="makeAnOffer2__info">
            <h5 className="makeAnOffer2__infoHeader">{infoHeader}</h5>
            <p className="makeAnOffer2__paragraph">{paragraph}</p>
          </div>
          <div className="makeAnOffer2__skills">
            <h5 className="makeAnOffer2__skillsHeader">
              <Star /> {skillsHeader}
            </h5>
            <div className="makeAnOffer2__skillsContent">{mappedSkills}</div>
          </div>
          <div className="makeAnOffer2__priceFormat">
            <div className="makeAnOffer2__price">
              <div className="makeAnOffer2__priceIcon">
                <MoneyBag />
              </div>
              <div className="makeAnOffer2__priceContent">
                <div className="makeAnOffer2__priceHeader">{priceHeader}</div>
                <div className="makeAnOffer2__priceAmount">{priceAmount}</div>
              </div>
            </div>
            <div className="makeAnOffer2__format">
              <div className="makeAnOffer2__formatIcon">
                <File />
              </div>
              <div className="makeAnOffer2__formatContent">
                <div className="makeAnOffer2__formatHeader">{formatHeader}</div>
                <div className="makeAnOffer2__formatAmount">{formatAmount}</div>
              </div>
            </div>
          </div>
          <form action="" className="makeAnOffer2__form" noValidate>
            <div className="makeAnOffer2__formGroup">
              <Input
                labelText="Offer title"
                inputName="offerTitle"
                inputPlaceholder="Please, give your offer a title"
                inputType="text"
              />
            </div>
            <div className="makeAnOffer2__formGroup">
              <Input
                labelText="Explain your bid"
                inputName="explainYourBid"
                inputPlaceholder="Please, explain why you should be chosen for this project"
                inputType="textArea"
              />
            </div>
            <div className="makeAnOffer2__formGroup">
              <Input
                labelText="Please, attach files for further clarity"
                inputName="files"
                inputType="customFile"
              />
            </div>
            <div className="makeAnOffer2__btnDiv">
              <Button btnType="button" onClick={toggleModal} btnText="Submit" />
            </div>
          </form>
        </div>
      </div>
      <Modal
        modalState={makeAnOfferModal}
        modalContent={<MakeAnOffer2Modal name="John" modalFunc={toggleModal} />}
      />
    </div>
  );
};

export default MakeAnOffer2;
