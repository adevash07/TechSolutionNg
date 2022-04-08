import React from "react";
import StatusType from "components/dashboard/invoice/statusType";
import "./tableRowItem.scss";
import { BsTrashFill, BsEyeFill } from "react-icons/bs";
import propTypes from "prop-types";

function TableRowItem({
  clientInitials,
  fullName,
  invoiceNumber,
  amount,
  date,
  status,
}) {
  return (
    <tr className="dataTable__body__row">
      <td className="nameInitials">
        <span id="clientInitials">{clientInitials}</span>
        <span id="fullname">{fullName}</span>
      </td>
      <td className="invoiceNumber">{invoiceNumber}</td>
      <td className="invoiceAmount">{amount}</td>
      <td className="invoiceDate">{date}</td>
      <td id="status">
        <StatusType status={status} />
      </td>
      <td id="actions">
        <span>
          <BsEyeFill />
        </span>
        <span>
          <BsTrashFill />
        </span>
      </td>
    </tr>
  );
}

TableRowItem.propTypes = {
  clientInitials: propTypes.string,
  fullName: propTypes.string,
  invoiceNumber: propTypes.string,
  amount: propTypes.string,
  date: propTypes.string,
  status: propTypes.string,
};

export default TableRowItem;
