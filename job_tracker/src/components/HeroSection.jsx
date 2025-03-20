import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroSection = () => {
  return (
    <section className="bg-primary text-white d-flex align-items-center justify-content-center text-center py-5 my-5">
      <div className="container">
        <h1 className="fw-bold">Come build the you carrier with us</h1>
        <p className="lead mt-3">
          Our mission is to be Earth's most customer-centric and eco friendly
          company. This is what unites across teams and geographies as we are
          all striving to delight our customers and make their lives easier, one
          innovative product.
        </p>
        <a href="#" className="btn btn-outline-light mt-3">
          Learn about working at Capstone.
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
