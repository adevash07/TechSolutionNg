import propTypes from "prop-types";
import assets from "assets";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./topPane.scss";
const TopPane = ({ toggleRightPane }) => {
  return (
    <div className="top-pane">
      <div className="top-pane__info">
        <img src={assets.User} alt="user" />
        <div className="top-main">
          <h5>Fariozo Romano</h5>
          <small>Online</small>
          <span />
        </div>
      </div>
      <button className="top-pane__menu" onClick={toggleRightPane}>
        <BsThreeDotsVertical />
      </button>
    </div>
  );
};

export default TopPane;
TopPane.propTypes = {
  toggleRightPane: propTypes.func.isRequired,
};
