import { Note } from "components/index";
import ButtonGroup from "../buttonGroup/ButtonGroup";
import "./editTalentForm.scss";

const EditTalentForm = () => {
  const handleChange = () => {};
  return (
    <div className="edit-talent">
      <div>
        <small>Your talent level</small>
        <ButtonGroup level="Expert" onChange={handleChange} />
      </div>
      <div className="edit-talent__note"> 
        <Note title="Talent level">
          <p>
            Select talent level according to your skill proficiency. This will
            aid us in providing the best jobs for you on iT Solutions.
          </p>
        </Note>
      </div>
    </div>
  );
};

export default EditTalentForm;
