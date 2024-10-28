import React from "react";
import "./Navbar.css";
import "./LoginPage";

const Navbar = () => {
  return (
    <div>
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
    <div className="secondary-nav">
    <div className="uf-logo">
      <h1>UNIVERSITY OF FLORIDA</h1>
      <h2>TA System</h2>
    </div>
    <nav className="nav">
      <a href="#">Profile</a>
      <a href="#">Application Status</a>
    </nav>
  </div>
  </div>
  
  );
};

export default Navbar;
