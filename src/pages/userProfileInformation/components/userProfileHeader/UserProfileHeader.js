import React, { useState } from "react";

import { BsCaretDownFill, BsFillCircleFill } from "react-icons/bs";
import { FiLink2 } from "react-icons/fi";
import ProfileImg from "assets/images/def_user.jpeg";
import ProfileBackgroundCover from "assets/images/background-cover.png";
import filterIcon from "assets/svgs/filter-icon.svg";
import { IconContext } from "../../../../../node_modules/react-icons/lib/esm/iconContext";
import { IoLocationOutline } from "react-icons/io5";
import EditButton from "../editButton";

import "./userProfileHeader.scss";
import OnlineStatusCard from "../onlineStatusCard";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = (e) => {
    e.preventDefault();
    setDropDown(!dropDown);
  };
  return (
    <>
      <header className="profileInformation__header">
        <div className="profileInformation__header--backgroundCover">
          <img src={ProfileBackgroundCover} alt="header_top_background" />
        </div>

        <section className="profileInformation__header__content">
          <EditButton />

          <div className="profileInformation__details">
            <div className="profileInformation__details--photo">
              <div>
                <img src={ProfileImg} alt="profile-pics" />
                <span className="onlineStatusIndicator">
                  <IconContext.Provider
                    value={{
                      style: {
                        color: "#00C206",
                        fontSize: "1.35em",
                      },
                    }}
                  >
                    <BsFillCircleFill />
                  </IconContext.Provider>

                  <IconContext.Provider
                    value={{
                      style: {
                        marginLeft: "0.5em",
                        fontSize: "1.25em",
                      },
                    }}
                  >
                    <BsCaretDownFill
                      onClick={(e) => handleDropDown(e)}
                      className={`arrow  ${
                        dropDown ? "arrow--rotate180" : "arrow--rotate"
                      }`}
                    />
                  </IconContext.Provider>
                </span>
              </div>
              {dropDown && <OnlineStatusCard />}
            </div>

            <div className="profileInformation__personal">
              <div className="profileInformation__personal__box">
                <div className="profileInformation__name">Obicodeman Uko</div>

                <div className="profileInformation__dataBlock">
                  <div className="profileInformation__dataBlock__contentContainer">
                    <span className="profileInformation--lightBlue ceraProMediumFontFamily textFocused">
                      Product Designer
                    </span>

                    <span className="profileInformation__successMetrics">
                      <span className="profileInformation--lightBlue profileInformation__successMetrics--percent">
                        100%
                      </span>
                      &nbsp;
                      <span>Project success</span>
                    </span>

                    <span className="profileInformation__cta--filter">
                      <span>Choose profile filter</span>
                      <img src={filterIcon} alt="filter-icon" />
                      &nbsp;
                      <span className="subset">2</span>
                    </span>
                  </div>

                  <div className="profileInformation__dataBlock__contentContainer">
                    <span className="profileInformation__country">
                      <IoLocationOutline />
                      <span>Lagos, NG</span>
                    </span>

                    <span className="profileInformation__dateJoined ">
                      <span className="profileInformation--lightBlue ceraProMediumFontFamily">
                        Joined:
                      </span>
                      &nbsp; 24th Jan, 2020
                    </span>

                    <span className="profileInformation__cta__createLink">
                      <a
                        href="#profile-link"
                        className="profileInformation__cta--link"
                      >
                        <span>Create profile url</span>

                        <FiLink2 size={34} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
