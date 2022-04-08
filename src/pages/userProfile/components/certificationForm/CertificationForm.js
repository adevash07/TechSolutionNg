import { useState } from "react";
import propTypes from "prop-types";
import { BsPlus } from "react-icons/bs";
import { Input } from "components/index";
import "./certificationForm.scss";

const initData = [
  {
    key: "0",
    certificationName: "Accenture design certificate",
    issueingOrganization: "Accenture",
    certificationId: "48859995",
    issueDate: "Oct 23, 2008",
    expirationDate: "0c 23, 2021",
    certificationUrl: "http://accenture.com",
  },
];
const CertificationForm = ({ data, onChange }) => {
  const [details, setDetails] = useState(() =>
    data && data.length ? data : initData
  );

  const handleAdd = () => {
    let length = details.length;
    let key = `k${length + 1}`;

    const newFileds = details.concat({
      ...initData,
      key,
    });
    setDetails(newFileds);
    console.log(details.length);
    onChange("certification", newFileds);
  };

  /*const handleRemove = (key) => {
    if (details.length > 1) {
      const filtered = details.filter((field) => field.key !== key);

      setDetails(filtered);
      onChange("contactPersons", filtered);
    }
  };*/
  const handleFieldChange = (name, value, key) => {
    const updatedFields = details.map((field) =>
      field.key === key ? Object.assign({}, field, { [name]: value }) : field
    );

    setDetails(updatedFields);
    onChange("certification", updatedFields);
  };

  return (
    <div className="certification-form">
      {details.map((detail) => (
        <div key={detail.key} className="certification-form__form">
          <div >
            <div className="form-group">
              <Input
                inputId="certificationName"
                selectId="certificationName"
                inputName="certificationName"
                selectName="certificationName"
                onChange={(e) =>
                  handleFieldChange(e.target.name, e.target.value, detail.key)
                }
                value={detail.certificationName || ""}
                labelText="Certification name"
                inputPlaceholder=""
                InputType="text"
                isRequired={false}
                pattern="[a-zA-Z\s]+"
                title="Enter only alphabets"
              />
            </div>
            <div className="form-group">
              <Input
                inputId="issueingOrganization"
                selectId="issueingOrganization"
                inputName="issueingOrganization"
                selectName="issueingOrganization"
                onChange={(e) =>
                  handleFieldChange(e.target.name, e.target.value, detail.key)
                }
                value={detail.issueingOrganization || ""}
                labelText="Issueing organization"
                inputPlaceholder=""
                InputType="text"
                isRequired={false}
                pattern="[a-zA-Z\s]+"
                title="Enter only alphabets"
              />
            </div>
            <div className="form-group">
              <Input
                inputId="certificationId"
                selectId="certificationId"
                inputName="certificationId"
                selectName="certificationId"
                onChange={(e) =>
                  handleFieldChange(e.target.name, e.target.value, detail.key)
                }
                value={detail.certificationId || ""}
                labelText="Certification ID"
                inputPlaceholder=""
                InputType="text"
                isRequired={false}
                pattern="[a-zA-Z\s]+"
                title="Enter only alphabets"
              />
            </div>
          </div>

          <div>
            <div className="form-group">
              <Input
                inputId="issueDate"
                selectId="issueDate"
                inputName="issueDate"
                selectName="issueDate"
                onChange={(e) =>
                  handleFieldChange(e.target.name, e.target.value, detail.key)
                }
                value={detail.issueDate || ""}
                labelText="Issue date"
                inputPlaceholder=""
                InputType="text"
                isRequired={false}
                pattern="[a-zA-Z\s]+"
                title="Enter only alphabets"
              />
            </div>
            <div className="form-group">
              <Input
                inputId="expirationDate"
                selectId="expirationDate"
                inputName="expirationDate"
                selectName="expirationDate"
                onChange={(e) =>
                  handleFieldChange(e.target.name, e.target.value, detail.key)
                }
                value={detail.expirationDate || ""}
                labelText="Expiration date"
                inputPlaceholder=""
                InputType="text"
                isRequired={false}
                pattern="[a-zA-Z\s]+"
                title="Enter only alphabets"
              />
            </div>
            <div className="form-group">
              <Input
                inputId="certificationUrl"
                selectId="certificationUrl"
                inputName="certificationUrl"
                selectName="certificationUrl"
                onChange={(e) =>
                  handleFieldChange(e.target.name, e.target.value, detail.key)
                }
                value={detail.certificationUrl || ""}
                labelText="Certification Url"
                inputPlaceholder=""
                InputType="url"
                isRequired={false}
                pattern="[a-zA-Z\s]+"
                title="Enter only alphabets"
              />
            </div>
          </div>
        </div>
      ))}
      <div className="btn-add-ctn">
        <span>
          <BsPlus />
        </span>{" "}
        <small onClick={handleAdd}> Add another certification</small>
      </div>
    </div>
  );
};

export default CertificationForm;
CertificationForm.propTypes = {
  data: propTypes.object,
  onChange: propTypes.func.isRequired,
};
