import React from "react";
import Group1805 from "../../assets/images/loginImages/Group1805.svg";
import "./congratesTwo.scss";
import { Link } from "react-router-dom";

const CongratesTwo = () => {
  return (
    <div className='congrateTwo'>
      <div className='congrateTwo__Flex'>
        <div className='congrateTwo__DivHeadr'>
          <div className='congrateTwo__Headr'>
            <h3>Please fill out your files appropriately</h3>
            <p>Here is a few thing to note</p>
            <ul>
              <li>
                <p>
                  Kindly fill out your information accurately. With good
                  expression of your skill as It solution is a competition
                </p>
              </li>
              <li>
                <p>
                  Please ensure you submit your profile after you may have
                  review your entity
                </p>
              </li>
            </ul>
          </div>
          <div className='congratesTwo__Divbtn'>
            <Link to='/user-profile' className='button'>
              Start profile registration
            </Link>
            {/* <button>Start profile registration</button> */}
          </div>
        </div>
        <div className='congratesTwo__ImgContainer'>
          <div className='congratesTwo__Img'>
            <img src={Group1805} alt='img' />
          </div>
          <p>Skip this</p>
        </div>
      </div>
    </div>
  );
};

export default CongratesTwo;
