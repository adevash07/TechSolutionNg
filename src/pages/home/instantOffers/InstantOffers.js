import React, { useEffect, useState } from "react";
import InstantOffersCard from "./components/instantOffersCard/InstantOffersCard";
import { img1, img2, img3, img4 } from "assets";
import { Pagination } from "components";
import { BsArrowRight } from "react-icons/bs";
import "./instantOffers.scss";

const InstantOffers = () => {
  const [offersData, setOffersData] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    const offers = [
      {
        id: 1,
        name: "Wendy Mills",
        rating: 4,
        jobs: 180,
        reviews: 190,
        project: "Motion Design",
        price: 10000,
        days: "2 days",
        image: `${img1}`,
        hours: "8 hrs per week",
        paragraph:
          "There is no limit on our platform. This project has the potential to be awesome. I will give the best web design in due time.",
      },
      {
        id: 2,
        name: "Sharon Omari",
        rating: 3,
        jobs: 500,
        reviews: 490,
        project: "Illustrator Design",
        price: 12000,
        days: "5 days",
        image: `${img2}`,
        hours: "2 hrs per week",
        paragraph:
          "There is no limit on our platform. This project has the potential to be awesome. I will give the best web design in due time.",
      },
      {
        id: 3,
        name: "Jason Derulo",
        rating: 5,
        jobs: 290,
        reviews: 250,
        project: "Premium Logo Design",
        price: 5000,
        days: "3 days",
        image: `${img3}`,
        hours: "2 hrs per week",
        paragraph:
          "There is no limit on our platform. This project has the potential to be awesome. I will give the best web design in due time.",
      },
      {
        id: 4,
        name: "Rhye Willys",
        rating: 1,
        jobs: 480,
        reviews: 490,
        project: "Website Design",
        price: 9000,
        days: "5 days",
        image: `${img4}`,
        hours: "5 hrs per week",
        paragraph:
          "There is no limit on our platform. This project has the potential to be awesome. I will give the best web design in due time.",
      },
      {
        id: 5,
        name: "Emil Willys",
        rating: 1,
        jobs: 480,
        reviews: 490,
        project: "Website Design",
        price: 9000,
        days: "5 days",
        image: `${img1}`,
        hours: "5 hrs per week",
        paragraph:
          "There is no limit on our platform. This project has the potential to be awesome. I will give the best web design in due time.",
      },
      {
        id: 6,
        name: "Emmy Steve",
        rating: 1,
        jobs: 480,
        reviews: 490,
        project: "Website Design",
        price: 9000,
        days: "5 days",
        image: `${img2}`,
        hours: "5 hrs per week",
        paragraph:
          "There is no limit on our platform. This project has the potential to be awesome. I will give the best web design in due time.",
      },
      {
        id: 7,
        name: "Obinna Uko",
        rating: 1,
        jobs: 480,
        reviews: 490,
        project: "Website Design",
        price: 9000,
        days: "5 days",
        image: `${img3}`,
        hours: "5 hrs per week",
        paragraph:
          "There is no limit on our platform. This project has the potential to be awesome. I will give the best web design in due time.",
      },
      {
        id: 8,
        name: "Chinwende Ibrahim",
        rating: 1,
        jobs: 480,
        reviews: 490,
        project: "Website Design",
        price: 9000,
        days: "5 days",
        image: `${img4}`,
        hours: "5 hrs per week",
        paragraph:
          "There is no limit on our platform. This project has the potential to be awesome. I will give the best web design in due time.",
      },
    ];

    setOffersData(offers);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  let postsPerPage = Number(
    `${screenWidth <= 992 ? 2 : screenWidth <= 1199 ? 3 : 4}`
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = offersData.slice(indexOfFirstPost, indexOfLastPost);

  const mappedData = currentPosts.map((offer) => {
    return <InstantOffersCard key={offer.id} {...offer} />;
  });

  return (
    <section id="landingOffers" className="landingOffers">
      <div className="landingOffers__container">
        <div className="landingOffers__info">
          <h1 className="landingOffers__header">Instant Offers For You</h1>
          <p className="landingOffers__paragraph">
            There is a lot you can do on IT solutions
          </p>
          <p className="landingOffers__paragraph">
            We have got you covered in more ways than one
          </p>
        </div>
        <div className="landingOffers__data">{mappedData}</div>
        <div className="landingOffers__pagination">
          <Pagination
            dot
            postsPerPage={postsPerPage}
            dataLength={offersData.length}
            currentPage={currentPage}
            currentPageFunc={setCurrentPage}
          />
          <div className="landingOffers__link">
            <span>See more</span>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantOffers;
