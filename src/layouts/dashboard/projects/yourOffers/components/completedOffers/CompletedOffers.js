import React, { useState } from "react";
import { Pagination } from "components";
import YourBidCard from "components/dashboard/projects/yourbids/yourBidCard/YourBidCard";
import propTypes from "prop-types";

import "./completedOffers.scss";

const CompletedOffers = ({ btnStatus, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // determines how much posts per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const mappedData = currentPosts.map((data) => {
    return <YourBidCard toolTipStatus={true} key={data.id} {...data} />;
  });

  return (
    <div className={btnStatus ? "completedoffers active" : "completedoffers"}>
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

CompletedOffers.propTypes = {
  btnStatus: propTypes.bool,
  data: propTypes.array,
};

export default CompletedOffers;
