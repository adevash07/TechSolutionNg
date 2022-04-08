import { useState } from "react";
import MessagePane from "./messagePane/MessagePane";
import SidePane from "./sidePane/SidePane";
import TopPane from "./topPane/TopPane";
import "./style.scss";
import { UserPane } from "../components/index";

const MessagesLayout = () => {
  const [showRightPane, setShowRightPane] = useState(false);

  const toggleRightPane = () => {
    setShowRightPane((state) => !state);
  };
  return (
    <>
      <div className="messages-layout">
        <aside>
          <SidePane />
        </aside>
        <div className="pane-lg">
          <div className="top-bar">
            <TopPane toggleRightPane={toggleRightPane} />
          </div>

          <MessagePane toggleRightPane={toggleRightPane} />
        </div>
        <aside
          className={`right-pane ${showRightPane && "right-pane--visible"}`}
        >
          <UserPane toggleRightPane={toggleRightPane} />
        </aside>
      </div>
    </>
  );
};

export default MessagesLayout;
