import React, { useEffect, useState } from "react";
import "./yourOffers.scss";
import YourOffersSection from "./components/yourOffersSection/YourOffersSection";
import YourOffersBtnSection from "./components/yourOffersBtnSection/YourOffersBtnSection";
import CompletedOffers from "./components/completedOffers/CompletedOffers";
import SavedOffers from "./components/savedOffers/SavedOffers";
import propTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Modal from "../components/modal/Modal";
import ActiveOffersModalBody from "./components/activeOffersModalBody/ActiveOffersModalBody";

const YourOffers = () => {
  const [{ btn1Status, btn2Status, btn3Status }, setProjectBtnActive] =
    useState({
      btn1Status: true,
      btn2Status: false,
      btn3Status: false,
    });

  const [{ activeOffersModal }, setYourOffersModals] = useState({
    activeOffersModal: false,
  });

  const [activeOffersData, setActiveOffersData] = useState([]);
  const [completedOffersData, setCompletedOffersData] = useState([]);
  const [savedOffersData, setSavedOffersData] = useState([]);

  const { path, url } = useRouteMatch();

  // for fetching active offers
  useEffect(() => {
    // this represents fetching the data from the API
    const data1 = [
      {
        id: 1,
        yourbidIntro: "Offer price: N9,000",
        yourbidHeader: "Refresh my website",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "October 15th, 2020",
        yourbidStatus: "Instant offer",
        yourbidBtnText: "View details",
        activeOffers: true,
        activeOffersTime: "10 mins to go",
      },
      {
        id: 2,
        yourbidIntro: "Offer price: N9,000",
        yourbidHeader: "Refresh my website",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "October 15th, 2020",
        yourbidStatus: "Instant offer",
        yourbidBtnText: "View details",
        activeOffers: true,
        activeOffersTime: "10 mins to go",
      },
      {
        id: 3,
        yourbidIntro: "Offer price: N9,000",
        yourbidHeader: "Refresh my website",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "October 15th, 2020",
        yourbidStatus: "Instant offer",
        yourbidBtnText: "View details",
        activeOffers: true,
        activeOffersTime: "10 mins to go",
      },
      {
        id: 4,
        yourbidIntro: "Offer price: N9,000",
        yourbidHeader: "Refresh my website",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "October 15th, 2020",
        yourbidStatus: "Instant offer",
        yourbidBtnText: "View details",
        activeOffers: true,
        activeOffersTime: "10 mins to go",
      },
      {
        id: 5,
        yourbidIntro: "Offer price: N9,000",
        yourbidHeader: "Refresh my website",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "October 15th, 2020",
        yourbidStatus: "Instant offer",
        yourbidBtnText: "View details",
        activeOffers: true,
        activeOffersTime: "10 mins to go",
      },
      {
        id: 6,
        yourbidIntro: "Offer price: N9,000",
        yourbidHeader: "Refresh my website",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "October 15th, 2020",
        yourbidStatus: "Instant offer",
        yourbidBtnText: "View details",
        activeOffers: true,
        activeOffersTime: "10 mins to go",
      },
      {
        id: 7,
        yourbidIntro: "Offer price: N9,000",
        yourbidHeader: "Refresh my website",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "October 15th, 2020",
        yourbidStatus: "Instant offer",
        yourbidBtnText: "View details",
        activeOffers: true,
        activeOffersTime: "10 mins to go",
      },
    ];

    setActiveOffersData(data1);
  }, []);

  // for fetching completed offers
  useEffect(() => {
    // this represents fetching the data from the API
    const data2 = [
      {
        id: 1,
        yourbidIntro: "Price: N5,000",
        yourbidHeader: "Design for my errand web app",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "December 20th, 2020",
        yourbidBtnText: "Share",
        completedOffers: true,
        completedStatus: "Completed",
        ratings: true,
        ratingValue: "4",
      },
      {
        id: 2,
        yourbidIntro: "Price: N5,000",
        yourbidHeader: "Design for my errand web app",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "December 20th, 2020",
        yourbidBtnText: "Share",
        completedOffers: true,
        completedStatus: "Completed",
        ratings: true,
        ratingValue: "2",
      },
      {
        id: 3,
        yourbidIntro: "Price: N5,000",
        yourbidHeader: "Design for my errand web app",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "December 20th, 2020",
        yourbidBtnText: "Share",
        completedOffers: true,
        completedStatus: "Completed",
        ratings: true,
        ratingValue: "1",
      },
      {
        id: 4,
        yourbidIntro: "Price: N5,000",
        yourbidHeader: "Design for my errand web app",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "December 20th, 2020",
        yourbidBtnText: "Share",
        completedOffers: true,
        completedStatus: "Completed",
        ratings: true,
        ratingValue: "5",
      },
      {
        id: 5,
        yourbidIntro: "Price: N5,000",
        yourbidHeader: "Design for my errand web app",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "December 20th, 2020",
        yourbidBtnText: "Share",
        completedOffers: true,
        completedStatus: "Completed",
        ratings: true,
      },
      {
        id: 6,
        yourbidIntro: "Price: N5,000",
        yourbidHeader: "Design for my errand web app",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "December 20th, 2020",
        yourbidBtnText: "Share",
        completedOffers: true,
        completedStatus: "Completed",
        ratings: true,
        ratingValue: "3",
      },
      {
        id: 7,
        yourbidIntro: "Price: N5,000",
        yourbidHeader: "Design for my errand web app",
        yourbidParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions",
        yourbidDate: "December 20th, 2020",
        yourbidBtnText: "Share",
        completedOffers: true,
        completedStatus: "Completed",
        ratings: true,
      },
    ];

    setCompletedOffersData(data2);
  }, []);

  // for fetching saved offers
  useEffect(() => {
    // this represents fetching the data from the API
    const data3 = [
      {
        id: 1,
        yourWorkHeader: "Design of A Landing Page For My Errand Web App",
        yourWorkParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions. The app would be targeting youths who are reluctant to go shopping for their needs themselves.",
        timeStatus: "5 mins to go",
        timeLeft: "Time left",
        typeStatus: "Instant Offer",
        type: "Type",
        priceAmount: "N10,000",
        price: "Offer Price",
        entriesStatus: "250 to 600",
        entries: "Entries",
        skills: "UI/UX Design, Js React Skills, Web Design, Web hosting",
        yourWorksLocation: "Lagos, Nigeria",
        yourWorkReviews: "15 reviews",
        yourWorkJobs: "5 jobs posted, 1 job open",
        yourWorkMemberDate: "Member since 4th, December, 2019",
        yourWorkBtnText: "See more",
        btnLink: "/dashboard/projects/make-an-offer/",
      },
      {
        id: 2,
        yourWorkHeader: "Design of A Landing Page For My Errand Web App",
        yourWorkParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions. The app would be targeting youths who are reluctant to go shopping for their needs themselves.",
        timeStatus: "5 mins to go",
        timeLeft: "Time left",
        typeStatus: "Instant Offer",
        type: "Type",
        priceAmount: "N10,000",
        price: "Offer Price",
        entriesStatus: "250 to 600",
        entries: "Entries",
        skills: "UI/UX Design, Js React Skills, Web Design, Web hosting",
        yourWorksLocation: "Lagos, Nigeria",
        yourWorkReviews: "15 reviews",
        yourWorkJobs: "5 jobs posted, 1 job open",
        yourWorkMemberDate: "Member since 4th, December, 2019",
        yourWorkBtnText: "See more",
        btnLink: "/dashboard/projects/make-an-offer/",
      },
      {
        id: 3,
        yourWorkHeader: "Design of A Landing Page For My Errand Web App",
        yourWorkParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions. The app would be targeting youths who are reluctant to go shopping for their needs themselves.",
        timeStatus: "5 mins to go",
        timeLeft: "Time left",
        typeStatus: "Instant Offer",
        type: "Type",
        priceAmount: "N10,000",
        price: "Offer Price",
        entriesStatus: "250 to 600",
        entries: "Entries",
        skills: "UI/UX Design, Js React Skills, Web Design, Web hosting",
        yourWorksLocation: "Lagos, Nigeria",
        yourWorkReviews: "15 reviews",
        yourWorkJobs: "5 jobs posted, 1 job open",
        yourWorkMemberDate: "Member since 4th, December, 2019",
        yourWorkBtnText: "See more",
        btnLink: "/dashboard/projects/make-an-offer/",
      },
      {
        id: 4,
        yourWorkHeader: "Design of A Landing Page For My Errand Web App",
        yourWorkParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions. The app would be targeting youths who are reluctant to go shopping for their needs themselves.",
        timeStatus: "5 mins to go",
        timeLeft: "Time left",
        typeStatus: "Instant Offer",
        type: "Type",
        priceAmount: "N10,000",
        price: "Offer Price",
        entriesStatus: "250 to 600",
        entries: "Entries",
        skills: "UI/UX Design, Js React Skills, Web Design, Web hosting",
        yourWorksLocation: "Lagos, Nigeria",
        yourWorkReviews: "15 reviews",
        yourWorkJobs: "5 jobs posted, 1 job open",
        yourWorkMemberDate: "Member since 4th, December, 2019",
        yourWorkBtnText: "See more",
        btnLink: "/dashboard/projects/make-an-offer/",
      },
      {
        id: 5,
        yourWorkHeader: "Design of A Landing Page For My Errand Web App",
        yourWorkParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions. The app would be targeting youths who are reluctant to go shopping for their needs themselves.",
        timeStatus: "5 mins to go",
        timeLeft: "Time left",
        typeStatus: "Instant Offer",
        type: "Type",
        priceAmount: "N10,000",
        price: "Offer Price",
        entriesStatus: "250 to 600",
        entries: "Entries",
        skills: "UI/UX Design, Js React Skills, Web Design, Web hosting",
        yourWorksLocation: "Lagos, Nigeria",
        yourWorkReviews: "15 reviews",
        yourWorkJobs: "5 jobs posted, 1 job open",
        yourWorkMemberDate: "Member since 4th, December, 2019",
        yourWorkBtnText: "See more",
        btnLink: "/dashboard/projects/make-an-offer/",
      },
      {
        id: 6,
        yourWorkHeader: "Design of A Landing Page For My Errand Web App",
        yourWorkParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions. The app would be targeting youths who are reluctant to go shopping for their needs themselves.",
        timeStatus: "5 mins to go",
        timeLeft: "Time left",
        typeStatus: "Instant Offer",
        type: "Type",
        priceAmount: "N10,000",
        price: "Offer Price",
        entriesStatus: "250 to 600",
        entries: "Entries",
        skills: "UI/UX Design, Js React Skills, Web Design, Web hosting",
        yourWorksLocation: "Lagos, Nigeria",
        yourWorkReviews: "15 reviews",
        yourWorkJobs: "5 jobs posted, 1 job open",
        yourWorkMemberDate: "Member since 4th, December, 2019",
        yourWorkBtnText: "See more",
        btnLink: "/dashboard/projects/make-an-offer/",
      },
      {
        id: 7,
        yourWorkHeader: "Design of A Landing Page For My Errand Web App",
        yourWorkParagraph:
          "This project is about my errand app design, I want to convert users who visit my website. I want a simple styled out layout that functions. The app would be targeting youths who are reluctant to go shopping for their needs themselves.",
        timeStatus: "5 mins to go",
        timeLeft: "Time left",
        typeStatus: "Instant Offer",
        type: "Type",
        priceAmount: "N10,000",
        price: "Offer Price",
        entriesStatus: "250 to 600",
        entries: "Entries",
        skills: "UI/UX Design, Js React Skills, Web Design, Web hosting",
        yourWorksLocation: "Lagos, Nigeria",
        yourWorkReviews: "15 reviews",
        yourWorkJobs: "5 jobs posted, 1 job open",
        yourWorkMemberDate: "Member since 4th, December, 2019",
        yourWorkBtnText: "See more",
        btnLink: "/dashboard/projects/make-an-offer/",
      },
    ];

    setSavedOffersData(data3);
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
    if (projectUrl.includes("projects/your-offers/saved-offers")) {
      handleBtn3Change();
    } else if (projectUrl.includes("projects/your-offers/completed-offers")) {
      handleBtn2Change();
    } else if (
      projectUrl.endsWith("projects/your-offers/") ||
      projectUrl.endsWith("projects/your-offers")
    ) {
      handleBtn1Change();
    }
  }, [projectUrl]);

  const handleActiveOffersModal = () => {
    setYourOffersModals((prevState) => ({
      ...prevState,
      activeOffersModal: !prevState.activeOffersModal,
    }));
  };
  return (
    <>
      <section className="yourOffers__btnSection">
        <YourOffersBtnSection
          url={url}
          btn1Status={btn1Status}
          btn2Status={btn2Status}
          btn3Status={btn3Status}
          handleBtn1Change={handleBtn1Change}
          handleBtn2Change={handleBtn2Change}
          handleBtn3Change={handleBtn3Change}
          dataLength1={activeOffersData.length}
          dataLength2={completedOffersData.length}
          dataLength3={savedOffersData.length}
        />
      </section>
      <section>
        <Switch>
          <Route exact path={`${path}`}>
            <YourOffersSection
              modalFunc={handleActiveOffersModal}
              data={activeOffersData}
              btnStatus={btn1Status}
            />
          </Route>
          <Route path={`${path}/completed-offers`}>
            <CompletedOffers
              data={completedOffersData}
              btnStatus={btn2Status}
            />
          </Route>
          <Route path={`${path}/saved-offers`}>
            <SavedOffers data={savedOffersData} btnStatus={btn3Status} />
          </Route>
        </Switch>
      </section>
      <Modal
        modalState={activeOffersModal}
        modalContent={
          <ActiveOffersModalBody modalFunc={handleActiveOffersModal} />
        }
      />
    </>
  );
};

YourOffers.propTypes = {
  url: propTypes.any,
  handleActive1: propTypes.any,
  handleActive2: propTypes.any,
  handleActive3: propTypes.any,
  handleActive4: propTypes.any,
  activeProject: propTypes.any,
};

export default YourOffers;
