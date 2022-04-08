import React from "react";
import "./recentInvoice.scss";
import propTypes from "prop-types";

const RecentInvoice = ({
  invoiceAmount,
  invoiceCompany,
  invoiceName,
  paid,
  invoiceImg,
}) => {
  return (
    <div className="dashboardInvoice">
      <div className="dashboardInvoice__info">
        <div className="dashboardInvoice__imgContainer">
          <img className="dashboardInvoice__img" src={invoiceImg} alt="" />
        </div>
        <div className="dashboardInvoice__details">
          <h5 className="dashboardInvoice__name">{invoiceName}</h5>
          <span className="dashboardInvoice__company">{invoiceCompany}</span>
        </div>
      </div>
      <div
        className={
          paid
            ? "dashboardInvoice__paidStatus success"
            : "dashboardInvoice__paidStatus fail"
        }
      >
        {paid ? "Paid" : "Late"}
      </div>
      <div className="dashboardInvoice__amount">N {invoiceAmount}</div>
    </div>
  );
};

RecentInvoice.propTypes = {
  invoiceAmount: propTypes.string,
  invoiceCompany: propTypes.string,
  invoiceName: propTypes.string,
  paid: propTypes.any,
  invoiceImg: propTypes.any,
};

export default RecentInvoice;
