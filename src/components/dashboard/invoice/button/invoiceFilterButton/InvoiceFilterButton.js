import React from "react";
import { ReactComponent as FilterIcon } from "assets/svgs/filter-icon.svg";
import "./invoiceFilterButton.scss";
import propTypes from "prop-types";

function InvoiceFilterButton({ toggleModal, toggle, label, filterRange }) {
  const handleClick = (e) => {
    if (toggle) {
      toggle(e);
    }

    if (toggleModal) {
      toggleModal();
    }

    return null;
  };
  return (
    <button className="filter-btn" onClick={handleClick}>
      <FilterIcon />
      <span>{label}</span>
      <span>{filterRange}</span>
    </button>
  );
}

InvoiceFilterButton.propTypes = {
  toggle: propTypes.func,
  label: propTypes.string,
  filterRange: propTypes.string,
  toggleModal: propTypes.func,
};

export default InvoiceFilterButton;
