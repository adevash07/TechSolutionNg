import { useState } from "react";
import { GrUnlink } from "react-icons/gr";
import { IoSend } from "react-icons/io5";
import propTypes from "prop-types";
import "./messageBox.scss";
const MessageBox = ({ sendHandler }) => {
  const [ message, setMessage ] = useState("");
  const handleSend = (e) => {
    e.preventDefault();

    if (message) sendHandler(message);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      if (message) sendHandler(message);
    }
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <form onSubmit={handleSend} className="message-form">
      <input
        required={true}
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        placeholder="Type a message"
      />
      <div className="send-container">
        <span>
          <GrUnlink />
        </span>
        <button className="send-btn">
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default MessageBox;
MessageBox.propTypes = {
  sendHandler: propTypes.func.isRequired,
};
