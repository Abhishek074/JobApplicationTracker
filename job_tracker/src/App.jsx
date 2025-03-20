import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Applications from "./pages/Applications";
import Jobs from "./pages/Jobs";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ApplicationForm from "./pages/AppliicationForm";
import AuthRoute from "./components/AuthRoute";
const App = () => {
  return (
    <>
        <Header />
        <div className="d-flex flex-column min-vh-100">
          <div className="container flex-grow-1 py-4">
            <Routes>
              <Route path="/" element={<Home />} exact index />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Login />} />
              <Route
                path="/applications"
                element={
                  <AuthRoute>
                    <Applications />
                  </AuthRoute>
                }
              />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/*" element={<Error />} />
              <Route
                path="/apply"
                element={
                  <AuthRoute>
                    <ApplicationForm />
                  </AuthRoute>
                }
              />
            </Routes>
          </div>
        </div>
        <Footer />
      
    </>
  );
};

export default App;
