import React from "react";
import propTypes from "prop-types";
import "./allProjectsFilter.scss";
import InvoiceFilterButton from "components/dashboard/invoice/button/invoiceFilterButton/InvoiceFilterButton";
import Search from "layouts/dashboard/projects/components/search/Search";
import Sort from "layouts/dashboard/projects/components/sort/Sort";

const AllProjectsFilter = ({
  projectSearch,
  handleSearch,
  handleSort,
  dropdownOptions,
  allProjectModal,
}) => {
  const { search, sort } = projectSearch;
  return (
    <section className="allProjectFilter">
      <InvoiceFilterButton
        toggleModal={allProjectModal}
        label="Add filters"
        filterRange="3"
      />
      <Search
        searchName="allProjects"
        searchValue={search}
        onChange={handleSearch}
        searchPlaceholder="Search for projects"
      />
      <Sort
        sortName="allProjects"
        sortDropdown={dropdownOptions}
        sortValue={sort}
        // onChange={handleSort}
        onSelect={handleSort}
      />
    </section>
  );
};

AllProjectsFilter.propTypes = {
  dropdownName: propTypes.string,
  dropdownOptions: propTypes.array,
  projectSearch: propTypes.any,
  handleSearch: propTypes.any,
  handleSort: propTypes.any,
  allProjectModal: propTypes.func,
};

export default AllProjectsFilter;
