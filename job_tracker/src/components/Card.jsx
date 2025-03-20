import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { JobContext } from "../store/JobContext";

const Jobcard = ({
  status,
  jobTitle,
  company,
  jobId,
  appliedDate,
  location,
  roleDetailsLink,
}) => {
  const { withdrawJob } = useContext(JobContext);

  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body d-flex justify-content-between align-items-start">
        <div className="fw-bold">{status}</div>

        <div className="flex-grow-1 mx-3">
          <a
            href={roleDetailsLink}
            className="text-primary fw-semibold text-decoration-none"
          >
            {jobTitle} | {company}
          </a>
          <div className="text-muted small">
            Job ID: {jobId} | {status}: {appliedDate}
          </div>
          <div className="mt-1">
            <span className="text-muted">Location</span> <br />
            <span className="fw-bold">{location}</span>
          </div>
        </div>
        { (status!=='Withdrawn')?<div className="d-flex gap-2">
          <button
            className="btn btn-link text-primary p-0 text-decoration-none"
            onClick={() => withdrawJob(jobId)} 
          >
            Withdraw
          </button>
        </div>:<></>}
      </div>
    </div>
  );
};

export default Jobcard;
