import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

import "./showAll.scss";

const ShowAll = () => {
  return (
    <div className="showAll">
      <div className="showAll--toggler">
        <span>See more</span>
        <span>
          <BsFillCaretDownFill />
        </span>
      </div>
    </div>
  );
};

export default ShowAll;
