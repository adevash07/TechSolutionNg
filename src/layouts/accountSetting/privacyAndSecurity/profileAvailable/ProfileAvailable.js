import React, { useState, useEffect } from "react";
import { ProfileComponent } from "./profileComponent/ProfileComponent";
import { FaPen, FaTimes } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import "./profileavailable.scss";

export const ProfileAvailable = () => {
  const [iconState, setIconState] = useState(false);
  const changeicon = () => {
    setIconState(!iconState);
  };

  useEffect(() => {
    setIconStatus(false);
    setDurationIcon(false);
    return () => {};
  }, [iconState === false]);

  const [iconStatus, setIconStatus] = useState(false);
  const ChangeStatus = () => {
    if (iconState) {
      setIconStatus(!iconStatus);
    }
  };
  const [durationIcon, setDurationIcon] = useState(false);
  const Changeiconduration = () => {
    setDurationIcon(!durationIcon);
  };
  return (
    <>
      <div className='profile'>
        <div className='profile__penContainer'>
          <p>Profile available</p>
          <i className=' profile__iconPen' onClick={changeicon}>
            {iconState ? (
              <FaTimes className='profile__transition' />
            ) : (
              <FaPen className='profile__transition' />
            )}
          </i>
        </div>
        <ProfileComponent ptext='Online' spanclass='blue' />
        <div>
          {iconState ? (
            <div className='profile__toggleProfileStatus'>
              <ProfileComponent ptext='Online' spanclass='blue' />
              <ProfileComponent ptext='Offline' spanclass='black' />
              <ProfileComponent ptext='Blusy' spanclass='light-red' />
              <ProfileComponent ptext='Appear away' spanclass='red' />
              <ProfileComponent ptext='Appear Offline' />
              <ProfileComponent resetext='Reset availability' />

              <ProfileComponent
                duration='Status duration'
                onClick={ChangeStatus}
                iconstate={iconStatus}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {iconStatus ? (
        <div className='profile__divContainer'>
          <div className='profile__containerDay'>
            <ProfileComponent daytext='One day' spanclass='blue' />
            <ProfileComponent daytext='Two days' />
            <ProfileComponent daytext='Two weeks' />
            <ProfileComponent daytext='Parmanent' />
            <p className='profile__spancolor' onClick={Changeiconduration}>
              <span className='spancolor'></span>
              <span>Customer</span>
              <span className='profile__spanArrowdownIcon'>
                <TiArrowSortedDown
                  className={
                    durationIcon ? " rotate" : "profile__arrowdownIcon"
                  }
                />
              </span>
            </p>
          </div>
          {durationIcon ? (
            <div className='profile__durationBtn'>
              <ProfileComponent pwrite='Write duration' />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};
