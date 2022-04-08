import React from "react";
import "./rank.scss";
import propTypes from "prop-types";

const Rank = ({ rankGrade, rankHeader, rankHeaderSpan, rankName }) => {
  return (
    <div className="dashboardRank">
      <span className="dashboardRank__grade">{rankGrade}</span>
      <div className="dashboardRank__details">
        <h5 className="dashboardRank__header">
          {rankHeader}{" "}
          <span className="dashboard__headerSpan">{rankHeaderSpan}</span>
        </h5>
        <span className="dashboardRank__rankName">{rankName}</span>
      </div>
    </div>
  );
};

Rank.propTypes = {
  rankGrade: propTypes.string,
  rankHeader: propTypes.string,
  rankHeaderSpan: propTypes.string,
  rankName: propTypes.string,
};

export default Rank;
