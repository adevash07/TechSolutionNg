import { SearchBox, SelectInput } from "pages/messages/components/index";
import UserList from "pages/messages/components/userList/UserList";
import "./sidePane.scss";

const SidePane = () => {
  return (
    <div className="side-pane">
      <div className="side-pane__search">
        <SearchBox />
        <div className="filter-search">
          <SelectInput data={["Oldest", "Latest"]} />
        </div>
      </div>

      <div className="side-pane__users">
        <UserList />
      </div>
    </div>
  );
};
export default SidePane;
