import React, { useState } from "react";
import "./yourWorks.scss";
import YourWorksSection from "./components/yourworksSection/YourWorksSection";
import YourWorksBtnSection from "./components/yourWorksBtnSection/YourWorksBtnSection";
import SavedProjectsSection from "./components/savedProjectsSection/SavedProjectsSection";
import PastProjectsSection from "./components/pastProjectsSection/PastProjectsSection";
import { useEffect } from "react";
import {
  currentProjectsArray,
  pastProjectsArray,
  savedProjectsArray,
} from "../data/yourWorksData";
import propTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router";
import Modal from "../components/modal/Modal";
import CurrentProjectsModalBody from "./components/currentProjectsModalBody/CurrentProjectsModalBody";

const YourWorks = () => {
  const [{ btn1Status, btn2Status, btn3Status }, setProjectBtnActive] =
    useState({
      btn1Status: true,
      btn2Status: false,
      btn3Status: false,
    });

  const [{ currentProjectsModal }, setYourWorksModals] = useState({
    currentProjectsModal: false,
  });

  const { path, url } = useRouteMatch();

  const [currentProjectsData, setCurrentProjectsData] = useState([]);
  const [pastProjectsData, setPastProjectsData] = useState([]);
  const [savedProjectsData, setSavedProjectsData] = useState([]);

  // for fetching current projects
  useEffect(() => {
    // this represents fetching the data from the API

    setCurrentProjectsData(currentProjectsArray);
  }, []);

  // for fetching past projects
  useEffect(() => {
    // this represents fetching the data from the API

    setPastProjectsData(pastProjectsArray);
  }, []);

  // for fetching saved projects
  useEffect(() => {
    // this represents fetching the data from the API

    setSavedProjectsData(savedProjectsArray);
  }, []);

  const handleBtn1Change = () => {
    setProjectBtnActive(() => ({
      btn1Status: true,
      btn2Status: false,
      btn3Status: false,
    }));
  };

  const handleBtn2Change = () => {
    setProjectBtnActive(() => ({
      btn1Status: false,
      btn2Status: true,
      btn3Status: false,
    }));
  };

  const handleBtn3Change = () => {
    setProjectBtnActive(() => ({
      btn1Status: false,
      btn2Status: false,
      btn3Status: true,
    }));
  };

  const projectUrl = window.location.href;

  useEffect(() => {
    if (projectUrl.includes("projects/your-works/saved-projects")) {
      handleBtn3Change();
    } else if (projectUrl.includes("projects/your-works/past-projects")) {
      handleBtn2Change();
    } else if (
      projectUrl.endsWith("projects/your-works/") ||
      projectUrl.endsWith("projects/your-works")
    ) {
      handleBtn1Change();
    }
  }, [projectUrl]);

  const handleCurrentProjectsModal = () => {
    setYourWorksModals((prevState) => ({
      ...prevState,
      currentProjectsModal: !prevState.currentProjectsModal,
    }));
  };

  return (
    <>
      <section className="yourWorks__btnSection">
        <YourWorksBtnSection
          url={url}
          btn1Status={btn1Status}
          btn2Status={btn2Status}
          btn3Status={btn3Status}
          handleBtn1Change={handleBtn1Change}
          handleBtn2Change={handleBtn2Change}
          handleBtn3Change={handleBtn3Change}
          dataLength1={currentProjectsData.length}
          dataLength2={pastProjectsData.length}
          dataLength3={savedProjectsData.length}
        />
      </section>
      <section>
        <Switch>
          <Route exact path={`${path}`}>
            <YourWorksSection
              modalFunc={handleCurrentProjectsModal}
              data={currentProjectsData}
              btnStatus={btn1Status}
            />
          </Route>
          <Route path={`${path}/past-projects`}>
            <PastProjectsSection
              data={pastProjectsData}
              btnStatus={btn2Status}
            />
          </Route>
          <Route path={`${path}/saved-projects`}>
            <SavedProjectsSection
              data={savedProjectsData}
              btnStatus={btn3Status}
            />
          </Route>
        </Switch>
      </section>
      <Modal
        modalState={currentProjectsModal}
        modalContent={
          <CurrentProjectsModalBody modalFunc={handleCurrentProjectsModal} />
        }
      />
    </>
  );
};

YourWorks.propTypes = {
  url: propTypes.any,
  handleActive1: propTypes.any,
  handleActive2: propTypes.any,
  handleActive3: propTypes.any,
  handleActive4: propTypes.any,
  activeProject: propTypes.any,
};

export default YourWorks;
