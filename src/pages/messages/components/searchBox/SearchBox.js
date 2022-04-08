import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./searchBox.scss";
const SearchBox = () => {
  const [state, setState] = useState("");
  const handleChange = (e) => {
    setState(e.target.value);
  };
  const clearState = () => {
    setState("");
  };
  return (
    <div className="search-box">
      <span>
        <BsSearch />
      </span>
      <input
        placeholder="Search message by name"
        value={state}
        onChange={handleChange}
      />
      <button onClick={clearState}>x</button>
    </div>
  );
};

export default SearchBox;
