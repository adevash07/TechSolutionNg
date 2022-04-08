import React from "react";
import { Button } from "components";
import "./postProject.scss";
import {
  LandingProject,
  LandingProjectSub,
  postProjectPlane,
  postProjectProjectImg,
} from "assets";

const PostProject = () => {
  return (
    <section className="landingProject">
      <div className="landingProject__container">
        <div className="landingProject__info">
          <div className="landingProject__subHeader">
            <h5>Post Project</h5>
            <span>
              <img src={postProjectPlane} alt="" />
            </span>
          </div>
          <h1 className="landingProject__mainHeader">
            <span>
              Post your <span>project</span> now.
            </span>
            <span>Get quotes in mins!</span>
          </h1>
          <div className="landingProject__paragraphs">
            <span>There is no limit to what you can do on IT solutions</span>
            <span>We have got you covered in all departments</span>
            <span>Just think it and we will do it, even</span>
            <span>in less time!</span>
          </div>
          <div className="landingProject__button">
            <Button btnText="Post Project" btnLink="/signup" />
          </div>
        </div>
        <div className="landingProject__avatar">
          <div className="landingProject__avatarContainer">
            <LandingProject />
            <img src={postProjectProjectImg} alt="" />
            <LandingProjectSub />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostProject;
