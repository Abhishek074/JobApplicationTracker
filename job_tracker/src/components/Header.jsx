import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiAnalogue } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../store/AuthContext";

const Header = () => {
  const { token, logout } = useContext(AuthContext);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    setIsAuthenticated(!!token);
  }, [token]);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className="bg-light shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light container py-3">
        <Link
          className="navbar-brand d-flex align-items-center text-dark text-decoration-none brand-hover"
          to="/"
        >
          <SiAnalogue className="me-2 text-primary fs-4" />
          <span className="fw-bold fs-5">Job Application Tracker</span>
        </Link>

        {/* Navbar Toggle Button (for Mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Items (Links & Button) */}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link text-dark fw-semibold nav-hover">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/applications"
                className="nav-link text-dark fw-semibold nav-hover"
              >
                Applications
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                to="/jobs"
                className="nav-link text-dark fw-semibold nav-hover"
              >
                Jobs
              </Link>
            </li>
          </ul>

          <div className="mt-2 mt-lg-0 ms-lg-3">
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="btn btn-outline-danger fw-semibold px-4 auth-hover"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/signin"
                className="btn btn-primary fw-semibold px-4 auth-hover"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>

      <style>
        {`
          .brand-hover:hover {
            color: #007bff !important;
            transition: color 0.3s ease-in-out;
          }
          .nav-hover {
            transition: color 0.3s ease-in-out;
          }
          .nav-hover:hover {
            color: #007bff !important;
          }
          .auth-hover {
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
          }
          .auth-hover:hover {
            background-color: #0056b3 !important;
            color: #fff !important;
          }
          .btn-outline-danger.auth-hover:hover {
            background-color: #dc3545 !important;
            color: white !important;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
