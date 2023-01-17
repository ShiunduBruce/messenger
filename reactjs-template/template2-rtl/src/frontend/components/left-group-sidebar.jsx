import React,{ Component } from 'react';
import $ from "jquery";
import { Button, Modal, Dropdown, DropdownItem, Tabs } from "react-bootstrap";

import Avatar1 from '../assets/img/avatar/avatar-1.jpg';
import Avatar2 from '../assets/img/avatar/avatar-2.jpg';
import Avatar3 from '../assets/img/avatar/avatar-3.jpg';
import Avatar4 from '../assets/img/avatar/avatar-4.jpg';
import Avatar5 from '../assets/img/avatar/avatar-5.jpg';
import Avatar6 from '../assets/img/avatar/avatar-6.jpg';
import Avatar7 from '../assets/img/avatar/avatar-7.jpg';
import Avatar8 from '../assets/img/avatar/avatar-8.jpg';
import Avatar9 from '../assets/img/avatar/avatar-9.jpg';
import Avatar10 from '../assets/img/avatar/avatar-10.jpg';
import Avatar11 from '../assets/img/avatar/avatar-11.jpg';
import Avatar12 from '../assets/img/avatar/avatar-12.jpg';
import Avatar13 from '../assets/img/avatar/avatar-13.jpg';
import Group1 from '../assets/img/group-1.jpg';
import Group2 from '../assets/img/group-2.jpg';
import Group3 from '../assets/img/group-3.jpg';
import Group4 from '../assets/img/group-4.jpg';
import Group5 from '../assets/img/group-5.jpg';


import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faSearch } from '@fortawesome/fontawesome-free-solid';
import { faMoon } from '@fortawesome/fontawesome-free-regular';

import Topactivemember from './slider/top-active-members.jsx';

class Leftgroupsidebar extends Component {
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
     	 	<div className="sidebar-group left-sidebar chat_sidebar">

                <div id="chats" className="left-sidebar-wrap sidebar active">

                    <div className="slimscroll">
                       <div className="left-chat-title d-flex justify-content-between align-items-center">
                            <div className="chat-title">
                                <h4>GROUP CHAT</h4>
                            </div>
                            <div className="add-section">
                                <ul>
                                     <li><a href="#" onClick={() => this.handleShow('AddNewGroup')}><span className="material-icons group-add-btn">group_add</span></a></li>
                                </ul>
                            </div>
                       </div>

                        <div className="search_chat has-search mb-0">
                            <span className="fas fa-search form-control-feedback"></span>
                            <input className="form-control chat_input" id="search-contacts" type="text" placeholder="Search Contacts" />
                        </div>

                        <div className="sidebar-body" id="chatsidebar">
                           
                            <div className="left-chat-title d-flex justify-content-between align-items-center pl-0 pr-0">
                                <div className="chat-title">
                                    <h4>Recent Chats</h4>
                                </div>
                            </div>

                            <ul className="user-list mt-2">
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src={Group4} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Fashion Plus <span className="ml-1"><span className="material-icons lock-icon">lock</span></span></h5>
                                            <p><strong>Moein</strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">20 Min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Avatar12} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Tech Support</h5>
                                            <p><strong>Haidar</strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">Yesterday</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Group3} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Home Decor </h5>
                                            <p><strong>Jonathan</strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">20 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Avatar3} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Interior Design </h5>
                                            <p><strong>Judy  </strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">20 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Group1} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Photography </h5>
                                            <p><strong>Degregorio</strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">20 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Group5} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Interiors </h5>
                                            <p><strong>Jean </strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">20 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Avatar6} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Inspiration </h5>
                                            <p><strong>Burns</strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">20 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Group2} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Artwork </h5>
                                            <p><strong>Josh </strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">20 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Avatar8} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Handmade </h5>
                                            <p><strong>Susan </strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">20 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Avatar9} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>#Design Inspiration</h5>
                                            <p><strong>Johnson</strong> : Hi!!!</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">20 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

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

export default Leftgroupsidebar;