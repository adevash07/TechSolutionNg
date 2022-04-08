import { heroImg, HeroSvg, HeroBlur } from "assets";
import Rank from "components/dashboard/dashboardPage/rank/Rank";
import "./heroSectionAvatar.scss";

const HeroSectionAvatar = () => {
  return (
    <div className="heroSection__avatar">
      <HeroSvg />
      <img src={heroImg} alt="" />
      <HeroBlur />
      <section className="heroSection__rankSection">
        <Rank rankGrade="98" rankHeader="In top 20" rankName="Rank" />
        <Rank
          rankGrade="32"
          rankHeader="5"
          rankHeaderSpan="this month"
          rankName="Projects"
        />
      </section>
    </div>
  );
};

export default HeroSectionAvatar;
