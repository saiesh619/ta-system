import React from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent form from submitting and refreshing the page
    console.log("clicked");
    onLogin(); // Redirect to main page by updating isLoggedIn state in App
  };
  return (
    <div>
      {/* Top Navigation Bar */}
      <div class="top-nav">
        <div class="top-nav-content">
          <div class="left-section-top">
            <div class="uf-logo-main">UF</div>
            <nav class="main-nav-links">
              <a href="#">NEWS</a>
              <a href="#">CALENDAR</a>
              <a href="#">OFFICES & SERVICES</a>
              <a href="#">DIRECTORY</a>
              <a href="#">GIVING</a>
              <a href="#">UF HEALTH</a>
              <a href="#">UF IFAS</a>
            </nav>
          </div>

          <div class="right-section-top">
            <div class="welcome-message">
              Welcome to UF <span class="dropdown-icon">▼</span>
            </div>
            <div class="search-icon">🔍</div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="secondary-nav">
        <div className="uf-logo">
          <h1>Authentication</h1>
          <h2>UNIVERSITY OF FLORIDA</h2>
        </div>
        <nav className="nav">
          <a href="#">Option</a>
          <a href="#">Option</a>
          <a href="#">Option</a>
          <a href="#">Option</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="main-content">
          <div className="left-section">
            <div className="notice-box">
              <p>
                NOTE: It has been brought to our attention that some browsers
                are retaining and attempting to use old session cookies. This is
                causing some users to have to authenticate more often than
                normal. Please clear your browser's cache and cookies to fix
                this issue.
              </p>
            </div>
            <div className="login-box">
              <form>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="GatorLink Username"
                />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" />
                <button type="submit" onClick={handleLoginClick}>LOGIN</button>
              </form>
            </div>
          </div>
          <div className="right-section">
            <div className="privacy-notice">
              <p>
                You are logging in to a University of Florida (UF) information
                system and agree to comply with the UF Acceptable Use Policy and
                Guidelines. Unauthorized use of this system is prohibited and
                may subject the user to criminal and civil penalties. UF may
                monitor computer and network activities, and the user should
                have limited expectations of privacy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="footer-content">
          <a href="http://www.ufl.edu" className="footer-logo">
            University of Florida
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
