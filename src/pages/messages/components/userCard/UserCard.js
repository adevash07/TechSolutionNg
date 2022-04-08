import propTypes from "prop-types";
import assets from "assets";
import "./userCard.scss";
const UserCard = ({ user }) => {
  const VIEWPORT = window.innerWidth;
  const TABSIZE = 768;

  const isDesktop = () => {
    return VIEWPORT > TABSIZE;
  };
  return (
    <div className={`user-card user-card--${user.active && "active"}`}>
      <img src={assets.User} alt="user" />
      <div className="user-card__main">
        <div className="heading">
          <h5>{user.name}</h5>

          <div className="time">
            {user.messages && (
              <span className="message-count"> {user.messages} </span>
            )}
            {isDesktop() && <small>10 mins ago</small>}
          </div>
        </div>
        <p>{user.message}</p>
        {!isDesktop() && <small className="time2">10 mins ago</small>}
      </div>
    </div>
  );
};

export default UserCard;
UserCard.propTypes = {
  user: propTypes.object.isRequired,
};
