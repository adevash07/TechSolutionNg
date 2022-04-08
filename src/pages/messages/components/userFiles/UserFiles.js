import { Tab, Tabs } from "components/Tabs/Tabs";
import propTypes from "prop-types";
import "./userFiles.scss";
import Images from "./Images";
import SharedFiles from "./SharedFiles";
const UserFiles = ({ sharedFiles = [], images }) => {
  return (
    <div>
      <Tabs>
        <Tab label={"Shared-Files"} tabName={"Shared Files"}>
          <SharedFiles files={sharedFiles} />
        </Tab>
        <Tab label={"Images"} tabName={"Images"}>
          <Images images={images} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default UserFiles;
UserFiles.propTypes = {
  sharedFiles: propTypes.array,
  images: propTypes.array,
};
