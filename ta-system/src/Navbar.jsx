import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <div className="top-nav-content">
          {/* Left Section */}
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

          {/* Right Section */}
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
        <div className="secondary-nav-content">
          {/* University Branding */}
          <div className="uf-logo">
            <h1 className="university-title">UNIVERSITY OF FLORIDA</h1>
            <h2 className="ta-system-title">TA System</h2>
          </div>

          {/* Navigation Links */}
          <nav className="nav">
            <Link to="/profile" className="nav-link">Profile</Link>
            <Link to="/application-status" className="nav-link">
              Application Status
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
