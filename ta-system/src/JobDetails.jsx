// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import "./JobDetails.css";

// const JobDetails = ({ jobs, appliedJobs, onApply }) => {
//   const { id } = useParams();
//   const job = jobs.find((job) => job.id === parseInt(id));
//   const [applied, setApplied] = useState(false);

//   useEffect(() => {
//     if (appliedJobs.includes(job?.id)) {
//       setApplied(true);
//     }
//   }, [appliedJobs, job]);

//   if (!job) {
//     return <div>Job not found.</div>;
//   }

//   const handleApply = () => {
//     onApply(job.id);
//     setApplied(true);
//   };

//   return (
//     <div className="job-details-container">
//       <h1>{job.title}</h1>
//       <p>
//         <strong>Discipline:</strong> {job.discipline}
//       </p>
//       <p>
//         <strong>Posted On:</strong>{" "}
//         {new Date(job.postedDate).toLocaleDateString()}
//       </p>
//       <p>
//         <strong>Description:</strong> {job.description}
//       </p>
//       {!applied ? (
//         <button className="apply-button" onClick={handleApply}>
//           Apply
//         </button>
//       ) : (
//         <p className="applied-message">Job Applied!</p>
//       )}
//     </div>
//   );
// };

// export default JobDetails;
import React from "react";
import { useParams } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = ({ jobs, onApply }) => {
  console.log("job details");
  console.log("onApply prop:", onApply);
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id, 10));

  if (!job) {
    return <div>Job not found!</div>;
  }

  return (
    <div className="job-details-container">
      <h2>{job.title}</h2>
      <p>
        <strong>Company:</strong> {job.company}
      </p>
      <p>
        <strong>Discipline:</strong> {job.discipline}
      </p>
      <p>
        <strong>Posted Date:</strong> {job.postedDate}
      </p>
      <p>{job.description}</p>
      <button
        className="apply-button"
        onClick={() => onApply(job.id)}
        disabled={job.applied} // Disable button if already applied
      >
        Apply
      </button>
    </div>
  );
};

export default JobDetails;
