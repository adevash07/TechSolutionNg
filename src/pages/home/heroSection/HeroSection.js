import React, { useEffect, useState } from "react";
import HeroSectionAvatar from "./components/heroSectionAvatar/HeroSectionAvatar";
import HeroSectionInfo from "./components/heroSectionInfo/HeroSectionInfo";
import HeroSectionScrollDown from "./components/heroSectionScrollDown/HeroSectionScrollDown";
import "./heroSection.scss";

const HeroSection = () => {
  const [nextSectionOffset, setNextSectionOffset] = useState(null);

  useEffect(() => {
    let verticalOffset = document.querySelector("#landingOffers").offsetTop;

    setNextSectionOffset(verticalOffset);
  });

  const handleScroll = () => {
    window.scroll({
      top: nextSectionOffset - 80,
      behavior: "smooth",
    });
  };

  return (
    <section className="heroSection">
      <div className="heroSection__container">
        <HeroSectionInfo />
        <HeroSectionAvatar />
      </div>
      <HeroSectionScrollDown handleScroll={handleScroll} />
    </section>
  );
};

export default HeroSection;
