import React from "react";
import "./search.scss";
import propTypes from "prop-types";
import { useHistory } from "react-router-dom";

const Search = ({
  iconarrow,
  ptext,
  icon,
  inputype,
  placetext,
  inputname,
  icons,
  linkpathacct,
}) => {
  const history = useHistory();
  return (
    <div className="search">
      <div className="search__Arrow">
        <div>
          {iconarrow && (
            <i
              className="search__ArrowDiv"
              onClick={() => history.push(linkpathacct)}
            >
              {iconarrow}
            </i>
          )}
        </div>
        <div>
          {ptext && <h3 className="search__ArrowParagraphy">{ptext}</h3>}
        </div>
      </div>

      <div className="searchIcon__div">
        {icon && <i className="searchIcon__Icon">{icon}</i>}
        {inputype && (
          <input
            className="search__Input"
            type={inputype}
            placeholder={placetext}
            name={inputname}
          />
        )}
        {icons && <i className="search__InputIcon">{icons}</i>}
      </div>
    </div>
  );
};

Search.propTypes = {
  linkpathacct: propTypes.string,
  iconarrow: propTypes.any,
  ptext: propTypes.string,
  icon: propTypes.any,
  icons: propTypes.any,
  inputype: propTypes.string,
  placetext: propTypes.string,
  inputname: propTypes.string,
};
export default Search;
