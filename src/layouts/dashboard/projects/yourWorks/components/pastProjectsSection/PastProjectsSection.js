import React, { useState } from "react";
import { Pagination } from "components";
import propTypes from "prop-types";
import YourWorksCard from "components/dashboard/projects/yourWorks/yourWorksCard/YourWorksCard";

import "./pastProjectsSection.scss";

const PastProjectsSection = ({ btnStatus, data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // determines how much posts per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const mappedData = currentPosts.map((data) => {
    return <YourWorksCard toolTipStatus={true} key={data.id} {...data} />;
  });

  return (
    <div className={btnStatus ? "pastProjects active" : "pastProjects"}>
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

PastProjectsSection.propTypes = {
  btnStatus: propTypes.bool,
  data: propTypes.array,
};

export default PastProjectsSection;
