import Header from "layouts/header/Header";
import React from "react";
import Experience from "./experience/Experience";
import Footer from "./footer/Footer";
import HeroSection from "./heroSection/HeroSection";
import InstantOffers from "./instantOffers/InstantOffers";
import Bid from "./bid/Bid";
import PostProject from "./postProject/PostProject";
import Protection from "./protection/Protection";
import Sign from "./sign/Sign";
import Solution from "./solution/Solution";

const Home = () => {
  return (
    <>
      <Header landingPage={true} />
      <HeroSection />
      <InstantOffers />
      <Bid />
      <PostProject />
      <Experience />
      <Solution />
      <Protection />
      <Sign />
      <Footer />
    </>
  );
};

export default Home;
