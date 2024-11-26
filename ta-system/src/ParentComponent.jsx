import React, { useState } from "react";
import JobSearch from "./JobSearch";
import JobDetails from "./JobDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const ParentComponent = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const jobs = [
    { id: 1, title: "Software Engineer", discipline: "IT", postedDate: "2024-11-18", description: "Develop software systems." },
    { id: 2, title: "Data Analyst", discipline: "Finance", postedDate: "2024-11-16", description: "Analyze financial data." },
    { id: 3, title: "Mechanical Engineer", discipline: "Engineering", postedDate: "2024-11-13", description: "Design mechanical components." },
  ];

  // Define the common function that will be passed to both JobSearch and JobDetails components
  const handleApply = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<JobSearch appliedJobs={appliedJobs} jobs={jobs} onApply={handleApply} />}
        />
        <Route
          path="/job/:id"
          element={<JobDetails jobs={jobs} appliedJobs={appliedJobs} onApply={handleApply} />}
        />
      </Routes>
    </Router>
  );
};

export default ParentComponent;
