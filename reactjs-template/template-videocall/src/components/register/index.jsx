import React from "react";
import { Link } from "react-router-dom";
// Import Images
import { Logo,banner,fb,google } from "../imagepath";

    const Register = () => {
   
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
                  {/* Register */}
                  <div className="login-wrapper">
                    <div className="loginbox">
                      <h1>Sign Up to VideoCall</h1>
                      <p className="account-subtitle">Register your account</p>
                      <form action="/index">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-control-label">First Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-control-label">Last Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="form-control-label">
                                Email Address
                              </label>
                              <input type="email" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-control-label">Password</label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="form-control-label">
                                Confirm Password
                              </label>
                              <input type="password" className="form-control" />
                            </div>
                          </div>
                          <div className="form-group">
                            <Link className="forgot-link" to="/forgot-password">
                              Forgot Password ?
                            </Link>
                          </div>
                          <div className="d-grid">
                            <button
                              className="btn btn-primary btn-signin"
                              type="submit"
                            >
                              Sign Up
                            </button>
                          </div>
                        </div>
                        <div className="dont-have">
                          Already have an account? <Link to="/index">Login</Link>
                        </div>
                        <div className="login-or">
                          <p className="span-or">or</p>
                        </div>
                        {/* Social Login */}
                        <div className="social-login">
                          <a href="#">
                            <img
                              src={google}
                              className="img-fluid"
                              alt="Logo"
                            />
                          </a>
                          <a href="#">
                            <img
                              src={fb}
                              className="img-fluid"
                              alt="Logo"
                            />
                          </a>
                        </div>
                        {/* /Social Login */}
                      </form>
                    </div>
                  </div>
                  {/* /Register */}
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
export default Register;