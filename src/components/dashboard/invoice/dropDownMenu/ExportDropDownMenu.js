import React from "react";
import "./exportDropDownMenu.scss";
import DropDownItem from "./dropDownItem/DropDownItem";
import propTypes from "prop-types";
import { AiOutlineFilePdf } from "react-icons/ai";
import { GrDocumentCsv } from "react-icons/gr";

function ExportDropDownMenu({ toggleExportCSVMenu }) {
  return (
    <aside className="exportMenu">
      <ul className="exportMenu-items">
        <li className="exportMenu--item">
          <DropDownItem
            category="Export to PDF"
            icon={<AiOutlineFilePdf />}
            hasArrow={true}
          />
        </li>
        <li
          className="exportMenu--item"
          onClick={() => {
            toggleExportCSVMenu();
          }}
        >
          <DropDownItem
            category="Export to CSV"
            icon={<GrDocumentCsv />}
            hasArrow={true}
          />
        </li>
      </ul>
    </aside>
  );
}

ExportDropDownMenu.propTypes = {
  toggleExportCSVMenu: propTypes.func,
};

export default ExportDropDownMenu;
