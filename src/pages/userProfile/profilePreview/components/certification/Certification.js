import { useState } from "react";
import { Modal } from "components/index";
import { CertificationForm } from "pages/userProfile/components/index";
import { InfoContainer } from "../index";
import "./certification.scss";

const Certification = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };
  const data = [];
  return (
    <div className="certifications">
      <InfoContainer
        title="Certifications"
        showDelete={false}
        editHandler={handleEdit}
      >
        <div className="certifications__info">
          <div className="form-row">
            <div className="form-group">
              <small>Certification name</small>
              <p>Account design certificate</p>
            </div>
            <div className="form-group">
              <small>Issuing organization</small>
              <p>Microsoft</p>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <small>Issue date</small>
              <p>October 2018</p>
            </div>
            <div className="form-group">
              <small>Expiration date</small>
              <p>No expiration date</p>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <small>Certification ID</small>
              <p>4885990038</p>
            </div>
            <div className="form-group">
              <small>Certification Url</small>
              <p>https://certify.com</p>
            </div>
          </div>
        </div>
      </InfoContainer>
      {edit ? (
        <Modal
          title="Edit Certification"
          visible={edit}
          saveHandler={handleCloseEdit}
          cancelHandler={handleCloseEdit}
          showHeader={true}
          showFooter={true}
        >
          <CertificationForm data={data} onChange={() => {}} />
        </Modal>
      ) : null}
    </div>
  );
};

export default Certification;
