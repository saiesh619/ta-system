import React from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      {/* Top Navigation Bar */}
      <div className="topnav">
        <div className="topnavcontent">
          <div className="left-section-top">
            <div className="uf-logo-main">UF</div>
            <nav className="main-nav-links">
              <a href="#">NEWS</a>
              <a href="#">CALENDAR</a>
              <a href="#">OFFICES & SERVICES</a>
              <a href="#">DIRECTORY</a>
              <a href="#">GIVING</a>
              <a href="#">UF HEALTH</a>
              <a href="#">UF IFAS</a>
            </nav>
          </div>

          <div className="right-section-top">
            <div className="welcome-message">
              Welcome to UF <span className="dropdown-icon">▼</span>
            </div>
            <div className="search-icon">🔍</div>
          </div>
        </div>
      </div>

      {/* Secondary Navigation Bar */}
      <div className="secondary-nav">
        {/* <div className="uf-logo"></div> */}
        <nav className="nav">
          <a href="#"> university of florida</a>
          <a href="#">CHANGE PASSWORD</a>
          <a href="#">FORGOT/RESET PASSWORD</a>
          <a href="#">CREATE ACCOUNT</a>
          <a href="#">TROUBLE SIGNING ON?</a>
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
              <h2>LOGIN TO ONE.UF</h2>
              <p>Self-Service Portal</p>

              {/* Login Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent page reload
                  onLogin(); // Trigger login and navigation
                }}
              >
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="GatorLink Username"
                  required
                />
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                />
                <button type="submit" className="login-button">
                  LOGIN
                </button>
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
          <a href="http://www.ufl.edu" className="footer-logo"></a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
