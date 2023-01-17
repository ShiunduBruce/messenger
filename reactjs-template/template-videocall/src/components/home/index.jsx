import React from "react";
import { Link } from "react-router-dom";
// Import Images
import { Logo,banner,fb,google } from "../imagepath";

    const Home = () => {
   
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
                  {/* Login */}
                  <div className="login-wrapper">
                    <div className="loginbox">
                      <h1>Get’s Started</h1>
                      <p className="account-subtitle">Login to your account</p>
                      <form>
                        <div className="form-group">
                          <label className="form-control-label">Email Address</label>
                          <input type="email" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <Link className="forgot-link" to="/forgot-password">
                            Forgot Password ?
                          </Link>
                        </div>
                        <div className="d-grid">
                          <Link to="/join-call" className="btn btn-primary btn-signin">
                            Sign In
                          </Link>
                        </div>
                        <div className="dont-have">
                          Don't have an account yet?{" "}
                          <Link to="/register">Register</Link>
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
                  {/* /Login */}
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
export default Home;