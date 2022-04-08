import { useState } from "react";
import { Modal } from "components/index";
import { EmploymentForm } from "pages/userProfile/components/index";
import { InfoContainer } from "../index";
import "./profileEmployment.scss";

const ProfileEmployment = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };

  const handleDelete = () => {};
  const data = {};
  return (
    <div className="profile-employment">
      <InfoContainer
        title=""
        showDelete={true}
        editHandler={handleEdit}
        deleteHandler={handleDelete}
      >
        <div className="profile-employment__info">
          <div className="form-group">
            <small>Employment title</small>
            <p>Ui/Ux designer</p>
          </div>
          <div className="form-group">
            <small>Employment type</small>
            <p>Freelance</p>
          </div>

          <div className="form-group">
            <small>Company</small>
            <p>United Africa</p>
          </div>
          <div className="form-group">
            <small>Location</small>
            <p>Lagos</p>
          </div>

          <div className="form-group">
            <small>Start date</small>
            <p>Oct 2018-Present</p>
          </div>
          <div className="form-group">
            <small>Brief on job description</small>
            <p>
              {" "}
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century
            </p>
          </div>
          <div className="form-group">
            <small>Gross earning</small>
            <p>N800,000</p>
          </div>
          <div className="form-group">
            <small>Additionallinks and documents</small>
            <p className="bg"> AwardJllld..pdf</p>
          </div>
          <div className="form-group">
            <p className="bg">Awardoof...pdf</p>
          </div>
        </div>
      </InfoContainer>
      {edit ? (
        <Modal
          title="Edit Employment"
          visible={edit}
          saveHandler={handleCloseEdit}
          cancelHandler={handleCloseEdit}
          showHeader={true}
          showFooter={true}
        >
          <EmploymentForm detail={data} channgeHandler={() => {}} />
        </Modal>
      ) : null}
    </div>
  );
};

export default ProfileEmployment;
