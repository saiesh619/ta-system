import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import JobSearch from "./JobSearch";
import JobDetails from "./JobDetails";
import JobList from "./JobList";
import ApplicationStatus from "./ApplicationStatus";
import ProfilePage from "./ProfilePage";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showJobList, setShowJobList] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Complete list of jobs
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      discipline: "IT",
      postedDate: "2024-11-19",
      company: "Google LLC",
      description: "Develop and maintain software applications.",
    },
    {
      id: 2,
      title: "Data Analyst",
      discipline: "Finance",
      postedDate: "2024-11-17",
      company: "Meta Platforms",
      description: "Analyze and interpret complex financial data.",
    },
    {
      id: 3,
      title: "Mechanical Engineer",
      discipline: "Engineering",
      postedDate: "2024-11-14",
      company: "Amazon",
      description: "Design mechanical systems and optimize processes.",
    },
    // Add more jobs here as needed
  ];

  // Handler to manage job applications
  const handleApplyJob = (jobId) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs((prevAppliedJobs) => [...prevAppliedJobs, jobId]);
    }
  };

  // Handler to toggle job list visibility
  const handleFindJobClick = () => {
    setShowJobList((prevShowJobList) => !prevShowJobList);
  };

  // Login handler
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div>
        {isLoggedIn ? (
          <>
            <Navbar />
            {/* Routes after login */}
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route
                path="/home"
                element={
                  <>
                    <JobSearch
                      jobs={jobs}
                      appliedJobs={appliedJobs}
                      onFindJob={handleFindJobClick}
                    />
                    {showJobList && <JobList />}
                  </>
                }
              />
              <Route path="/profile" element={<ProfilePage />} />
              <Route
                path="/job/:id"
                element={<JobDetails jobs={jobs} onApply={handleApplyJob} />}
              />
              <Route
                path="/application-status"
                element={<ApplicationStatus jobs={jobs} appliedJobs={appliedJobs} />}
              />
            </Routes>
          </>
        ) : (
          // Show login page if not logged in
          <LoginPage onLogin={handleLogin} />
        )}
      </div>
    </Router>
  );
};

export default App;
