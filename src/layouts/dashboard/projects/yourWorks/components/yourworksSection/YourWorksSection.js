import React, { useState } from "react";
import { Pagination } from "components";
import propTypes from "prop-types";
import YourWorksCard from "components/dashboard/projects/yourWorks/yourWorksCard/YourWorksCard";

import "./yourWorksSection.scss";

const YourWorksSection = ({ btnStatus, data, modalFunc }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5); // determines how much posts per page

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const mappedData = currentPosts.map((data) => {
    return <YourWorksCard modalFunc={modalFunc} key={data.id} {...data} />;
  });

  return (
    <div className={btnStatus ? "yourworks active" : "yourworks"}>
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

YourWorksSection.propTypes = {
  btnStatus: propTypes.bool,
  data: propTypes.array,
  modalFunc: propTypes.func,
};

export default YourWorksSection;
