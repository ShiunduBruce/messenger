import React from "react";
import { Link } from "react-router-dom";
// Import Images
import { Logo,banner } from "../imagepath";

    const Forgotpassword = () => {
   
        return (
          <>
          {/* Main Wrapper */}
          <div className="main-wrapper">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 col-xl-8 p-0">
                  {/* Header */}
                  <header className="header">
                    <nav className="navbar navbar-expand-lg header-nav">
                      <div className="navbar-header">
                        <a href="" className="navbar-brand logo">
                          <img
                            src={Logo}
                            className="img-fluid"
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <ul className="nav header-navbar-rht log-user">
                        <li className="nav-item">
                          <Link className="nav-link" to="/index">
                            Sign In
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link header-login" to="/register">
                            Sign Up
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </header>
                  {/* /Header */}
                  {/* Forgot Password */}
                  <div className="login-wrapper">
                    <div className="loginbox">
                      <h1>Forgot Password</h1>
                      <p className="account-subtitle">
                        Enter Your Registered email below to receive password reset
                        instruction
                      </p>
                      <form action="/create-password">
                        <div className="form-group">
                          <label className="form-control-label">Email Address</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="d-grid">
                          <button className="btn btn-primary btn-signin" type="submit">
                            Send
                          </button>
                        </div>
                        <div className="dont-have">
                          Back to <Link to="/index">Signin</Link>
                        </div>
                        {/* /Social Login */}
                      </form>
                    </div>
                  </div>
                  {/* /Forgot Password */}
                </div>
                {/* Banner */}
                <div className="col-xl-4 login-bg">
                  <div className="login-banner">
                    <img src={banner} className="img-fluid" alt="Logo" />
                  </div>
                </div>
                {/* /Banner */}
              </div>
            </div>
          </div>
          {/* /Main Wrapper */}
        </>
        )
}
export default Forgotpassword;