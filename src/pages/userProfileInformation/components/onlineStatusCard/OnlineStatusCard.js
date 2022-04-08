import CustomRadioInput from "components/customRadioInput/CustomRadioInput";
import React from "react";
import "./onlineStatusCard.scss";
import { Link } from "react-router-dom";

const OnlineStatusCard = () => {
  return (
    <div className="statusCard">
      <ul className="statusCard__lists">
        <li className="statusCard__item">
          <span className="statusCard__indicator statusCard__indicator--online"></span>
          <label htmlFor="online" className="statusCard__label ">
            Online
          </label>
          <CustomRadioInput htmlForLabel="online" />
        </li>

        <li className="statusCard__item">
          <span className="statusCard__indicator statusCard__indicator--offline"></span>
          <label htmlFor="offline" className="statusCard__label ">
            Offline
          </label>
          <CustomRadioInput htmlForLabel="offline" />
        </li>

        <li className="statusCard__item">
          <span className="statusCard__indicator statusCard__indicator--busy"></span>
          <label htmlFor="busy" className="statusCard__label ">
            Busy
          </label>
          <CustomRadioInput htmlForLabel="busy" />
        </li>
        <li className="statusCard__item">
          <span className="statusCard__indicator statusCard__indicator--away"></span>
          <label htmlFor="away" className="statusCard__label ">
            Away
          </label>
          <CustomRadioInput htmlForLabel="away" />
        </li>
      </ul>
      <Link className="statusCard__link text-blue">More settings</Link>
    </div>
  );
};

export default OnlineStatusCard;
