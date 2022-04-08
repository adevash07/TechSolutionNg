import React from "react";
import "./protection.scss";
import { BiLock } from "react-icons/bi";
import {
  pounds,
  umbrella,
  protectionShield,
  robbery,
  personIcon,
} from "assets";

const Protection = () => {
  return (
    <section className="landingProtection">
      <div className="landingProtection__container">
        <div className="landingProtection__info">
          <h5 className="landingProtection__subHeader">
            Pay Protection{" "}
            <span>
              <img src={pounds} alt="" />
            </span>
          </h5>
          <h1 className="landingProtection__mainHeader">
            Your funds are <span>safe</span> in our system, here is how
          </h1>
          <div className="landingProtection__paragraphs">
            <p>
              We are keen to ensure there is adequate for your funds on IT
              Solutions
            </p>
            <p>
              High end solutions are in place to protect payments and customer
              interaction
            </p>
            <p>We use world class standards to give supreme safety of funds.</p>
          </div>
        </div>
        <div className="landingProtection__animation">
          <div className="landingProtection__animate1">
            <div className="landingProtection__animate1Container">
              <div className="landingProtection__animateIcon purple">
                <img src={umbrella} alt="" />
              </div>
              <h4>Anti-fraud protection</h4>
              <div>
                <img src={robbery} alt="" />
              </div>
            </div>
          </div>
          <div className="landingProtection__animate2">
            <div>
              <div>
                <h4>
                  <img src={protectionShield} alt="" /> Risk-Free
                </h4>
                <p>
                  You can perform risk free payments with encryption and data
                </p>
              </div>
            </div>
            <div>
              <span className="landingProtection__animateIcon green">
                <BiLock />
              </span>
              <h4>Efficient encryption</h4>
              <p>
                You can perform risk free payments with encryption. The safety
                net we provide is world class and efficient
              </p>
              <span className="landingProtection__span green">Efficient</span>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="landingProtection__animate3">
            <div className="landingProtection__animate3Container">
              <div className="landingProtection__animateIcon orange">
                <img src={personIcon} alt="" />
              </div>
              <h4>24/7 Support</h4>
              <p>You can perform risk free payments with encryption</p>
              <span className="landingProtection__span orange">Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protection;
