import propTypes from "prop-types";
import { Input } from "components/index";
import "./awards.scss";
const Awards = ({ data = {}, onChange }) => {
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    onChange(name, inputValue);
  };

  return (
    <div className="awards">
      <div className="awards__heading">
        <h4>Special Recorgnition Award</h4>
        <small>Optional</small>
      </div>
      <section>
        <div className="form-row">
          <div className="form-group">
            <small>Special recorgnition award</small>
            <Input inputPlaceholder="Please attach file" inputType="file" />
          </div>

          <div className="form-group">
            <small>Special recorgnition award</small>
            <Input
              inputPlaceholder="www.certification.com"
              inputType="url"
              inputName="awardUrl"
              value={data.awardUrl || ""}
              onChange={handleChange}
              isRequired={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Awards;
Awards.propTypes = {
  data: propTypes.object,
  onChange: propTypes.func.isRequired,
};
