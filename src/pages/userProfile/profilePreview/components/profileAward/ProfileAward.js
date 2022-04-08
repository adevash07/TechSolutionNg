import { InfoContainer } from "../index";
import "./profileAward.scss";

const ProfileAward = () => {
  const handleEdit = () => {};
  return (
    <div className="profile-award">
      <div className="profile-award__ctn">
        <InfoContainer
          title="Special recorgnition award"
          showDelete={false}
          editHandler={handleEdit}
        >
          <span className="award">awarforeddxc..pdf</span>
        </InfoContainer>
      </div>
    </div>
  );
};

export default ProfileAward;
