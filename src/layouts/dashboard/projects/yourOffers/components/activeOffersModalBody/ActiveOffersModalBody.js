import { Button } from "components/index";
import { activeOffersModal } from "layouts/dashboard/projects/data/yourOffersData";
import { FaRegTimesCircle } from "react-icons/fa";
import { ReactComponent as Checkbox } from "assets/svgs/makeAnOffer/checkbox.svg";
import { ReactComponent as Bell } from "assets/svgs/yellowBell.svg";
import React, { useState } from "react";
import "./activeOffersModalBody.scss";
import propTypes from "prop-types";
import { ReactComponent as Project1 } from "assets/svgs/project1.svg";
import { ReactComponent as Project2 } from "assets/svgs/project2.svg";
import { ReactComponent as Project3 } from "assets/svgs/project3.svg";
import { ReactComponent as Project5 } from "assets/svgs/star.svg";

const ActiveOffersModalBody = ({ modalFunc }) => {
  const [btnClick, setBtnClick] = useState(false);

  const {
    offerStatus,
    header,
    paragraph,
    priceHeader,
    priceAmount,
    skillsHeader,
    skills,
    time,
    entries,
    jobs,
  } = activeOffersModal;

  const handleWithdraw = () => {
    setBtnClick(!btnClick);
  };
  return (
    <div className="activeOffersModalBody">
      <div className="activeOffersModalBody__aside">
        <div className="activeOffersModalBody__asideContainer">
          <Bell />
        </div>
      </div>
      <div className="activeOffersModalBody__body">
        <div className="activeOffersModalBody__head">
          <div className="activeOffersModalBody__headStatus">{offerStatus}</div>
          <div className="activeOffersModalBody__headClose">
            <FaRegTimesCircle onClick={modalFunc} />
          </div>
        </div>
        <h5 className="activeOffersModalBody__header">{header}</h5>
        <p className="activeOffersModalBody__paragraph">{paragraph}</p>
        <div className="activeOffersModalBody__price">
          <div className="activeOffersModalBody__priceHeader">
            {priceHeader}
          </div>
          <div className="activeOffersModalBody__priceAmount">
            {priceAmount}
          </div>
        </div>
        <div className="activeOffersModalBody__skills">
          <div className="activeOffersModalBody__skillsIcon">
            <Project5 />
          </div>

          <div className="activeOffersModalBody__skillsHeader">
            {skillsHeader}
          </div>
          <div className="activeOffersModalBody__skillsDetails">{skills}</div>
        </div>
        <div className="activeOffersModalBody__bodyDetails">
          <div className="activeOffersModalBody__timeOut">
            <div className="activeOffersModalBody__timeOutIcon">
              <Project1 />
            </div>
            <div className="activeOffersModalBody__timeOutDetail">{time}</div>
          </div>
          <div className="activeOffersModalBody__entries">
            <div className="activeOffersModalBody__entriesIcon">
              <Project3 />
            </div>
            <div className="activeOffersModalBody__entriesDetail">
              {entries}
            </div>
          </div>
          <div className="activeOffersModalBody__jobs">
            <div className="activeOffersModalBody__jobsIcon">
              <Project2 />
            </div>
            <div className="activeOffersModalBody__jobsDetail">{jobs}</div>
          </div>
        </div>
        <div className="activeOffersModalBody__btn">
          <Button
            animateCheck={true}
            btnText1="Withdraw offer"
            btnText2="Withdrawn"
            onClick={handleWithdraw}
            btnIcon={<Checkbox />}
            btnClass={btnClick ? "animate" : ""}
          />
        </div>
      </div>
    </div>
  );
};

ActiveOffersModalBody.propTypes = {
  modalFunc: propTypes.func,
};

export default ActiveOffersModalBody;
