import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import { BsArrowUp } from "react-icons/bs";
import { IoThumbsUpSharp } from "react-icons/io5";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import reviewerOne from "assets/images/review_1.png";
import reviewerTwo from "assets/images/review_2.png";
import reviewerThree from "assets/images/review_3.png";
import "./reportTabContent.scss";

const ReportTabContent = ({ month }) => {
  const [sampleList, setSampleList] = useState([]);

  const JanList = [
    {
      id: 1,
      growth: "389",
      growthPercentage: "21.5",
      positiveReviews: "67",
      clientImg: reviewerOne,
      comment: "But I must confess he intutiveness is appealing",
      reviewer: "Tina Roots",
    },
  ];
  const FebList = [
    {
      id: 2,
      growth: "200",
      growthPercentage: "13.3",
      positiveReviews: "43",
      clientImg: reviewerTwo,
      comment: "There was no design he could not implement, super",
      reviewer: "Hope Somoto",
    },
  ];
  const MarList = [
    {
      id: 3,
      growth: "312",
      growthPercentage: "18.1",
      positiveReviews: "67",
      clientImg: reviewerThree,
      comment: "Kudos to Obicodeman, gave Telsa Interface amazing experience",
      reviewer: "Elon Musk",
    },
  ];

  useEffect(() => {
    month === "jan"
      ? setSampleList(JanList)
      : month === "feb"
      ? setSampleList(FebList)
      : month === "mar"
      ? setSampleList(MarList)
      : null;
  }, []);
  return (
    <>
      {sampleList.map((item) => (
        <>
          <h1>{item.growth}</h1>
          <div className="growthReview">
            <span>
              <span>
                <span>
                  <BsArrowUp />
                </span>
                <span>
                  &#x2b; {item.growthPercentage}
                  &#37;
                </span>
              </span>
              <span className="growthLabel">
                Growth in reviews from last week
              </span>
            </span>
            <span>
              <span>
                <span>
                  <IoThumbsUpSharp />
                </span>
                <span>&#x2b; {item.positiveReviews}&#37;</span>
              </span>
              <span className="growthLabel">
                Positive reviews from last week
              </span>
            </span>
          </div>
          <div className="clientReview">
            <span className="reviewer">
              <img src={item.clientImg} alt="profile" />
              <span className="reviewer__name">{item.reviewer}</span>
            </span>
            <span className="review">
              <span>
                <FaQuoteLeft />
              </span>
              <span>{item.comment}</span>
              <span>
                <FaQuoteRight />
              </span>
            </span>
          </div>
        </>
      ))}
    </>
  );
};

ReportTabContent.propTypes = {
  month: propTypes.string,
};

export default ReportTabContent;
