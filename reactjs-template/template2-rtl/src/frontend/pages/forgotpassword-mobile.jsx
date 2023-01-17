import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import { Button, Modal, Dropdown, DropdownItem, Tabs } from "react-bootstrap";

import LogoFull from '../assets/img/logo-full.png';

class Forgotpasswordmobile extends Component {
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
									<a href="/template2-rtl/">
	                                    <img src={LogoFull} alt="" />
	                                </a>
								</div>
								<div className="form-col">
									<div className="login-text-details">
										<h3>Forgot Password</h3>
										<p>Confirm your Phone number and enter the OTP to send to your Registered Mobile Number</p>
									</div>
									<form action="/template2-rtl/login-email">
										<div className="form-group">
											<label>Phone Number</label>
											<input className="form-control form-control-lg group_formcontrol" name="mobile" type="text" />
										</div>
										<div className="form-group">
											<label className="custom-check d-flex flex-wrap pl-0 mt-3">
												Didnt recieve OTP ?  <a href="#" className="ml-1" onClick={() => this.handleShow('Otpsuccess')}> Resend OTP.</a>
											</label>
										</div>
										<div className="pt-3">
											<div className="text-center">
												<button className="btn newgroup_create btn-block d-block w-100" type="submit">Reset Password</button>
											</div>
										</div>
									</form>
								</div>
								<div className="back-btn-col text-center">
								<a href="/template2-rtl/forgotpassword-email"><span><i className="fas fa-caret-left"></i></span> Back</a>
							</div>
							</div>
						</div>
						<div className="login-right  otp-bg">
						</div>
					</div>
	            </div>

	            <Modal show={this.state.show == 'Otpsuccess'} onHide={this.handleClose} animation={true} size="md" centered className="shadow-lg">
                    <Modal.Body>
                        <div className="success-icon text-center">
							<i className="fas fa-check mb-3"></i>
							<p>OTP Sent to the Registered Email id</p>
						</div> 
						<div className="modal-close text-right">
							<div className="close-modal" onClick={() => this.setState({ show: false })}>
								<span>close</span>
							</div>
						</div>
                    </Modal.Body>
                </Modal>

            </div>
  		)
  	}
 }

 export {Forgotpasswordmobile};