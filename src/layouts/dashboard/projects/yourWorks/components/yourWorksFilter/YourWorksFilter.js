import React from "react";
import propTypes from "prop-types";
import "./yourWorksFilter.scss";
import Search from "layouts/dashboard/projects/components/search/Search";
import Sort from "layouts/dashboard/projects/components/sort/Sort";

const YourWorksFilter = ({
  projectSearch,
  handleSearch,
  handleSort,
  dropdownOptions,
}) => {
  const { search, sort } = projectSearch;

  return (
    <section className="yourWorksFilter">
      <Search
        searchName="yourWorks"
        searchValue={search}
        onChange={handleSearch}
        searchPlaceholder="Search for works"
      />
      <Sort
        sortName="yourWorks"
        sortDropdown={dropdownOptions}
        sortValue={sort}
        onSelect={handleSort}
      />
    </section>
  );
};

YourWorksFilter.propTypes = {
  dropdownName: propTypes.string,
  dropdownOptions: propTypes.array,
  projectSearch: propTypes.any,
  handleSearch: propTypes.any,
  handleSort: propTypes.any,
};

export default YourWorksFilter;
