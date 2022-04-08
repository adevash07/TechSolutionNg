import { useState } from "react";
import { Modal } from "components/index";
import { EducationForm } from "pages/userProfile/components/index";
import { InfoContainer } from "../index";
import "./profileEducation.scss";

const ProfileEducation = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };
  const data = {};
  const handleDelete = () => {};
  return (
    <div className="profile-education">
      <InfoContainer
        title="Highest education"
        showDelete={true}
        editHandler={handleEdit}
        deleteHandler={handleDelete}
      >
        <div className="profile-education__info">
          <p>Bachelors degree</p>
          <p>Oxford University</p>
          <small>2018</small>
        </div>
      </InfoContainer>
      {edit ? (
        <Modal
          title="Edit Education"
          visible={edit}
          cancelHandler={handleCloseEdit}
          saveHandler={handleCloseEdit}
          showHeader={true}
          showFooter={true}
        >
          <EducationForm data={data} onChange={() => {}} />
        </Modal>
      ) : null}
    </div>
  );
};

export default ProfileEducation;
