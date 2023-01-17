
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Logo} from '../imagepath'

class Login extends Component {
   render() {
      return ( 
        <div className="content align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              {/* Login Tab Content */}
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      {/* <h3>Login <br><span>Access to our Chat</span></h3> */}
                      <Link to="chat">
                        <img src={Logo} alt="" className="header_image" />
                      </Link>
                    </div>
                    <form>
                      <div className="form-group">
                        <label>Email</label>
                        <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="new-chat-topic">Password</label>
                        <input className="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Enter your password" />
                      </div>
                      <div className="pt-1">
                        <div className="text-center">
                          <button className="btn newgroup_create btn-block d-block w-100" type="button"><Link style={{color:"white"}} to="/chat">Login</Link></button>
                          <span className="forgot-link">
                            <Link to="/forgot-password" className="text-right">Forgot Password ?</Link>
                          </span>
                        </div>
                      </div>
                    </form>
                    <div className="login-or">
                      <span className="or-line" />
                      <span className="span-or">or</span>
                    </div>
                    <div className="row form-row social-login">
                      <div className="col-6">
                        <Link to="https://www.facebook.com" target="_blank" className="btn btn-facebook btn-block"><i className="fab fa-facebook-f mr-1" /> Login</Link>
                      </div>
                      <div className="col-6">
                        <Link to="https://mail.google.com" className="btn btn-google btn-block" target="_blank"><i className="fab fa-google mr-1" /> Login</Link>
                      </div>
                    </div>
                    <div className="text-center dont-have">Don’t have an account? <Link to="/register">Register</Link></div>
                  </div>
                </div>
              </div>
              {/* /Login Tab Content */}
            </div>
          </div>
        </div>
      </div>
      );
   }
}

export default Login;
