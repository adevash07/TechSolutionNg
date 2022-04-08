import Earnings from "components/dashboard/dashboardPage/earnings/Earnings";
import Welcome from "components/dashboard/dashboardPage/welcome/Welcome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import Button from "../../../components/button/Button";
import Rank from "../../../components/dashboard/dashboardPage/rank/Rank";
import RecentInvoice from "../../../components/dashboard/dashboardPage/recentInvoice/RecentInvoice";
import SuggestedOffers from "../../../components/dashboard/dashboardPage/suggestedOffers/SuggestedOffers";
import YourProjects from "../../../components/dashboard/dashboardPage/yourProjects/YourProjects";
import "./dashboardContent.scss";

import Projects1 from "assets/images/landing/yourProjects1.png";
import Projects2 from "assets/images/landing/yourProjects2.png";
import recent1 from "assets/images/landing/recent1.png";
import recent2 from "assets/images/landing/recent2.png";
import dashboardPerson from "assets/images/landing/dashboardPerson.png";
import Loading from "components/loading/Loading";

const DashboardContent = ({ handleNavigate }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading loadingAbsolute={true} />
      ) : (
        <div className="dashboardPage">
          <Welcome
            salutation="Good morning"
            name="John"
            greeting="Hope you are good today?"
          />
          <Earnings
            earningAmount="122,000"
            earningProfit={true}
            earningStatus="Up by 150% this month"
          />
          <section className="rankSection">
            <Rank rankGrade="98" rankHeader="In top 20" rankName="Rank" />
            <Rank
              rankGrade="32"
              rankHeader="5"
              rankHeaderSpan="this month"
              rankName="Projects"
            />
          </section>
          <section>
            <h5>Your Projects</h5>
            <div>
              <YourProjects
                projectImg={Projects1}
                projectHeader="Premium Logo design"
                projectTime="2 days remaining"
              />
              <YourProjects
                projectImg={Projects2}
                projectHeader="Website design"
                projectTime="4 days remaining"
              />
              <div className="link">
                <span>
                  <Link to="/dashboard/projects">See all projects</Link>
                </span>
              </div>
            </div>
          </section>
          <section>
            <h5>Recent Invoices</h5>
            <div>
              <RecentInvoice
                invoiceImg={recent1}
                invoiceName="David Hopkins"
                invoiceCompany="JP Holdings"
                invoiceAmount="20,000"
                paid={true}
              />
              <RecentInvoice
                invoiceImg={recent2}
                invoiceName="Funmi Fasasi"
                invoiceCompany="Heirs"
                invoiceAmount="15,000"
                paid={false}
              />
            </div>
          </section>
          <section>
            <h5>Suggested Offers</h5>
            <SuggestedOffers
              suggestedImg={dashboardPerson}
              suggestedName="John Hopkins"
              suggestedTime="Updated 8 mins ago"
              suggestedDesignation="Designer"
              suggestedHeader="I need a programmer for my mobile app development"
              suggestedMessage="The name of the mobile app is Plaqsha, a start up. We have plans
              to make an application for bit sized learning. To ensure users get
              the best bits in a short time frame."
              suggestedAmount="15,000"
            />
          </section>
          <section>
            <div>
              <span></span>
              <div>
                <h5>Find your saved jobs here</h5>
                <span>Nothing is lost on you</span>
              </div>
            </div>
            <Link to="/dashboard/projects/your-offers/saved-offers">
              <Button
                onClick={handleNavigate}
                btnClass="medium"
                btnText="Find"
              />
            </Link>
          </section>
        </div>
      )}
    </>
  );
};

DashboardContent.propTypes = {
  handleNavigate: propTypes.any,
};

export default DashboardContent;
