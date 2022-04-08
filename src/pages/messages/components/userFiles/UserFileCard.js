import propTypes from "prop-types";
import assets from "assets";
import "./userFiles.scss";

const UserFileCard = ({ file }) => {
  return (
    <div className="file-card">
      <img src={assets.ThumbnailRunning} alt="file" />
      <div className="file-card__info">
        <small>{file.name || ""}</small>
      </div>
    </div>
  );
};
export default UserFileCard;
UserFileCard.propTypes = {
  file: propTypes.object.isRequired,
};
