import { useState } from "react";
import propTypes from "prop-types";
import { Input } from "components/index";
import "./educationForm.scss";

const EducationForm = ({ data = {}, onChange }) => {
  const [qualifications, setQualifications] = useState(
    data.qualifications || initQualifications
  );
  const handleQulificationChange = (e) => {
    const { name, checked } = e.target;
    const updatedQulif = qualifications.map((qulif) =>
      qulif.name === name ? { ...qulif, isChecked: checked } : qulif
    );
    setQualifications(updatedQulif);

    onChange("qulifications", updatedQulif);
  };
  return (
    <div className="education-form">
      <small>Select highest academic qualification (s)</small>
      <ul>
        {qualifications.map(({ label, name, isChecked }, index) => (
          <li key={index}>
            <Input
              labelText={label}
              inputType="checkbox"
              inputName={name}
              value={isChecked}
              onChange={handleQulificationChange}
            />
          </li>
        ))}
      </ul>
      <div className="form-row">
        <div className="form-group">
          <small>Country (Where your institution is located</small>
          <Input dropdown={true} />
        </div>

        <div className="form-group">
          <small>Name of institution</small>
          <Input dropdown={true} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <small>Month gratuated</small>
          <Input dropdown={true} />
        </div>

        <div className="form-group">
          <small>Year gratuated</small>
          <Input dropdown={true} />
        </div>
      </div>
    </div>
  );
};

export default EducationForm;
EducationForm.propTypes = {
  data: propTypes.object,
  onChange: propTypes.func.isRequired,
};
const initQualifications = [
  {
    label: "Secondary education",
    name: "secondary",
    isChecked: false,
  },
  {
    label: "Undergraduate",
    name: "undergraduate",
    isChecked: false,
  },
  {
    label: "Ph.D",
    name: "phd",
    isChecked: false,
  },
  {
    label: "Masters",
    name: "masters",
    isChecked: false,
  },
  {
    label: "Bachelor's degree",
    name: "bachelors",
    isChecked: false,
  },
  {
    label: "Others",
    name: "others",
    isChecked: false,
  },
];
