import React from "react";
import propTypes from "prop-types";
import { DownArrow, UpArrow } from "assets/index";
import "./tabRow.scss";

//Tab Row Component for exporting
function TabRow({
  status,
  username,
  userpic,
  amount,
  location,
  currency,
  date,
}) {
  const statusRender = () => {
    if (status === "Received") {
      return (
        <span className='downSpan'>
          <DownArrow />
          &nbsp;
          {status}
        </span>
      );
    } else {
      return (
        <span className='upSpan'>
          <UpArrow />
          &nbsp;
          {status}
        </span>
      );
    }
  };
  return (
    <div className='dataTabs tr'>
      <div className='dataTabs__Input'>
        <p>Clients</p>
        <p className='user'>
          <span className='imgCon'>
            <img src={userpic + Math.floor(Math.random() * 100) + ".jpg"} />
          </span>
          <span className='userName'>
            <span>{username}</span>
            <span>{location}</span>
          </span>
        </p>
      </div>
      <div className='dataTabs__Input'>
        <p>Amount</p>
        <p className='amount'>
          {currency}
          &nbsp;
          {amount}
        </p>
      </div>
      <div className='dataTabs__Input'>
        <p>Status</p>
        {statusRender()}
      </div>
      <div className='dataTabs__Input'>
        <p>Date</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

//Table Row Component for exporting
function TableRow({
  status,
  username,
  userpic,
  amount,
  location,
  currency,
  date,
}) {
  const statusRender = () => {
    if (status === "Received") {
      return (
        <span className='downSpan'>
          <DownArrow />
          &nbsp;
          {status}
        </span>
      );
    } else {
      return (
        <span className='upSpan'>
          <UpArrow />
          &nbsp;
          {status}
        </span>
      );
    }
  };
  return (
    <tr className='tr'>
      <td className='nameInitials'>
        <p>
          <span className='imgCon'>
            <img src={userpic + Math.floor(Math.random() * 100) + ".jpg"} />
          </span>
          <span className='userName'>
            <span>{username}</span>
            <span>{location}</span>
          </span>
        </p>
      </td>
      <td>
        {currency}&nbsp;
        {amount}
      </td>
      <td>{date}</td>
      <td>{statusRender()}</td>
    </tr>
  );
}
export { TabRow, TableRow };
TableRow.propTypes = {
  status: propTypes.any,
  username: propTypes.any,
  userpic: propTypes.any,
  amount: propTypes.any,
  location: propTypes.any,
  currency: propTypes.any,
  date: propTypes.any,
};

TabRow.propTypes = {
  status: propTypes.any,
  username: propTypes.any,
  userpic: propTypes.any,
  amount: propTypes.any,
  location: propTypes.any,
  currency: propTypes.any,
  date: propTypes.any,
};
