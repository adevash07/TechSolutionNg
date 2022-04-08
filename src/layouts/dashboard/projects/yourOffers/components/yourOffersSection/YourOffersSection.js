import React, { useState } from "react";
import { Pagination } from "components";
import YourBidCard from "components/dashboard/projects/yourbids/yourBidCard/YourBidCard";
import propTypes from "prop-types";

import "./yourOffersSection.scss";

const YourOffersSection = ({ btnStatus, data, modalFunc }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // determines how much posts per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const mappedData = currentPosts.map((data) => {
    return <YourBidCard modalFunc={modalFunc} key={data.id} {...data} />;
  });

  return (
    <div className={btnStatus ? "youroffers active" : "youroffers"}>
      <div>{mappedData}</div>
      <Pagination
        postsPerPage={postsPerPage}
        dataLength={data.length}
        currentPage={currentPage}
        currentPageFunc={setCurrentPage}
      />
    </div>
  );
};

YourOffersSection.propTypes = {
  btnStatus: propTypes.bool,
  data: propTypes.array,
  modalFunc: propTypes.array,
};

export default YourOffersSection;
