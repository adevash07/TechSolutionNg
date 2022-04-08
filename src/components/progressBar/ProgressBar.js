import propTypes from "prop-types";

const ProgressBar = ({ completed, bgcolor }) => {
  const containerStyles = {
    display: "flex",
    height: 3,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    transition: "width 1s ease-in-out",
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right",
    display: "inline",
  };

  const labelStyles = {
    padding: 5,
    color: bgcolor,
    fontWeight: "bold",
    fontSize: 10,
  };

  return (
    <div style={containerStyles}>
      <span style={fillerStyles}></span>
      <span style={labelStyles}>{`${completed}%`}</span>
    </div>
  );
};

export default ProgressBar;
ProgressBar.propTypes = {
  completed: propTypes.number,
  bgcolor: propTypes.string,
};
