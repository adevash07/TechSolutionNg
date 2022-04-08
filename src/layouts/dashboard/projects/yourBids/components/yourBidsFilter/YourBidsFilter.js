import React from "react";
import propTypes from "prop-types";
import "./yourBidsFilter.scss";
import Search from "layouts/dashboard/projects/components/search/Search";
import Sort from "layouts/dashboard/projects/components/sort/Sort";

const YourBidsFilter = ({
  projectSearch,
  handleSearch,
  handleSort,
  dropdownOptions,
}) => {
  const { search, sort } = projectSearch;

  return (
    <section className="yourBidsFilter">
      <Search
        searchName="yourBids"
        searchValue={search}
        onChange={handleSearch}
        searchPlaceholder="Search for bids"
      />
      <Sort
        sortName="yourBids"
        sortDropdown={dropdownOptions}
        sortValue={sort}
        onSelect={handleSort}
      />
    </section>
  );
};

YourBidsFilter.propTypes = {
  dropdownName: propTypes.string,
  dropdownOptions: propTypes.array,
  projectSearch: propTypes.any,
  handleSearch: propTypes.any,
  handleSort: propTypes.any,
};

export default YourBidsFilter;
