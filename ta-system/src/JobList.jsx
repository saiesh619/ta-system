import React from "react";
import "./JobList.css";

const JobList = ({ jobs = [], onJobSelect }) => {
  return (
    <div className="job-list">
      <h2>Job Openings</h2>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <div
            key={job.id}
            className="job-card"
            onClick={() => onJobSelect(job)}
          >
            <h3>{job.title}</h3>
            <p>
              <strong>Opening Date:</strong> {new Date(job.postedDate).toLocaleDateString()}
            </p>
            <p>{job.shortDescription || "Click to view details"}</p>
          </div>
        ))
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
};

export default JobList;
