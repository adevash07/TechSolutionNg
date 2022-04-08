import React from "react";
import propTypes from "prop-types";
import "./welcome.scss";

const Welcome = ({ salutation, name, greeting }) => {
  return (
    <section className="dashboardWelcome">
      <h1 className="dashboardWelcome__salutation">
        {salutation}, <span className="dashboardWelcome__name">{name}</span>
      </h1>
      <p className="dashboardWelcome__greetings">{greeting}</p>
    </section>
  );
};

Welcome.propTypes = {
  salutation: propTypes.string,
  name: propTypes.string,
  greeting: propTypes.string,
};

export default Welcome;
