import React from "react";
import "./congrates.scss";
import Group1805 from "../../assets/images/loginImages/Group1805.svg";
import FormsLogin from "components/forms/FormsLogin";

const Congrates = () => {
  return (
    <div className='congrates'>
      <div className='congrates__Flex--column'>
        <div className='congrates__Flex'>
          <div className='congrates__Container'>
            <div className='congrates__Header'>
              <h3>Hello David,</h3>
              <p>
                Thanks for signing up with IT Solutions. We are glade to have
                you!. <br />
                We have multiplies opportunities on our
                <br /> plateform and we can not wait to get you started.
              </p>
              <p className='congrates__Header'>
                Kindly fill out your profile so we can get you up to speed.
              </p>
            </div>
          </div>
          <div className='Congrates__DivImg'>
            <div className='congrates__Img'>
              <img src={Group1805} alt='img' />
            </div>
            <p></p>
          </div>
        </div>
        <div className='congrates-btn'>
          <FormsLogin
            btntype='submit'
            btnclass='form-btn'
            btntext='Continue'
            linkPath='/Congratestwopage'
          />
        </div>
      </div>
    </div>
  );
};

export default Congrates;
