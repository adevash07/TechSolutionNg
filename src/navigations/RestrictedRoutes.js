import { lazy } from "react";
import propTypes from "prop-types";
import {
  DASHBOARD_ROUTE,
  CONGRATESPAGE_ROUTE,
  CONGRATESTWOPAGE_ROUTE,
  ACCOUNTSETTINGPAGE_ROUTE,
  MEMBERSHIPSETTINGPAGE_ROUTE,
  DEVICESHARINGPAGE_ROUTE,
  PRIVACYANDSECURITYPAGE_ROUTE,
  USER_PROFILE_ROUTE,
  PROFILE_PREVIEW_ROUTE,
  USER_PROFILE_INFORMATION_ROUTE,
  MESSAGES_ROUTE,
} from "./CONSTANTS";
import PrivateRoute from "./PrivateRoute";
const Dashboard = lazy(() => import("pages/dashboard"));
const CongratesPage = lazy(() => import("pages/congratesPage"));
const CongratesTwoPage = lazy(() => import("pages/congratesTwoPage"));
const AccountSettingPage = lazy(() => import("pages/accountSettingPage"));
const MembershipSettingPage = lazy(() => import("pages/membershipSettingPage"));
const DeviceSharingPage = lazy(() => import("pages/deviceSharingPage"));
const PrivacyAndSecurityPage = lazy(() =>
  import("pages/privacyAndSecurityPage")
);
const ProfileInformation = lazy(() => import("pages/userProfileInformation"));
const UserProfile = lazy(() => import("pages/userProfile"));
const ProfilePreview = lazy(() => import("pages/userProfile/profilePreview"));
const Messages = lazy(() => import("pages/messages"));
const Account = lazy(() => import("pages/accountSettingPage"));
const BalanceScoreCard = lazy(() => import("pages/balanceScoreCard"));

const RestrictedRoutes = (isAuthenticated, location) => {
  return (
    <>
      <PrivateRoute
        path={DASHBOARD_ROUTE}
        component={Dashboard}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={CONGRATESPAGE_ROUTE}
        component={CongratesPage}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={CONGRATESTWOPAGE_ROUTE}
        component={CongratesTwoPage}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={ACCOUNTSETTINGPAGE_ROUTE}
        component={AccountSettingPage}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={MEMBERSHIPSETTINGPAGE_ROUTE}
        component={MembershipSettingPage}
        isAuthenticated={isAuthenticated}
        location={location}
      />

      <PrivateRoute
        path={DEVICESHARINGPAGE_ROUTE}
        component={DeviceSharingPage}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={PRIVACYANDSECURITYPAGE_ROUTE}
        component={PrivacyAndSecurityPage}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={USER_PROFILE_ROUTE}
        component={UserProfile}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={USER_PROFILE_INFORMATION_ROUTE}
        component={ProfileInformation}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={PROFILE_PREVIEW_ROUTE}
        component={ProfilePreview}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={MESSAGES_ROUTE}
        component={Messages}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={`${ACCOUNTSETTINGPAGE_ROUTE}/accounts`}
        component={Account}
        isAuthenticated={isAuthenticated}
        location={location}
      />
      <PrivateRoute
        path={`${ACCOUNTSETTINGPAGE_ROUTE}/balance-score-card`}
        component={BalanceScoreCard}
        isAuthenticated={isAuthenticated}
        location={location}
      />
    </>
  );
};
export default RestrictedRoutes;
RestrictedRoutes.propTypes = {
  isAuthenticated: propTypes.bool.isRequired,
  location: propTypes.any.isRequired,
};
