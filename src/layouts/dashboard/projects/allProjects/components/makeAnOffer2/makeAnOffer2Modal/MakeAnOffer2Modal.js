import React from "react";
import "./makeAnOffer2Modal.scss";
import propTypes from "prop-types";
import { FaRegTimesCircle } from "react-icons/fa";
import { Button } from "components/index";
import { Link } from "react-router-dom";

const MakeAnOffer2Modal = ({ name, modalFunc }) => {
  return (
    <div className="makeAnOffer2Modal">
      <div className="makeAnOffer2Modal__container">
        <div className="makeAnOffer2Modal__head">
          <h2 className="makeAnOffer2Modal__header">
            Great job {name}, your offer has been sent in!
          </h2>
          <span className="makeAnOffer2Modal__icon">
            <Link to="/dashboard/invoices/resend">
              <FaRegTimesCircle onClick={modalFunc} />
            </Link>
          </span>
        </div>
        <div className="makeAnOffer2Modal__body">
          <p className="makeAnOffer2Modal__paragraph">
            If you have been selected for this offer, you will be notified.
          </p>
          <p className="makeAnOffer2Modal__paragraph">
            You can go to your offers to keep track of all your offers!
          </p>
        </div>
        <div className="makeAnOffer2Modal__btnContainer">
          <Link to="/dashboard/projects/your-offers">
            <Button btnText="Go to my offers" />
          </Link>
        </div>
      </div>
    </div>
  );
};

MakeAnOffer2Modal.propTypes = {
  name: propTypes.string,
  modalFunc: propTypes.func,
};

export default MakeAnOffer2Modal;
