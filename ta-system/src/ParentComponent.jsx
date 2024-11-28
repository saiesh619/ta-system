// import React, { useState } from "react";
// import JobSearch from "./JobSearch";
// import JobDetails from "./JobDetails";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const ParentComponent = () => {
//   const [appliedJobs, setAppliedJobs] = useState([]);

//   const jobs = [
//     { id: 1, title: "Software Engineer", discipline: "IT", postedDate: "2024-11-18", description: "Develop software systems." },
//     { id: 2, title: "Data Analyst", discipline: "Finance", postedDate: "2024-11-16", description: "Analyze financial data." },
//     { id: 3, title: "Mechanical Engineer", discipline: "Engineering", postedDate: "2024-11-13", description: "Design mechanical components." },
//   ];

//   // Define the common function that will be passed to both JobSearch and JobDetails components
//   const handleApply = (jobId) => {
//     if (!appliedJobs.includes(jobId)) {
//       setAppliedJobs([...appliedJobs, jobId]);
//     }
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<JobSearch appliedJobs={appliedJobs} jobs={jobs} onApply={handleApply} />}
//         />
//         <Route
//           path="/job/:id"
//           element={<JobDetails jobs={jobs} appliedJobs={appliedJobs} onApply={handleApply} />}
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default ParentComponent;
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import JobDetails from "./JobDetails"; // Make sure to adjust the import path
import JobList from "./JobList"; // Assuming you have this component for listing jobs
import { jobsData } from "./data"; // Assuming your jobs data is coming from here

const ParentComponent = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  // The function that will be passed to JobDetails
  const handleApply = (jobId) => {
    setAppliedJobs((prev) => [...prev, jobId]);
  };

  return (
    <Routes>
      <Route path="/" element={<JobList jobs={jobsData} />} />
      <Route
        path="/job/:id"
        element={
          <JobDetails
            jobs={jobsData}
            appliedJobs={appliedJobs}
            onApply={handleApply}
          />
        }
      />
    </Routes>
  );
};

export default ParentComponent;
