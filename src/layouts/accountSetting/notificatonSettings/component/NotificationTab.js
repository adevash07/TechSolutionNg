import React, { useState } from "react";
import propTypes from "prop-types";
import { Input } from "components/index";
import "./notificationTab.scss";
export default function NotificationTab({ title, details }) {
  const [checkStateCall, setCheckStateCall] = useState(false);
  const [checkStateTel, setCheckStateTel] = useState(false);
  const [checkStateEmail, setCheckStateEmail] = useState(false);

  const checkBox = (e) => {
    if (e.target.name === "typeCall") {
      setCheckStateCall(!checkStateCall);
    } else if (e.target.name === "typeTell") {
      setCheckStateTel(!checkStateTel);
    } else {
      setCheckStateEmail(!checkStateEmail);
    }
  };
  return (
    <div className='tab'>
      <div className='tab__details'>
        <p>{title}</p>
        <p>{details}</p>
      </div>

      <ul className='tab__options'>
        <li className='options__list'>
          <Input
            inputType='checkboxCustom'
            customCheckBox={true}
            inputName='typeTell'
            inputId='typeTell'
            labelText='Tel'
            onChange={(e) => checkBox(e)}
            value={checkStateTel}
          />
        </li>
        <li className='options__list'>
          <Input
            inputType='checkboxCustom'
            customCheckBox={true}
            inputName='typeCall'
            labelText='Call'
            onChange={(e) => checkBox(e)}
            value={checkStateCall}
          />
        </li>
        <li className='options__list'>
          <Input
            inputType='checkboxCustom'
            customCheckBox={true}
            inputName='typeEmail'
            inputId='typeEmail'
            labelText='Email'
            onChange={(e) => checkBox(e)}
            value={checkStateEmail}
          />
        </li>
      </ul>
    </div>
  );
}
NotificationTab.propTypes = {
  title: propTypes.any,
  details: propTypes.any,
};
