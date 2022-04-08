import { BiCheckDouble } from "react-icons/bi";
import propTypes from "prop-types";
import "./message.scss";
const Message = ({message}) => {
  return (
    <div
      className={`message ${
        message.sender ? "message--sent" : "message--recieve"
      }`}
    >
      <p>{message.message}</p>
      <div>
        <small>{message.time}</small>
        <small
          className={`${
            message.recieved && "recieved"} ${message.read && "read"} "
          }`}
        >
          <BiCheckDouble />
        </small>
      </div>
    </div>
  );
};

export default Message;
Message.propTypes = {
  message: propTypes.object,
};
