import propTypes from "prop-types";
import "./heroSectionScrollDown.scss";

const HeroSectionScrollDown = ({ handleScroll }) => {
  return (
    <div onClick={handleScroll} className="heroSection__scrollDown">
      <span>Scroll down</span>
      <div></div>
    </div>
  );
};

HeroSectionScrollDown.propTypes = {
  handleScroll: propTypes.func,
};

export default HeroSectionScrollDown;
