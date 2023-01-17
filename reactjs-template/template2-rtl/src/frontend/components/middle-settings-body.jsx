import React,{ Component } from 'react';
import $ from "jquery";
import { Button, Modal, Dropdown, DropdownItem, Tab, Tabs } from "react-bootstrap";

class Middlesettingsbody extends Component {
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
			<div className="chat settings-main pt-2" id="middle">
                <div className="slimscroll">

                    <div className="page-header d-flex align-items-center">
                        <div className="mr-3 d-md-block d-lg-none">
                            <a className="text-muted px-0 left_side" href="#">
                                <i className="fas fa-arrow-left"></i>
                            </a>
                        </div>
                        <div>
                            <h5>SETTINGS</h5>
                            <p>Last Update your profile: 29 Aug 2020</p>
                        </div>
                    </div>

                    <div className="settings-tab my-4">
                        <Tabs activekey="GeneralSettings">
                            <Tab eventKey="GeneralSettings" title="General Settings">
                                <div className="settings-header">
                                    <h5>Account Settings</h5>
                                    <p>Update your account details</p>
                                </div>
                                <div className="settings-control p-3">
                                    <div className="form-col form-body">
                                        <form action="/">
                                            <div className="row">
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="form-group">
                                                        <label>First Name</label>
                                                        <input className="form-control form-control-lg group_formcontrol" name="first-name" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="form-group">
                                                        <label>Last Name</label>
                                                        <input className="form-control form-control-lg group_formcontrol" name="last-name" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="form-group">
                                                        <label>Phone Number</label>
                                                        <input className="form-control form-control-lg group_formcontrol" name="phone-number" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="form-group">
                                                        <label>Nick name <span className="">(Optional)</span></label>
                                                        <input className="form-control form-control-lg group_formcontrol" name="nick-name" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="form-group">
                                                        <label>Choose profile picture</label>
                                                        <div className="custom-input-file form-control form-control-lg group_formcontrol">
                                                            <input type="file" className="" />
                                                            <span className="browse-btn">Browse File</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-xl-4">
                                                    <div className="form-group">
                                                        <label>Location</label>
                                                        <input className="form-control form-control-lg group_formcontrol" name="location" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12 col-xl-12">
                                                    <div className="form-group">
                                                        <label>Bio</label>
                                                        <textarea className="form-control form-control-lg group_formcontrol"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <hr />
                                    <div className="social-settings">
                                        <h4>Social Links</h4>
                                        <div className="form-col form-body">
                                            <form action="/">
                                                <div className="row">
                                                    <div className="col-md-6 col-xl-4">
                                                        <div className="form-group">
                                                            <input className="form-control form-control-lg group_formcontrol" name="facebook" type="text" placeholder="Facebook Link" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4">
                                                        <div className="form-group">
                                                            <input className="form-control form-control-lg group_formcontrol" name="twitter" type="text" placeholder="Twitter Link" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4">
                                                        <div className="form-group">
                                                            <input className="form-control form-control-lg group_formcontrol" name="instagram" type="text" placeholder="Instagram Link" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4">
                                                        <div className="form-group">
                                                            <input className="form-control form-control-lg group_formcontrol" name="linkedin" type="text" placeholder="Linkedin Link" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-xl-4">
                                                        <div className="form-group">
                                                            <input className="form-control form-control-lg group_formcontrol" name="youtube" type="text" placeholder="Youtube Link" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-row profile_form m-0 align-items-center">
                                                    <div className="mr-4">
                                                        <button type="button" className="btn btn-update  mb-0">
                                                        Update Details
                                                        </button>
                                                    </div>
                                                    <div className="cancel-btn">
                                                        <a href="#" data-dismiss="modal" aria-label="Close">Cancel</a>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="settings-delete mt-4">
                                        <div className="row align-items-center justify-content-between">
                                            <div className="col-md-8">
                                                <h5>Delete your account</h5>
                                                <p>Please note, deleting your account is a permanent action and will no be recoverable once completed.</p>
                                            </div>
                                            <div className="col-md-4">
                                                <button type="button" className="btn btn-delete  mb-0" onClick={() => this.handleShow('Deleteaccount')}>
                                                Delete Account
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="notifications" title="Notification">
                                <div className="settings-header">
                                    <h5>Notifications</h5>
                                    <p>Update your account Notifications</p>
                                </div>
                                <div className="settings-control full-options">
                                    <ul>
                                        <li className="d-flex align-items-center">
                                            <label className="switch mr-3">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                            </label>
                                            <div>
                                                <span>Allow mobile notifications</span>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <label className="switch mr-3">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                            </label>
                                            <div>
                                                <span>Notifications from your friends</span>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <label className="switch mr-3">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                            </label>
                                            <div>
                                                <span>Send notifications by email</span>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <label className="switch mr-3">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                            </label>
                                            <div>
                                                <span>Allow connected contacts</span>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <label className="switch mr-3">
                                            <input type="checkbox" checked="" />
                                            <span className="slider round"></span>
                                            </label>
                                            <div>
                                                <span>Confirm message requests</span>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <label className="switch mr-3">
                                            <input type="checkbox" />
                                            <span className="slider round"></span>
                                            </label>
                                            <div>
                                                <span>Profile privacy</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </Tab>
                            <Tab eventKey="DeviceHistory" title="Device History">
                                <div className="settings-header">
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h5>Device History</h5>
                                            <p>If you see a device here that you believe wasn’t you, please contact our account fraud department immediately.</p>
                                        </div>
                                        <div className="col-md-4 text-md-right">
                                            <button className="btn logout-btn">Log out all Devices</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="logged-devices-settings">
                                    <div className="logged-device align-items-center d-flex">
                                        <div className="device-details">
                                            <h5>IPhone 11</h5>
                                            <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                        </div>
                                        <div className="logged-btn ml-auto">
                                            <a href="#">Sign Out</a>
                                        </div>
                                    </div>
                                    <div className="logged-device align-items-center d-flex">
                                        <div className="device-details">
                                            <h5>IMac OSX · Safari 10.2</h5>
                                            <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                        </div>
                                        <div className="logged-btn ml-auto">
                                            <a href="#">Sign Out</a>
                                        </div>
                                    </div>
                                    <div className="logged-device align-items-center d-flex">
                                        <div className="device-details">
                                            <h5>HP Laptop Win10</h5>
                                            <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                        </div>
                                        <div className="logged-btn ml-auto">
                                            <a href="#">Sign Out</a>
                                        </div>
                                    </div>
                                    <div className="logged-device align-items-center d-flex">
                                        <div className="device-details">
                                            <h5>IMac OSX · Edge browser</h5>
                                            <p>Brownsville, VT · Jun 11 at 10:05am</p>
                                        </div>
                                        <div className="logged-btn ml-auto">
                                            <a href="#">Sign Out</a>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey="security" title="Security">
                                <div className="settings-header">
                                    <div className="row align-items-center">
                                        <div className="col-md-8">
                                            <h5>Change your password</h5>
                                            <p>We will email you a confirmation when changing your password, so please expect that email after submitting.</p>
                                        </div>
                                        <div className="col-md-4 text-md-right">
                                            <button className="btn logout-btn">Forgot password</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="security-settings">
                                    <div className="password-updation">
                                        <div className="row">
                                            <div className="col-xl-4">
                                                <div className="form-col form-body">
                                                    <form action="/">
                                                        <div className="form-group">
                                                            <label>Current password</label>
                                                            <input className="form-control form-control-lg group_formcontrol" name="current-password" type="password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>New password</label>
                                                            <input className="form-control form-control-lg group_formcontrol" name="new-password" type="password" />
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirm password</label>
                                                            <input className="form-control form-control-lg group_formcontrol" name="confirm-password" type="password" />
                                                        </div>
                                                        <div className="form-row profile_form m-0 align-items-center">
                                                            <div className="mr-4">
                                                                <button type="button" className="btn btn-update  mb-0">
                                                                Update Password
                                                                </button>
                                                            </div>
                                                            <div className="cancel-btn">
                                                                <a href="#" data-dismiss="modal" aria-label="Close">Cancel</a>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="col-xl-8">
                                                <div className="requirment-card">
                                                    <h4>Password requirements</h4>
                                                    <p className="py-3 mb-0">To create a new password, you have to meet all of the following requirements:</p>
                                                    <div className="requirements-list">
                                                        <p>Minimum 8 character</p>
                                                        <p>At least one special character</p>
                                                        <p>At least one number</p>
                                                        <p>Can’t be the same as a previous password</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="authentication">
                                        <h4>Two Factor Authentication</h4>
                                        <div className="align-items-center">
                                            <label className="custom-radio mr-2">Password <br /> <span><a href="#"  onClick={() => this.handleShow('passwordauthentication')}>edit</a></span>
                                            <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                            <label className="custom-radio mr-2">Sequrity Question <br /> <span><a href="#"  onClick={() => this.handleShow('Questionauthentication')}>edit</a></span>
                                            <input type="radio" name="radio" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>

                </div>

                <Modal show={this.state.show == 'Deleteaccount'} onHide={this.handleClose} size="md" centered className="shadow-lg">
                    <Modal.Header>
                        <h5 className="modal-title">
                            Delete Account
                        </h5>
                        <button type="button" className="close" onClick={() => this.setState({ show: false })}>
                            <span className="material-icons">close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body className="">
                        <div className="success-icon delete-tab text-center">
                            <p>Are you sure want to delete account?</p>
                            <div className="text-center">
                                <a href="#"><i className="fas fa-check mr-2"></i></a>
                                <a href="#"><i className="fas fa-times close-icon"></i></a>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.show == 'passwordauthentication'} onHide={this.handleClose} size="md" centered className="shadow-lg">
                    <Modal.Header>
                        <h5 className="modal-title">
                            Two way Authentication - Password  
                        </h5>
                        <button type="button" className="close" onClick={() => this.setState({ show: false })}>
                            <span className="material-icons">close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body className="">
                        <form action="new-friends">
                            <div className="form-group">
                                <label>Password</label>
                                <input className="form-control form-control-lg group_formcontrol" name="password" type="password" />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input className="form-control form-control-lg group_formcontrol" name="confirm-password" type="password" />
                            </div>
                        </form>
                        <div className="form-row profile_form text-right float-right m-0 align-items-center">
                            <div className="cancel-btn ml-4">
                                <a href="#" onClick={() => this.setState({ show: false })}>Cancel</a>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-block newgroup_create mb-0" onClick={() => this.setState({ show: false })}> 
                                Save Password
                                </button>
                            </div>
                        </div> 
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.show == 'Questionauthentication'} onHide={this.handleClose} size="md" centered className="shadow-lg">
                    <Modal.Header>
                        <h5 className="modal-title">
                            Two way Authentication - Question  
                        </h5>
                        <button type="button" className="close" onClick={() => this.setState({ show: false })}>
                            <span className="material-icons">close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body className="">
                        <form action="new-friends">
                            <div className="form-group">
                                <label>Question 1</label>
                                <input className="form-control form-control-lg group_formcontrol" name="question1" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Answer 1</label>
                                <input className="form-control form-control-lg group_formcontrol" name="answer1" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Question 2</label>
                                <input className="form-control form-control-lg group_formcontrol" name="question2" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Answer 2</label>
                                <input className="form-control form-control-lg group_formcontrol" name="answer2" type="text" />
                            </div>
                        </form>
                        <div className="form-row profile_form text-right float-right m-0 align-items-center">
                            <div className="cancel-btn ml-4">
                                <a href="#" onClick={() => this.setState({ show: false })}>Cancel</a>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-block newgroup_create mb-0" onClick={() => this.setState({ show: false })}> 
                                Save Password
                                </button>
                            </div>
                        </div> 
                    </Modal.Body>
                </Modal>

            </div>
    	)
    }
}

export default Middlesettingsbody;