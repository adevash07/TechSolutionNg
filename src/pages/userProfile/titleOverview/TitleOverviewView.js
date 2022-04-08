import propTypes from "prop-types";
import { Button, Input, Note } from "components/index";
import PageHeader from "../components/pageHeader/PageHeader";
import "./titleOverviewView.scss";

const TitleOverviewView = ({ state = {}, changeHandler, onNext, onBack }) => {
  return (
    <div className="over-view">
      <section>
        <div className="page-heading">
          <PageHeader title="Title & Overview" rightText="Skip for later" />
        </div>

        <div className="row">
          <form onSubmit={onNext}>
            <div className="main">
              <div className="form-group">
                <Input
                  inputId="title"
                  inputName="title"
                  onChange={(e) => changeHandler(e.target.name, e.target.value)}
                  value={state.title || ""}
                  labelText="Your title"
                  inputPlaceholder="Example: Product designer"
                  inputType="text"
                  isRequired={false}
                  pattern="[a-zA-Z\s]+"
                  title="Enter only alphabets"
                />
              </div>
              <div className="form-group form-group--lg">
                <Input
                  inputId="description"
                  inputName="description"
                  onChange={(e) => changeHandler(e.target.name, e.target.value)}
                  value={state.description || ""}
                  labelText="Describe yourself"
                  inputPlaceholder="Write a detailed professional overview of yourself"
                  inputType="textArea"
                  isRequired={false}
                  pattern="[a-zA-Z\s]+"
                  title="Enter only alphabets"
                  rows={10}
                  cols={20}
                />
              </div>
            </div>
            <div className="action-btns">
              <Button
                btnText="Back"
                btnType="button"
                onClick={onBack}
                btnClass="grey"
              />
              <Button
                btnText="Next"
                btnType="submit"
                btnClass="medium"
                onClick={onNext}
              />
            </div>
          </form>
          <div className="note-col">
            <Note title="Describe yourself">
              <div className="description-note">
                <p>
                  Please give a valid description of your background as
                  grammatically correct as possible
                </p>
                <p>
                  Use complete statement and effeciciently describe the services
                  you offer
                </p>
                <p>
                  You can also highligth your preferred work along with your
                  professional achievements
                </p>
              </div>
            </Note>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TitleOverviewView;
TitleOverviewView.propTypes = {
  state: propTypes.object,
  changeHandler: propTypes.func,
  onNext: propTypes.func.isRequired,
  onBack: propTypes.func.isRequired,
};
