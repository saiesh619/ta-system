import React from "react";
import "./ApplicationStatus.css";

const ApplicationStatus = ({ jobs, appliedJobs }) => {
  // Filter jobs to get only applied ones
  const appliedJobsDetails = jobs.filter((job) => appliedJobs.includes(job.id));

  return (
    <div className="application-status-page">
      <header className="status-header">
        <h1>Application Status</h1>
        <p>Track the progress of your submitted applications.</p>
      </header>

      {appliedJobsDetails.length === 0 ? (
        <p className="no-applications">No applications submitted yet.</p>
      ) : (
        <div className="status-container">
          {appliedJobsDetails.map((job) => (
            <div className="application-card" key={job.id}>
              <div className="card-header">
                <h2>{job.title}</h2>
                <p>{job.company}</p>
              </div>
              <div className="card-body">
                <p>
                  <strong>Application Date:</strong> {new Date().toLocaleDateString()}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  <span className="status-tag pending">Pending</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApplicationStatus;
