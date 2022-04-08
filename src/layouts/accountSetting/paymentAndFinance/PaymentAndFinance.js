import Search from "components/search/Search";
import React from "react";
import { useState } from "react";
import "./paymentandfinance.scss";
import Group2258 from "assets/images/loginImages/Group2258.svg";
import Flutterwave from "assets/images/loginImages/Flutterwave.svg";
import Remita from "assets/images/loginImages/Remita.svg";
import Dusupay from "assets/images/loginImages/Dusupay.svg";
import Interswitch from "assets/images/loginImages/Interswitch.svg";
import Banktransfer from "assets/images/loginImages/Banktransfer.svg";
import Cashenvoy from "assets/images/loginImages/Cashenvoy.svg";

import { FaTimes } from "react-icons/fa";

import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { PaymentComponent } from "./paymentcomponent/PaymentComponent";
import { ChangePaymentModal } from "./changepaymentmodal/ChangePaymentModal";

export const PaymentAndFinance = () => {
  const [modalbtn, setModalBtn] = useState(false);
  const handlemodal = () => {
    setModalBtn(!modalbtn);
  };
  const [changleModal, SetChangeModal] = useState(false);
  const handleChangeModal = () => {
    SetChangeModal(!changleModal);
  };
  return (
    <>
      <div className='paymentFinance'>
        <div className='paymentFinance__Search'>
          <Search
            linkpathacct='/accountsettingpage'
            iconarrow={<FaLongArrowAltLeft />}
            ptext='Payment and Finance'
            icon={<BiSearch />}
            inputype='search'
            placetext='search'
            inputname='search'
            icons={<FaTimesCircle />}
          />
        </div>
        <div className='paymentMethod'>
          <div className='paymentMethod__List'>
            <div className='paymentMethod__Method'>
              <h5>Payment method</h5>
            </div>
            <div className='paymentMethod__RatesTax'>
              <h5>Payment rates</h5>
              <h5>Tax</h5>
            </div>
          </div>
        </div>
        <div className='currentMethod'>
          <div className='currentMethod__Header'>
            <p>
              Current method - <span>Paystack</span>
            </p>
            <button onClick={handlemodal}>Change method</button>
          </div>
          <div className='currentMethod__Img'>
            <img src={Group2258} alt='img' />
          </div>
        </div>

        <div
          onClick={handlemodal}
          className={
            modalbtn
              ? "changePayment__modal modal__top"
              : "changePayment__modal"
          }>
          <div className='changePayment__modaloverflow'>
            <div className='changePayment'>
              <div className='changepayment__header'>
                <h4>Change payment type</h4>
                <i>
                  <FaTimes onClick={handlemodal} />
                </i>
              </div>
              <PaymentComponent
                ptext='Recommended for you'
                img={Flutterwave}
                click={handleChangeModal}
                btntextclick='Add'
                divclass='bg-brown'
                htext='Flutterwave'
                ptextimg1='Fast pay out'
                ptextimg2='Good customer support'
              />
              <PaymentComponent
                img={Remita}
                btntext='Add'
                htext='Remita'
                ptextimg1='Fast pay out'
                ptextimg2='Good customer support'
              />
              <PaymentComponent
                ptext='Other payment options'
                img={Dusupay}
                btntext='Add'
                divclass='bg-brown'
                htext='DusuPay'
                ptextimg1='Fast pay out'
                ptextimg2='Good customer support'
              />
              <PaymentComponent
                img={Interswitch}
                btntext='Add'
                htext='Interswitch'
                ptextimg1='Fast pay out'
                ptextimg2='Good customer support'
              />
              <PaymentComponent
                img={Cashenvoy}
                btntext='Add'
                divclass='bg-brown'
                htext='Cashenvoy'
                ptextimg1='Fast pay out'
                ptextimg2='Good customer support'
              />
              <PaymentComponent
                img={Banktransfer}
                btntext='Add'
                htext='Bank transfer'
                ptextimg1='Fast pay out'
                ptextimg2='Good customer support'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={changleModal ? "payment__bg slide__up" : "payment__bg"}>
        <ChangePaymentModal click={handleChangeModal} />
      </div>
    </>
  );
};
