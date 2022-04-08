import propTypes from "prop-types";
import { Button } from "components/index";
import "./performanceCard.scss";

const PerformanceCard = ({ title, content, btnText }) => {
  return (
    <div className="performance-card">
      <label>{title}</label>
      <p>{content}</p>
      <Button btnText={btnText} />
    </div>
  );
};

export default PerformanceCard;
PerformanceCard.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
  btnText: propTypes.string,
};
