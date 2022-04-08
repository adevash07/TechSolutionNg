import React, { useEffect } from "react";
import { useState } from "react";
// import { useRouteMatch } from "react-router-dom";
import AllProjects from "./allProjects/AllProjects";
import YourBids from "./yourBids/YourBids";
import YourOffers from "./yourOffers/YourOffers";
import YourWorks from "./yourWorks/YourWorks";
import { Route, Switch, useRouteMatch } from "react-router";
import LinkCardSection from "./components/linkCardSection/LinkCardSection";
import AllProjectsFilter from "./allProjects/components/allProjectsFilter/AllProjectsFilter";
import YourBidsFilter from "./yourBids/components/yourBidsFilter/YourBidsFilter";
import YourWorksFilter from "./yourWorks/components/yourWorksFilter/YourWorksFilter";
import YourOffersFilter from "./yourOffers/components/yourOffersFilter/YourOffersFilter";
import Loading from "components/loading/Loading";
import "./projects.scss";

const Projects = () => {
  const [activeProject, setActiveProject] = useState({
    card1: true,
    card2: false,
    card3: false,
    card4: false,
  });

  const [projectSearch, setProjectSearch] = useState({
    allProjects: {
      filter: "",
      search: "",
      sort: "Oldest",
    },
    yourBids: {
      search: "",
      sort: "Oldest",
    },
    yourWorks: {
      search: "",
      sort: "Oldest",
    },
    yourOffers: {
      search: "",
      sort: "Oldest",
    },
  });

  const [allProjectModal, setAllProjectModal] = useState(false);

  const [loading, setLoading] = useState(true);

  const { path, url } = useRouteMatch();

  const handleActive1 = () => {
    setActiveProject(() => {
      return {
        card1: true,
        card2: false,
        card3: false,
        card4: false,
      };
    });
  };
  const handleActive2 = () => {
    setActiveProject(() => {
      return {
        card1: false,
        card2: true,
        card3: false,
        card4: false,
      };
    });
  };
  const handleActive3 = () => {
    setActiveProject(() => {
      return {
        card1: false,
        card2: false,
        card3: true,
        card4: false,
      };
    });
  };
  const handleActive4 = () => {
    setActiveProject(() => {
      return {
        card1: false,
        card2: false,
        card3: false,
        card4: true,
      };
    });
  };

  const handleSearchChange = (e) => {
    setProjectSearch(() => ({
      ...projectSearch,
      [e.target.name]: {
        ...e.target.name,
        search: e.target.value,
      },
    }));
  };

  const handleSortChange = (e) => {
    setProjectSearch(() => ({
      ...projectSearch,
      [e.target.classList[0]]: {
        ...e.target.classList[0],
        sort: e.target.innerHTML,
      },
    }));
  };

  const projectUrl = window.location.href;

  useEffect(() => {
    if (projectUrl.includes("projects/your-works")) {
      handleActive3();
    } else if (projectUrl.includes("projects/your-offers")) {
      handleActive4();
    } else if (projectUrl.includes("projects/your-bids")) {
      handleActive2();
    } else if (
      projectUrl.endsWith("projects/") ||
      projectUrl.endsWith("projects")
    ) {
      handleActive1();
    }
  }, [projectUrl]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const optionsArray1 = [
    {
      id: 1,
      value: "Oldest",
    },
    {
      id: 2,
      value: "Lowest price",
    },
    {
      id: 3,
      value: "Latest",
    },
    {
      id: 4,
      value: "Highest price",
    },
    {
      id: 5,
      value: "Most bids",
    },
    {
      id: 6,
      value: "Fewest bids",
    },
  ];

  const optionsArray2 = [
    {
      id: 1,
      value: "Oldest",
    },
    {
      id: 2,
      value: "Latest",
    },
    {
      id: 3,
      value: "Most bids",
    },
    {
      id: 4,
      value: "Fewest bids",
    },
  ];

  const toggleAllProjectModal = () => {
    setAllProjectModal(!allProjectModal);
  };

  return (
    <>
      {loading ? (
        <Loading loadingAbsolute={true} />
      ) : (
        <div className="projects--container">
          {activeProject.card1 && (
            <AllProjectsFilter
              allProjectModal={toggleAllProjectModal}
              projectSearch={projectSearch.allProjects}
              handleSearch={handleSearchChange}
              handleSort={handleSortChange}
              dropdownName="allProjectFilter"
              dropdownOptions={optionsArray1}
            />
          )}
          {activeProject.card2 && (
            <YourBidsFilter
              projectSearch={projectSearch.yourBids}
              handleSearch={handleSearchChange}
              handleSort={handleSortChange}
              dropdownName="yourBidsFilter"
              dropdownOptions={optionsArray2}
            />
          )}
          {activeProject.card3 && (
            <YourWorksFilter
              projectSearch={projectSearch.yourWorks}
              handleSearch={handleSearchChange}
              handleSort={handleSortChange}
              dropdownName="yourWorksFilter"
              dropdownOptions={optionsArray2}
            />
          )}
          {activeProject.card4 && (
            <YourOffersFilter
              projectSearch={projectSearch.yourOffers}
              handleSearch={handleSearchChange}
              handleSort={handleSortChange}
              dropdownName="yourOffersFilter"
              dropdownOptions={optionsArray2}
            />
          )}

          <div className="projects__linkCards">
            <div>
              <LinkCardSection
                url={url}
                handleActive1={handleActive1}
                handleActive2={handleActive2}
                handleActive3={handleActive3}
                handleActive4={handleActive4}
                activeProject={activeProject}
              />
            </div>
          </div>

          <Switch>
            <Route path={`${path}/your-bids`}>
              <YourBids />
            </Route>
            <Route path={`${path}/your-works`}>
              <YourWorks />
            </Route>
            <Route path={`${path}/your-offers`}>
              <YourOffers />
            </Route>
            <Route path={`${path}`}>
              <AllProjects
                allProjectsModal={allProjectModal}
                allProjectsModalFunc={toggleAllProjectModal}
              />
            </Route>
          </Switch>
        </div>
      )}
    </>
  );
};

export default Projects;
