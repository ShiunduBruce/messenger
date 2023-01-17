import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';

import LogoFull from '../assets/img/logo-full.png';

class Signupemobile extends Component {
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
									<a href="/template2-rtl/">
	                                    <img src={LogoFull} alt="" />
	                                </a>
								</div>
								<div className="form-col">
									<div className="login-text-details">
										<h3>Sign up</h3>
										<p>Lets get you all setup so you can verify your oersonal account and begin setting up your Profile.</p>
									</div>
									<form action="/">
		                                <div className="form-group">
		                                    <label>First Name</label>
		                                    <input className="form-control form-control-lg group_formcontrol" name="first-name" type="email" />
		                                </div>
		                                <div className="form-group">
		                                    <label>Last Name</label>
		                                    <input className="form-control form-control-lg group_formcontrol" name="last-name" type="text" />
		                                </div>
		                                <div className="form-group">
		                                    <label>Phone Number</label>
	                                    	<input className="form-control form-control-lg group_formcontrol" id="phone" name="phone" type="text" />
		                                </div>
		                                <div className="form-group">
		                                    <label>Password</label>
		                                    <input className="form-control form-control-lg group_formcontrol" name="password" type="password" />
		                                </div>
		                                <div className="form-group">
		                                    <label>Confirm Password</label>
		                                    <input className="form-control form-control-lg group_formcontrol" name="c-password" type="password" />
		                                </div>
		                                <div className="form-group">
		                                	<label className="custom-check d-flex flex-wrap">
		                                        <input type="checkbox" />I agreed to all the <a href="#" data-toggle="modal" data-target="#terms"> Terms & Conditions,</a><a href="#">Privacy Policy.</a>
		                                        <span className="checkmark"></span>
		                                    </label>
		                                </div>
		                                <div className="pt-1">
		                                	<div className="text-center">
		                                     	<button className="btn newgroup_create btn-block d-block w-100" type="submit">Create Account</button>
		                                    </div>
		                                </div>
									
									<div className="text-center dont-have">Already have an Account?  <a href="/template2-rtl/login-mobile">Login</a></div>
									</form>
								</div>
								<div className="back-btn-col text-center">
									<a href="/template2-rtl/"><span><i className="fas fa-caret-left"></i></span> Back</a>
								</div>
							</div>
						</div>
						<div className="login-right signup-bg">
						</div>
					</div>
	            </div>
            </div>
  		)
  	}
 }

 export {Signupemobile};