import React from "react";
import "./invoiceCSVButton.scss";
import propTypes from "prop-types";

function InvoiceCSVButton({ label, showToast, handleChange }) {
  return (
    <div className="btnContainer">
      <button
        className="btn btn-blue"
        onClick={(event) => {
          event.preventDefault();
          showToast();
          handleChange(event);
        }}
      >
        {label}
      </button>
    </div>
  );
}

InvoiceCSVButton.propTypes = {
  label: propTypes.string,
  showToast: propTypes.func,
  handleChange: propTypes.func,
};

export default InvoiceCSVButton;
