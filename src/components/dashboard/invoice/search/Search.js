import React from "react";
import { FiSearch } from "react-icons/fi";
import propTypes from "prop-types";
import "./search.scss";

function Search({ placeholder }) {
  return (
    <div className='search'>
      <FiSearch className='search--icon' />
      <input
        type='text'
        placeholder={placeholder ? placeholder : `Search Invoice`}
        className='search--InputField'
      />
    </div>
  );
}

Search.propTypes = {
  placeholder: propTypes.string,
};

export default Search;
