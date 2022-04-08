import React, { useState } from "react";

import { Link } from "react-router-dom";
import Filter from "components/dashboard/invoice/filter/Filter";
import Search from "components/dashboard/invoice/search/Search";
import InvoiceFilterButton from "components/dashboard/invoice/button/invoiceFilterButton/InvoiceFilterButton";
import FilterDropDownMenu from "components/dashboard/invoice/dropDownMenu/FilterDropDownMenu";
import ResendTable from "components/dashboard/invoice/resendTable/ResendTable";
import propTypes from "prop-types";
import "./resendPage.scss";
import LeftArrow from "components/leftArrow";

function ResendPage({ url }) {
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const toggleFilterMenu = () => {
    return setOpenFilterMenu(!openFilterMenu);
  };
  return (
    <div>
      <header className="resendPage__header">
        <Link to={`${url}`}>
          <LeftArrow />
        </Link>
        <h4 className="resendPage__header__label">Resend invoice</h4>
      </header>
      <section className="invoiceInputs">
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
      <section className="instruction">
        <h4 className="instruction__label">Resend invoice</h4>
        <p className="instruction__text">
          Here is a list of all invoice automatically sent to the client, please
          only click &quot;Resend&quot; if the client has not acknowledged
          reciept
        </p>
      </section>
      <ResendTable />
    </div>
  );
}

ResendPage.propTypes = {
  url: propTypes.any,
};

export default ResendPage;
