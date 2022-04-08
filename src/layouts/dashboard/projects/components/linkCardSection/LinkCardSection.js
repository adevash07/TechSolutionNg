import React from "react";
import LinkCard from "components/dashboard/projects/linkCard/LinkCard";
import propTypes from "prop-types";

import { ReactComponent as Svg1 } from "assets/images/Dashboard Icons/start-up.svg";
import { ReactComponent as Svg2 } from "assets/images/Dashboard Icons/auction.svg";
import { ReactComponent as Svg3 } from "assets/images/Dashboard Icons/suitcase.svg";
import { ReactComponent as Svg4 } from "assets/images/Dashboard Icons/medal.svg";

import "./linkCardSection.scss";

const LinkCardSection = ({
  url,
  activeProject,
  handleActive1,
  handleActive2,
  handleActive3,
  handleActive4,
}) => {
  const { card1, card2, card3, card4 } = activeProject;
  return (
    <section
      className={
        card1
          ? "linkCardSection card1"
          : card2
          ? "linkCardSection card2"
          : card3
          ? "linkCardSection card3"
          : card4
          ? "linkCardSection card4"
          : "linkCardSection"
      }
    >
      <LinkCard
        projectLink={`${url}`}
        linkIcon={<Svg1 />}
        handleActive={handleActive1}
        linkText="All Projects"
        linkStatus="+ 95 today"
      />
      <LinkCard
        projectLink={`${url}/your-bids`}
        handleActive={handleActive2}
        linkIcon={<Svg2 />}
        linkText="Your Bids"
      />
      <LinkCard
        projectLink={`${url}/your-works`}
        handleActive={handleActive3}
        linkText="Your Works"
        linkIcon={<Svg3 />}
      />
      <LinkCard
        projectLink={`${url}/your-offers`}
        handleActive={handleActive4}
        linkText="Your Offers"
        linkIcon={<Svg4 />}
      />
    </section>
  );
};

LinkCardSection.propTypes = {
  activeProject: propTypes.any,
  handleActive1: propTypes.any,
  handleActive2: propTypes.any,
  handleActive3: propTypes.any,
  handleActive4: propTypes.any,
  url: propTypes.any,
};

export default LinkCardSection;
