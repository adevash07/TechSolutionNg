import propTypes from "prop-types";

import "./slideComponent.scss";
const SlideComponent = ({ svgUrl, title, description }) => {
  return (
    <div className="slide-comp">
      <section>
        <div>
          <img src={svgUrl} alt="slide" />
        </div>
      </section>
      <section>
        <label>{title}</label>
        <p>{description}</p>
      </section>
    </div>
  );
};
export default SlideComponent;
SlideComponent.propTypes = {
  svgUrl: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
};
