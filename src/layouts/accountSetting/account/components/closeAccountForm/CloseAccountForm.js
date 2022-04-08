import { useState } from "react";
import propTypes from "prop-types";
import { Button, Input } from "components/index";
import assets from "assets/index";
import "./closeAccountForm.scss";

const CloseAccountForm = ({ closeHandle, cancelHandler }) => {
  const [reasons, setReasons] = useState(data);
  const handleChange = (e) => {
    const { name, checked } = e.target;
    const updatedReasons = reasons.map((reason) =>
      reason.name === name ? { ...reason, isChecked: checked } : reason
    );
    setReasons(updatedReasons);
  };
  const handleCloseAccount = () => {
    closeHandle();
  };
  const handleCancelClose = () => {
    cancelHandler();
  };
  return (
    <div className='closeForm'>
      <section>
        <small>Close Account</small>
        <div className='closeForm__heading'>
          <h4 className='closeForm__title'>We are sad to see you go</h4>
          <img src={assets.Sad} className='sad-ic' alt='sad' />
        </div>
      </section>
      <small className='clossForm__reasons'>What may have gone wrong?</small>
      <ul>
        {reasons.map(({ label, name, isChecked }, index) => (
          <li key={index}>
            <Input
              labelText={label}
              inputType='checkboxCustom'
              customCheckBox={true}
              inputName={name}
              value={isChecked}
              onChange={handleChange}
            />
          </li>
        ))}
      </ul>
      <div className='closeForm__actionBtns'>
        <Button
          btnText='Close account'
          onClick={handleCloseAccount}
          btnClass='medium'
        />
        <Button
          btnText="Don't close account"
          onClick={handleCancelClose}
          btnClass='grey'
        />
      </div>
    </div>
  );
};

export default CloseAccountForm;
CloseAccountForm.propTypes = {
  closeHandle: propTypes.func.isRequired,
  cancelHandler: propTypes.func.isRequired,
};
const data = [
  {
    label: "There was no project to bid for",
    name: "noProject",
    isChecked: false,
  },
  {
    label: "Too much projects to bid for",
    name: "tooMuchProjects",
    isChecked: false,
  },
  {
    label: "Too much projects to bid for",
    name: "tooMuchProjects1",
    isChecked: false,
  },
  {
    label: "Too much projects to bid for",
    name: "tooMuchProjects2",
    isChecked: false,
  },
  {
    label: "Too much projects to bid for",
    name: "tooMuchProjects3",
    isChecked: false,
  },
];
