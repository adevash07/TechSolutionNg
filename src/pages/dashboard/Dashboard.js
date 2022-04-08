import React from "react";
import Invoices from "layouts/dashboard/invoice/Invoice";
import Reports from "layouts/dashboard/reports/Reports";
import { Route, Switch, useRouteMatch } from "react-router";
import WalletPage from "layouts/dashboard/wallets/WalletPage";
import {
  DashboardContent,
  DashboardSideNav,
  Projects,
  Header,
  MakeAnOffer,
  MakeAnOffer2,
  AllProjectsDetails,
  MakeABid,
} from "layouts";

import "./dashboard.scss";

const Dashboard = () => {
  const { path, url } = useRouteMatch();

  return (
    <>
      <Header dashboardPage={true} />
      <DashboardSideNav url={url} />
      <main className="dashboardContent">
        <div className="dashboardContent__container">
          <Switch>
            <Route exact path={`${path}/`}>
              <DashboardContent />
            </Route>
            <Route
              path={`${path}/projects/make-an-offer2/:id`}
              component={MakeAnOffer2}
            />
            <Route
              path={`${path}/projects/make-an-offer/:id`}
              component={MakeAnOffer}
            />
            <Route
              path={`${path}/projects/all-projects-detail/:id`}
              component={AllProjectsDetails}
            />
            <Route
              path={`${path}/projects/make-a-bid/:id`}
              component={MakeABid}
            />
            <Route path={`${path}/projects`}>
              <Projects />
            </Route>

            <Route path={`${path}/invoices`} component={Invoices} />
            <Route path={`${path}/reports`} component={Reports} />
            <Route path={`${path}/wallets`} component={WalletPage} />
          </Switch>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
