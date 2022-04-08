import React from "react";
import { Button } from "components";
import { bulb, group, shield, bid, message, Yoga, yogaImg } from "assets";
import "./solution.scss";

const Solution = () => {
  return (
    <section className="landingSolution">
      <div className="landingSolution__container">
        <div className="landingSolution__info">
          <h5 className="landingSolution__subHeader">
            Choose a solution provider
            <span>
              <img src={bulb} alt="" />
            </span>
          </h5>
          <h1 className="landingSolution__mainHeader">
            <span>
              We have all <span>solutions</span>
            </span>
            <span>to your IT projects</span>
          </h1>
          <div className="landingSolution__paragraphs">
            <p>Whatever your needs are, we have a solution.</p>
            <p>
              This platform has high end protection to ensure all transactions
              are safe and fail-proof.
            </p>
            <p>You also can create a team to solve a much bigger need.</p>
          </div>
          <div className="landingSolution__list">
            <div className="landingSolution__item">
              <span>
                <img src={group} alt="" />
              </span>
              <span>Create team</span>
            </div>
            <div className="landingSolution__item">
              <span>
                <img src={shield} alt="" />
              </span>
              <span>High protection</span>
            </div>
            <div className="landingSolution__item">
              <span>
                <img src={bid} alt="" />
              </span>
              <span>Quick bids</span>
            </div>
            <div className="landingSolution__item">
              <span>
                <img src={message} alt="" />
              </span>
              <span>In-message</span>
            </div>
          </div>
          <div className="landingSolution__button">
            <Button btnText="Get started" btnLink="/signup" />
          </div>
        </div>
        <div className="landingSolution__avatar">
          <Yoga />
          <img src={yogaImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Solution;
