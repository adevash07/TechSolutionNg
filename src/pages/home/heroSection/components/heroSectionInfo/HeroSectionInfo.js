import { spiral } from "assets";
import { Button } from "components";
import { BiCheck } from "react-icons/bi";
import "./heroSectionInfo.scss";

const HeroSectionInfo = () => {
  return (
    <div className="heroSection__info">
      <div>
        <h2 className="heroSection__subHeader">
          <span>Your one-stop tech solutions</span>
          <img src={spiral} />
        </h2>
        <h1 className="heroSection__mainHeader">
          <span>
            <span>Hire</span> IT talents &
          </span>
          <span>Get your projects done</span>
        </h1>
        <div className="heroSection__checkList">
          <div className="heroSection__checkItem">
            <BiCheck />
            <span>Modern</span>
          </div>
          <div className="heroSection__checkItem">
            <BiCheck />
            <span>Zero-risk</span>
          </div>
          <div className="heroSection__checkItem">
            <BiCheck />
            <span>Top talents</span>
          </div>
          <div className="heroSection__checkItem">
            <BiCheck />
            <span>Support</span>
          </div>
        </div>
        <div className="heroSection__button">
          <Button btnText="Get Started" btnLink="/signup" />
        </div>
      </div>
    </div>
  );
};

export default HeroSectionInfo;
