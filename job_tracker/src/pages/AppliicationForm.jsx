import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { JobContext } from "../store/JobContext";

const ApplicationForm = () => {
  const { currJobId, allJobs, applyJob } = useContext(JobContext);

  const selectedJob = allJobs.find((job) => job.jobId === currJobId);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!currJobId) {
      alert("No job selected. Please go back and choose a job.");
      return;
    }

    // Collect application data
    // const applicationData = {
    //   jobId: currJobId,
    //   fullName: formData.fullName,
    //   email: formData.email,
    //   phone: formData.phone,
    //   resume: formData.resume,
    //   coverLetter: formData.coverLetter,
    // };

    applyJob(); // Call function with complete data
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h2 className="fw-bold display-5 text-secondary">
            Job Application Form
          </h2>
          <p className="text-muted fs-5">
            Please fill out the form below to apply for a job. Ensure all details are accurate.
          </p>
        </div>

        {/* Display Job Details */}
        {selectedJob ? (
          <div className="row justify-content-center mb-4">
            <div className="col-md-8">
              <div className="card shadow-sm p-4 bg-white">
                <h5 className="fw-bold">{selectedJob.position}</h5>
                <p className="text-muted mb-1">
                  <strong>Company:</strong> {selectedJob.company}
                </p>
                <p className="text-muted mb-1">
                  <strong>Location:</strong> {selectedJob.location}
                </p>
                <p className="text-muted mb-1">
                  <strong>Experience Required:</strong> {selectedJob.yearOfExperience}
                </p>
                <p className="text-muted">
                  <strong>Job ID:</strong> {selectedJob.jobId} | <strong>Posted:</strong>{" "}
                  {new Date(selectedJob.timestamp).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-danger">No job selected. Please choose a job before applying.</p>
        )}

        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label fw-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-control"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="yourname@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label fw-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="resume" className="form-label fw-semibold">
                  Upload Resume (PDF/DOC)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  className="form-control"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
                />
              </div>

              <div className="text-center">
                <button onClick={handleSubmit} className="btn btn-primary px-4 py-2 fw-semibold">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
