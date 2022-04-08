import Search from "components/search/Search";
import React from "react";
import "./accountSetting.scss";
import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";

import { BsPerson } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import { BiCheckCircle } from "react-icons/bi";
import { MdSupervisorAccount } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdDevicesOther } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { FiCreditCard } from "react-icons/fi";

// import { FaLongArrowAltLeft } from "react-icons/fa";
import Header from "layouts/header/Header";
import propTypes from "prop-types";
import AccountSettingCard from "components/accountSettingCard/AccountSettingCard";

const AccountSetting = ({ url }) => {
  console.log(url);

  return (
    <>
      <Header dashboardPage={true} />
      <div className='accountSetting__Div'>
        <Search
          // iconarrow={<FaLongArrowAltLeft />}
          ptext='Account settings'
          icon={<BiSearch />}
          inputype='search'
          placetext='search'
          inputname='search'
          icons={<FaTimesCircle />}
        />

        <div className='accountSetting__DivAccount'>
          <div>
            <AccountSettingCard
              icon={<BsPerson />}
              linkpath={`/user-profile-info`}
              htext='Profile information'
              ptextact='There is a whole lot about me to identify  and see, change setting here and see them'
            />
            <AccountSettingCard
              icon={<AiOutlineLock />}
              linkpath={`${url}/privacyandsecurity`}
              htext='Privacy &amp; security'
              ptextact='There is a whole lot about me to identify  and see, change setting here and see them'
            />
            <AccountSettingCard
              icon={<BiCheckCircle />}
              linkpath={`${url}/accountverification`}
              htext='Account verification'
              ptextact='There is a whole lot about me to identify  and see, change setting here and see them'
            />
            <AccountSettingCard
              icon={<MdSupervisorAccount />}
              linkpath={`${url}/membershipsetting`}
              htext='Membership setting'
              ptextact='There is a whole lot about me to identify  and see, change setting here and see them'
            />
            <AccountSettingCard
              icon={<FaUserShield />}
              linkpath={`${url}/account`}
              htext='Account'
              ptextact='There is a whole lot about me to identify  and see, change setting here and see them'
            />
          </div>

          <div>
            <AccountSettingCard
              icon={<IoMdNotificationsOutline />}
              linkpath={`${url}/notification`}
              htext='Notification'
              ptextact='There is a whole lot about me to identify  and see, change setting here and see them'
            />
            <AccountSettingCard
              icon={<MdDevicesOther />}
              linkpath={`${url}/devicesharing`}
              htext='Device sharing'
              ptextact='There is a whole lot about me to identify  and see, change setting here and see them'
            />
            <AccountSettingCard
              icon={<MdPayment />}
              linkpath={`${url}/paymentandfinance`}
              htext='Payment and finance'
              ptextact='There is a whole lot about me to identify  and see, change setting here and see them'
            />
            <AccountSettingCard
              icon={<FiCreditCard />}
              linkpath={`${url}/balance-score-card`}
              htext='Balance score card'
              ptextact='There is a whole lot about me to identify  and see, change setting here and see them'
            />
          </div>
        </div>
      </div>
    </>
  );
};

AccountSetting.propTypes = {
  url: propTypes.any,
};
export default AccountSetting;
