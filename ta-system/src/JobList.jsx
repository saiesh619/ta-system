import React from "react";
import "./JobList.css";

const JobList = () => {
  return (
    <div className="job-list">
      <div className="job-card">
        <h2>Title</h2>
        <p>Opening date: 3 hours ago</p>
        <p>Short description</p>
      </div>
      <div className="job-detail">
        <h2>Title</h2>
        <h3>About Position</h3>
        <p>Position details go here...</p>
        <p>More information about the job...</p>
        <p>Requirements and qualifications...</p>
        <button>Apply</button>
      </div>
    </div>
  );
};

export default JobList;
