import React from "react";
import Search from "components/search/Search";

import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import "./notificationSettings.scss";
import NotificationTab from "./component/NotificationTab";

export default function NotificationSettings() {
  const notificationData = [
    {
      id: 1,
      title: "Latest Local Jobs",
      details:
        "Please select if you want messages from us and to notify you on the platform",
    },
    {
      id: 2,
      title: "Latest Local Jobs",
      details:
        "Please select if you want messages from us and to notify you on the platform",
    },
    {
      id: 3,
      title: "Latest Global Jobs",
      details:
        "Please select if you want messages from us and to notify you on the platform",
    },
    {
      id: 4,
      title: "Reminders",
      details:
        "Please select if you want messages from us and to notify you on the platform",
    },
    {
      id: 5,
      title: "Privacy and Policy",
      details:
        "Please select if you want messages from us and to notify you on the platform",
    },
  ];

  return (
    <div className='containerFluid'>
      <div className='containerSearch'>
        <Search
          linkpathacct='/accountsettingpage'
          iconarrow={<FaLongArrowAltLeft />}
          ptext='Notification'
          icon={<BiSearch />}
          inputype='search'
          placetext='search'
          inputname='search'
          icons={<FaTimesCircle />}
        />
      </div>
      <div className='containerTabs'>
        {notificationData
          ? notificationData.map((data) => (
              <NotificationTab
                key={data.id}
                title={data.title}
                details={data.details}
              />
            ))
          : "NO DATA ENTRY"}
      </div>
    </div>
  );
}
