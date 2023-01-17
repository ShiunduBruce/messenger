import React,{ Component } from 'react';
import $ from "jquery";
import { Button, Modal, Dropdown, DropdownItem, Tabs } from "react-bootstrap";

import Logo from '../assets/img/logo.png';
import Avatar1 from '../assets/img/avatar/avatar-1.jpg';
import Avatar2 from '../assets/img/avatar/avatar-2.jpg';
import Avatar3 from '../assets/img/avatar/avatar-3.jpg';
import Avatar4 from '../assets/img/avatar/avatar-4.jpg';
import Avatar13 from '../assets/img/avatar/avatar-13.jpg';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faIdCard } from '@fortawesome/fontawesome-free-solid';
import { faMoon } from '@fortawesome/fontawesome-free-regular';

class Leftsidebar extends Component {
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
    		<div>
	     	 	<div className="sidebar-menu">
	                <div className="logo-col">
	                    <a href="/template2-rtl/"><img src={Logo} alt="" /></a>
	                </div>
	                <div className="menus-col">
	                    <div className="chat-menus">
	                        <ul>
	                            <li>
	                                <a href="/template2-rtl/" className="chat-unread blue">
	                                    <span className="material-icons">message</span>
	                                    <span>Chats</span>
	                                </a>
	                            </li>
	                            <li>
	                                <a href="/template2-rtl/group" className="chat-unread pink">
	                                    <span className="material-icons">group</span>
	                                    <span>Groups</span>
	                                </a>
	                            </li>
	                            <li>
	                                <a href="template2-rtl/status" className="chat-unread">
	                                    <span className="material-icons">library_books</span>
	                                    <span>Status</span>
	                                </a>
	                            </li>
	                            <li>
	                                <a href="/template2-rtl/audio-call" className="chat-unread">
	                                    <span className="material-icons">call</span>
	                                    <span>Calls</span>
	                                </a>
	                            </li>
	                            <li>
	                                <a href="/template2-rtl/settings" className="chat-unread">
	                                    <span className="material-icons">settings</span>
	                                    <span>Settings</span>
	                                </a>
	                            </li>
	                        </ul>
	                    </div>
	                    <div className="bottom-menus">
	                        <ul>
	                            <li>
	                                <a href="#" onClick={() => this.handleShow('AddNewGroup')}>
	                                    <span className="material-icons group-add-btn">group_add</span>
	                                    <span>Add Groups</span>
	                                </a>
	                            </li>
	                            <li>
	                                <a href="#" onClick={() => this.handleShow('Addfriends')} className="add-contacts-btn">
	                                    <i className="fas fa-plus"></i>
	                                    <span>Add Contacts</span>
	                                </a>
	                            </li>
	                            <li>
	                                <a href="#" id="dark-mode-toggle" className="dark-mode-toggle">
	                                    <i className="far fa-moon"></i>
	                                </a>
	                            </li>
	                            <li>
	                                <Dropdown>
									  	<Dropdown.Toggle>
									    	<a href="#" className="chat-profile-icon" data-toggle="dropdown">
	                                    		<img src={Avatar13} alt="" />
	                                		</a>
									  	</Dropdown.Toggle>
									  	<Dropdown.Menu>
									    	<Dropdown.Item href="#">Edit Profile <span className="edit-profile-icon"><i className="fas fa-edit"></i></span></Dropdown.Item>
									    	<Dropdown.Item href="#">Profile <span className="profile-icon-col"><i className="fas fa-id-card-alt"></i></span></Dropdown.Item>
									    	<Dropdown.Item href="/settings">Settings <span className="material-icons">settings</span></Dropdown.Item>
									    	<Dropdown.Item href="/login-email">Logout <span className="material-icons">power_settings_new</span></Dropdown.Item>
									  	</Dropdown.Menu>
									</Dropdown>
                    			</li>
	                        </ul>
	                    </div>
	                </div>
	            </div>

                <Modal show={this.state.show == 'Addfriends'} onHide={this.handleClose} animation={true} size="md" centered className="shadow-lg">
	          		<Modal.Header>
		              	<h5 className="modal-title">
							<span className="material-icons">person_add</span>Add Friends
                        </h5>
                        <button type="button" className="close" onClick={() => this.setState({ show: false })}>
                            <span className="material-icons">close</span>
                        </button>
	          		</Modal.Header>
			        <Modal.Body className="">
			            <form action="new-friends">
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Nickname</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" />
                            </div>
                        </form>
                        <div className="form-row profile_form text-right float-right m-0 align-items-center">
                            <div className="cancel-btn ml-4">
                                <a href="#" onClick={() => this.setState({ show: false })}>Cancel</a>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-block newgroup_create mb-0" onClick={() => this.setState({ show: false })}>
                                    Add to contacts
                                </button>
                            </div>
                        </div> 
			        </Modal.Body>
	        	</Modal>

                <Modal show={this.state.show == 'AddNewGroup'} onHide={this.handleClose} animation={true} size="md" centered className="shadow-lg">
                    <Modal.Header>
                        <h5 className="modal-title">
                            <span className="material-icons group-add-btn">group_add</span> Create a New Group
                        </h5>
                        <button type="button" className="close" onClick={() => this.setState({ show: false })}>
                            <span className="material-icons">close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                         <form action="new-friends">
                            <div className="form-group">
                                <label>Group Name</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Choose profile picture</label>
                                <div className="custom-input-file form-control form-control-lg group_formcontrol">
                                    <input type="file" className="" />
                                    <span className="browse-btn">Browse File</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Topic (optional)</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control form-control-lg group_formcontrol"></textarea>
                            </div>
                            <div className="form-group">
                                <div className="d-flex align-items-center">
                                    <label className="custom-radio mr-3">Private Group
                                        <input type="radio" checked="checked" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="custom-radio">Public Group
                                      <input type="radio" name="radio" />
                                      <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="form-row profile_form text-right float-right m-0 align-items-center">
                            <div className="cancel-btn ml-4">
                                <a href="#" data-dismiss="modal" onClick={() => this.setState({ show: false })}>Cancel</a>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-block newgroup_create mb-0" onClick={() => this.handleShow('AddGroupMembers')}>
                                    Add Participants
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

	        	<Modal show={this.state.show == 'AddGroupMembers'} onHide={this.handleClose} animation={true} size="md" centered className="shadow-lg">
                    <Modal.Header>
                        <h5 className="modal-title">
                            <span className="material-icons group-add-btn">group_add</span> Add Group Members
                        </h5>
                        <button type="button" className="close" onClick={() => this.setState({ show: false })}>
                            <span className="material-icons">close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="search_chat has-search mr-0 ml-0">
                            <span className="fas fa-search form-control-feedback"></span>
                            <input className="form-control chat_input" id="search-contacts" type="text" placeholder="Search Contacts" />
                        </div>
                        <div className="sidebar">
                            <span className="contact-name-letter">A</span>
                            <ul className="user-list mt-2">
                                <li className="user-list-item">
                                    <div className="avatar avatar-online">
                                        <img src={Avatar1} className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Albert Rodarte</h5>
                                        </div>
                                        <div className="last-chat-time">
                                            <label className="custom-check">
                                                <input type="checkbox" checked="checked" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>    
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div className="avatar avatar-online">
                                        <img src={Avatar2} className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Allison Etter</h5>
                                        </div>
                                        <div className="last-chat-time">
                                            <label className="custom-check">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>    
                                    </div>
                                </li>
                            </ul>
                            <span className="contact-name-letter mt-3">C</span>
                            <ul className="user-list mt-2">
                                <li className="user-list-item">
                                    <div className="avatar avatar-online">
                                        <img src={Avatar3} className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Craig Smiley</h5>
                                        </div>
                                        <div className="last-chat-time">
                                            <label className="custom-check">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>    
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div className="avatar avatar-online">
                                        <img src={Avatar4} className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="users-list-body align-items-center">
                                        <div>
                                            <h5>Caniel Clay</h5>
                                        </div>
                                        <div className="last-chat-time">
                                            <label className="custom-check">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                            </label>
                                        </div>    
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="form-row profile_form text-right float-right m-0 mt-3 align-items-center">
                            <div className="cancel-btn ml-3">
                                <a href="#" onClick={() => this.setState({ show: false })}>Cancel</a>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-block newgroup_create previous mb-0 ml-3" onClick={() => this.handleShow('AddNewGroup')}>
                                    Previous
                                </button>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-block newgroup_create mb-0" onClick={() => this.setState({ show: false })}>
                                    Create Group
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

    		</div>
    	)
    }
}

export default Leftsidebar;