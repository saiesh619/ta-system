import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = ({ jobs, appliedJobs, onApply }) => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (appliedJobs.includes(job?.id)) {
      setApplied(true);
    }
  }, [appliedJobs, job]);

  if (!job) {
    return <div>Job not found.</div>;
  }

  const handleApply = () => {
    onApply(job.id);
    setApplied(true);
  };

  return (
    <div className="job-details-container">
      <h1>{job.title}</h1>
      <p>
        <strong>Discipline:</strong> {job.discipline}
      </p>
      <p>
        <strong>Posted On:</strong>{" "}
        {new Date(job.postedDate).toLocaleDateString()}
      </p>
      <p>
        <strong>Description:</strong> {job.description}
      </p>
      {!applied ? (
        <button className="apply-button" onClick={handleApply}>
          Apply
        </button>
      ) : (
        <p className="applied-message">Job Applied!</p>
      )}
    </div>
  );
};

export default JobDetails;
