import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./JobSearch.css";

const JobSearch = ({ appliedJobs, jobs, onApply }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [sortBy, setSortBy] = useState("most-recent");
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [feedback, setFeedback] = useState([]);

  const filteredJobs = jobs
    .filter((job) => {
      const matchesSearchTerm = searchTerm
        ? job.title.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      const matchesDiscipline = discipline
        ? job.discipline === discipline
        : true;
      return matchesSearchTerm && matchesDiscipline;
    })
    .sort((a, b) => {
      return sortBy === "most-recent"
        ? new Date(b.postedDate) - new Date(a.postedDate)
        : new Date(a.postedDate) - new Date(b.postedDate);
    });

  const handleChatMessage = () => {
    if (!userMessage.trim()) return;

    const botReply = getBotReply(userMessage);
    const newMessage = { sender: "user", text: userMessage };

    if (["1", "2", "3", "4", "5"].includes(userMessage.trim())) {
      setFeedback([
        ...feedback,
        { type: "rating", value: parseInt(userMessage.trim()) },
      ]);
    } else if (botReply.includes("improve")) {
      setFeedback([
        ...feedback,
        { type: "improvement", value: userMessage.trim() },
      ]);
    }

    setMessages([...messages, newMessage, { sender: "bot", text: botReply }]);
    setUserMessage("");
  };

  const getBotReply = (message) => {
    if (message.toLowerCase().includes("hello"))
      return "Hello! How can I assist you with your job search?";
    if (message.toLowerCase().includes("apply"))
      return "You can apply to jobs by clicking the 'Apply' button!";
    if (message.toLowerCase().includes("filter"))
      return "Use the filters above to refine your job search.";
    if (message.toLowerCase().includes("feedback")) {
      return "Thank you for sharing feedback! Could you rate your experience on a scale of 1 to 5?";
    }
    if (["1", "2", "3", "4", "5"].includes(message.trim())) {
      const rating = parseInt(message.trim());
      if (rating >= 4)
        return "Glad you had a great experience! What feature did you like the most?";
      else
        return "Sorry to hear that. Can you let us know what we could improve?";
    }
    return "I'm here to help with your job search. Please ask a question!";
  };

  return (
    <div className="job-search-container">
      <h2 className="title">Available Jobs</h2>
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by job title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select
          value={discipline}
          onChange={(e) => setDiscipline(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">All Disciplines</option>
          <option value="IT">IT</option>
          <option value="Finance">Finance</option>
          <option value="Engineering">Engineering</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="filter-dropdown"
        >
          <option value="most-recent">Most Recent</option>
          <option value="least-recent">Least Recent</option>
        </select>
      </div>

      <div className="jobs-grid">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-content">
              <h3>{job.title}</h3>
              <p>
                <strong>Discipline:</strong> {job.discipline}
              </p>
              <p>
                <strong>Posted On:</strong>{" "}
                {new Date(job.postedDate).toLocaleDateString()}
              </p>
              {appliedJobs.includes(job.id) ? (
                <span className="applied-tag">Applied</span>
              ) : (
                <button
                  className="apply-button"
                  onClick={() => {
                    console.log(`Applying for job ID: ${job.id}`);
                    onApply(job.id); // Trigger the onApply function
                  }}
                >
                  Apply
                </button>
              )}
              <Link to={`/job/${job.id}`} className="view-details">
                View Details
              </Link>
            </div>
            <div className="job-hover">
              <p>
                <strong>Skills Match:</strong> {job.skillsMatch}%
              </p>
              <p>
                <strong>Location:</strong> {job.location}
              </p>
            </div>
          </div>
        ))}
        {filteredJobs.length === 0 && <p>No jobs match your criteria.</p>}
      </div>
    </div>
  );
};

export default JobSearch;
