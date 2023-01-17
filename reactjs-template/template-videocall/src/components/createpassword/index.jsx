import React from "react";
import { Link } from "react-router-dom";
// Import Images
import { Logo,banner } from "../imagepath";

    const Createpassword = () => {
   
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
                      <h1>Create New Password</h1>
                      <p className="account-subtitle">
                        Your New Password must be different from previously used
                        passwords.
                      </p>
                      <form action="/index">
                        <div className="form-group">
                          <label className="form-control-label">New Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">Confirm Password</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="d-grid">
                          <button className="btn btn-primary btn-signin" type="submit">
                            Create
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
export default Createpassword;