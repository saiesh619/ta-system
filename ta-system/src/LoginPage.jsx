import React from 'react';
import './LoginPage.css'; // Create a CSS file to style this component

const LoginPage = () => {
  return (
    <div className="login-page">
      <header className="login-header">
        <div className="uf-logo">
          <h1>UF</h1>
          <h2>Authentication</h2>
          <h3>UNIVERSITY OF FLORIDA</h3>
        </div>
        <nav className="login-nav">
          <a href="#change-password">CHANGE PASSWORD</a>
          <a href="#forgot-password">FORGOT/RESET PASSWORD</a>
          <a href="#create-account">CREATE ACCOUNT</a>
          <a href="#trouble-signing-on">TROUBLE SIGNING ON?</a>
        </nav>
      </header>

      <div className="login-container">
        <div className="notice-box">
          <p>
            <strong>NOTE:</strong> It has been brought to our attention that some browsers are retaining and
            attempting to use old session cookies. This is causing some users to have to authenticate more often than
            normal. Please clear your browser's cache and cookies to fix this issue.
          </p>
        </div>
        
        <div className="login-box">
          <form className="login-form">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input type="text" id="username" placeholder="GatorLink Username" className="form-input" />

            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" id="password" placeholder="Password" className="form-input" />

            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>
        </div>
        
        <div className="disclaimer-box">
          <p>
            You are logging in to a University of Florida (UF) information system and agree to comply with the UF
            Acceptable Use Policy and Guidelines. Unauthorized use of this system is prohibited and may subject the
            user to criminal and civil penalties. UF may monitor computer and network activities, and the user should
            have limited expectations of privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
