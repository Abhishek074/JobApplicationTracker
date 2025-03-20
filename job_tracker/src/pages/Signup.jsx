import React, { useState } from "react";
import { BsFillPersonPlusFill } from "react-icons/bs";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signup = async (username, password, email) => {
    try {
      const response = await axios.post("http://localhost:5272/api/auth/signup", {
        username,
        email,
        password,
      });
      if(response.status===200){
        alert("user created successfully");
        navigate("/signin");
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };
    const handleSubmit = (e) => {
      e.preventDefault();
      signup(username, password, email);
    };

  return (
    <>
      <section className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card shadow-lg p-4" style={{ width: "400px" }}>
          <h3 className="text-center mb-4">
            <BsFillPersonPlusFill className="me-2" /> Create Account
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign up
            </button>
            <p className="text-center mt-3">
              Already have an account?{" "}
              <a href="/" className="text-primary">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
