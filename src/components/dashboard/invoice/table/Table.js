import React from "react";
import TableRowItem from "components/dashboard/invoice/tableRowItem/TableRowItem";
import propTypes from "prop-types";
import "./table.scss";

function Table({ theList }) {
  return (
    <table className="dataTable__invoice">
      <thead className="dataTable__head">
        <tr className="dataTable__head__row">
          <th className="dataTable__clientName">Client name</th>
          <th className="dataTable__invoiceNumber">Invoice number</th>
          <th className="dataTable__invoiceAmount">Amount</th>
          <th className="dataTable__invoiceDate">Date</th>
          <th className="dataTable__invoiceStatus">Invoice Status</th>
          <th className="dataTable__actions">Actions</th>
        </tr>
      </thead>
      <tbody thead className="dataTable__body">
        {theList ? (
          theList.map((item) => (
            <TableRowItem
              key={item.id}
              clientInitials={item.clientInitials}
              fullName={item.fullName}
              invoiceNumber={item.invoiceNumber}
              amount={item.amount}
              date={item.date}
              status={item.status}
            />
          ))
        ) : (
          <>
            <p> No Data </p>
          </>
        )}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  theList: propTypes.array,
};
export default Table;
