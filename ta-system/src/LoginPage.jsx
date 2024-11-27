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
                <label className="username" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="GatorLink Username"
                  required
                />
                <label className="password" htmlFor="password">
                  Password
                </label>
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

      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="footer-contact-wrap">
              <a href="http://www.ufl.edu" class="footer-logo icon-svg">
                <svg>
                  <use href="/idp/img/spritemap.svg#facebook"></use>
                </svg>
                <span class="visuallyhidden">University of Florida</span>
              </a>

              <ul class="social-nav">
                <li>
                  <a
                    href="http://www.facebook.com/uflorida/"
                    class="btn-circle icon-svg icon-facebook"
                  >
                    <svg>
                      <use href="/idp/img/spritemap.svg#facebook"></use>
                    </svg>
                    <span class="visuallyhidden">Facebook</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/UF/"
                    class="btn-circle icon-svg icon-twitter"
                  >
                    <svg>
                      <use href="/idp/img/spritemap.svg#twitter"></use>
                    </svg>
                    <span class="visuallyhidden">Twitter</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/uflorida/"
                    class="btn-circle icon-svg icon-instagram"
                  >
                    <svg>
                      <use href="/idp/img/spritemap.svg#instagram"></use>
                    </svg>
                    <span class="visuallyhidden">Instagram</span>
                  </a>
                </li>
                <li>
                  <a
                    href="http://www.youtube.com/user/universityofflorida/"
                    class="btn-circle icon-svg icon-youtube"
                  >
                    <svg>
                      <use href="/idp/img/spritemap.svg#youtube"></use>
                    </svg>
                    <span class="visuallyhidden">YouTube</span>
                  </a>
                </li>
              </ul>

              <p class="address">
                University of Florida
                <br />
                Gainesville, FL 32611
                <br />
                (352) 392-3261
                <br />
                <a href="https://assistive.usablenet.com/tt/login.ufl.edu">
                  Text-only Version
                </a>
              </p>
            </div>

            <div class="footer-columns">
              <div class="footer-menu">
                <h2>
                  Resources
                  <span class="icon-svg icon-caret">
                    <svg>
                      <use href="/idp/img/spritemap.svg#caret"></use>
                    </svg>
                  </span>
                </h2>
                <ul>
                  <li>
                    <a href="https://one.uf.edu/">ONE.UF</a>
                  </li>
                  <li>
                    <a href="https://webmail.ufl.edu/">Webmail</a>
                  </li>
                  <li>
                    <a href="https://my.ufl.edu/ps/signon.html">myUFL</a>
                  </li>
                  <li>
                    <a href="https://lss.at.ufl.edu/">e-Learning</a>
                  </li>
                  <li>
                    <a href="https://directory.ufl.edu/">Directory</a>
                  </li>
                </ul>
              </div>

              <div class="footer-menu">
                <h2>
                  Campus
                  <span class="icon-svg icon-caret">
                    <svg>
                      <use href="/idp/img/spritemap.svg#caret"></use>
                    </svg>
                  </span>
                </h2>
                <ul>
                  <li>
                    <a href="http://ufweather.org/">Weather</a>
                  </li>
                  <li>
                    <a href="http://campusmap.ufl.edu/">Campus Map</a>
                  </li>
                  <li>
                    <a href="http://virtualtour.ufl.edu/">Student Tours</a>
                  </li>
                  <li>
                    <a href="https://catalog.ufl.edu/ugrad/current/Pages/dates-and-deadlines.aspx">
                      Academic Calendar
                    </a>
                  </li>
                  <li>
                    <a href="http://calendar.ufl.edu/">Events</a>
                  </li>
                </ul>
              </div>

              <div class="footer-menu">
                <h2>
                  Website
                  <span class="icon-svg icon-caret">
                    <svg>
                      <use href="/idp/img/spritemap.svg#caret"></use>
                    </svg>
                  </span>
                </h2>
                <ul>
                  <li>
                    <a href="http://www.ufl.edu/websites/">Website Listing</a>
                  </li>
                  <li>
                    <a href="http://accessibility.ufl.edu/">Accessibility</a>
                  </li>
                  <li>
                    <a href="http://privacy.ufl.edu/privacystatement.html">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="http://regulations.ufl.edu/">Regulations</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
