import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../assets/image_1.jpg";
import image2 from "../assets/image_2.jpg";
import image3 from "../assets/image_3.jpg";
import HeroSection from "../components/HeroSection";
const CardItem = ({ image, title, description, linkText, linkUrl }) => {
  return (
    <div className="col-md-4">
      <div className="card border-0 shadow-sm">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={linkUrl} className="text-primary text-decoration-none">
            {linkText}
          </a>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const sections = [
    {
      image: image1,
      title: "Teams",
      description: "Get to know our teams.",
      linkText: "See all teams",
      linkUrl: "#",
    },
    {
      image: image2,
      title: "Job Categories",
      description: "Find the right job category.",
      linkText: "See all categories",
      linkUrl: "#",
    },
    {
      image: image3,
      title: "Locations",
      description: "View our office locations.",
      linkText: "See all locations",
      linkUrl: "#",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Explore opportunities</h2>
      <div className="row g-4">
        {sections.map((item, index) => (
          <CardItem key={index} {...item} />
        ))}
      </div>
      <HeroSection />
    </div>
  );
};

export default Home;
