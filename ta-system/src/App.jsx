import React, { useState } from "react";
import LoginPage from "./LoginPage";
import Navbar from "./Navbar";
import JobSearch from "./JobSearch";
import JobList from "./JobList";
import "./App.css";

const App = () => {
  console.log("Navbar",Navbar)
  
  // State to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showJobList, setShowJobList] = useState(false);

  const handleFindJobClick = () => {
    setShowJobList((prevShowJobList) => !prevShowJobList);

};
  // Handler to update login state
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Navbar />
          <JobSearch onFindJob={handleFindJobClick}/>
          {showJobList && <JobList/>}
        </>
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
