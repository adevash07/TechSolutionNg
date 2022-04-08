import React from "react";
import "./allProjectsModalBody.scss";
import { FaRegTimesCircle } from "react-icons/fa";
import { Button, Input } from "components/index";
import propTypes from "prop-types";
import Search from "layouts/dashboard/projects/components/search/Search";

const AllProjectsModalBody = ({ allProjectsModalFunc }) => {
  return (
    <div className="allProjectsModal">
      <div className="allProjectsModal__header">
        <span>Edit Filters</span>
        <FaRegTimesCircle onClick={allProjectsModalFunc} />
      </div>
      <form className="allProjectsModal__form">
        <div className="allProjectsModal__formCheckboxes">
          <h5>Project Type</h5>
          <div>
            <Input
              inputType="checkbox"
              inputName="fixedProjects"
              inputId="fixedProjects"
              labelText="Fixed Projects"
            />
            <Input
              inputType="checkbox"
              inputName="hourlyProjects"
              inputId="hourlyProjects"
              labelText="Hourly Projects"
            />
            <Input
              inputType="checkbox"
              inputName="milestoneProjects"
              inputId="milestoneProjects"
              labelText="Milestone Projects"
            />
          </div>
        </div>
        <div className="allProjectsModal__formSearch">
          <Search
            searchEdit={true}
            labelHeader="Skills"
            labelFooter="Clear skills"
            searchPlaceholder="Search skills"
          />
          <Search
            searchEdit={true}
            labelHeader="Specific location (to find jobs in your location or choice location)"
            labelFooter="Clear location"
            searchPlaceholder="Search location"
          />
          <Search
            searchEdit={true}
            labelFooter="Clear language"
            searchPlaceholder="Search language"
          />
        </div>
        <div className="allProjectsModal__submit">
          <Button
            btnClass="blueSquare"
            btnText="Reset filters"
            btnType="submit"
          />
        </div>
      </form>
    </div>
  );
};

AllProjectsModalBody.propTypes = {
  allProjectsModalFunc: propTypes.func,
};

export default AllProjectsModalBody;
