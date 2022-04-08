import propTypes from 'prop-types'
import assets from "assets";
import CommonTeams from "../commonTeams/CommonTeams";
import UserFiles from "../userFiles/UserFiles";
import "./userPane.scss";
const UserPane = ({toggleRightPane}) => {
  return (
    <div className="user-pane">
      <button className="user-pane__close-ic" onClick={toggleRightPane}>x</button>
      <div className="user-pane__info">
        <img src={assets.User} alt="user" />
        <h5>Fabrizo Romano</h5>
        <small>fabriozoRomano@gmail.com</small>
      </div>
      <CommonTeams teams={commonTeams} />
      <UserFiles images={images} sharedFiles={sharedFiles} />
    </div>
  );
};

export default UserPane;
UserPane.propTypes = {
  toggleRightPane: propTypes.func.isRequired,
};
const commonTeams = [
  {
    id: 1,
    name: "Drive mobile app development",
    description: "This is where we desing, implement all things drive app",
  },
  {
    id: 1,
    name: "Mobid web application team",
    description: "This is where we desing, implement all things drive app",
  },
];
const images = [
  { id: 1, name: "mobid file doc.pdf" },
  { id: 2, name: "mobid file doc.pdf" },
];
const sharedFiles = [
  { id: 1, name: "mobid file doc.doc" },
  { id: 2, name: "mobid file doc.pdf" },
];
