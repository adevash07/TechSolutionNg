import { IconWrapper } from "components";
import { BsPencil } from "react-icons/bs";
import propTypes from "prop-types";
import "./userAvatar.scss";
const UserAvatar = ({ url, editHandler, showEdit = false }) => {
  const handleEdit = () => {
    if (editHandler) editHandler();
  };
  return (
    <div className="user-avatar">
      {showEdit && (
        <div className="edit">
          <IconWrapper handleClick={handleEdit} IconName={BsPencil} />
        </div>
      )}
      <span className="img-contain">
        <img className="avatar" src={url} alt="avata" />
      </span>
    </div>
  );
};
export default UserAvatar;
UserAvatar.propTypes = {
  url: propTypes.string,
  showEdit: propTypes.bool,
  editHandler: propTypes.func,
};
