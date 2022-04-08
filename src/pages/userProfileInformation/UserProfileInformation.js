import React, { useState } from "react";
import LeftArrow from "components/leftArrow";
import Header from "layouts/header/Header";

import designPicOne from "assets/images/p1.png";
import designPicTwo from "assets/images/p2.png";
import designPicThree from "assets/images/p3.png";
import designPicFour from "assets/images/p4.png";

import visualPicOne from "assets/images/_2.png";
import visualPicTwo from "assets/images/1.png";
import visualPicThree from "assets/images/2.png";
import visualPicFour from "assets/images/3.png";
import visualPicFive from "assets/images/4.png";

import { ReactComponent as CaveatSign } from "assets/svgs/exclamation.svg";
import { ReactComponent as BlueRoundNextButton } from "assets/svgs/carouselNextArrow.svg";
import { ReactComponent as BlueRoundPreviousButton } from "assets/svgs/carouselPreviousArrow.svg";

import { Button } from "components/index";
import CircularProgressBar from "components/circularProgressBar";
import CustomCheckBox from "components/customCheckBox";

import ProfileInfoSkills from "./components/profileInfoSkills";
import UserProfileHeader from "./components/userProfileHeader";
import ProfileInfoPublications from "./components/profileInfoPublications/ProfileInfoPublications";
import ProfileInfoServiceCategory from "./components/profileInfoServiceCategory";
import ProfileInfoRecommendation from "./components/profileInfoRecommendation";
import ProfileInfoExperience from "./components/profileInfoExperience";
import ProfileInfoEducation from "./components/profileInfoEducation";
import ProfileInfoVideoDescription from "./components/profileInfoVideoDescription";
import ProfileInfoAddress from "./components/profileInfoAddress";
import ProfileInfoPersonalData from "./components/profileInfoPersonalData";

import "./userProfileInformation.scss";
const UserProfileInformation = () => {
  const [carouselCounter, setCarouselCounter] = useState(1);

  const handleCarouselRight = () => {
    if (carouselCounter === 2) {
      return setCarouselCounter((prevState) => prevState + 0);
    }
    setCarouselCounter((prevState) => prevState + 1);
  };

  const handleCarouselLeft = () => {
    if (carouselCounter === 1) {
      return setCarouselCounter((prevState) => prevState - 0);
    }
    setCarouselCounter((prevState) => prevState - 1);
  };
  return (
    <>
      <Header dashboardPage={true} />
      <div className="profileInformation">
        <section className="profileInformation__firstContent">
          <main>
            <LeftArrow />
            <div className="profileInformation__containerFlex">
              <UserProfileHeader />
              <section className="profileInformation__firstContent__infoCenter">
                <div className="infoCenter__container">
                  <article className="activityCard">
                    <div className="activityCard__body">
                      <span className="label--small">Skills test</span>
                      <span className="card--text">
                        Take <a href="#skills">skills test</a> to upgrade
                        membership, this will place you amongst the top solution
                        providers
                      </span>
                      <span className="card--button">
                        <Button btnText="Take Test" btnClass="medium" />
                      </span>
                    </div>
                  </article>

                  <article className="activityCard">
                    <div className="activityCard__body">
                      <span>
                        <CaveatSign />
                      </span>
                      <span className="card__text">
                        Complete your{" "}
                        <a href="#signup" className="card__text--red">
                          sign up
                        </a>{" "}
                        process here to gain more client views.
                      </span>
                    </div>
                  </article>

                  <article className="activityCard">
                    <div className="activityCard__body">
                      <span className="activityCard__progress">
                        {window.innerWidth >= 1600 &&
                        window.innerWidth <= 1919 ? (
                          <CircularProgressBar
                            strokeWidth="5"
                            sqSize="70"
                            percentage={80}
                          />
                        ) : (
                          <CircularProgressBar
                            strokeWidth="5"
                            sqSize="100"
                            percentage={80}
                          />
                        )}
                      </span>
                      <span className="card--text">Steps completed</span>
                      <ul className="mileStone">
                        <li className="mileStone__list">
                          <CustomCheckBox />
                          <label htmlFor="talent" className="mileStone--label">
                            Talent
                          </label>
                        </li>
                        <li className="mileStone__list">
                          <CustomCheckBox />
                          <label
                            htmlFor="education"
                            className="mileStone--label"
                          >
                            Education
                          </label>
                        </li>
                        <li className="mileStone__list">
                          <CustomCheckBox />
                          <label
                            htmlFor="employment"
                            className="mileStone--label"
                          >
                            Employment
                          </label>
                        </li>
                        <li className="mileStone__list">
                          <CustomCheckBox />
                          <label htmlFor="payment" className="mileStone--label">
                            Payment
                          </label>
                        </li>
                        <li className="mileStone__list">
                          <CustomCheckBox />
                          <label
                            htmlFor="title_and_overview"
                            className="mileStone--label"
                          >
                            Title &amp; Overview
                          </label>
                        </li>
                        <li className="mileStone__list">
                          <CustomCheckBox />
                          <label htmlFor="profile" className="mileStone--label">
                            Profile
                          </label>
                        </li>
                      </ul>
                    </div>
                  </article>
                </div>
              </section>
            </div>

            <div className="profileInformation__otherInfo">
              <ProfileInfoSkills />
              <ProfileInfoPersonalData />
              <ProfileInfoVideoDescription />
              <ProfileInfoAddress />
              <ProfileInfoExperience />
              <ProfileInfoEducation />
            </div>
          </main>
        </section>

        <section className="profileInformation__secondContent">
          <header>
            <h2 className="project__header header--title">
              {carouselCounter === 1
                ? "Design portfolio"
                : carouselCounter === 2
                ? "Visual portfolio"
                : ""}
            </h2>
            <span className="label--small">View your visual portfolio</span>
          </header>

          <div className="projects">
            <div
              className={`projects__carouselContainer ${
                carouselCounter === 1 && "right1"
              } ${carouselCounter === 2 && "right2"} `}
            >
              <div className="designProject__grid">
                <div className="designProject__gridItem">
                  <img src={designPicOne} alt="designProject_one" />
                </div>
                <div className="designProject__gridItem">
                  <img src={designPicTwo} alt="designProject_two" />
                </div>
                <div className="designProject__gridItem">
                  <img src={designPicThree} alt="designProject_three" />
                </div>
                <div className="designProject__gridItem">
                  <img src={designPicFour} alt="designProject_four" />
                </div>
              </div>

              <div className="visualProject__grid ">
                <div className="visualProject__gridItem">
                  <img src={visualPicOne} alt="visulaProject_one" />
                </div>
                <div className="visualProject__gridItem gridItem--tall">
                  <img src={visualPicTwo} alt="visulaProject_two" />
                </div>
                <div className="visualProject__gridItem">
                  <img src={visualPicThree} alt="visulaProject_three" />
                </div>
                <div className="visualProject__gridItem">
                  <img src={visualPicFour} alt="visulaProject_four" />
                </div>
                <div className="visualProject__gridItem">
                  <img src={visualPicFive} alt="visulaProject_four" />
                </div>
              </div>
            </div>

            <div className="projects__carouselArrow">
              <div className="projects__carouselArrow__container projects__carouselArrow__container--flex">
                <BlueRoundPreviousButton
                  onClick={handleCarouselLeft}
                  className="carouselArrow projects__carouselArrow--left"
                />
                <BlueRoundNextButton
                  onClick={handleCarouselRight}
                  className="carouselArrow projects__carouselArrow--right"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="profileInformation__thirdContent">
          <ProfileInfoRecommendation />
          <ProfileInfoServiceCategory />
          <ProfileInfoPublications />
        </section>
      </div>
    </>
  );
};

export default UserProfileInformation;
