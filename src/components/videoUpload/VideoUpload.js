import { useRef, useState } from "react";
import { Button, ProgressBar } from "components/index";
import { FaLongArrowAltUp, FaVideo, FaRegTrashAlt } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import "./videoUpload.scss";

const VideoUpload = () => {
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const fileInput = useRef();

  const handleFileSelect = (file) => {
    if(!file) return
    setTimeout(toggleSuccess, 5000);
    if (isValidFileType(file.name)) {
      handleSetFileName(file.name);
      setFile(file);
    }
  };
  // allowed file type: ["mp4", "mkv"]
  const isValidFileType = (fileName) => {
    const allowedExtensions = ["mp4", "mkv"];
    const fileExtension = fileName.split(".").pop();

    if (!allowedExtensions.includes(fileExtension)) {
      setValidationMessage(
        `required file type is any of: ${allowedExtensions.toLocaleString()}`
      );

      return false;
    }
    setValidationMessage("");
    return true;
  };
  const handleDelete = () => {
    setFile("");
    setFileName("");
    setUploadSuccess(false);
  };
  const toggleSuccess = () => {
    setUploadSuccess((curr) => !curr);
  };
  const handleSetFileName = (name) => {
    setFileName(name);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleFileDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };
  const handleFileBrowse = () => {
    fileInput.current.click();
  };
  const onFileChange = (file) => {
    handleFileSelect(file);
  };
  return (
    <div className="video-upload">
      <h4>Video upload</h4>
      <div className="file-wrapper">
        {file ? (
          <div className="upload-progress">
            <span onClick={toggleSuccess}>
              <FaVideo />
            </span>
            {uploadSuccess ? (
              <div className="upload-success">
                <small>{fileName}</small>
                <span>
                  <BiCheck />
                </span>
                <span onClick={handleDelete}>
                  <FaRegTrashAlt />
                </span>
              </div>
            ) : (
              <div className="progress-bar">
                <small>{fileName}</small>
                <div>
                  <ProgressBar completed={40} bgcolor="yellow" />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            className="drop-zone"
            onDragOver={handleDragOver}
            onDrop={handleFileDrop}
          >
            <div className="upload-icon" onClick={handleFileBrowse}>
              <FaLongArrowAltUp />
            </div>
            <small>Click on the button below or drag a file</small>
            <Button
              btnClass="medium"
              btnText="Upload a video"
              btnType="button"
              onClick={handleFileBrowse}
            />
            <input
              className="file-input"
              type="file"
              accept="video/*"
              ref={fileInput}
              hidden
              onChange={(e) => onFileChange(e.target.files[0])}
              name="image"
            />
          </div>
        )}
      </div>
      <label
        className={`label error-msg ${
          validationMessage && "error-msg-visible"
        }`}
      >
        {validationMessage}
      </label>
    </div>
  );
};

export default VideoUpload;
