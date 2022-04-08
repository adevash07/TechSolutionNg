import Search from "components/search/Search";
import React from "react";
import Group2840 from "assets/images/loginImages/Group2840.svg";
import "./membershipSetting.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Membershiplan from "components/membershiPlan/MembershiPlan";
import { BiCheck } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import TextbtnPlan from "components/membershiPlan/textbtnPlan/TextbtnPlan";
import businnesstrade from "assets/images/loginImages/businesstrade.svg";
import customer from "assets/images/loginImages/customer.svg";
import moneybag from "assets/images/loginImages/moneybag.svg";

export const MembershipSetting = (props) => {
  console.log(props);
  return (
    <>
      <div className='membershipSetting'>
        <div className=' membershipSetting__Search'>
          <Search
            linkpathacct='/accountsettingpage'
            iconarrow={<FaLongArrowAltLeft />}
            ptext='membership setting'
          />
        </div>

        <div className='membershipSetting__Premium'>
          <div className='membershipSetting__PremiumHeader'>
            <h4>Go Premium</h4>
            <h4>Get access to enterprise projects!</h4>
            <p>
              There is more that can be done on IT solution when you become a
              premium member, upgrade now..
            </p>
          </div>
          <div className='membershipSetting__DivImg'>
            <img src={Group2840} alt='membershipSetting__ImgGirl' />
          </div>
        </div>
        <div className='membershipSetting__HeadComponent'>
          <p>Avaliable plan</p>
          <div className='container-fluid-con-flex membershipSetting__flex'>
            <div className='membershipSetting__HeadMember'>
              <div className=' membershipSetting__Head4'>
                <h4>Free plan</h4>
                <h4>Premium plan</h4>
              </div>
              <Membershiplan
                ptext='One user account'
                icon={<BiCheck />}
                icont={<BiCheck />}
              />
              <Membershiplan
                ptext='Free email support'
                icon={<BiCheck />}
                icont={<BiCheck />}
              />
              <Membershiplan
                ptext='10 bids a month'
                icon={<BiCheck />}
                icont={<BiCheck />}
              />
              <Membershiplan
                ptext='Enterprise project'
                icontimes={<FaTimes />}
                icont={<BiCheck />}
              />
              <Membershiplan
                ptext='Enterprise clients'
                icontimes={<FaTimes />}
                icont={<BiCheck />}
              />
              <Membershiplan
                ptext='Goodness me'
                icontimes={<FaTimes />}
                icont={<BiCheck />}
              />
            </div>
            <div>
              <TextbtnPlan
                ptextplan='Solution provider free plan'
                num='0'
                str='/ month'
                btntype='button'
                btntext='Current plan'
                btnclass='white'
              />
              <TextbtnPlan
                ptextplan='Preferred provider premium plan'
                num='10'
                str='/ month'
                btntype='button'
                btntext='Upgrade to premium'
                btnclass='blue'
              />
            </div>
          </div>
        </div>
        <p className='membershipSetting__HeadComponentParagraph'>
          More reasons you should be a premium member
        </p>
        <div className='membershipSetting__TextPlanIcon'>
          <TextbtnPlan
            textclass='blue'
            iconclass='orange'
            icon={moneybag}
            htext='Make 50% more'
            ptext='This means make more money on it solution as a premium provider'
          />
          <TextbtnPlan
            iconclass='purple'
            icon={businnesstrade}
            htext='Make 50% more'
            ptext='This means make more money on it solution as a premium provider'
          />
          <TextbtnPlan
            iconclass='blue-icon'
            icon={customer}
            htext='Make 50% more'
            ptext='This means make more money on it solution as a premium provider'
          />
        </div>
      </div>
    </>
  );
};
export default MembershipSetting;
