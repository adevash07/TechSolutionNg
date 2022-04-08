import React, { useEffect, useState } from "react";
import "./reports.scss";
import { BsStar, BsFillStarFill } from "react-icons/bs";
import ReportProgressBar from "components/dashboard/reports/reportProgressBar";
import ReportTab from "components/dashboard/reports/reportTab";
import Tabs from "components/dashboard/invoice/Tabs";
import ReportTabContent from "components/dashboard/reports/reportTabContent";
import FilterButton from "components/dashboard/invoice/button/invoiceFilterButton/InvoiceFilterButton";
import MoreMenuIcon from "components/moreMenuIcon/MoreMenuIcon";
import ReportsTableContent from "components/dashboard/reports/reportsTableContent";
import Loading from "components/loading/Loading";
import FilterDropDownMenu from "components/dashboard/reports/dropDownMenu/FilterDropDownMenu";

function Reports() {
  const [loading, setLoading] = useState(true);
  const [openFilterMenu, setOpenFilterMenu] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const toggleFilterMenu = () => {
    return setOpenFilterMenu(!openFilterMenu);
  };
  return (
    <>
      {loading ? (
        <Loading loadingAbsolute={true} />
      ) : (
        <section id="reports">
          <h2 className="head">Reports and reviews</h2>
          <div className="analysisBox">
            <div className="card-small card-body">
              <span>
                <span>Average rating</span>
                <>
                  <MoreMenuIcon />
                </>
              </span>

              <span>
                <h1>4.5</h1>
                <span>
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsFillStarFill />
                  <BsStar />
                </span>
              </span>

              <span>+ 2 today</span>

              <span>
                <span>
                  <span>5</span>
                  <ReportProgressBar mileStone={100} />
                  <span className="numberOfStarsLikes">15</span>
                </span>
                <span>
                  <span>4</span>
                  <ReportProgressBar mileStone={70} />
                  <span className="numberOfStarsLikes">9</span>
                </span>
                <span>
                  <span>3</span>
                  <ReportProgressBar mileStone={50} />
                  <span className="numberOfStarsLikes">8</span>
                </span>
                <span>
                  <span>2</span>
                  <ReportProgressBar mileStone={30} />
                  <span className="numberOfStarsLikes">4</span>
                </span>
                <span>
                  <span>1</span>
                  <ReportProgressBar mileStone={10} />
                  <span className="numberOfStarsLikes">2</span>
                </span>
              </span>
            </div>

            <div className="card-medium card-body">
              <>
                <span>Reviews</span>
                <ReportTab>
                  <ReportTabContent month="jan" />
                  <ReportTabContent month="feb" />
                  <ReportTabContent month="mar" />
                </ReportTab>
              </>
              <span className="otherMenu">
                <MoreMenuIcon />
              </span>
            </div>

            <div className="filterButtonBox">
              <FilterButton
                label="Filter"
                filterRange="2"
                toggle={toggleFilterMenu}
              />
              {openFilterMenu && <FilterDropDownMenu />}
            </div>
          </div>

          <Tabs>
            <ReportsTableContent label="all reviews" count={3} />
            <ReportsTableContent label="positive reviews" count={1} />
            <ReportsTableContent label="critical reviews" count={1} />
          </Tabs>
        </section>
      )}
    </>
  );
}

export default Reports;
