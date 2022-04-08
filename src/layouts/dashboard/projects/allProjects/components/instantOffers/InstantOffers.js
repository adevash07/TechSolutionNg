import React, { useState } from "react";
import { Pagination } from "components";
import propTypes from "prop-types";
import InstantOfferCard from "components/dashboard/projects/allProjects/instantOfferCard/InstantOfferCard";

import "./InstantOffers.scss";

const InstantOffers = ({ btnStatus, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // determines how much posts per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const mappedData = currentPosts.map((data) => {
    return <InstantOfferCard key={data.id} {...data} />;
  });

  return (
    <>
      <div
        className={
          btnStatus
            ? "allprojects instantoffers active"
            : "allprojects instantoffers"
        }
      >
        <div>{mappedData}</div>
        <Pagination
          postsPerPage={postsPerPage}
          dataLength={data.length}
          currentPage={currentPage}
          currentPageFunc={setCurrentPage}
        />
      </div>
    </>
  );
};

InstantOffers.propTypes = {
  btnStatus: propTypes.bool,
  data: propTypes.array,
};
export default InstantOffers;
