import propTypes from "prop-types";
import "./userFiles.scss";
import UserFileCard from "./UserFileCard";
const SharedFiles = ({ files = [] }) => {
  return (
    <div>
      {files.map((file) => (
        <UserFileCard file={file} key={file.id} />
      ))}
    </div>
  );
};

export default SharedFiles;
SharedFiles.propTypes = {
  files: propTypes.array,
};
