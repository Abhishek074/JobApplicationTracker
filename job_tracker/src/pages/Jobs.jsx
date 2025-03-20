import React, { useContext} from "react";
import JobList from "../components/JobList";
import "bootstrap/dist/css/bootstrap.min.css";
import { JobContext } from "../store/JobContext";

const Jobs = () => {
  const jobContext = useContext(JobContext);
  const {allJobs}=jobContext;
  const {appliedJobs}=jobContext;
  const jobToDisplay = allJobs.filter(job => {
  return !appliedJobs.find(appliedJob => appliedJob.jobDetails.jobId === job.jobId);
});
  
  return (
    <div className="container mt-4">
      <h2 className="mb-3">Available Job Openings</h2>
      {jobToDisplay.map((job, index) => (
        <JobList
          key={index}
          position={job.position}
          company={job.company}
          jobId={job.jobId}
          location={job.location}
          timestamp={job.timestamp}
        />
      ))}
    </div>
  );
};

export default Jobs;
