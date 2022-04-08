import React, { useState, useEffect } from "react";
import Filter from "components/dashboard/invoice/filter/Filter";
import FilterDropDownMenu from "components/dashboard/invoice/dropDownMenu/FilterDropDownMenu";
import InvoiceFilterButton from "components/dashboard/invoice/button/invoiceFilterButton/InvoiceFilterButton";
import "./statementTable.scss";
import { TabRow, TableRow } from "./TabRowComponent/TabRow";
import propTypes from "prop-types";

const data = [
  {
    id: 1,
    status: "Received",
    amount: "50,000",
    username: "Beard mannny",
    userpic: "https://randomuser.me/api/portraits/med/women/",
    location: "california, usa",
    date: "21st-oct-2020",
    currency: "$",
  },
  {
    id: 2,
    status: "WithDrawals",
    amount: "50,000",
    username: "Beard mannny",
    userpic: "https://randomuser.me/api/portraits/med/men/",
    location: "california, usa",
    date: "21st-oct-2020",
    currency: "$",
  },
  {
    id: 3,
    status: "WithDrawals",
    amount: "50,000",
    username: "Beard mannny",
    userpic: "https://randomuser.me/api/portraits/med/men/",
    location: "california, usa",
    date: "21st-oct-2020",
    currency: "$",
  },
  {
    id: 4,
    status: "Received",
    amount: "50,000",
    username: "Beard mannny",
    userpic: "https://randomuser.me/api/portraits/med/men/",
    location: "california, usa",
    date: "21st-oct-2020",
    currency: "$",
  },
  {
    id: 5,
    status: "WithDrawals",
    amount: "50,000",
    username: "Beard mannny",
    userpic: "https://randomuser.me/api/portraits/med/men/",
    location: "california, usa",
    date: "21st-oct-2020",
    currency: "$",
  },
  {
    id: 6,
    status: "WithDrawals",
    amount: "50,000",
    username: "Beard mannny",
    userpic: "https://randomuser.me/api/portraits/med/women/",
    location: "california, usa",
    date: "21st-oct-2020",
    currency: "$",
  },
  {
    id: 7,
    status: "Received",
    amount: "50,000",
    username: "Beard mannny",
    userpic: "https://randomuser.me/api/portraits/med/men/",
    location: "california, usa",
    date: "21st-oct-2020",
    currency: "$",
  },
  {
    id: 8,
    status: "WithDrawals",
    amount: "50,000",
    username: "Beard mannny",
    userpic: "https://randomuser.me/api/portraits/med/women/",
    location: "california, usa",
    date: "21st-oct-2020",
    currency: "$",
  },
];

export default function statementTable({
  allTransactionNumber,
  receivedNumber,
  withdrawalsNumber,
}) {
  //State declaration for the page
  const [activeTab, setactiveTab] = useState("allTransaction");
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  //Get windows screen to append to popUp tagPosition -->
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  const toggleFilterMenu = () => {
    return setOpenFilterMenu(!openFilterMenu);
  };
  const handleClick = (e, newState) => {
    e.preventDefault();
    setactiveTab(newState);
  };

  return (
    <div className='statementTabs'>
      <div className='tabHeading'>
        <ul className='tabsList'>
          <li className={activeTab === "allTransaction" ? "current" : " "}>
            <a
              href='#'
              onClick={(e) => handleClick(e, "allTransaction")}
              label='allTransaction'>
              All transactions<span>{allTransactionNumber}</span>
            </a>
          </li>
          <li className={activeTab === "Received" ? "current" : " "}>
            <a onClick={(e) => handleClick(e, "Received")} href=''>
              Received<span>{receivedNumber}</span>
            </a>
          </li>
          <li className={activeTab === "WithDrawals" ? "current" : " "}>
            <a onClick={(e) => handleClick(e, "WithDrawals")} href=''>
              WithDrawals<span>{withdrawalsNumber}</span>
            </a>
          </li>
        </ul>

        <Filter>
          <InvoiceFilterButton toggle={toggleFilterMenu} filterRange='3' />
          {openFilterMenu && <FilterDropDownMenu search={true} />}
        </Filter>
      </div>
      <div className='tabsContent'>
        {screenSize > 770 ? (
          <table className='dataTable'>
            <thead>
              <tr>
                <th>Client</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data ? (
                data.map((user) => (
                  <>
                    {activeTab === "allTransaction" ? (
                      <TableRow
                        key={user.id}
                        amount={user.amount}
                        status={user.status}
                        currency={user.currency}
                        location={user.location}
                        userpic={user.userpic}
                        date={user.date}
                        username={user.username}
                      />
                    ) : user.status === activeTab ? (
                      <TableRow
                        key={user.id}
                        amount={user.amount}
                        status={user.status}
                        currency={user.currency}
                        location={user.location}
                        userpic={user.userpic}
                        date={user.date}
                        username={user.username}
                      />
                    ) : null}
                  </>
                ))
              ) : (
                <p> No Data Entry</p>
              )}
            </tbody>
          </table>
        ) : (
          <div className='dataTable'>
            {data ? (
              data.map((user) => (
                <>
                  {activeTab === "allTransaction" ? (
                    <TabRow
                      key={user.id}
                      amount={user.amount}
                      status={user.status}
                      currency={user.currency}
                      location={user.location}
                      userpic={user.userpic}
                      date={user.date}
                      username={user.username}
                    />
                  ) : user.status === activeTab ? (
                    <TabRow
                      key={user.id}
                      amount={user.amount}
                      status={user.status}
                      currency={user.currency}
                      location={user.location}
                      userpic={user.userpic}
                      date={user.date}
                      username={user.username}
                    />
                  ) : null}
                </>
              ))
            ) : (
              <p> No Data Entry</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

statementTable.propTypes = {
  allTransactionNumber: propTypes.any,
  receivedNumber: propTypes.any,
  withdrawalsNumber: propTypes.any,
};
