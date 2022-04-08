import Header from "layouts/header/Header";
import MembershipSetting from "layouts/accountSetting/membershipSetting/MembershipSetting";
import React from "react";

const MembershipSettingPage = () => {
  return (
    <div>
      <Header dashboardPage={true} />
      <MembershipSetting />
    </div>
  );
};
export default MembershipSettingPage;
