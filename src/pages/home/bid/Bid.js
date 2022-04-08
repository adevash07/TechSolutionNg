import React from "react";
import { LandingBoyBg, landingBoy } from "assets";
import { Button } from "components";
import "./bid.scss";

const Bid = () => {
  return (
    <div className="landingBid">
      <div className="landingBid__container">
        <div className="landingBid__avatar">
          <LandingBoyBg />
          <img src={landingBoy} alt="" />
        </div>
        <div className="landingBid__info">
          <div>
            <h5 className="landingBid__subHeader">
              Bid for projects
              <span>{/* <img src={head} alt="" /> */}</span>
            </h5>
            <h1 className="landingBid__mainHeader">
              <span>Get access to bid for</span> <span>projects</span>
            </h1>
            <div className="landingBid__paragraphs">
              <span>There is no limit to what you can do on IT solutions</span>
              <span>We have got you covered in all departments,</span>
              <span>Just think and we will do it even</span>
              <span>in less time!</span>
            </div>
          </div>
          <div className="landingBid__button">
            <Button btnText="Find projects" btnLink="/signup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bid;
