import { useState } from "react";
import propTypes from "prop-types";
import "./countrySelect.scss";
import countriesCodes from "./countryCodes";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const CountrySelect = ({ setDialCode }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedption] = useState(() => {
    const defaultDialCode = countriesCodes[0];

    const nigeriaDialCode = "+234";
    const countryCode = countriesCodes.find(
      (country) => country.dial_code == nigeriaDialCode
    );

    if (countryCode) return countryCode;

    return defaultDialCode;
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(!isFocused);
  };
  const handSelect = (value) => {
    setSelectedption(value);
    setIsFocused(false);

    setSearch("");
    setDialCode(value.dial_code);
  };
  return (
    <div className="country-container-lg">
      <div className="country-icon-wrap" onClick={handleFocus}>
        <div>{selectedOption.flag}</div>
        <div className="chevron-icon-wrapper">
          {isFocused ? (
            <span onClick={handleFocus}>
              <FaChevronDown />
            </span>
          ) : (
            <span onClick={handleFocus}>
              {" "}
              <FaChevronUp />{" "}
            </span>
          )}
        </div>
      </div>

      {isFocused ? (
        <div className="list-wrapper">
          <input
            className="country-search"
            value={search}
            onChange={handleSearch}
            placeholder="search"
          />
          <ul className="select-list">
            {countriesCodes
              .filter((option) =>
                String(option.name)
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase() || "")
              )
              .map((option) => (
                <li
                  className={`select-option ${
                    selectedOption.dial_code == option.dial_code &&
                    "is-selected"
                  } `}
                  key={option}
                  onClick={() => handSelect(option)}
                >
                  <div className="country-data">
                    <div>{option.flag}</div>
                    <div>{option.name}</div>
                    <div>{option.dial_code}</div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default CountrySelect;
CountrySelect.propTypes = {
  setDialCode: propTypes.func.isRequired,
  phoneNumber: propTypes.string,
};
