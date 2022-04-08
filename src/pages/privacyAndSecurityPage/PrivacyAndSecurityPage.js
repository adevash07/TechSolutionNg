import Header from "layouts/header/Header";
import { PrivacyAndSecurity } from "layouts/accountSetting/privacyAndSecurity/PrivacyAndSecurity";
import React from "react";

const PrivacyAndSecurityPage = () => {
  return (
    <div>
      <Header dashboardPage={true} />
      <PrivacyAndSecurity />
    </div>
  );
};
export default PrivacyAndSecurityPage;
