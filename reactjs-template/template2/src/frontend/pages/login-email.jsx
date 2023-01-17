import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';

import LogoFull from '../assets/img/logo-full.png';

class Loginemail extends Component {
	componentDidMount() {
		$('body').addClass('account-page');
	}
	render() {
  		return (
  			<div className="main-wrapper">
	            <div className="content align-items-center">
	            	<div className="w-100 ">
						<div className="login-left">
							
							<div className="account-content">
								<div className="login-header">
									<a href="/template2/">
	                                    <img src={LogoFull} alt="" />
	                                </a>
								</div>
								<div className="form-col">
									<div className="login-text-details">
										<h3>Log in</h3>
										<p>Login with your Data that you entered during your Registration</p>
									</div>
									<form action="/template2/">
		                                <div className="form-group">
		                                    <label>Your Email</label>
		                                    <input className="form-control form-control-lg group_formcontrol" name="email" type="email" />
		                                </div>
		                                <div className="form-group">
		                                    <label>Password</label>
		                                    <input className="form-control form-control-lg group_formcontrol" name="password" type="text" />
		                                </div>
		                                <div className="form-group">
		                                	<label className="custom-check d-flex">
		                                        <input type="checkbox" />Keep me logged in
		                                        <span className="checkmark"></span>
		        
		                                    </label>
		                                </div>
		                                <div className="pt-1">
		                                	<div className="text-center">
		                                     	<button className="btn newgroup_create btn-block d-block w-100" type="submit">Login</button>
		                                    </div>
		                                </div>
									
									<div className="text-center dont-have">Don’t have an account? <a href="/signup-email">Signup</a></div>
									<div className="text-center mt-3">
										<span className="forgot-link">
											<a href="/template2/forgotpassword-email" className="text-right">Forgot Password ?</a>
										</span>
									</div>
									</form>
								</div>
								<div className="back-btn-col text-center">
									<a href="/template2/"><span><i className="fas fa-caret-left"></i></span> Back</a>
								</div>
							</div>
						</div>
						<div className="login-right">
						</div>
					</div>
	            </div>
            </div>
  		)
  	}
 }

 export {Loginemail};