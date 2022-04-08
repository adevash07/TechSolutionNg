import React from "react";
import "./deviceSharing.scss";
import ComponentDevice from "./component/ComponentDevice";
import Search from "../../../components/search/Search";

import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { GoDeviceDesktop } from "react-icons/go";
import { VscDeviceMobile } from "react-icons/vsc";
import Button from "components/button/Button";

const DeviceSharing = () => {
  return (
    <div className='deviceSharing'>
      <div className='deviceSharing__Search'>
        <Search
          linkpathacct='/accountsettingpage'
          iconarrow={<FaLongArrowAltLeft />}
          ptext='Device Sharing'
          icon={<BiSearch />}
          inputype='search'
          placetext='search'
          inputname='search'
          icons={<FaTimesCircle />}
        />
      </div>
      <div className='deviceSharing__ParagraphyDiv'>
        <p>
          The devices & browsers you are signed into are below. If you see
          unfamiliar device or location, click &#34; End session &#34; & kindly
          change your
          <br /> password
        </p>
        <div className='deviceSharing__Date'>
          <div className='deviceSharing__LocationDate'>
            <p>Device</p>
            <p>Location</p>
            <p>Date & Time</p>
          </div>
          <ComponentDevice
            iconstele={<GoDeviceDesktop />}
            pclass='blue'
            osversion='os x 11.12.3'
            browsername='Microsoft Edge'
            pstate='Lagos, NG'
            monthname='March'
            datetime='4, 2021 at 11:35 am'
            psession='Current session'
          />
          <ComponentDevice
            iconstele={<VscDeviceMobile />}
            osversion='os x 10.15.3'
            browsername='Firefox'
            pstate='Abuja, NG'
            monthname='Jan'
            datetime='4, 2021 at 11:35 am'
            psession='End session'
          />
          <ComponentDevice
            iconstele={<VscDeviceMobile />}
            osversion='Android'
            browsername='Chrome'
            pstate='Lagos, NG'
            monthname='Jan'
            datetime='4, 2021 at 11:35 am'
            psession='End session'
          />
          <ComponentDevice
            iconstele={<VscDeviceMobile />}
            osversion='os x 10.15.3'
            browsername='Firefox'
            pstate='Aba, NG'
            monthname='Jan'
            datetime='4, 2021 at 11:35 am'
            psession='End session'
          />
          <ComponentDevice
            iconstele={<VscDeviceMobile />}
            osversion='Android'
            browsername='Chrome'
            pstate='Unknown'
            monthname='Jan'
            datetime='4, 2021 at 11:35 am'
            psession='End session'
          />
        </div>
        <div className='container-btn-grey deviceSharing__Button'>
          <Button btnText='End session' btnType='button' btnClass='grey' />
        </div>
      </div>
    </div>
  );
};
export default DeviceSharing;
