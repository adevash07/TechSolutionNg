import { useState } from "react";
import { IconWrapper, UserAvatar, Modal } from "components/index";
import { ImUser } from "react-icons/im";
import { BsPencil } from "react-icons/bs";
import assets from "assets";
import "./profileInfo.scss";
import { EditTitleForm } from "pages/userProfile/components/index";

const ProfileInfo = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {};
  const handleInfoEit = () => {
    setEdit(true);
    console.log(edit);
  };
  const handleCloseEdit = () => {
    setEdit(false);
  };
  const data = {};
  return (
    <div className="profile-info">
      <section>
        <h4>David we have your profile ready, just take a review now</h4>
        <div>
          <small>
            You can still edit your information from your account settings after
            you may have submit it
          </small>
          <div className="profile-content">
            <div>
              <UserAvatar
                showEdit={true}
                editHandler={handleEdit}
                url={assets.User}
              />
            </div>
            <div className="info">
              <small>Product Designer</small>
              <label>David Moore</label>
              <small>
                <ImUser />
                Lagos
              </small>
            </div>
            <div className="edit-ic">
              <IconWrapper handleClick={handleInfoEit} IconName={BsPencil} />
            </div>
          </div>
        </div>
      </section>
      {edit ? (
        <Modal
          title="Edit title"
          visible={edit}
          cancelHandler={handleCloseEdit}
          saveHandler={handleCloseEdit}
          showHeader={true}
          showFooter={true}
        >
          <EditTitleForm data={data} channgeHandler={() => {}} />
        </Modal>
      ) : null}
    </div>
  );
};

export default ProfileInfo;
