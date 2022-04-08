import React, { useState } from "react";
import YourBidCard from "components/dashboard/projects/yourbids/yourBidCard/YourBidCard";
import propTypes from "prop-types";
import { Pagination } from "components";
import "./closedBids.scss";

const ClosedBids = ({ btnStatus, data, modalFunc }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10); // determines how much posts per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const mappedData = currentPosts.map((data) => {
    return (
      <YourBidCard
        toolTipStatus={false}
        modalFunc={modalFunc}
        key={data.id}
        {...data}
      />
    );
  });

  return (
    <div className={btnStatus ? "closedBids active" : "closedBids"}>
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

ClosedBids.propTypes = {
  btnStatus: propTypes.bool,
  data: propTypes.array,
  modalFunc: propTypes.array,
};

export default ClosedBids;
