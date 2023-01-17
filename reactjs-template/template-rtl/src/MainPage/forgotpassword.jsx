
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Logo} from '../imagepath'

class Forgotpassword extends Component {
  componentWillMount(){
    document.body.classList.add('.account-page');
}

componentWillUnmount(){
    document.body.classList.remove('.account-page');
}
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
                      <Link to="/app/index">
                        <img src={Logo} alt="" className="header_image" />
                      </Link>
                    </div>
                    <form action="/login">
                      <div className="form-group">
                        <label>Enter your email to get a password reset link</label>
                        <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="pt-1">
                        <div className="text-center">
                          <button className="btn newgroup_create btn-block d-block w-100" type="submit">Reset Password</button>
                          <span className="forgot-link">
                            <Link to="/login" className="text-right">Remember your password?</Link>
                          </span>
                        </div>
                      </div>
                    </form>
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

export default Forgotpassword;
