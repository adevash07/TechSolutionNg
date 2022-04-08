import React, { useState, useEffect } from "react";
import "./allProjects.scss";
import AllProjectsSection from "./components/allProjectsSection/AllProjectsSection";
import InstantOffers from "./components/instantOffers/InstantOffers";
import AllProjectBtnSection from "./components/allProjectBtnSection/AllProjectBtnSection";
import propTypes from "prop-types";
import Modal from "../components/modal/Modal";
import AllProjectsModalBody from "./components/allProjectsModalBody/AllProjectsModalBody";
import { allProjectsData1, allProjectsData2 } from "../data/ProjectsData";
import { Route, Switch, useRouteMatch } from "react-router";

const AllProjects = ({ allProjectsModal, allProjectsModalFunc }) => {
  const [{ btn1Status, btn2Status }, setProjectBtnActive] = useState({
    btn1Status: true,
    btn2Status: false,
  });

  const { path } = useRouteMatch();

  const [allProjectsData, setAllProjectsData] = useState([]);
  const [instantOffersData, setInstantOffersData] = useState([]);

  // for fetching allProjectsData
  useEffect(() => {
    // this represents fetching the data from the API

    const data1 = allProjectsData1;

    setAllProjectsData(data1);
  }, []);

  // for fetching instantOffers
  useEffect(() => {
    // this represents fetching the data from the API

    const data2 = allProjectsData2;

    setInstantOffersData(data2);
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
    if (projectUrl.includes("projects/instant-offers")) {
      handleBtn2Change();
    } else if (
      projectUrl.endsWith("projects/") ||
      projectUrl.endsWith("projects")
    ) {
      handleBtn1Change();
    }
  }, [projectUrl]);

  return (
    <>
      <section className="allProjects__btnSection">
        <AllProjectBtnSection
          btn1Status={btn1Status}
          btn2Status={btn2Status}
          dataLength1={allProjectsData.length}
          dataLength2={instantOffersData.length}
          handleBtn1Change={handleBtn1Change}
          handleBtn2Change={handleBtn2Change}
        />
      </section>
      <section>
        {/* <AllProjectsSection data={allProjectsData} btnStatus={btn1Status} />
        <InstantOffers data={instantOffersData} btnStatus={btn2Status} /> */}

        <Switch>
          <Route exact path={`${path}`}>
            <AllProjectsSection data={allProjectsData} btnStatus={btn1Status} />
          </Route>
          <Route path={`${path}/instant-offers`}>
            <InstantOffers data={instantOffersData} btnStatus={btn2Status} />
          </Route>
        </Switch>
      </section>
      <Modal
        modalState={allProjectsModal}
        modalContent={
          <AllProjectsModalBody allProjectsModalFunc={allProjectsModalFunc} />
        }
      />
    </>
  );
};

AllProjects.propTypes = {
  // url: propTypes.any,
  path: propTypes.any,
  handleActive1: propTypes.any,
  handleActive2: propTypes.any,
  handleActive3: propTypes.any,
  handleActive4: propTypes.any,
  activeProject: propTypes.any,
  allProjectsModal: propTypes.any,
  allProjectsModalFunc: propTypes.any,
};

export default AllProjects;
