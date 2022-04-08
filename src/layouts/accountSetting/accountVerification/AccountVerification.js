import "./accountverification.scss";
import React from "react";
import { useState } from "react";
import Search from "components/search/Search";
import { AiOutlineExclamation } from "react-icons/ai";
import { FaPen } from "react-icons/fa";

import { BiSearch } from "react-icons/bi";
import { FaTimesCircle } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const AccountVerification = () => {
  const [load, setload] = useState(false);
  const contentloader = () => {
    setload(!load);
  };
  return (
    <div className="accountVerfication">
      <div className="accountVerfication__Search">
        <Search
          linkpathacct="/accountsettingpage"
          iconarrow={<FaLongArrowAltLeft />}
          ptext="Account Verification"
          icon={<BiSearch />}
          inputype="search"
          placetext="search"
          inputname="search"
          icons={<FaTimesCircle />}
        />
      </div>
      <div className="accountVerfication__IconParagraphDiv">
        <div className="accountVerfication__IconParagraph">
          <div className="accountVerfication__Icon">
            <span>
              <i className="exclamation-icon">
                <AiOutlineExclamation />
              </i>
            </span>
          </div>
          <div>
            <div className="accountVerfication__Paragraph">
              <h4>Enable 2-Factor Authentication</h4>
              <p>Your 2-Factor Authentication is not turned on</p>
              <p>
                This ensures only your trusted devices have access to your IT
                solutions account.
              </p>
              <p>
                You will be required to verify new devices with code sent to
                your email to be added to your trusted list
              </p>
            </div>

            <div className="checkbox__Container">
              <label className="checkbox__Switch">
                <input type="checkbox" id="checkbox" />
                <div
                  className="checkbox__SlideSpan"
                  onClick={contentloader}
                ></div>
              </label>
            </div>
            {load ? (
              <div
                className={
                  load
                    ? "accountVerfication__PenEmailPhone"
                    : "accountVerfication__Vissibility"
                }
              >
                <p>
                  Kindly check if your email and phone number details are
                  correct. your code will be sent to the two chennels
                </p>
                <div className="accountVerfication__PenEmail">
                  <p>
                    Email Address: <span>okeoghene247@gmail.com</span>
                  </p>
                  <span className="accountVerfication__PenSpan">
                    <i>
                      <FaPen />
                    </i>
                  </span>
                </div>
                <p>
                  Phone number: <span>+2348068108356</span>
                </p>
                <div className="accountVerfication__Button">
                  <button>Confirm</button>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {/* {true? contentloader() : " "} */}
    </div>
  );
};
export default AccountVerification;
