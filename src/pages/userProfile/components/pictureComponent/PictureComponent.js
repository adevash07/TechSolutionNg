import assets from "assets";
import "./pictureComponent.scss"
const PictureComponent = () => {
  return (
    <div className="picture-comp">
      <div>
        <small>What type of picure do i need?</small>
        <span>x</span>
      </div>
      <p>
        Select a picure that represents you, preferably where you have a
        smilling face.
      </p>
      <div className="picture-comp__img-list">
        <img src={assets.User} alt="user" />
        <img src={assets.User} alt="user" />
        <img src={assets.User} alt="user" />
        <img src={assets.User} alt="user" />
      </div>
    </div>
  );
};
export default PictureComponent;
