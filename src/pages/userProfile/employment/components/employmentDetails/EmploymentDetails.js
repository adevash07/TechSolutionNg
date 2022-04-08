import { useState } from "react";
import propTypes from "prop-types";
import { BsPlus, BsExclamation } from "react-icons/bs";
import { Input, Button, Comment } from "components/index";
import "./employmentDetails.scss";

const initData = [
  {
    key: "0",
    title: "",
    employmentType: "",
    company: "",
    location: "",
    description: "",
    currentRole: false,
    startMonth: "",
    endMonth: "",
    startYear: "",
    endYear: "",
    currency: "",
    grossEarning: "",
    links: "",
  },
];
const EmploymentDetails = ({ data, onChange }) => {
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
    onChange("employment", newFileds);
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
    onChange("employment", updatedFields);
  };

  return (
    <div className="employment-details">
      {details.map((detail) => (
        <div key={detail.key}>
          <div className="form-group form-group--lg">
            <small>Title</small>
            <Input
              dropdown={true}
              inputId="title"
              selectId="title"
              inputName="title"
              selectName="title"
              onChange={(e) =>
                handleFieldChange(e.target.name, e.target.value, detail.key)
              }
              value={detail.title}
              labelText="Title"
              inputPlaceholder="Select"
              InputType="select"
              isRequired={false}
              pattern="[a-zA-Z\s]+"
              title="Enter only alphabets"
            />
          </div>

          <div className="form-group form-group--lg">
            <small>Employment type</small>
            <Input
              dropdown={true}
              inputId="employmentType"
              selectId="employmentType"
              inputName="employmentType"
              selectName="employmentType"
              onChange={(e) =>
                handleFieldChange(e.target.name, e.target.value, detail.key)
              }
              value={detail.employmentType}
              labelText="Employment type"
              inputPlaceholder="Select"
              InputType="select"
              isRequired={false}
              pattern="[a-zA-Z\s]+"
              title="Enter only alphabets"
            />
          </div>
          <div className="form-group form-group--lg">
            <Input
              inputId="company"
              selectId="company"
              inputName="company"
              selectName="company"
              onChange={(e) =>
                handleFieldChange(e.target.name, e.target.value, detail.key)
              }
              value={detail.company || ""}
              labelText="Company"
              inputPlaceholder="Example: Imperotechne Limited"
              InputType="text"
              isRequired={false}
              pattern="[a-zA-Z\s]+"
              title="Enter only alphabets"
            />
          </div>

          <div className="form-group form-group--lg">
            <small>Location</small>
            <Input
              dropdown={true}
              inputId="location"
              selectId="location"
              inputName="location"
              selectName="location"
              onChange={(e) =>
                handleFieldChange(e.target.name, e.target.value, detail.key)
              }
              value={detail.location || ""}
              labelText="Location"
              inputPlaceholder="Select"
              InputType="select"
              isRequired={false}
              pattern="[a-zA-Z\s]+"
              title="Enter only alphabets"
            />
          </div>

          <div className="form-group form-group--lg description">
            <Comment title="Brief description">
              <p>
                Please write concise description with complete sentences with
                good grammer. You should be able to describe how your role
                impacted the company
              </p>
              <p>
                The specific things you did to enhance the company and affected
                the sales positively.
              </p>
            </Comment>
            <Input
              inputId="description"
              selectId="description"
              inputName="description"
              selectName="description"
              onChange={(e) =>
                handleFieldChange(e.target.name, e.target.value, detail.key)
              }
              value={detail.description}
              labelText=""
              inputPlaceholder=""
              inputType="textArea"
              isRequired={false}
              pattern="[a-zA-Z\s]+"
              title="Enter only alphabets"
            />
          </div>
          <div className="check-bo-wrap">
            <Input
              inputId="currentRole"
              inputName="currentRole"
              onChange={(e) =>
                handleFieldChange(e.target.name, e.target.checked, detail.key)
              }
              value={detail.currentRole}
              labelText="Current work role?"
              inputPlaceholder=""
              inputType="checkbox"
              isRequired={false}
              pattern="[a-zA-Z\s]+"
              title="Enter only alphabets"
            />
          </div>
          <section>
            <div className="form-row">
              <div className="form-group-col">
                <div className="form-group">
                  <small>Start date</small>
                  <Input
                    dropdown={true}
                    inputId="startMonth"
                    selectId="startMonth"
                    inputName="startMonth"
                    selectName="startMonth"
                    onChange={(e) =>
                      handleFieldChange(
                        e.target.name,
                        e.target.value,
                        detail.key
                      )
                    }
                    value={detail.startMonth || ""}
                    labelText="Start date"
                    inputPlaceholder="Select"
                    InputType="select"
                    isRequired={false}
                    pattern="[a-zA-Z\s]+"
                    title="Enter only alphabets"
                  />
                </div>
                <div className="form-group">
                  <Input
                    dropdown={true}
                    inputId="startYear"
                    selectId="startYear"
                    inputName="startYear"
                    selectName="startYear"
                    onChange={(e) =>
                      handleFieldChange(
                        e.target.name,
                        e.target.value,
                        detail.key
                      )
                    }
                    value={detail.startYear || ""}
                    labelText=""
                    inputPlaceholder="Select"
                    InputType="select"
                    isRequired={false}
                    pattern="[a-zA-Z\s]+"
                    title="Enter only alphabets"
                  />
                </div>
              </div>

              <div className="form-group-col">
                <div className="form-group">
                  <small>End date</small>
                  <Input
                    dropdown={true}
                    inputId="endMonth"
                    selectId="endMonth"
                    inputName="endMonth"
                    selectName="endMonth"
                    onChange={(e) =>
                      handleFieldChange(
                        e.target.name,
                        e.target.value,
                        detail.key
                      )
                    }
                    value={detail.endMonth || ""}
                    labelText="End date"
                    inputPlaceholder="Month"
                    InputType="select"
                    isRequired={false}
                    pattern="[a-zA-Z\s]+"
                    title="Enter only alphabets"
                  />
                </div>
                <div className="form-group">
                  <Input
                    dropdown={true}
                    inputId="endYear"
                    selectId="endYear"
                    inputName="endYear"
                    selectName="endYear"
                    onChange={(e) =>
                      handleFieldChange(
                        e.target.name,
                        e.target.value,
                        detail.key
                      )
                    }
                    value={detail.endYear || ""}
                    labelText=""
                    inputPlaceholder="Year"
                    InputType="select"
                    isRequired={false}
                    pattern="[a-zA-Z\s]+"
                    title="Enter only alphabets"
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <small>Currency</small>
                <Input
                  dropdown={true}
                  inputId="currency"
                  selectId="currency"
                  inputName="currency"
                  selectName="currency"
                  onChange={(e) =>
                    handleFieldChange(e.target.name, e.target.value, detail.key)
                  }
                  value={detail.currency || ""}
                  labelText="Currency"
                  inputPlaceholder="Select"
                  InputType="select"
                  isRequired={false}
                  pattern="[a-zA-Z\s]+"
                  title="Enter only alphabets"
                />
              </div>

              <div className="form-group">
                <Input
                  inputId="grossEarning"
                  inputName="grossEarning"
                  onChange={(e) =>
                    handleFieldChange(e.target.name, e.target.value, detail.key)
                  }
                  value={detail.grossEarning || ""}
                  labelText="Gross earning"
                  inputPlaceholder="Enter your gross earning at this job"
                  InputType="number"
                  isRequired={false}
                  pattern="[a-zA-Z\s]+"
                  title="Enter only alphabets"
                />
              </div>
            </div>
          </section>
          <section>
            <small>Media</small>
            <small>
              Add link to external documents, presentation and videos
            </small>

            <div className="actions-btn">
              <Button btnText="Next" btnType="button" btnClass="medium" />
              <button type="button" className="btn--outline">
                Links
              </button>
            </div>
            <div>
              <span>
                <BsExclamation />
              </span>
              <small>Supported formats</small>
            </div>
          </section>
        </div>
      ))}
      <div className="btn-add-ctn">
        <span>
          <BsPlus />
        </span>{" "}
        <small onClick={handleAdd}> Add another experience</small>
      </div>
    </div>
  );
};

export default EmploymentDetails;
EmploymentDetails.propTypes = {
  data: propTypes.object,
  onChange: propTypes.func.isRequired,
};
