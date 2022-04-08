import { useState } from "react";
import { Tag } from "components/index";
import "./editSkillForm.scss";

const EditSkillsForm = () => {
  const [skills, setSkills] = useState(initSkills);
  const [skill, setSkill] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setSkill(value);
  };
  const handleAdd = (e) => {
    if (e.key === "Enter") {
      setSkills(skills.concat(skill));
      setSkill("");
    }
  };
  const handleRemove = (tag) => {
    const updated = skills.filter((skill) => tag != skill);
    setSkills(updated);
  };
  return (
    <div className="edit-skills">
      <small>Skills</small>
      <div className="edit-skills__skills-content">
        <div className="skills">
          {skills.map((skill) => (
            <div key={skill} className="tag-ctn">
              <Tag
                title={skill}
                customClass="grey"
                showClose={true}
                closeHandler={() => handleRemove(skill)}
              />
            </div>
          ))}
          <input
            placeholder="Enter more skills"
            value={skill}
            onChange={handleChange}
            onKeyDown={handleAdd}
          />
        </div>
      </div>
    </div>
  );
};

export default EditSkillsForm;
const initSkills = [
  "Ui/Ux design",
  "React js",
  "Front End development",
  "Web design",
  "CSS",
  "Hosting",
  "Vue js",
  "Graphic design",
  "Backend",
];
