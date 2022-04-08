import propTypes from "prop-types";
import "./note.scss";
import assets from 'assets/index'
const Note = ({ title, children }) => {
  return (
    <div className="note">
      <img src={assets.ClipPeg}  alt="peg"/>
      <div>
        <small>{title}</small>
        {children}
      </div>
    </div>
  );
};
export default Note;
Note.propTypes = {
  title: propTypes.string,
  children: propTypes.any,
};