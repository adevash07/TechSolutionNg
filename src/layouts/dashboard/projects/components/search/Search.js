import React from "react";
import { Button, Input } from "components/index";
import { BiSearch } from "react-icons/bi";
import "./search.scss";
import propTypes from "prop-types";

const Search = ({
  searchEdit,
  searchValue,
  onChange,
  searchName,
  searchPlaceholder,
  labelHeader,
  labelFooter,
}) => {
  return (
    <>
      {searchEdit ? (
        <div className="searchComponent__edit">
          {labelHeader && (
            <div className="searchComponent__header">
              <span>{labelHeader}</span>
            </div>
          )}
          <div className="searchComponent__input">
            <Input
              inputType="text"
              inputPlaceholder={searchPlaceholder}
              inputName={searchName}
              value={searchValue}
              onChange={onChange}
            />
            <BiSearch className="searchComponent__searchIcon" />
          </div>
          {labelFooter && (
            <div className="searchComponent__footer">
              <Button btnClass="greySquare" btnText={labelFooter} />
            </div>
          )}
        </div>
      ) : (
        <div className="searchComponent">
          <Input
            inputType="text"
            inputPlaceholder={searchPlaceholder}
            inputName={searchName}
            value={searchValue}
            onChange={onChange}
          />
          <BiSearch className="searchComponent__searchIcon" />
        </div>
      )}
    </>
  );
};

Search.propTypes = {
  searchName: propTypes.string,
  onChange: propTypes.func,
  searchPlaceholder: propTypes.string,
  searchValue: propTypes.string,
  searchEdit: propTypes.bool,
  labelFooter: propTypes.string,
  labelHeader: propTypes.string,
};

export default Search;
