import { Button } from "components/index";
import React from "react";
import propTypes from "prop-types";
import { FaRegTimesCircle } from "react-icons/fa";
import "./closedBidsModalBody.scss";

const ClosedBidsModalBody = ({ modalFunc }) => {
  return (
    <div className="closedBidsModalBody">
      <div className="closedBidsModalBody__container">
        <div className="closedBidsModalBody__head">
          <h2>Confirm delete</h2>
          <FaRegTimesCircle onClick={modalFunc} />
        </div>
        <div className="closedBidsModalBody__btns">
          <Button btnText="yes" />
          <Button btnText="No" />
        </div>
      </div>
    </div>
  );
};

ClosedBidsModalBody.propTypes = {
  modalFunc: propTypes.func,
};

export default ClosedBidsModalBody;
