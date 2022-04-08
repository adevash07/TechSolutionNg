import propTypes from "prop-types";
import { Input } from "components/index";
import "./acomplishments.scss";
const Acomplishments = ({ data = {}, onChange }) => {
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    onChange(name, inputValue);
  };
  return (
    <div className="acomplishments">
      <div className="acomplishments__heading">
        <h4>Acomplishments and Certifications</h4>
        <small>Optional</small>
      </div>
      <section>
        <div className="form-group">
          <small>Name</small>
          <Input
            inputPlaceholder="Name of certification"
            inputName="certificationName"
            value={data.certificationName || ""}
            onChange={handleChange}
            isRequired={false}
          />
        </div>
        <div className="form-group">
          <small>Issueing organization</small>
          <Input
            inputPlaceholder="Name of issueing organization"
            inputName="issueingOrg"
            value={data.issueingOrg}
            onChange={handleChange}
            isRequired={false}
          />
        </div>
        <Input
          labelText="This certification does not expire"
          inputType="checkbox"
          inputName="notExpire"
          value={data.notExpire}
          onChange={handleChange}
          isRequired={false}
        />
        <div className="form-row">
          <div className="form-group-col">
          <div className="form-group">
            <small>Issue date</small>
            <Input dropdown={true} inputPlaceholder="Month" />
            <Input dropdown={true} inputPlaceholder="Year" />
          </div>
          </div>
          
          <div className="form-group-col">
          <div className="form-group">
            <small>Expiration date</small>
            <Input dropdown={true} inputPlaceholder="Month" />
            <Input dropdown={true} inputPlaceholder="Year" />
          </div>
          </div>
          
        </div>
        
        <div className="form-group">
          <small>Certification ID</small>
          <Input
            inputPlaceholder="Certification identification number"
            inputName="certificationId"
            value={data.certificationId}
            onChange={handleChange}
            isRequired={false}
          />
        </div>
        <div className="form-group">
          <small>Certification url</small>
          <Input
            inputPlaceholder="www.certification.com"
            inputName="certificationUrl"
            value={data.certificationUrl}
            onChange={handleChange}
            isRequired={false}
            inputType="url"
          />
        </div>
      </section>
    </div>
  );
};
export default Acomplishments;
Acomplishments.propTypes = {
  data: propTypes.object,
  onChange: propTypes.func.isRequired,
};
