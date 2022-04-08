import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import Table from "components/dashboard/invoice/table/Table";
import Paginate from "components/dashboard/invoice/paginate";

function TabContent({ label, count }) {
  const [sampleList, setSampleList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userDataPerPage] = useState(2);
  const [btnStatus, setBtnStatus] = useState(null);

  const allList = [
    {
      id: 1,
      clientInitials: "EI",
      fullName: "Kenechukwu Idiagbor",
      invoiceNumber: "7656474",
      amount: "4500",
      date: "4 March, 2021",
      status: "pending",
    },
    {
      id: 2,
      clientInitials: "OU",
      fullName: "Obicodeman Uko",
      invoiceNumber: "7650074",
      amount: "5360",
      date: "15 April, 2021",
      status: "confirmed",
    },
    {
      id: 2,
      clientInitials: "KA",
      fullName: "Kalu Akamu",
      invoiceNumber: "7651274",
      amount: "3260",
      date: "15 June, 2001",
      status: "cancelled",
    },
    {
      id: 2,
      clientInitials: "AM",
      fullName: "Awesoma Madam",
      invoiceNumber: "7230074",
      amount: "5371",
      date: "15 April, 2021",
      status: "pending",
    },
    {
      id: 2,
      clientInitials: "EO",
      fullName: "Emeka Ofe",
      invoiceNumber: "6650074",
      amount: "3560",
      date: "12 August, 2008",
      status: "confirmed",
    },
  ];

  const confirmedInvoicesList = [
    {
      id: 1,
      clientInitials: "EI",
      fullName: "Obinna Oko",
      invoiceNumber: "7656474",
      amount: "4500",
      date: "21 March, 2021",
      status: "confirmed",
    },
  ];
  const cancelledInvoicesList = [
    {
      id: 1,
      clientInitials: "OU",
      fullName: "Obinna Uko",
      invoiceNumber: "7656474",
      amount: "4500",
      date: "4 March, 2021",
      status: "cancelled",
    },
  ];
  const pendingInvoicesList = [
    {
      id: 1,
      clientInitials: "EI",
      fullName: "Obinna Oko",
      invoiceNumber: "7656474",
      amount: "4500",
      date: "4 March, 2021",
      status: "pending",
    },
  ];

  useEffect(() => {
    if (label === "all invoices" || label === "all") {
      setSampleList(allList);
    }
    if (label === "confirmed invoice" || label === "confirmed") {
      setSampleList(confirmedInvoicesList);
    }
    if (label === "pending invoice" || label === "pending") {
      setSampleList(pendingInvoicesList);
    }
    if (label === "cancelled invoice" || label === "cancelled") {
      setSampleList(cancelledInvoicesList);
    }
  }, []);

  //Get current users
  const indexOfLastUserData = currentPage * userDataPerPage;
  const indexOfFirstUserData = indexOfLastUserData - userDataPerPage;

  const currentUserData = sampleList.slice(
    indexOfFirstUserData,
    indexOfLastUserData
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setBtnStatus(pageNumber);
  };

  return (
    <div datacount={count} datalabel={label} className="content">
      <Table theList={currentUserData} />
      <Paginate
        userDataPerPage={userDataPerPage}
        totalUsersData={allList.length}
        paginate={paginate}
        btnStatus={btnStatus}
      />
    </div>
  );
}

TabContent.propTypes = {
  label: propTypes.string,
  count: propTypes.number,
};

export default TabContent;
