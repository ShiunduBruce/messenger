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

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faSearch } from '@fortawesome/fontawesome-free-solid';
import { faMoon } from '@fortawesome/fontawesome-free-regular';

import Topactivemember from './slider/top-active-members.jsx';

class Leftchatsidebar extends Component {
	constructor(props) {
    	super(props);
		this.state = {
		    show: false,
		    close: false,
		};
  	}
  	render() {
  		return (
     	 	<div className="sidebar-group left-sidebar chat_sidebar">

                <div id="chats" className="left-sidebar-wrap sidebar active">

                    <div className="slimscroll">
                       <div className="left-chat-title d-flex justify-content-between align-items-center">
                            <div className="chat-title">
                                <h4>CHATS</h4>
                            </div>
                            <div className="add-section">
                                <ul>
                                    <li><a href="/template2-rtl/group"><span className="material-icons">group</span></a></li>
                                    <li><a href="#" onClick={() => this.setState({ show: true })}><i className="fas fa-plus"></i></a></li>
                                </ul>
                            </div>
                       </div>

                        <div className="search_chat has-search">
                            <span className="fas fa-search form-control-feedback"></span>
                            <input className="form-control chat_input" id="search-contacts" type="text" placeholder="Search Contacts" />
                        </div>

                        <div className="top-online-contacts">
                        	<Topactivemember />
                        </div>

                        <div className="sidebar-body" id="chatsidebar">
                           
                            <div className="left-chat-title d-flex justify-content-between align-items-center pl-0 pr-0">
                                <div className="chat-title">
                                    <h4>Recent Chats</h4>
                                </div>
                                <div className="add-section">
                                    <a href="#"><i className="fas fa-edit"></i></a>
                                </div>
                            </div>

                            <ul className="user-list mt-2">
                                <li className="user-list-item">
                                    <div className="avatar avatar-online">
                                        <img src={Avatar8} className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>It seems logical that the</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">05 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>    
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src={Avatar9} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Forest Kroch</h5>
                                            <p>It seems logical that the</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">05 min</small>
                                            <div className="new-message-count">11</div>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item item-typing">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Avatar10} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p><span className="animate-typing-col">
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                    <span className="dot"></span>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">05 min</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <div className="letter-avatar">
                                                M
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Townsend Seary</h5>
                                            <p><span className="material-icons">insert_photo</span> Photo</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">45 min</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Avatar11} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Margaretta Worvell</h5>
                                            <p className="missed-call-col"><span className="material-icons">call_missed</span> Missed Call</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">52 min</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src={Avatar2} className="rounded-circle" alt="image" />
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
                                            <div className="letter-avatar">
                                                A
                                            </div>
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Harald Kowalski</h5>
                                            <p><span className="material-icons">videocam</span> It seems logical that the</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">Yesterday</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-away">
                                            <img src={Avatar12} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Alexandr Donnelly</h5>
                                            <p><span className="material-icons">settings_voice</span> 0.25</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">Yesterday</small>
                                        </div>
                                    </div>
                                </li>
                                <li className="user-list-item">
                                    <div>
                                        <div className="avatar avatar-online">
                                            <img src={Avatar4} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>It seems logical that the</p>
                                        </div>
                                        <div className="last-chat-time">
                                            <small className="text-muted">Yesterday</small>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

        		<Modal show={this.state.show} animation={true} size="md" centered className="shadow-lg">
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
                                <label>User Name</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" />
                            </div>
                        </form>
                        <div className="form-row profile_form text-right float-right m-0 align-items-center">
                            <div className="cancel-btn ml-4">
                                <a href="#" onClick={() => this.setState({ show: false })}>Cancel</a>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-block newgroup_create mb-0" onClick={() => this.setState({ show: false })}>
                                    Add User
                                </button>
                            </div>
                        </div> 
			        </Modal.Body>
	        	</Modal>

        	</div>     	
    	)
    }
}

export default Leftchatsidebar;