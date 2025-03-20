import React from "react";
import { SiAnalogue } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-4 shadow-sm">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <a
              href="#"
              className="d-flex align-items-center justify-content-center text-decoration-none text-dark"
            >
              <SiAnalogue className="me-2 text-primary fs-4" />
              <span className="fw-bold fs-5">Job Application Tracker</span>
            </a>
            <p className="mt-3 text-muted">
              Check all your applications at one place and never missout on an
              openning.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 text-center">
            <ul className="list-unstyled d-flex justify-content-center mb-3">
              <li className="mx-3">
                <a href="#" className="text-decoration-none text-dark">
                  About
                </a>
              </li>
              <li className="mx-3">
                <a
                  href="https://github.com/Abhishek074"
                  className="text-decoration-none text-dark"
                  target="_blank"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-dark text-light">
        © {new Date().getFullYear()}{" "}
        <a href="#" className="text-light text-decoration-none">
          Job Application Tracker™
        </a>
      </div>
    </footer>
  );
};

export default Footer;
