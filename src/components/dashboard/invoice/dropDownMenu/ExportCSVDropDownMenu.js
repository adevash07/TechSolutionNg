import React, { useState } from "react";
import ExportCSVDropDownItem from "./dropDownItem/ExportCSVDropDownItem";
import InvoiceCSVButton from "../button/invoiceCSVButton/InvoiceCSVButton";
// import ToastNotification from "components/dashboard/invoice/toastNotification";
import "./exportCSVDropDownMenu.scss";
import propTypes from "prop-types";

function ExportCSVDropDownMenu({ showToast }) {
  const [hide, setHide] = useState(true);

  const handleChange = (event) => {
    if (event.target) setHide(!hide);
  };
  return (
    hide && (
      <aside className="exportCSV">
        <div className="exportCSV-container">
          <h4>Export CSV</h4>
          <h3>All invoice with status:</h3>
          <ul>
            <ExportCSVDropDownItem label="Confirmed" />
            <ExportCSVDropDownItem label="Pending" />
            <ExportCSVDropDownItem label="Cancelled" />
            <ExportCSVDropDownItem label="All invoices" />
          </ul>
          <InvoiceCSVButton
            label="Export invoice"
            showToast={showToast}
            handleChange={handleChange}
          />
        </div>
      </aside>
    )
  );
}

ExportCSVDropDownMenu.propTypes = {
  label: propTypes.string,
  showToast: propTypes.func,
};

export default ExportCSVDropDownMenu;
