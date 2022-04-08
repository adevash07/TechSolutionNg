import React from "react";
import { useHistory } from "react-router-dom";
import { RiComputerFill } from "react-icons/ri";
import "./allProjectCard.scss";
import propTypes from "prop-types";
import { ReactComponent as Project1 } from "assets/svgs/project1.svg";
import { ReactComponent as Project2 } from "assets/svgs/project2.svg";
import { ReactComponent as Project3 } from "assets/svgs/project3.svg";
import { ReactComponent as Project4 } from "assets/svgs/project4.svg";
import { ReactComponent as Project5 } from "assets/svgs/star.svg";

const AllProjectCard = ({
  id,
  allProjectBody,
  allProjectHeader,
  allProjectInfo1,
  allProjectInfo2,
  allProjectInfo3,
  allProjectInfo4,
  allProjectInfo5,
  allProjectPrice,
}) => {
  const history = useHistory();

  const goToMakeAnOffer = (id) => {
    history.push(`/dashboard/projects/all-projects-detail/${id}`);
  };
  return (
    <div
      key={id}
      onClick={() => goToMakeAnOffer(id)}
      className="allprojectCard"
    >
      <div className="allprojectCard__container">
        <div className="allprojectCard__icon">
          <div className="allprojectCard__iconDiv">
            <RiComputerFill />
          </div>
        </div>
        <div className="allprojectCard__content">
          <h5 className="allprojectCard__header">{allProjectHeader}</h5>
          <p className="allprojectCard__paragraph">{allProjectBody}</p>
          <div className="allprojectCard__contentIcons">
            <div className="allprojectCard__contentIcon">
              <div className="allprojectCard__contentImg">
                <Project1 />
              </div>
              <span className="allprojectCard__contentText">
                {allProjectInfo1}
              </span>
            </div>
            <div className="allprojectCard__contentIcon">
              <div className="allprojectCard__contentImg">
                <Project3 />
              </div>
              <span className="allprojectCard__contentText">
                {allProjectInfo2}
              </span>
            </div>
            <div className="allprojectCard__contentIcon">
              <div className="allprojectCard__contentImg">
                <Project2 />
              </div>
              <span className="allprojectCard__contentText">
                {allProjectInfo3}
              </span>
            </div>
            <div className="allprojectCard__contentIcon">
              <div className="allprojectCard__contentImg">
                <Project4 />
              </div>
              <span className="allprojectCard__contentText">
                {allProjectInfo4}
              </span>
            </div>
            <div className="allprojectCard__contentIcon">
              <div className="allprojectCard__contentImg">
                <Project5 />
              </div>
              <span className="allprojectCard__contentText">
                {allProjectInfo5}
              </span>
            </div>
          </div>
        </div>
        <div className="allprojectCard__budget">
          <h5 className="allprojectCard__budgetHeader">Budget price</h5>
          <h4 className="allprojectCard__budgetAmount">N{allProjectPrice}</h4>
          <span className="allprojectCard__budgetHour">per hour</span>
        </div>
      </div>
    </div>
  );
};

AllProjectCard.propTypes = {
  id: propTypes.any,
  allProjectBody: propTypes.string,
  allProjectHeader: propTypes.string,
  allProjectIcon1: propTypes.any,
  allProjectIcon2: propTypes.any,
  allProjectIcon3: propTypes.any,
  allProjectIcon4: propTypes.any,
  allProjectIcon5: propTypes.any,
  allProjectInfo1: propTypes.string,
  allProjectInfo2: propTypes.string,
  allProjectInfo3: propTypes.string,
  allProjectInfo4: propTypes.string,
  allProjectInfo5: propTypes.string,
  allProjectPrice: propTypes.string,
};

export default AllProjectCard;
