import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column">
          <h4 className="footer__header">IT Solutions</h4>
          <div className="footer__list">
            <span>Categories</span>
            <span>IT Solutions</span>
            <span>Contests</span>
            <span>Experience</span>
            <span>Projects</span>
            <span>Talents</span>
          </div>
        </div>
        <div className="footer__column">
          <h4 className="footer__header">About</h4>
          <div className="footer__list">
            <span>How it works</span>
            <span>Protection</span>
            <span>News</span>
            <span>Investor</span>
          </div>
        </div>
        <div className="footer__column">
          <h4 className="footer__header">Terms</h4>
          <div className="footer__list">
            <span>Privacy Policy</span>
            <span>Copyright Policy</span>
            <span>Terms and Conditions</span>
            <span>Code of Conduct</span>
            <span>Fees and Charges</span>
          </div>
        </div>
        <div className="footer__column">
          <h4 className="footer__header">Apps</h4>
          <div className="footer__socials">
            <div className="footer__socialContainer">
              <div className="footer__socialIcon">
                <FaApple />
              </div>
              <div className="footer__socialInfo">
                <span className="footer__socialHeader">Available on</span>
                <span className="footer__socialSubHeader">App Store</span>
              </div>
            </div>
            <div className="footer__socialContainer">
              <div className="footer__socialIcon">
                <FaGooglePlay />
              </div>
              <div className="footer__socialInfo">
                <span className="footer__socialHeader">Available on</span>
                <span className="footer__socialSubHeader">Play Store</span>
              </div>
            </div>
            <h3 className="footer__listHeader">Get in touch</h3>
            <div className="footer__list">
              <span>
                <AiOutlineInstagram />
              </span>
              <span>
                <AiOutlineTwitter />
              </span>
              <span>
                <GrFacebookOption />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
