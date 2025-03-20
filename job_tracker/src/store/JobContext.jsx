import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext"; 
import { useNavigate } from "react-router-dom";

export const JobContext = createContext({});

export const JobProvider = ({ children }) => {
  const { token } = useContext(AuthContext); 
  const [allJobs, setAllJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [currJobId, setCurrJobId] = useState(null);
  const navigate = useNavigate();

  const loadJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5272/api/jobs");
      if (response.status === 200) {
        setAllJobs(response.data);
      }
    } catch (err) {
      console.error("Error loading jobs:", err.response?.data || err.message);
    }
  };

  const loadAppliedJobs = async () => {
    if (!token) {
      console.warn("No token found, skipping applied jobs fetch.");
      return;
    }

    try {
      const response = await axios.get("http://localhost:5272/api/job/myapplications", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setAppliedJobs(response.data);
      }
    } catch (err) {
      console.error("Error loading applied jobs:", err.response?.data || err.message);
    }
  };

  const applyJob = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5272/api/job/apply",
        { jobId: currJobId },  
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert(response.data.message);
        
        loadAppliedJobs();
        
        navigate("/applications");
      }
    } catch (error) {
      console.error("Error applying for job:", error.response?.data || error.message);
    }
  };

  const withdrawJob = async (jobId) => {
    try {
      const response = await axios.put(
        `http://localhost:5272/api/job/withdraw/${jobId}`,
        {}, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 200) {
        alert("Job withdrawn successfully");

        setAppliedJobs((prev) => prev.filter(job => job.jobId !== jobId));

        loadAppliedJobs();
      }
    } catch (error) {
      console.error("Error withdrawing job:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    loadJobs();
  }, []);

  useEffect(() => {
    if (token) {
      loadAppliedJobs();
    }
  }, [token]);

  return (
    <JobContext.Provider
      value={{
        allJobs,
        appliedJobs,
        setAllJobs,
        applyJob,
        setCurrJobId,
        currJobId,
        withdrawJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
