import TeamsCard from "./TeamsCard";

import propTypes from "prop-types";
import "./commonTeams.scss";
const CommonTeams = ({ teams = [] }) => {
  return (
    <div className="common-teams">
      <h5>Teams in common</h5>
      {teams.map((team) => (
        <TeamsCard team={team} key={teams.id} />
      ))}
    </div>
  );
};

export default CommonTeams;
CommonTeams.propTypes = {
  teams: propTypes.array,
};
