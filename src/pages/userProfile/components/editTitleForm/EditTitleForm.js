import { Input } from "components/index";
import propTypes from "prop-types";
import "./editTitleForm.scss"
const EditTitleForm = ({ data, channgeHandler }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    channgeHandler(name, value);
  };
  return (
    <div className="edit-title">
      <form>
        <div className="form-group">
          <Input
            labelText="Title"
            inputId="name"
            name="title"
            value={data.title || ""}
            isRequired={false}
            onChange={handleChange}
            inputType="text"
          />
        </div>
        <div className="form-group">
          <Input
            labelText="Ful name"
            inputId="fullName"
            name="fullName"
            value={data.fullName || ""}
            isRequired={false}
            onChange={handleChange}
            inputType="text"
          />
        </div>
        <div className="form-group">
          <small>Location</small>
          <Input
            dropdown={true}
            labelText="Location"
            selectId="location"
            name="location"
            selectName="location"
            value={data.location || ""}
            isRequired={false}
            onChange={handleChange}
            inputType="text"
          />
        </div>
      </form>
    </div>
  );
};

export default EditTitleForm;
EditTitleForm.propTypes = {
  data: propTypes.object,
  channgeHandler: propTypes.func.isRequired,
};
