import React from "react";
import noPublicationIllustrator from "assets/images/nopublicationIllustrator.png";
import { Link } from "react-router-dom";
import "./profileInfoPublications.scss";
import AddIcon from "../addIcon";

const ProfileInfoPublications = () => {
  return (
    <div className="publications background--dashed">
      <header className="publications__header">
        <h1 className="header--title">Your publications</h1>
        <span className="label--small">Your publication details</span>
      </header>
      <div className="publications__info">
        <img src={noPublicationIllustrator} alt="no publication illustartor" />
        <span className="publication__none">
          <span>You have no publications yet</span>
          <span>
            <span>Click the</span>
            <Link className="text-blue">add button</Link>
            <span>to add one</span>
          </span>
        </span>
      </div>
      <div className="publications__add">
        <span className="">
          <button type="button">Add publications</button>
        </span>
        <span className="addIcon">
          <AddIcon size={28} />
        </span>
      </div>
    </div>
  );
};

export default ProfileInfoPublications;
