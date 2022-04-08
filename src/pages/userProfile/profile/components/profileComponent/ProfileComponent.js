import propTypes from "prop-types";
import { Comment } from "components/index";
import "./profileComponent.scss";
import { UserAvatar } from "components/index";
import { PictureComponent } from "pages/userProfile/components/index";
import assets from 'assets/index'

const ProfileComponent = ({ url = "", editHandler }) => {
  const handleEdit = () => {
    if (editHandler) editHandler();
  };
  return (
    <div className="profile-user">
      <div className="user">
        {url ? (
          <UserAvatar url={url} showEdit={true} editHandler={handleEdit} />
        ) : (
          <span className="av-def">
            <img src={assets.Camera} alt="camera" />
          </span>
        )}

        <div className="user-info">
          <label>David Martin</label>
          <p>Product Designer</p>
          <small>Lagos</small>
        </div>
      </div>
      <Comment customClass="picture-pop" >
        <PictureComponent />
      </Comment>
    </div>
  );
};

export default ProfileComponent;
ProfileComponent.propTypes = {
  url: propTypes.string,
  editHandler: propTypes.func,
};