import propTypes from "prop-types";
import { useHistory } from "react-router-dom";
import assets from "assets";
import "./pageHeader.scss";
const PageHeader = ({ title, rightText, rightTextLink, customClass }) => {
  const history = useHistory();

  const handleRightTextClick = () => {
    rightTextLink && history.push(rightTextLink);
  };
  return (
    <>
      <div className={`page-header ${customClass}`}>
        <div>
          <h3>{title}</h3>
          <img src={assets.Triangle_flat} alt="triangle" />
          
        </div>

        {rightText && <small onClick={handleRightTextClick}>{rightText}</small>}
      </div>
    </>
  );
};
export default PageHeader;

PageHeader.propTypes = {
  title: propTypes.string.isRequired,
  rightText: propTypes.string,
  rightTextLink: propTypes.string,
  customClass: propTypes.string,
};
