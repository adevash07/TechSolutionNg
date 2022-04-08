import { useState } from "react";
import { Modal } from "components/index";
import { InfoContainer } from "../index";
import "./talentLevel.scss";
import { EditLanguageForm, EditTalentForm } from "pages/userProfile/components/index";

const TalentLevel = () => {
  const [editLang, setEditLang] = useState(false);
  const [editTalent, setEditTalent] = useState(false);

  const handleEditTalent = () => {
    setEditTalent(true);
  };

  const handleCloseEdit = () => {
    setEditTalent(false);
  };
  const handleEditLang = () => {
    setEditLang(true);
  };

  const handleCloseEditLang = () => {
    setEditLang(false);
  };
  const data = {};
  return (
    <div className="talent-level">
      <div className="talent-level__ctn">
        <InfoContainer
          title="Talent level"
          showDelete={false}
          editHandler={handleEditTalent}
        >
          <span className="level">Expert</span>
        </InfoContainer>
      </div>
      <div className="talent-level__ctn">
        <InfoContainer
          title="Language & Fluency level"
          showDelete={false}
          editHandler={handleEditLang}
        >
          <span className="level">English: Fluent</span>
        </InfoContainer>
      </div>
      {editTalent ? (
        <Modal
          title="Edit Talent"
          visible={editTalent}
          cancelHandler={handleCloseEdit}
          saveHandler={handleCloseEdit}
          showHeader={true}
          showFooter={true}
        >
          <EditTalentForm data={data} channgeHandler={() => {}} />
        </Modal>
      ) : null}
      {editLang ? (
        <Modal
          title="Edit Language"
          visible={editLang}
          saveHandler={handleCloseEditLang}
          cancelHandler={handleCloseEditLang}
          showHeader={true}
          showFooter={true}
        >
          <EditLanguageForm data={data} channgeHandler={() => {}} />
        </Modal>
      ) : null}
    </div>
  );
};

export default TalentLevel;
