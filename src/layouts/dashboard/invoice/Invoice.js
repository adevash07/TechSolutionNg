import React, { useEffect, useState } from "react";
import InvoiceContent from "./invoiceContent/InvoiceContent";
import ResendPage from "./resendPage/ResendPage";

import { Route, Switch, useRouteMatch } from "react-router";
import Loading from "components/loading/Loading";

import "./invoiceContent/invoiceContent.scss";

function Invoices() {
  const { path, url } = useRouteMatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading loadingAbsolute={true} />
      ) : (
        <section className="invoice">
          <Switch>
            <Route exact path={`${path}/`}>
              <InvoiceContent url={url} />
            </Route>
            <Route path={`${path}/resend`}>
              <ResendPage url={url} />
            </Route>
          </Switch>
        </section>
      )}
    </>
  );
}

export default Invoices;
