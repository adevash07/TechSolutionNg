import { InfoContainer } from "../index";
import { useState } from "react";
import { Modal, Input } from "components/index";
import "./profileOverView.scss";

const ProfileOverView = () => {
  const [edit, setEdit] = useState(false);
  const handleDelete = () => {};

  const handleEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };
  return (
    <div className="profile-overview">
      <InfoContainer
        title="Overview"
        showDelete={true}
        editHandler={handleEdit}
        deleteHandler={handleDelete}
      >
        <div className="over-view">
          <p className="overview">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century
          </p>
          <p className="overview">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century
          </p>
          <p className="overview">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century
          </p>
        </div>
      </InfoContainer>
      {edit ? (
        <Modal
          title="Edit Professional Overview"
          visible={edit}
          cancelHandler={handleCloseEdit}
          saveHandler={handleCloseEdit}
          showHeader={true}
          showFooter={true}
        >
          <div>
            <Input
              value=" Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century"
              inputType="textArea"
              rows={5}
            />
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

export default ProfileOverView;
