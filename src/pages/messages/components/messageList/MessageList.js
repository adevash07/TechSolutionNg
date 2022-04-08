import { useState } from "react";
import { Message } from "../index";
import "./messageList.scss";
const MessageList = () => {
  const [messages] = useState([
    {
      id: 1,
      sender: true,
      message: "I have since paid you for the service Romano",
      time: "20:04",
      recieved: true,
      read: true,
    },
    {
      id: 2,
      sender: false,
      message: "I have not seen the payment on my portal",
      time: "20:05",
      recieved: true,
      read: true,
    },
    {
      id: 3,
      sender: true,
      message: "It has been sent, check your payment history",
      time: "20:08",
      recieved: true,
      read: true,
    },
    {
      id: 3,
      sender: false,
      message: "Ok, I can see it.",
      time: "20:09",
      recieved: true,
      read: true,
    },
    {
      id: 4,
      sender: false,
      message:
        "You UX design is awsome, i want similar design and standard for a different project",
      time: "20:05",
      recieved: true,
      read: false,
    },
  ]);

  return (
    <div className="message-list">
      <p className="message-list__date">
        {" "}
        <small className="date"> Today </small>{" "}
      </p>
      <ul>
        {messages.map((message) => (
          <>
            {message.sender ? (
              <li className="message--out" key={message.id}>
                <Message message={message} />
              </li>
            ) : !message.sender ? (
              <li className="message--in" key={message.id}>
                <Message message={message} />
              </li>
            ) : (
              <li className="log" key={message.id}>
                {" "}
                <small className="text-muted"> {message.text} </small>{" "}
              </li>
            )}
          </>
        ))}
      </ul>
      <small className="message-list__typing-text">Fabazio Romano is typying... </small>{" "}
    </div>
  );
};

export default MessageList;
