import React from "react";
import propTypes from "prop-types";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./paginate.scss";
function Paginate({ userDataPerPage, totalUsersData, paginate, btnStatus }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsersData / userDataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginateNavigation">
      <div className="paginateNavigation__box">
        <ul className="paginateNavigation__boxList">
          <button className="paginateNavigation__prevButton">
            <BsChevronLeft />
          </button>
          {pageNumbers.map((number, index) => (
            <li key={index}>
              <button
                onClick={() => paginate(number)}
                type="button"
                className={`paginateButton ${
                  btnStatus === number ? "active" : "inactive"
                }`}
              >
                {number}
              </button>
            </li>
          ))}
          <button className="paginateNavigation__nextButton">
            <BsChevronRight />
          </button>
        </ul>
        <div className="pagination__extraInformation">
          {`Showing ${pageNumbers.length - 1} of ${totalUsersData} entries`}
        </div>
      </div>
    </nav>
  );
}

Paginate.propTypes = {
  userDataPerPage: propTypes.number,
  totalUsersData: propTypes.any,
  paginate: propTypes.func,
  btnStatus: propTypes.any,
};

export default Paginate;
