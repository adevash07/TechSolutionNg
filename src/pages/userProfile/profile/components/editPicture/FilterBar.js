import propTypes from "prop-types";
import FilterImage from "./FilterImage";

const FilterBar = ({ filters, image, changeSettings }) => {
  return (
    <div className="filter-bar">
      
      {filters.map((filter) => (
        <FilterImage
          key={filter.id}
          image={image}
          filter={filter}
          changeSettings={changeSettings}
        />
      ))}
    </div>
  );
};

export default FilterBar;
FilterBar.propTypes = {
  filters: propTypes.array,
  image: propTypes.any,
  changeSettings: propTypes.func,
};
