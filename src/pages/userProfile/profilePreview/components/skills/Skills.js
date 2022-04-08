import { useState } from "react";
import { Tag, Modal } from "components/index";
import { EditSkillsForm } from "pages/userProfile/components/index";
import { InfoContainer } from "../index";
import "./skills.scss";

const Skills = () => {
  const [edit, setEdit] = useState(false);
  const handleEdit = () => {
    setEdit(true);
  };

  const handleCloseEdit = () => {
    setEdit(false);
  };
  const data = {};

  return (
    <div className="skills">
      <InfoContainer
        title="Your skills"
        showDelete={false}
        editHandler={handleEdit}
      >
        <div className="skills-content">
          {skills.map((skill) => (
            <div key={skill} className="tag-ctn">
              <Tag title={skill} customClass="grey" />
            </div>
          ))}
        </div>
      </InfoContainer>
      {edit ? (
        <Modal
          title="Edit skills"
          visible={edit}
          saveHandler={handleCloseEdit}
          cancelHandler={handleCloseEdit}
          showHeader={true}
          showFooter={true}
        >
          <EditSkillsForm data={data} channgeHandler={() => {}} />
        </Modal>
      ) : null}
    </div>
  );
};

export default Skills;
const skills = [
  "Ui/Ux design",
  "React js",
  "Front End development",
  "Web design",
  "CSS",
  "Hosting",
  "Vue js",
  "Graphic design",
];
