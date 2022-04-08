import React, { useEffect, useState } from "react";
import YourBidsBtnSection from "./components/yourBidsBtnSection/YourBidsBtnSection";
import "./yourBids.scss";
import ClosedBids from "./components/closedBids/ClosedBids";
import OpenBidsSection from "./components/openBidsSection/OpenBidsSection";
import propTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router";
import { openBids, closedBids } from "../data/yourBidsData";
import Modal from "../components/modal/Modal";
import OpenBidsModalBody from "./components/openBidsModalBody/OpenBidsModalBody";
import ClosedBidsModalBody from "./components/closedBidsModalBody/ClosedBidsModalBody";

const YourBids = () => {
  const [{ btn1Status, btn2Status }, setProjectBtnActive] = useState({
    btn1Status: true,
    btn2Status: false,
  });

  const [{ openBidsModal, closedBidsModal }, setYourBidsModals] = useState({
    openBidsModal: false,
    closedBidsModal: false,
  });

  const { path, url } = useRouteMatch();

  const [openBidsData, setOpenBidsData] = useState([]);
  const [closedBidsData, setClosedBidsData] = useState([]);

  // for fetching open bids
  useEffect(() => {
    // this represents fetching the data from the API

    setOpenBidsData(openBids);
  }, []);

  // for fetching closed bids
  useEffect(() => {
    // this represents fetching the data from the API

    setClosedBidsData(closedBids);
  }, []);

  const handleBtn1Change = () => {
    setProjectBtnActive(() => ({
      btn1Status: true,
      btn2Status: false,
    }));
  };

  const handleBtn2Change = () => {
    setProjectBtnActive(() => ({
      btn1Status: false,
      btn2Status: true,
    }));
  };

  const projectUrl = window.location.href;

  useEffect(() => {
    if (projectUrl.includes("projects/your-bids/closed-bids")) {
      handleBtn2Change();
    } else if (
      projectUrl.endsWith("projects/your-bids/") ||
      projectUrl.endsWith("projects/your-bids")
    ) {
      handleBtn1Change();
    }
  }, [projectUrl]);

  const handleOpenBidsModal = () => {
    setYourBidsModals((prevState) => ({
      ...prevState,
      openBidsModal: !prevState.openBidsModal,
    }));
  };

  const handleClosedBidsModal = () => {
    setYourBidsModals((prevState) => ({
      ...prevState,
      closedBidsModal: !prevState.closedBidsModal,
    }));
  };

  const handleClosedBidsModalIcon = () => {
    handleClosedBidsModal();

    if (closedBidsModal) {
      setTimeout(() => {
        window.location.href = "/dashboard/invoices/resend";
      }, 2000);
    }
  };

  return (
    <>
      <section className="yourBids__btnSection">
        <YourBidsBtnSection
          url={url}
          btn1Status={btn1Status}
          btn2Status={btn2Status}
          dataLength1={openBidsData.length}
          dataLength2={closedBidsData.length}
          handleBtn1Change={handleBtn1Change}
          handleBtn2Change={handleBtn2Change}
        />
      </section>
      <section>
        {/* <OpenBidsSection data={openBidsData} btnStatus={btn1Status} />
        <ClosedBids data={closedBidsData} btnStatus={btn2Status} /> */}

        <Switch>
          <Route exact path={`${path}`}>
            <OpenBidsSection
              modalFunc={handleOpenBidsModal}
              data={openBidsData}
              btnStatus={btn1Status}
            />
          </Route>
          <Route path={`${path}/closed-bids`}>
            <ClosedBids
              modalFunc={handleClosedBidsModal}
              data={closedBidsData}
              btnStatus={btn2Status}
            />
          </Route>
        </Switch>
      </section>
      <Modal
        modalState={openBidsModal}
        modalContent={<OpenBidsModalBody modalFunc={handleOpenBidsModal} />}
      />
      <Modal
        modalState={closedBidsModal}
        modalDirection="left"
        modalContent={
          <ClosedBidsModalBody modalFunc={handleClosedBidsModalIcon} />
        }
      />
    </>
  );
};

YourBids.propTypes = {
  url: propTypes.any,
  handleActive1: propTypes.any,
  handleActive2: propTypes.any,
  handleActive3: propTypes.any,
  handleActive4: propTypes.any,
  activeProject: propTypes.any,
};

export default YourBids;
