import React, { useState } from "react";
import { Pagination } from "components";
import propTypes from "prop-types";
import AllProjectCard from "components/dashboard/projects/allProjects/allProjectCard/AllProjectCard";

import "./allProjectsSection.scss";

const AllProjectsSection = ({ btnStatus, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10); // determines how much posts per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const mappedData = currentPosts.map((data) => {
    return <AllProjectCard key={data.id} {...data} />;
  });

  return (
    <>
      <div className={btnStatus ? "allprojects active" : "allprojects"}>
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

AllProjectsSection.propTypes = {
  btnStatus: propTypes.bool,
  data: propTypes.array,
};

export default AllProjectsSection;
