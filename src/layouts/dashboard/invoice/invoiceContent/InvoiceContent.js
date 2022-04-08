import React, { useState } from "react";
import AmountType from "components/dashboard/invoice/amountType/AmountType";
import Filter from "components/dashboard/invoice/filter/Filter";
import FilterDropDownMenu from "components/dashboard/invoice/dropDownMenu/FilterDropDownMenu";
import InvoiceFilterButton from "components/dashboard/invoice/button/invoiceFilterButton/InvoiceFilterButton";
import Search from "components/dashboard/invoice/search/Search";
import InvoiceButton from "components/dashboard/invoice/button/InvoiceButton/InvoiceButton";
import ExportDropDownMenu from "components/dashboard/invoice/dropDownMenu/ExportDropDownMenu";
import ExportCSVDropDownMenu from "components/dashboard/invoice/dropDownMenu/ExportCSVDropDownMenu";
import Tabs from "components/dashboard/invoice/Tabs";
import TableContent from "components/dashboard/invoice/tableContent";
import ToastNotification from "components/dashboard/invoice/toastNotification";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import "./invoiceContent.scss";

function InvoiceContent({ url }) {
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const [openExportMenu, setOpenExportMenu] = useState(false);
  const [openExportCSVMenu, setOpenExportCSVMenu] = useState(false);
  const [openToast, setToast] = useState(false);
  const tabletSize = 768;

  const showToast = () => {
    setTimeout(() => {
      setToast(!openToast);
    }, 5000);
  };

  const toggleFilterMenu = () => {
    return setOpenFilterMenu(!openFilterMenu);
  };
  const toggleExportMenu = () => {
    return setOpenExportMenu(!openExportMenu);
  };
  const toggleExportCSVMenu = () => {
    return setOpenExportCSVMenu(!openExportCSVMenu);
  };
  return (
    <>
      <h3 className="invoice--label">Invoices</h3>

      <section className="invoiceInputs invoiceContent__one">
        <Filter>
          <InvoiceFilterButton
            toggle={toggleFilterMenu}
            label="Filter"
            filterRange="3"
          />
          {openFilterMenu && <FilterDropDownMenu />}
        </Filter>
        <Search />
      </section>

      <section className="invoiceContent__two">
        <div className="financialData">
          <AmountType nameLabel="Billed" amountLabel="N45, 000" />
          <AmountType nameLabel="Recieved" amountLabel="N50, 000" />
        </div>

        <div className="invoiceContent__buttonContainer">
          <div className="exportButtonBox">
            <InvoiceButton
              btnType="button"
              btnIcon={<BsThreeDots />}
              btnText="Export"
              btnColor="white"
              toggle={toggleExportMenu}
            />
            {openExportMenu && (
              <ExportDropDownMenu toggleExportCSVMenu={toggleExportCSVMenu} />
            )}
          </div>

          <div className="exportResendButtonBox">
            <Link to={`${url}/resend`}>
              <InvoiceButton
                btnType="button"
                btnText="Resend invoice"
                btnColor="blue"
              />
            </Link>

            {openExportCSVMenu && (
              <ExportCSVDropDownMenu showToast={showToast} />
            )}
          </div>

          {openToast && (
            <ToastNotification
              status="success"
              message="Invoice has been exported"
            />
          )}
        </div>
      </section>

      <Tabs>
        <TableContent
          label={`${window.innerWidth <= tabletSize ? "all" : "all invoices"}`}
          count={45}
        />
        <TableContent
          label={`${
            window.innerWidth <= tabletSize ? "confirmed" : "confirmed invoice"
          }`}
          count={18}
        />
        <TableContent
          label={`${
            window.innerWidth <= tabletSize ? "pending" : "pending invoice"
          }`}
          count={20}
        />
        <TableContent
          label={`${
            window.innerWidth <= tabletSize ? "cancelled" : "cancelled invoice"
          }`}
          count={5}
        />
      </Tabs>
    </>
  );
}

InvoiceContent.propTypes = {
  url: propTypes.any,
};

export default InvoiceContent;
