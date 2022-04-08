import React, { useState } from "react";
import "./linkAccountComponent.scss";
import propTypes from "prop-types";
import { Input } from "components/index";

export const LinkAccountComponent = ({
  icons,
  header,
  ptext,
  iconclass,
  togglerName,
  togglerId,
}) => {
  const [toggled, setToggled] = useState();
  const toggler = () => {
    setToggled(!toggled);
  };
  return (
    <div className="linkComponent">
      <div className="linkComponent__Text">
        <div>
          <i className={iconclass ? `icon-${iconclass}` : "icon"}>{icons}</i>
        </div>
        <div className="linkComponent__Paragraph">
          <p>{header}</p>
          <p>{ptext}</p>
        </div>
      </div>
      <Input
        inputType="toggler"
        onChange={() => toggler()}
        inputName={togglerName}
        inputId={togglerId}
        value={toggled}
      />
    </div>
  );
};
LinkAccountComponent.propTypes = {
  icons: propTypes.any,
  header: propTypes.string,
  iconclass: propTypes.string,
  ptext: propTypes.string,
  togglerId: propTypes.string,
  togglerName: propTypes.string,
};
export default LinkAccountComponent;
