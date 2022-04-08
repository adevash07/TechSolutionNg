import { useState, useRef } from "react";
import { BsFillBrightnessHighFill, BsDroplet, BsCrop } from "react-icons/bs";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { MdTune } from "react-icons/md";
import { CgFilters } from "react-icons/cg";

import propTypes from "prop-types";
import FilterBar from "./FilterBar";
import asset from "assets/index";
import { Button } from "components/index";
import "./editPicture.scss";
import AdjustItem from "./adjust/AdjustItem";
import CropImage from "./CropImage";
import { PageHeader } from "pages/userProfile/components/index";

const EditPicture = ({ onNext }) => {
  const [image, setImage] = useState(asset.User);
  const [currentMenu, setCurrentMenu] = useState("adjust");
  const [currentEdit, setCurrentEdit] = useState({
    width: "100",
    height: "100",
    brightness: "1",
    saturate: "100",
    contrast: "100",
    sepia: "0",
  });
  const [settings] = useState([
    /*{
      id: 0,
      property: "width",
      default: "400",
      min: "0",
      max: "600",
    },*/
    {
      id: 1,
      property: "Brightness",
      default: "1",
      min: "0",
      max: "3",
      step: "0.01",
      icon: <BsFillBrightnessHighFill />,
    },
    {
      id: 2,
      property: "Saturate",
      default: "100",
      min: "0",
      max: "200",
      icon: <BsDroplet />,
    },
    {
      id: 3,
      property: "Contrast",
      default: "100",
      min: "50",
      max: "150",
      icon: <WiMoonAltThirdQuarter />,
    },
    /*{
      id: 4,
      property: "sepia",
      default: "0",
      min: "0",
      max: "100",
    },*/
  ]);
  const [zoomSetting] = useState({
    id: 0,
    property: "width",
    default: "400",
    min: "0",
    max: "600",
  });
  const [filters] = useState([
    {
      id: 0,
      name: "Original",
      settings: {
        width: "100",
        brightness: "1",
        saturate: "100",
        contrast: "100",
        sepia: "0",
      },
    },
    {
      id: 1,
      name: "B&W",
      settings: {
        saturate: "0",
        sepia: "0",
      },
    },
    {
      id: 2,
      name: "Pop",
      settings: {
        saturate: "200",
        contrast: "150",
        sepia: "0",
      },
    },
    {
      id: 3,
      name: "Cool",
      settings: {
        sepia: "100",
      },
    },
  ]);
  //const [nextFilterId, setNextFilterId] = useState(4);
  const fileInput = useRef();

  const handleSavePicture = () => {
    //console.log(imageSrc);
    onNext();
  };
  const handleChangePicture = () => {
    fileInput.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = window.URL.createObjectURL(file);
      setImage(url);
    }
  };
  const changeSettings = (settings) => {
    let theEdit = { ...currentEdit, ...settings };
    setCurrentEdit(theEdit);
  };

  const handleChange = (e) => {
    let theEdit = {
      ...currentEdit,
      [e.target.name.toLowerCase()]: e.target.value,
    };
    setCurrentEdit(theEdit);
  };

  /*const resetDefaults = (e) => {
    changeSettings({
      width: "400",
      brightness: "1",
      saturate: "100",
      contrast: "100",
      sepia: "0",
    });
  };
*/
  /*const saveNewFilter = (e) => {
    let newFilter = {
      id: nextFilterId,
      name: `Custom ${nextFilterId}`,
      settings: currentEdit,
    };
    let filters = [...filters, newFilter];
    let newFilterId = nextFilterId + 1;
    setFilters(filters);
    setNextFilterId(newFilterId);
    console.log(`Saved new filter: "Custom ${nextFilterId}"`);
  };*/
  const { width, height, brightness, saturate, contrast, sepia } = currentEdit;

  const imgStyle = {
    width: width + "px",
    height: height + "px",
    filter: `brightness(${brightness}) saturate(${saturate}%) contrast(${contrast}%) sepia(${sepia})`,
  };

  const handleMenuClick = (menu) => {
    setCurrentMenu(menu);
  };
  return (
    <div className="edit-picture">
      <PageHeader title="Profile" rightText="Skip for later"/>
      

      <div className="edit-picture__image-editor">
        <div className="image-area">
          <img className="main-img" style={imgStyle} src={image} />
          {currentMenu === "filter" && (
            <FilterBar
              image={image}
              filters={filters}
              changeSettings={changeSettings}
            />
          )}

          {currentMenu === "adjust" && (
            <div className="adjust-bar">
              {settings.map((setting) => (
                <AdjustItem
                  key={setting.property}
                  currentEdit={currentEdit}
                  setting={setting}
                  changeHandler={handleChange}
                />
              ))}
            </div>
          )}
          {currentMenu === "crop" && (
            <CropImage
              currentEdit={currentEdit}
              setting={zoomSetting}
              changeHandler={handleChange}
            />
          )}
        </div>
        <div className="menu">
          <div>
            <span
              className={`${currentMenu === "crop" && "active"}`}
              onClick={() => handleMenuClick("crop")}
            >
              <BsCrop />
            </span>
            <small className={`${currentMenu === "crop" && "active"}`}>
              Crop
            </small>
          </div>

          <div>
            <span
              className={`${currentMenu === "filter" && "active"}`}
              onClick={() => handleMenuClick("filter")}
            >
              <CgFilters />
            </span>
            <small className={`${currentMenu === "filter" && "active"}`}>
              Filter
            </small>
          </div>
          <div>
            <span
              className={`${currentMenu === "adjust" && "active"}`}
              onClick={() => handleMenuClick("adjust")}
            >
              <MdTune />
            </span>
            <small className={`${currentMenu === "adjust" && "active"}`}>
              Adjust
            </small>
          </div>
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInput}
        onChange={handleFileChange}
        className="file-input"
      />
      <div className="edit-picture__action-btns">
        <button type="button" onClick={handleChangePicture}>
          Change picture
        </button>
        <Button
          btnText="Save picture"
          btnClass="medium"
          onClick={handleSavePicture}
        />
      </div>
    </div>
  );
};

export default EditPicture;
EditPicture.propTypes = {
  onNext: propTypes.func,
};
