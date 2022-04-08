import propTypes from "prop-types";
import "./userFiles.scss";
import UserFileCard from "./UserFileCard";
const Images = ({ images = [] }) => {
  return (
    <div>
      {images.map((image) => (
        <UserFileCard file={image} key={image.id} />
      ))}
    </div>
  );
};

export default Images;
Images.propTypes = {
  images: propTypes.array,
};
