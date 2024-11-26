import React from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  return (
    <div className="login-page">
      {/* Top Navigation */}
      <div className="top-nav">
        <div className="uf-logo">UF</div>
        <nav className="main-nav">
          <a href="#">NEWS</a>
          <a href="#">CALENDAR</a>
          <a href="#">OFFICES & SERVICES</a>
          <a href="#">DIRECTORY</a>
          <a href="#">GIVING</a>
          <a href="#">UF HEALTH</a>
          <a href="#">UF IFAS</a>
        </nav>
        <div className="right-nav">
          <span>Welcome to UF</span>
          <span className="dropdown-icon">▼</span>
          <span className="search-icon">🔍</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="login-container">
        <h1>Authentication</h1>
        <h2>UNIVERSITY OF FLORIDA</h2>

        <div className="login-box">
          <div className="login-warning">
            <p>
              <strong>NOTE:</strong> Some browsers are retaining old session
              cookies. This may require frequent authentication. Clear your
              browser cache to fix this issue.
            </p>
          </div>

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

        <div className="login-info">
          <p>
            You are logging into a University of Florida system. Unauthorized
            use is prohibited and may result in penalties.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="login-footer">
        <div>
          <p>RESOURCES</p>
          <p>CAMPUS</p>
          <p>WEBSITE</p>
        </div>
        <div className="uf-branding">
          <h2>UNIVERSITY of FLORIDA</h2>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
