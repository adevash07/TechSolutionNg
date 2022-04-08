import React from "react";
import ProfileImg from "assets/images/def_user.jpeg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import ShowAll from "../showAll";

import "./profileInfoRecommendation.scss";

const ProfileInfoRecommendation = () => {
  return (
    <div className="recommendation background--dashed">
      <header className="recommendation__header">
        <h1 className="header--title">Your recommendations</h1>
        <span className="label--small">Your recommendations details</span>
      </header>
      <div className="recommendation__info">
        <div className="recommendation__info__container">
          <div className="recommendee__photoBox">
            <img
              src={ProfileImg}
              alt="recommendee-photo"
              className="recommendee__photo"
            />
          </div>
          <div className="recommendee__dataBox">
            <span className="recommendee__name">Bob Shayman</span>
            <span className="recommendee__profession">Product Designer</span>
            <span className="recommendee__currentEmployer text-grey">
              Paystack
            </span>
          </div>
        </div>
        <div className="recommendee__writeUp">
          <span className="quotationMark quotationMark__left">
            <FaQuoteLeft />
          </span>
          <span className="recommendee__writeUp__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
            assumenda, porro odit eveniet quae eius voluptatum accusantium
            perferendis totam pariatur impedit, earum quis ut nemo, hic
            excepturi nam! Voluptas, magni eius voluptatem voluptatum possimus
            quod repellat nisi eos cumque, corporis exercitationem, assumenda
          </span>
          <span className="quotationMark quotationMark__right">
            <FaQuoteRight />
          </span>
        </div>
      </div>
      <ShowAll />
    </div>
  );
};

export default ProfileInfoRecommendation;
