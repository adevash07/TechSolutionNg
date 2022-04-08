import propTypes from "prop-types";
import assets from "assets/index";
import "./commonTeams.scss";

const TeamsCard = ({ team }) => {
  return (
    <div className="team-card">
      <img src={assets.ThumbnailRunning} alt="team" />
      <div className="team-info">
        <small>{team.name || ""}</small>
        <p>{team.description || ""}</p>
      </div>
    </div>
  );
};
export default TeamsCard;
TeamsCard.propTypes = {
  team: propTypes.object.isRequired,
};
