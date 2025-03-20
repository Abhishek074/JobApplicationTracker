import React, { useContext } from "react";
import Jobcard from "../components/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { JobContext } from "../store/JobContext";


const Applications = () => {
  const {appliedJobs } = useContext(JobContext);
  return (
    <div className="container mt-4">
      <h2 className="mb-3">My Job Applications</h2>
      {appliedJobs.length === 0 ? (
        <p>No job applications found.</p>
      ) : (
        appliedJobs.map((app, index) => (
          <Jobcard 
            key={index}
            status={app.status}
            jobTitle={app.jobDetails.position}
            company={app.jobDetails.company}
            jobId={app.jobDetails.jobId}
            appliedDate={app.appliedDate}
            location={app.jobDetails.location}
          />
        ))
      )}
    </div>
  );
};

export default Applications;
