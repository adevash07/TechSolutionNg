import React from "react";
import Help from "assets/images/WalletIcons/Help.svg";
import propTypes from "prop-types";
import Dot from "assets/images/WalletIcons/Dot.svg";
import "./statementView.scss";
import PopUp from "../../../../stateUtils/popUpComponent/PopUp";

export default function StatementView({
  activeMonth,
  monthOption1,
  monthOption2,
  monthOption3,
  currency,
  receivedBalance,
  sentBalance,
  totalBalance,
}) {
  return (
    <div className='statementView'>
      <h4 className='statementView__Header'>
        <span>{activeMonth}</span>
        <span className='monthOption'>
          <span className='monthOption__Active'>{monthOption1}</span>
          <span>{monthOption2}</span>
          {monthOption3 ? <span>{monthOption3}</span> : null}
        </span>
        <span>
          <img src={Dot} />
        </span>
      </h4>
      <div className='statementCard'>
        <div className='statementCard__Row status'>
          <span>Received</span>
          <span>Sent</span>
        </div>
        <div className='statementCard__Row amount'>
          <span>
            <span>{currency}</span>
            <span>{receivedBalance}</span>
          </span>
          <span>
            <span>{currency}</span>
            <span>{sentBalance}</span>
          </span>
        </div>
        <div className='statementCard__Row total'>
          <span>
            Total income <img src={Help} alt='help' />
            <PopUp
              content='Total income made on It solutions'
              tagPosition='bottom'
              className='statementView__popUp'
            />
          </span>
          <span>
            <span>{currency}</span>
            <span>{totalBalance}</span>
          </span>
        </div>
        <div className='progressBar'>
          <span></span>
        </div>
      </div>
    </div>
  );
}

StatementView.propTypes = {
  activeMonth: propTypes.string,
  monthOption1: propTypes.string,
  monthOption2: propTypes.string,
  monthOption3: propTypes.string,
  currency: propTypes.string,
  receivedBalance: propTypes.string,
  sentBalance: propTypes.string,
  totalBalance: propTypes.string,
};
