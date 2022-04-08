import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AccountSetting from "layouts/accountSetting/AccountSetting";
import Header from "layouts/header/Header";
import { PrivacyAndSecurity } from "layouts/accountSetting/privacyAndSecurity/PrivacyAndSecurity";
import MembershipSetting from "layouts/accountSetting/membershipSetting/MembershipSetting";
import DeviceSharing from "layouts/accountSetting/deviceSharing/DeviceSharing";
import NotificationSettings from "layouts/accountSetting/notificatonSettings/NotificationSettings";
import "./accountSettingPage.scss";
import AccountVerification from "layouts/accountSetting/accountVerification/AccountVerification";
import { PaymentAndFinance } from "layouts/accountSetting/paymentAndFinance/PaymentAndFinance";
import Account from "layouts/accountSetting/account/Account";
const AccountSettingPage = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Header dashboardPage={true} />
      <main className='SettingContent'>
        <Route exact path={`${path}/`}>
          <AccountSetting url={url} />
        </Route>
        <Switch>
          <Route
            path={`${path}/membershipsetting`}
            component={MembershipSetting}
          />

          <Route path={`${path}/privacyandsecurity`}>
            <PrivacyAndSecurity />
          </Route>
          <Route path={`${path}/devicesharing`}>
            <DeviceSharing />
          </Route>
          <Route path={`${path}/notification`}>
            <NotificationSettings />
          </Route>
          <Route path={`${path}/accountverification`}>
            <AccountVerification />
          </Route>
          <Route path={`${path}/paymentandfinance`}>
            <PaymentAndFinance />
          </Route>
          <Route path={`${path}/account`}>
            <Account />
          </Route>
        </Switch>
      </main>
    </>
  );
};
export default AccountSettingPage;
