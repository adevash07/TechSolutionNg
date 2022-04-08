import { useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import assets from "assets";
import "./videoDescription.scss";
const VideoDescription = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu((state) => !state);
  };
  const backgroundStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${assets.User})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="video-description">
      <div className="video-description__main">
        <div style={backgroundStyle}>
          <i className="video-menu" onClick={toggleMenu}>
            <BsThreeDotsVertical />
          </i>
          <span className="video-play">
            <AiFillPlayCircle />
          </span>
        </div>
      </div>
      <div
        className={`video-description__menu-content ${
          !openMenu && "video-description__menu-content--hidden"
        }`}
      >
        <small>Change</small>
        <small>Delete</small>
      </div>
    </div>
  );
};
export default VideoDescription;
