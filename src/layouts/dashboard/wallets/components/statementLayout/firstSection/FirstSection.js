import React from "react";
import AtmSlotter from "../../modules/atmSlotterComponent/AtmSlotter";
import Balance from "./components/balance/Balance";
import PaymentPlan from "./components/paymentPlan/PaymentPlan";
import propTypes from "prop-types";
// import Refresh from "../../Assets/refresh.svg";
import "./firstSection.scss";

export default function FirstSection({
  differencesSign,
  walletCurrency,
  balance,
  balanceDifferences,
  planName,
  planLogo,
}) {
  return (
    <div className='firstSection'>
      <Balance
        differencesSign={differencesSign}
        walletCurrency={walletCurrency}
        balance={balance}
        balanceDifferences={balanceDifferences}
      />

      <AtmSlotter
        userName='John Martin Sawyers'
        companyName='iT solutions'
        cardName='MasterCard'
        firstFourDigit='1234'
        lastFourDigit='7890'
        currency='$'
        amount='300,000.00'
      />

      <PaymentPlan planLogo={planLogo} planName={planName} />
    </div>
  );
}

FirstSection.propTypes = {
  walletCurrency: propTypes.string,
  balance: propTypes.string,
  balanceDifferences: propTypes.any,
  planDifferences: propTypes.any,
  planName: propTypes.any,
  planLogo: propTypes.any,
  differencesSign: propTypes.any,
};
