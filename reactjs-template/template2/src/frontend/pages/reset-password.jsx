import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import { Button, Modal, Dropdown, DropdownItem, Tabs } from "react-bootstrap";

import LogoFull from '../assets/img/logo-full.png';

class Resetpassword extends Component {
	componentDidMount() {
		$('body').addClass('account-page');
	}
	constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          show: null
        };
    }
    handleClose() {
        this.setState({show: id});
    }
    handleShow(id) {
        this.setState({show: id});
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
										<h3>Reset Password</h3>
										<p>Enter the Credentials to Reset the Password</p>
									</div>
									<form action="/template2/">
		                                <div className="form-group">
		                                    <label>Old Password</label>
		                                    <input className="form-control form-control-lg group_formcontrol" name="old-password" type="password" />
		                                </div>
		                                <div className="form-group">
		                                    <label>New Password</label>
		                                    <input className="form-control form-control-lg group_formcontrol" name="new-password" type="password" />
		                                </div>
		                                <div className="form-group">
		                                    <label>Confirm Password</label>
		                                    <input className="form-control form-control-lg group_formcontrol" name="confirm-password" type="password" />
		                                </div>
		                                <div className="pt-1">
		                                	<div className="text-center">
		                                     	<button className="btn newgroup_create btn-block d-block w-100" type="submit">Login</button>
		                                    </div>
		                                </div>
									
									<div className="text-center dont-have">Do you have an Account? <a href="/template2/login-email">Login</a></div>
									</form>
								</div>
								<div className="back-btn-col text-center">
									<a href="/template2/otp-email"><span><i className="fas fa-caret-left"></i></span> Back</a>
								</div>
							</div>
						</div>
						<div className="login-right pwd-bg">
						</div>
					</div>
	            </div>

            </div>
  		)
  	}
 }

 export {Resetpassword};