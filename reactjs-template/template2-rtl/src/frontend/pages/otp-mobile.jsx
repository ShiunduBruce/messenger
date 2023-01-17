import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import { Button, Modal, Dropdown, DropdownItem, Tabs } from "react-bootstrap";

import LogoFull from '../assets/img/logo-full.png';

class Otpmobile extends Component {
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
										<h3>OTP VERIFICATION</h3>
										<p>Please Enter the OTP send to your Mobile Number</p>
									</div>
	                                <div className="otp-box">
			                        	<form method="get" className="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off" action="/reset-password">
											<input type="text" id="digit-1" name="digit-1" data-next="digit-2" maxlength="1" />
											<input type="text" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" maxlength="1" />
											<input type="text" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" maxlength="1" />
											<input type="text" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" maxlength="1" />
											<div className="form-group">
			                                	<label className="custom-check d-flex flex-wrap pl-0 mt-5">
			                                        Didnt recieve OTP ?  <a href="#" onClick={() => this.handleShow('Otpsuccess')}>Resend OTP.</a>
			                                    </label>
			                                </div>
											<div className="pt-1">
			                                	<div className="text-center">
			                                     	<button className="btn newgroup_create btn-block d-block w-100" type="submit">Login</button>
			                                    </div>
			                                </div>
										</form>
			                        </div>
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
							<p>OTP Sent to the Registered Mobile Number</p>
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

 export {Otpmobile};