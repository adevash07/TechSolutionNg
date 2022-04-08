import propTypes from "prop-types";
import { BsQuestion, BsFillTrashFill } from "react-icons/bs";
import { Input, Button, IconWrapper } from "components/index";
import "./employmentForm.scss";

const EmploymentForm = ({ detail = {} }) => {
  const handleFieldChange = () => {};
  return (
    <div className="employment-form">
      <div className="employment-form__form-group">
        <Input
          inputId="title"
          selectId="title"
          inputName="title"
          selectName="title"
          onChange={(e) => handleFieldChange(e.target.title, e.target.value)}
          value={detail.title || ""}
          labelText="Employment title"
          inputPlaceholder=""
          InputType="select"
          isRequired={false}
          pattern="[a-zA-Z\s]+"
          title="Enter only alphabets"
        />
      </div>

      <div className="employment-form__form-group employment-form__form-group--lg">
        <small>Employment type</small>
        <Input
          dropdown={true}
          inputId="employmentType"
          selectId="employmentType"
          inputName="employmentType"
          selectName="employmentType"
          onChange={(e) => handleFieldChange(e.target.name, e.target.value)}
          value={detail.employmentType}
          labelText="Employment type"
          inputPlaceholder="Select"
          InputType="select"
          isRequired={false}
          pattern="[a-zA-Z\s]+"
          title="Enter only alphabets"
        />
      </div>
      

      <div className="employment-form__form-group employment-form__form-group--lg">
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
      <div className="check-bo-wrap">
        <small>Date</small>
        <Input
          inputId="currentRole"
          inputName="currentRole"
          onChange={(e) =>
            handleFieldChange(e.target.name, e.target.checked, detail.key)
          }
          value={detail.currentRole}
          labelText="I am currently working this role?"
          inputPlaceholder=""
          inputType="checkbox"
          isRequired={false}
          pattern="[a-zA-Z\s]+"
          title="Enter only alphabets"
        />
      </div>
      <div className="employment-form__form-row">
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
                handleFieldChange(e.target.name, e.target.value, detail.key)
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
                handleFieldChange(e.target.name, e.target.value, detail.key)
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
            <small>Currently working role</small>
          <div className="form-group">
            <small>End date</small>
            <Input
              dropdown={true}
              inputId="endMonth"
              selectId="endMonth"
              inputName="endMonth"
              selectName="endMonth"
              onChange={(e) =>
                handleFieldChange(e.target.name, e.target.value, detail.key)
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
                handleFieldChange(e.target.name, e.target.value, detail.key)
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

      <div className="employment-form__form-group employment-form__form-group--lg description">
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

      <section>
        <div className="employment-form__form-row">
          <div className="form-groups">
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

          <div className="form-group form-group--earning" >
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
      <section className="employment-details">
        <div className="award">
          <p>award.pdf</p>
          <IconWrapper IconName={BsFillTrashFill} handleClick={() => {}} />
        </div>
        <div className="award">
          <p>award.pdf</p>
          <IconWrapper IconName={BsFillTrashFill} handleClick={() => {}} />
        </div>
        <small>Add link to external documents, presentation and videos</small>

        <div className="actions-btns">
          <Button btnText="Upload" btnType="button" btnClass="medium" />
          <button type="button" className="btn--outline">Links</button>
          
        </div>
        <div className="upload-label">
          <span>
            <BsQuestion />
          </span>
          <small>Supported formats</small>
        </div>
      </section>
    </div>
  );
};

export default EmploymentForm;
EmploymentForm.propTypes = {
  detail: propTypes.object,
};
