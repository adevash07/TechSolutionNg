import React, { useState } from "react";
import { Pagination } from "components";
import YourBidCard from "components/dashboard/projects/yourbids/yourBidCard/YourBidCard";
import propTypes from "prop-types";

import "./openBidsSection.scss";

const OpenBidsSection = ({ btnStatus, data, modalFunc }) => {
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
    <div className={btnStatus ? "yourbids active" : "yourbids"}>
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

OpenBidsSection.propTypes = {
  btnStatus: propTypes.bool,
  data: propTypes.array,
  modalFunc: propTypes.func,
};

export default OpenBidsSection;
