import propTypes from "prop-types";
const FilterImage = ({ image, filter, changeSettings }) => {
  const imgStyle = {
    filter: `
          brightness(${filter.settings.brightness || 1}) 
          saturate(${filter.settings.saturate || 100}%) 
          contrast(${filter.settings.contrast || 100}%)
          sepia(${filter.settings.sepia || 0})
        `,
  };

  const handleClick = () => {
    changeSettings(filter.settings);
  };

  return (
    <div className="filter-image" onClick={handleClick}>
      <img
        onClick={handleClick}
        className="FilterImage__img"
        style={imgStyle}
        src={image}
      />
      <p>{filter.name}</p>
    </div>
  );
};
export default FilterImage;
FilterImage.propTypes = {
  filter: propTypes.any,
  image: propTypes.any,
  changeSettings: propTypes.func,
};
