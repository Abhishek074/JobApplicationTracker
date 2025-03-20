import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Error = () => {
  return (
    <>
      <section className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <div className="container text-center">
          <h1 className="display-1 fw-bold text-danger">400</h1>
          <p className="fs-3 fw-semibold text-dark">Login to Apply.</p>
          <p className="fs-5 text-muted">
            We are really sorry, but the page you are looking for does not
            exist.
          </p>
          <Link to="/" className="btn btn-primary mt-3">
            Go Back Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Error;
