import { Button, Input } from "components/index";
import { currentProjectsModal } from "layouts/dashboard/projects/data/yourWorksData";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRegTimesCircle } from "react-icons/fa";
import React, { useState } from "react";
import { ReactComponent as Checkbox } from "assets/svgs/makeAnOffer/checkbox.svg";
import "./currentProjectsModalBody.scss";
import propTypes from "prop-types";
import ProjectStatus from "components/dashboard/projects/projectStatus/ProjectStatus";

const CurrentProjectsModalBody = ({ modalFunc }) => {
  const [{ awarded, startedCheck, projectDelivered, clientReview }, setStatus] =
    useState({
      awarded: false,
      startedCheck: false,
      projectDelivered: false,
      clientReview: false,
    });

  const [btnClick, setBtnClick] = useState(false);

  const handleWithdraw = () => {
    setBtnClick(!btnClick);
  };

  const handleChange = (e) => {
    const { name } = e.target;

    setStatus((state) => ({ ...state, [name]: !state[name] }));
  };
  const {
    id,
    header,
    paragraph,
    startTime,
    started,
    deliveryTime,
    delivery,
    budgetType,
    budget,
    priceAmount,
    price,
    statusHeader,
    updateHeader,
    chat,
    reviews,
    membership,
  } = currentProjectsModal;
  return (
    <div key={id} className="currentProjectsModalBody">
      <div className="currentProjectsModalBody__aside">
        <div className="currentProjectsModalBody__imgContainer"></div>
        <div className="currentProjectsModalBody__asideDetails">
          <div className="currentProjectsModalBody__chat">{chat}</div>
          <div className="currentProjectsModalBody__reviews">{reviews}</div>
          <div className="currentProjectsModalBody__membership">
            {membership}
          </div>
        </div>
      </div>
      <div className="currentProjectsModalBody__body">
        <div className="currentProjectsModalBody__head">
          <h4 className="currentProjectsModalBody__header">{header}</h4>
          <div className="currentProjectsModalBody__headClose">
            <FaRegTimesCircle onClick={modalFunc} />
          </div>
        </div>
        <p className="currentProjectsModalBody__paragraph">{paragraph}</p>
        <div className="currentProjectsModalBody__details">
          <div className="currentProjectsModalBody__detailsContainer">
            <h5 className="currentProjectsModalBody__detailsHeader">
              {startTime}
            </h5>
            <div className="currentProjectsModalBody__detailsBody">
              <AiOutlineCalendar />
              {started}
            </div>
          </div>
          <div className="currentProjectsModalBody__detailsContainer">
            <h5 className="currentProjectsModalBody__detailsHeader">
              {deliveryTime}
            </h5>
            <div className="currentProjectsModalBody__detailsBody">
              <AiOutlineCalendar />
              {delivery}
            </div>
          </div>
          <div className="currentProjectsModalBody__detailsContainer">
            <h5 className="currentProjectsModalBody__detailsHeader">
              {budgetType}
            </h5>
            <div className="currentProjectsModalBody__detailsBody">
              {budget}
            </div>
          </div>
          <div className="currentProjectsModalBody__detailsContainer">
            <h5 className="currentProjectsModalBody__detailsHeader">
              {priceAmount}
            </h5>
            <div className="currentProjectsModalBody__detailsBody">{price}</div>
          </div>
        </div>
        <div className="currentProjectsModalBody__status">
          <div className="currentProjectsModalBody__statusHeader">
            {statusHeader}
          </div>
          <div className="currentProjectsModalBody__statusDetails">
            <ProjectStatus active={awarded && true} name="Awarded" />
            <ProjectStatus active={startedCheck && true} name="Started" />
            <ProjectStatus
              active={projectDelivered && true}
              name="Project delivered"
            />
            <ProjectStatus active={clientReview && true} name="Client review" />
          </div>
        </div>
        <div className="currentProjectsModalBody__update">
          <div className="currentProjectsModalBody__updateHeader">
            {updateHeader}
          </div>
          <div className="currentProjectsModalBody__updateCheckbox">
            <Input
              inputType="checkboxCustom"
              inputName="awarded"
              labelText="Awarded"
              onChange={handleChange}
              value={awarded}
            />
            <Input
              inputType="checkboxCustom"
              inputName="startedCheck"
              labelText="Started"
              onChange={handleChange}
              value={startedCheck}
            />
            <Input
              inputType="checkboxCustom"
              inputName="projectDelivered"
              labelText="Project delivered"
              onChange={handleChange}
              value={projectDelivered}
            />
            <Input
              inputType="checkboxCustom"
              inputName="clientReview"
              labelText="Client review"
              onChange={handleChange}
              value={clientReview}
            />
          </div>
        </div>
        <div className="currentProjectsModalBody__btn">
          <Button
            animateCheck={true}
            btnText1="Update"
            btnText2="Updated"
            onClick={handleWithdraw}
            btnIcon={<Checkbox />}
            btnClass={btnClick ? "animate" : ""}
          />
        </div>
      </div>
    </div>
  );
};

CurrentProjectsModalBody.propTypes = {
  modalFunc: propTypes.func,
};

export default CurrentProjectsModalBody;
