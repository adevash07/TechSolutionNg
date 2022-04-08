import React from "react";
import propTypes from "prop-types";
import "./reportsTable.scss";
import { BsFillStarFill, BsStar } from "react-icons/bs";

function ReportsTable({ mockList }) {
  const tabletWidth = 768;

  //determine table to render on device view port
  if (window.innerWidth <= tabletWidth) {
    return (
      <div className="reportsTable">
        <div className="reportsTable__tablet">
          {mockList ? (
            mockList.map((item, index) => (
              <main
                className="reportsTable__tablet__dataContent borderBlue"
                key={index}
              >
                <div className="reportsTable__tablet__dataContentContanier">
                  <div className="reportsTable__tablet__identityBox">
                    <div className="reportsTable__tablet__imgBox">
                      <img src={item.reviewerImg} alt="profile" />
                    </div>
                    <div className="reportsTable__tablet__nameLocationBox">
                      <span>{item.fullName}</span>
                      <span className="reportsTable__tablet__location">
                        <span>{item.reviewerCity},</span>&nbsp;
                        <span>
                          {item.reviewerCountry
                            .split("", 3)
                            .join("")
                            .toUpperCase()}
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="reportsTable__tablet__projectBox">
                    <span className="reportsTable__tablet__head">Project</span>
                    <span className="reportsTable__tablet__projectName">
                      Web design
                    </span>
                    <span className="reportsTable__tablet__projectStatus">
                      Confirmed
                    </span>
                  </div>

                  <div className="reportsTable__tablet__commentRatingBox">
                    <span className="reportsTable__tablet__head">
                      Client comment &amp; ratings
                    </span>
                    <span className="ratings">
                      <>
                        {item.rating === 1 ? (
                          <span>
                            <BsFillStarFill />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </span>
                        ) : item.rating === 2 ? (
                          <span>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </span>
                        ) : item.rating === 3 ? (
                          <span>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsStar />
                            <BsStar />
                          </span>
                        ) : item.rating === 4 ? (
                          <span>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsStar />
                          </span>
                        ) : item.rating === 5 ? (
                          <span>
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                            <BsFillStarFill />
                          </span>
                        ) : (
                          <span>
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                            <BsStar />
                          </span>
                        )}
                      </>
                    </span>
                    <span className="comment">{item.comment}</span>
                  </div>

                  <div className="reportsTable__tablet__dateBox">
                    <span className="reportsTable__tablet__head">
                      Date &amp; time
                    </span>
                    <span className="reportsTable__tablet__projectSubmitDate">
                      {item.date}
                    </span>
                    <span className="reportsTable__tablet__projectSubmitTime">
                      {item.timeOfReview}
                    </span>
                  </div>
                </div>
              </main>
            ))
          ) : (
            <div>Data could not be read!</div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <main className="reportsTable">
        <div className="reportsTable__head">
          <div className="reportsTable__row">
            <span>Reviews</span>
            <span>Date &amp; time</span>
            <span>Client comment &amp; ratings</span>
            <span>Project</span>
          </div>
        </div>
        <div className="reportsTable__body">
          {mockList ? (
            mockList.map((item, index) => (
              <div className="reportsTable__row" key={index}>
                <span className="reviewer reportsTable__data">
                  <span>
                    <img src={item.reviewerImg} alt="profile" />
                  </span>
                  <span>
                    <span>{item.fullName}</span>
                    <span>
                      <span>{item.reviewerCity}</span>&nbsp;
                      <span>
                        {item.reviewerCountry
                          .split("", 3)
                          .join("")
                          .toUpperCase()}
                      </span>
                    </span>
                  </span>
                </span>
                <span className="date reportsTable__data">
                  <span>{item.date}</span>
                  <span>{item.timeOfReview}</span>
                </span>
                <span className="ratings reportsTable__data">
                  <>
                    {item.rating === 1 ? (
                      <span>
                        <BsFillStarFill />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                      </span>
                    ) : item.rating === 2 ? (
                      <span>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                      </span>
                    ) : item.rating === 3 ? (
                      <span>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStar />
                        <BsStar />
                      </span>
                    ) : item.rating === 4 ? (
                      <span>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsStar />
                      </span>
                    ) : item.rating === 5 ? (
                      <span>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                      </span>
                    ) : (
                      <span>
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                        <BsStar />
                      </span>
                    )}
                  </>
                  <span className="comment">{item.comment}</span>
                </span>
                <span className="projectThumbnail reportsTable__data">
                  <span>
                    <img src={item.projectThumbnail} />
                  </span>
                  <span>
                    <span>{item.projectName}</span>
                    <span>{item.projectStatus}</span>
                  </span>
                </span>
              </div>
            ))
          ) : (
            <>
              <p> No Data </p>
            </>
          )}
        </div>
      </main>
    );
  }
}

ReportsTable.propTypes = {
  mockList: propTypes.array,
};
export default ReportsTable;
