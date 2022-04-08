import React, { useState } from "react";
import { Pagination } from "components";
import YourOffersCard from "components/dashboard/projects/yourOffers/yourOffersCard/YourOffersCard";
import propTypes from "prop-types";

import "./savedOffers.scss";

const SavedOffers = ({ btnStatus, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // determines how much posts per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const mappedData = currentPosts.map((data) => {
    return <YourOffersCard key={data.id} {...data} />;
  });

  return (
    <div className={btnStatus ? "savedoffers active" : "savedoffers"}>
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

SavedOffers.propTypes = {
  btnStatus: propTypes.bool,
  data: propTypes.array,
};

export default SavedOffers;
