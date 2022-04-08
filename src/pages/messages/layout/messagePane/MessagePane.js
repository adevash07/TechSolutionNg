import { MessageBox, MessageList } from "pages/messages/components/index";
import "./messagePane.scss";

const MessagePane = () => {
  return (
    <div className="message-pane">
      <MessageList />
      <div className="input-box">
        <MessageBox />
      </div>
    </div>
  );
};

export default MessagePane;
