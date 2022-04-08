/* eslint-disable no-debugger */
import React, { useState, useEffect } from "react";
import PopUp from "../../stateUtils/popUpComponent/PopUp";
import propTypes from "prop-types";
import "./atmSlotter.scss";
import Button from "components/button/Button";
import EmptyCard from "./emptyCardComponent/EmptyCard";
import Modal from "../../stateUtils/modal/Modal";
import assets from "assets/index";
export default function AtmSlotter({
  userName,
  cardName,
  companyName,
  firstFourDigit,
  lastFourDigit,
  currency,
  amount,
}) {
  //state of for the page -->
  const [pinState, setpinState] = useState(false);
  const [popUpstate, setState] = useState(false);
  const [cardState, setcardState] = useState(1);
  const [isModal, setIsModal] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  const toggler = () => {
    setState(!popUpstate);
  };

  //Get windows screen to append to popUp tagPosition -->
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  console.log(screenSize);

  //To toggle the state of card(empty or filled) -->
  useEffect(() => {
    cardState === 0 ? toggler() : null;
  }, [cardState]);

  const changeCard = (card) => {
    setcardState(card);
  };

  console.log(cardState);

  //load content into popUp -->
  const popUpContentLoader = () => {
    return (
      <>
        <span onClick={() => toggler()}>
          <Button btnText='Change card' />
        </span>
        <span onClick={() => setIsModal(!isModal)}>
          <Button btnText='Delete card  x' />
        </span>
      </>
    );
  };

  //load content into model -->
  const modalContentLoader = () => {
    return (
      <div className='modalComponent__body'>
        <h4>Are You sure you want to delete this card</h4>
        <small>you cannot undo this action</small>
        <div className='modalComponent_button'>
          <Button
            onClick={() => setIsModal(!isModal)}
            btnText='Close account'
            btnClass='grey'
          />
          <Button
            onClick={() => {
              setIsModal(!isModal);
              changeCard(0);
            }}
            btnText='Close account'
            btnClass='medium'
          />
        </div>
      </div>
    );
  };

  //Page content -->
  return (
    <div className='atmContainer'>
      <div
        className={`atmCard ${
          cardState === 0 ? "atmCard--unslot" : "atmCard--slot"
        }`}>
        <div className='atmCard__details'>
          <p>{userName}</p>
          <p className='atmCard__menu'>
            <span>
              <img onClick={() => toggler()} src={assets.Dot} alt='dot' />
            </span>
            <span>{cardName}</span>
          </p>
        </div>
        <div className='atmCard__details'>
          <div className='atmCard__userDetails'>
            <p className='atmCard__companyName'>{companyName}</p>
            <p>
              {firstFourDigit + " "}
              <img src={assets.Stars} alt='nsjsjs' />
              &nbsp;{" " + lastFourDigit}
            </p>
            <p className='atmCard__panCard'>
              <img
                id={pinState ? "atmCard--unshow" : "atmCard--show"}
                src={assets.Asterisk}
                alt='dsd'
              />
              <span id={pinState ? "atmCard--show" : "atmCard--unshow"}>
                {currency}
                {amount}
              </span>{" "}
              &nbsp;
              <img
                id='atmCard__panEye'
                onClick={() => setpinState(!pinState)}
                src={assets.Eye}
                alt=' '
              />
            </p>
          </div>
          <div className='bankLogo'>
            <img src={assets.PlanLogo} alt='' />
          </div>
        </div>
      </div>
      {/* EMPRTY COMPONENT  */}
      <EmptyCard
        remove={cardState === 0 ? "atmCard--slot" : "atmCard--unslot"}
      />
      {/* POPUP COMPONENT  */}
      <PopUp
        show={popUpstate}
        className='atmCard__popUp'
        tagPosition={screenSize < 1350 ? "right" : "left"}
        content={popUpContentLoader()}
      />
      {/* MODEL COMPONENT  */}
      <Modal modalState={isModal} modalContent={modalContentLoader()} />
    </div>
  );
}

//propTypes for the page -->
AtmSlotter.propTypes = {
  userName: propTypes.string,
  cardName: propTypes.string,
  firstFourDigit: propTypes.any,
  lastFourDigit: propTypes.any,
  companyName: propTypes.any,
  currency: propTypes.any,
  amount: propTypes.any,
};
