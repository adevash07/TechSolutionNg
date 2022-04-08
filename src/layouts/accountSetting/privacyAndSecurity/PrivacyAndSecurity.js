import React, { useState } from "react";
import "./privacyAndSecurity.scss";
import ComponentPrivacy from "./componentPrivacy/ComponentPrivacy";
import Search from "../../../components/search/Search";

// import * as PrivRoute from "../../navigations/CONSTANTS";

import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { PrivacyNavigation } from "./privacyNavigation/PrivacyNavigation";
import PasswordComponent from "./passwordComponent/PasswordComponent";
import { FactorComponent } from "./factorComponent/FactorComponent";
import { LinkAccount } from "./linkeAccount/LinkAccount";
import { ProfileAvailable } from "./profileAvailable/ProfileAvailable";

export const PrivacyAndSecurity = () => {
  const [componentPath, setComponentPath] = useState("");
  // const [activepara, setactivepara] = useState("");

  const handleClick = (path) => {
    setComponentPath(path);
  };

  const gotComponent = (thePath) => {
    switch (thePath) {
      case "Phone number & Email":
        return <PrivacyNavigation />;

      case "Password":
        return <PasswordComponent />;
      case "2-Factor authentication":
        return <FactorComponent />;
      case "Linked accounts":
        return <LinkAccount />;
      case "Profile available":
        return <ProfileAvailable />;

      default:
        return <PrivacyNavigation />;
    }
  };

  return (
    <div className='privacySecurity'>
      <div className='privacySecurity__search'>
        <Search
          linkpathacct='/accountsettingpage'
          iconarrow={<FaLongArrowAltLeft />}
          ptext='Privacy And Security'
          icon={<BiSearch />}
          inputype='search'
          placetext='search'
          inputname='search'
          icons={<FaTimesCircle />}
        />
      </div>

      <div
        className={`${
          componentPath === "2-Factor authentication" ||
          componentPath === "Linked accounts"
            ? "privacySecurity__div--column"
            : "privacySecurity__div"
        }`}>
        <div className='privacySecurityDiv__component'>
          <ComponentPrivacy
            handleClick={handleClick}
            text='Phone number & Email'
            className={componentPath}
          />
          <ComponentPrivacy
            handleClick={handleClick}
            text='Password'
            className={componentPath}
          />

          <ComponentPrivacy
            handleClick={handleClick}
            text='2-Factor authentication'
            className={componentPath}
          />
          <ComponentPrivacy
            handleClick={handleClick}
            text='Linked accounts'
            className={componentPath}
          />
          <ComponentPrivacy
            handleClick={handleClick}
            text='Profile available'
            className={componentPath}
          />
        </div>
        <div className='privacySecurity__gotComponent'>
          {gotComponent(componentPath)}
        </div>
      </div>
    </div>
  );
};
