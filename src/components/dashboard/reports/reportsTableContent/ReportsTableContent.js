import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import ReportsTable from "components/dashboard/reports/reportsTable";
import Paginate from "components/dashboard/invoice/paginate";
import reviewerImageOne from "assets/images/review_1.png";
import reviewerImageTwo from "assets/images/review_2.png";
import reviewerImageThree from "assets/images/review_3.png";
import projectThumbnail from "assets/images/thumbnail.png";
// import {BsStarFill, BsStar} from "react-icons/bs";
function ReportsTableContent({ label }) {
  const [sampleList, setSampleList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userDataPerPage] = useState(2);
  const [btnStatus, setBtnStatus] = useState(null);

  const reviewList = [
    {
      id: 1,
      reviewerCity: "Lagos",
      reviewerCountry: "Nigeria",
      fullName: "Kenechukwu Idiagbor",
      reviewerImg: reviewerImageThree,
      comment:
        "It is a thing of joy to find a developer, but it is a greater joy to find one like Obicodeman",
      rating: 4,
      date: "4-Mar-2021",
      timeOfReview: "7:15 a.m.",
      status: "positive",
      projectThumbnail: projectThumbnail,
      projectName: "Quick Credit",
      projectStatus: "confirmed",
    },
    {
      id: 1,
      reviewerCity: "California",
      reviewerCountry: "usa",
      fullName: "Elizabeth Dougherty",
      reviewerImg: reviewerImageTwo,
      comment:
        "Meets with project delivery time but rarely available for amendment",
      rating: 3,
      date: "21-Aug-2021",
      timeOfReview: "12:15 p.m.",
      status: "critical",
      projectThumbnail: projectThumbnail,
      projectName: "Lana App",
      projectStatus: "confirmed",
    },
    {
      id: 1,
      reviewerCity: "Nairaobi",
      reviewerCountry: "Kenya",
      fullName: "Julie Ngechu",
      reviewerImg: reviewerImageOne,
      comment:
        "He isnot only a Developer but he connects cretivity with imaginations well",
      rating: 2,
      date: "21-Apr-2021",
      timeOfReview: "1:45 p.m.",
      status: "positive",
      projectThumbnail: projectThumbnail,
      projectName: "Mitiki ERP",
      projectStatus: "confirmed",
    },
  ];

  useEffect(() => {
    if (label === "all reviews") {
      setSampleList(reviewList);
    }
    if (label === "positive reviews") {
      const postiveReviewList = reviewList.filter(
        (list) => list.status === "positive"
      );
      setSampleList(postiveReviewList);
    }
    if (label === "critical reviews") {
      const criticalReviewList = reviewList.filter(
        (list) => list.status === "critical"
      );
      setSampleList(criticalReviewList);
    }
  }, []);

  //Get current users
  const indexOfLastUserData = currentPage * userDataPerPage;
  const indexOfFirstUserData = indexOfLastUserData - userDataPerPage;

  const currentUserData = sampleList.slice(
    indexOfFirstUserData,
    indexOfLastUserData
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setBtnStatus(pageNumber);
  };

  return (
    <div className="reportsContent">
      <ReportsTable mockList={currentUserData} />
      <Paginate
        userDataPerPage={userDataPerPage}
        totalUsersData={reviewList.length}
        paginate={paginate}
        btnStatus={btnStatus}
      />
    </div>
  );
}

ReportsTableContent.propTypes = {
  label: propTypes.string,
  count: propTypes.number,
};

export default ReportsTableContent;
