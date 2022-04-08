import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import Table from "components/dashboard/invoice/table/Table";
import Paginate from "components/dashboard/invoice/paginate";
import "./resendTable.scss";

function TabContent() {
  const [sampleList, setSampleList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userDataPerPage] = useState(2);
  const [btnStatus, setBtnStatus] = useState(null);

  const resendList = [
    {
      id: 1,
      clientInitials: "EI",
      fullName: "Kenechukwu Idiagbor",
      invoiceNumber: "7656474",
      amount: "4500",
      date: "4 March, 2021",
      status: "resend",
    },
    {
      id: 2,
      clientInitials: "OU",
      fullName: "Obicodeman Uko",
      invoiceNumber: "7650074",
      amount: "5360",
      date: "15 April, 2021",
      status: "resend",
    },
    {
      id: 2,
      clientInitials: "KA",
      fullName: "Kalu Akamu",
      invoiceNumber: "7651274",
      amount: "3260",
      date: "15 June, 2001",
      status: "resend",
    },
    {
      id: 2,
      clientInitials: "AM",
      fullName: "Awesoma Madam",
      invoiceNumber: "7230074",
      amount: "5371",
      date: "15 April, 2021",
      status: "resend",
    },
    {
      id: 2,
      clientInitials: "EO",
      fullName: "Emeka Ofe",
      invoiceNumber: "6650074",
      amount: "3560",
      date: "12 August, 2008",
      status: "resend",
    },
  ];

  useEffect(() => {
    setSampleList(resendList);
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
    <div className="resendPage__container">
      <Table theList={currentUserData} />

      <Paginate
        userDataPerPage={userDataPerPage}
        totalUsersData={resendList.length}
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
