import { useState } from "react";
import propTypes from "prop-types";
import { Button, Input, VideoUpload, Note } from "components/index";
import ButtonGroup from "../components/buttonGroup/ButtonGroup";
import PageHeader from "../components/pageHeader/PageHeader";
import "./talentView.scss";

const TalentView = ({ state = {}, changeHandler, onNext }) => {
  const [selectedSkills, setSelectedSkills] = useState(() =>
    state.skills ? new Map(Object.entries(state.skills)) : new Map()
  );

  const handleSkillSelect = (e) => {
    const { name, checked } = e.target;
    setSelectedSkills((currentState) => currentState.set(name, checked));
    changeHandler("skills", setSelectedSkills);
  };
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    onNext();
  };
  return (
    <div className="talent-view">
      <section className="talent-view__main">
        <div className="page-heading">
          <PageHeader title="Talent" rightText="" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="container-first">
              <div>
                <h4>Give us more details about your talent</h4>
                <div className="form-group form-group--lg">
                  <small>Please select your talent</small>
                  <Input dropdown={true} />
                </div>
              </div>
              <div className="skills-container">
                <small>
                  Please select your design skills (you can select up to 5)
                </small>
                <div className="skills">
                  <ul>
                    {skills1.map(({ label, name }) => (
                      <li key={name}>
                        <Input
                          labelText={label}
                          inputType="checkbox"
                          inputName={name}
                          value={selectedSkills.get(name)}
                          onChange={handleSkillSelect}
                        />
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {skills2.map(({ label, name }) => (
                      <li key={name}>
                        <Input
                          labelText={label}
                          inputType="checkbox"
                          inputName={name}
                          value={selectedSkills.get(name)}
                          onChange={handleSkillSelect}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
                <section>
                  <small>Please select your talent level</small>
                  <ButtonGroup
                    level={state.level || ""}
                    onChange={(level) => changeHandler("level", level)}
                  />
                </section>
              </div>
              <div className="form-group form-group--lg">
                <small>Please select your location</small>
                <Input dropdown={true} />
              </div>
            </div>
            <div className="note-col">
              <Note title="Talent test">
                <div className="talent-note">
                  <p>
                    Please be aware that you will take a{" "}
                    <span>talent test</span> in order for us to be sure that you
                    have the right skills for the job.
                  </p>
                  <p>
                    This will place you amongst the tio solution providers, and
                    also enable us to match you with excellent offers!
                  </p>
                </div>
              </Note>
            </div>
          </div>
          <div className="row">
            <div className="container-second">
              <VideoUpload />
            </div>
            <div className="note-col">
              <Note title="Video upload">
                <div className="video-note">
                  <p>
                    Please upload a pitch video about your technology background
                    and show casing some of your skills.
                  </p>
                  <p>Key points to note</p>
                  <ul>
                    <li>Explain the services you offer</li>
                    <li>A 3 minutes duration</li>
                    <li>Supported format: mkv and mp4</li>
                  </ul>
                </div>
              </Note>
            </div>
          </div>
          <div className="action-btns">
            <Button
              btnText="Next"
              btnType="submit"
              btnClass="medium"
              onClick={handleSubmit}
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default TalentView;
TalentView.propTypes = {
  state: propTypes.object,
  changeHandler: propTypes.func,
  onNext: propTypes.func.isRequired,
};
const skills1 = [
  {
    label: "UI/UX desing",
    name: "uxDesign",
  },
  {
    label: "Graphics design",
    name: "graphicsDesign",
  },
  {
    label: "Logo design",
    name: "logoDesign",
  },
  {
    label: "Web design",
    name: "webDesign",
  },
  {
    label: "Visual design",
    name: "visual",
  },
];
const skills2 = [
  {
    label: "Motion desing",
    name: "motionDesign",
  },
  {
    label: "Mobile application design",
    name: "mobileDesign",
  },
  {
    label: "UX researcher",
    name: "uiResearcher",
  },
  {
    label: "UI design",
    name: "uiDesign",
  },
];
