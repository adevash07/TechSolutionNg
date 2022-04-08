import React from "react";
import propTypes from "prop-types";
import "./yourOffersFilter.scss";
import Search from "layouts/dashboard/projects/components/search/Search";
import Sort from "layouts/dashboard/projects/components/sort/Sort";

const YourOffersFilter = ({
  projectSearch,
  handleSearch,
  handleSort,
  dropdownOptions,
}) => {
  const { search, sort } = projectSearch;

  return (
    <section className="yourOffersFilter">
      <Search
        searchName="yourOffers"
        searchValue={search}
        onChange={handleSearch}
        searchPlaceholder="Search for offers"
      />
      <Sort
        sortName="yourOffers"
        sortDropdown={dropdownOptions}
        sortValue={sort}
        onSelect={handleSort}
      />
    </section>
  );
};

YourOffersFilter.propTypes = {
  dropdownName: propTypes.string,
  dropdownOptions: propTypes.array,
  projectSearch: propTypes.any,
  handleSearch: propTypes.any,
  handleSort: propTypes.any,
};

export default YourOffersFilter;
