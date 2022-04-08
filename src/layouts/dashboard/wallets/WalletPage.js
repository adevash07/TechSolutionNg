import FirstSection from "layouts/dashboard/wallets/components/statementLayout/firstSection/FirstSection";
import React, { useEffect, useState } from "react";
import assets from "assets/index";
import "./walletPage.scss";
import RecentComponent from "layouts/dashboard/wallets/components/statementLayout/recentCarouselComponent/RecentComponent";
import StatementSection from "./components/statementLayout/statementSection/StatementSection";
import Loading from "components/loading/Loading";

export default function WalletPage() {
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
        <div className='walletPage'>
          <h3>Wallets</h3>
          {/********  First Section of Wallet Page *******/}
          <FirstSection
            walletCurrency='$'
            differencesSign='+'
            balance='300,000'
            balanceDifferences='$15,000'
            planName='MasterCard'
            planLogo={assets.PlanLogo}
          />
          <RecentComponent transactionTotal='5' />
          <StatementSection />
        </div>
      )}
    </>
  );
}
