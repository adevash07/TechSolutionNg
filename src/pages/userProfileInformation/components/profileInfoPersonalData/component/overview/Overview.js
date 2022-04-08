import React from "react";
import EditIcon from "../../../editIcon";
const Overview = () => {
  return (
    <>
      <span className="label--small">Overview</span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tempor id eu nisl
        nunc mi ipsum faucibus. Fringilla ut morbi tincidunt augue interdum
        velit. Ante in nibh mauris cursus mattis. Imperdiet sed euismod nisi
        porta lorem mollis aliquam ut porttitor. Tempus quam pellentesque nec
        nam aliquam sem et tortor consequat. Et netus et malesuada fames ac
        turpis. Massa tincidunt dui ut ornare lectus sit amet est. Risus quis
        varius quam quisque. Sit amet consectetur adipiscing elit ut aliquam.
      </p>
      <span className="editIcon positionAbsolute--topRight">
        <EditIcon size={15} />
      </span>
    </>
  );
};

export default Overview;
