import React from 'react';
import './LoginPage.css';

const LoginPage= () => {
    return (
        <div>
        <div class="header">
            <div class="uf-logo">
                <h1>Authentication</h1>
                <h2>UNIVERSITY OF FLORIDA</h2>
            </div>
            <div class="nav">
                <a href="#">CHANGE PASSWORD</a>
                <a href="#">FORGOT/RESET PASSWORD</a>
                <a href="#">CREATE ACCOUNT</a>
                <a href="#">TROUBLE SIGNING ON?</a>
            </div>
        </div>
        <div className="container">

            <div className="main-content">
                <div className="login-box">
                    <h2>LOGIN TO ONE.UF</h2>
                    <p>Self-Service Portal</p>
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="GatorLink Username" />

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Password" />

                        <button type="submit">LOGIN</button>
                    </form>
                </div>

                <div className="privacy-notice">
                    <p>
                        You are logging in to a University of Florida (UF) information system and agree to comply with the UF Acceptable Use Policy and Guidelines. Unauthorized use of this system is prohibited and may subject the user to criminal and civil penalties. UF may monitor computer and network activities, and the user should have limited expectations of privacy.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;
