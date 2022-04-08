import React from "react";
import { Button } from "components";
import { LandingBoyBg, head, medal, value, movieGuy, table } from "assets";
import "./experience.scss";

const Experience = () => {
  return (
    <section className="landingExperience">
      <div className="landingExperience__container">
        <div className="landingExperience__avatar">
          <LandingBoyBg />
          <img src={movieGuy} alt="" />
          <img src={table} alt="" />
        </div>
        <div className="landingExperience__info">
          <div>
            <h5 className="landingExperience__subHeader">
              Find an experience
              <span>
                <img src={head} alt="" />
              </span>
            </h5>
            <h1 className="landingExperience__mainHeader">
              <span>Find an immersive</span> <span>experience</span>
            </h1>
            <div className="landingExperience__paragraphs">
              <span>There is no limit to what you can do on IT solutions</span>
              <span>We have got you covered in all departments,</span>
              <span>Just think and we will do it even</span>
              <span>in less time!</span>
            </div>
          </div>
          <div>
            <div className="landingExperience__shuffle">
              <div>
                <span>
                  <img src={medal} alt="" />
                </span>
              </div>
              <div>
                <h4>Shuffle contest & choose what suits you</h4>
                <p>
                  We have Africa&apos;s top talent on our platform, start now to
                  have the full experience.
                </p>
              </div>
            </div>
            <div className="landingExperience__shuffle">
              <div>
                <span>
                  <img src={value} alt="" />
                </span>
              </div>
              <div>
                <h4>Get the top talents available</h4>
                <p>
                  We have Africa&apos;s top talent on our platform, start now to
                  have the full experience.
                </p>
              </div>
            </div>
          </div>
          <div className="landingExperience__button">
            <Button btnText="Find experience" btnLink="/signup" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
