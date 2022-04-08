import React from "react";
import "./linkAccount.scss";
import { LinkAccountComponent } from "./linkAccountComponent/LinkAccountComponent";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";

export const LinkAccount = () => {
  return (
    <div className="connectedLinks">
      <div className="connectedLinks__social">
        <p className="connectedLinks__title">
          Connected social media toggle switch to turn on or off!
        </p>
        <LinkAccountComponent
          icons={<FaFacebookF />}
          iconclass="black"
          header="Facebook Login"
          ptext="Updated 1 min ago"
          togglerName="facebook"
          togglerId="facebook"
        />
        <LinkAccountComponent
          icons={<FaLinkedinIn />}
          iconclass="blue"
          header="Linkedin Login"
          ptext="Updated 1 min ago"
          togglerName="facebook"
          togglerId="facebook"
        />
        <LinkAccountComponent
          icons={<FcGoogle />}
          iconclass="red"
          header="Google Login"
          ptext="Updated 1 min ago"
          togglerName="facebook"
          togglerId="facebook"
        />
      </div>
      <div className="unconnectedLinks">
        <p className="unconnectedLinks__title">
          Social media accounts to be connected
        </p>
        <div className="unconnectedLinks__list">
          <i>
            <AiOutlineTwitter />
          </i>
          <p>Connect to Twitter</p>
        </div>
        <p className="unconnectedLinks_status">
          You are not signed in via Twitter
        </p>
      </div>
    </div>
  );
};
export default LinkAccount;
