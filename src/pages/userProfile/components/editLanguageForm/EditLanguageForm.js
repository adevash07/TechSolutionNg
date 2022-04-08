import { Input } from "components/index";
import "./editLanguageForm.scss";

const EditLanguageForm = () => {
  return (
    <div className="edit-lang">
      <form>
        <div className="form-group">
          <small>Language</small>
          <Input dropdown={true} />
        </div>
        <small>Fluency level</small>
        <div className="flex-row">
          <Input inputType="checkbox" labelText="Low" />
          <Input inputType="checkbox" labelText="Intermediate" />
          <Input inputType="checkbox" labelText="Fluent" />
        </div>
      </form>
    </div>
  );
};

export default EditLanguageForm;
