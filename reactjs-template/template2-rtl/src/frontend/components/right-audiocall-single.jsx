import React,{ Component } from 'react';
import $ from "jquery";
import { Button, Modal, Dropdown, DropdownItem, Tabs } from "react-bootstrap";

import Avatar8 from '../assets/img/avatar/avatar-8.jpg';
import Avatar12 from '../assets/img/avatar/avatar-12.jpg';
import Chatdownloadimg from '../assets/img/chat-download.jpg';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faVideo, faUser, faEllipsisH, faClock, faArchive, faTrashAlt, faCopy, faShare, faCloudDownloadAlt, faPaperclip } from '@fortawesome/fontawesome-free-solid';
import { faFileArchive, faSmile } from '@fortawesome/fontawesome-free-regular';

class Rightaudiosinglesidebar extends Component {
  	render() {
  		return (
			<div className="right-sidebar right_sidebar_profile video-right-sidebar" id="middle1">
                <div className="chat p-0">
                    <div className="right-sidebar-wrap active">
                        <div className="slimscroll">
                            <div className="left-chat-title d-flex justify-content-between align-items-center p-3 with-bg">
                                <div className="chat-title">
                                    <h4>Chat</h4>
                                </div>
                                <div className="contact-close_call text-right">
                                    <a href="#"
                                        className="close_profile close_profile4">
                                        <span className="material-icons">close</span>
                                    </a>
                                </div>
                            </div>
                            <div className="chat-body pt-3">
                                <div className="messages">
		                            <div className="chats">
		                                <div className="chat-avatar">
		                                    <img src={Avatar8} className="rounded-circle dreams_chat" alt="image" />
		                                </div>
		                                <div className="chat-content">
		                                    <div className="message-content">
		                                        Good morning..... 
		                                        <div className="chat-time">
		                                            <div>
		                                                <div className="time"><i className="fas fa-clock"></i> 10:00</div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div className="chat-profile-name">
		                                        <h6>Doris Brown</h6>
		                                    </div>
		                                </div>
		                                <div className="chat-action-btns ml-3">
		                                    <div className="chat-action-col">
		                                        <Dropdown>
												  	<Dropdown.Toggle>
												    	<a className="#" href="#" data-toggle="dropdown">
		                                            		<i className="fas fa-ellipsis-h"></i>
		                                        		</a>
												  	</Dropdown.Toggle>
												  	<Dropdown.Menu>
												    	<Dropdown.Item href="#">Copy <span className="edit-profile-icon"><i className="far fa-copy"></i></span></Dropdown.Item>
												    	<Dropdown.Item href="#">Save <span className="material-icons">save</span></Dropdown.Item>
												    	<Dropdown.Item href="#">Forward <span><i className="fas fa-share"></i></span></Dropdown.Item>
												    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
												  	</Dropdown.Menu>
												</Dropdown>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="chats chats-right">
		                                <div className="chat-content">
		                                    <div className="message-content">
		                                        Wow Thats Great
		                                        <div className="chat-time">
		                                            <div>
		                                                <div className="time"><i className="fas fa-clock"></i> 10:00</div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div className="chat-profile-name text-right">
		                                        <h6>Alexandr</h6>
		                                    </div>
		                                </div>
		                                <div className="chat-avatar">
		                                    <img src={Avatar12} className="rounded-circle dreams_chat" alt="image" />
		                                </div>
		                                <div className="chat-action-btns mr-2">
		                                    <div className="chat-action-col">
		                                        <Dropdown>
												  	<Dropdown.Toggle>
												    	<a className="#" href="#" data-toggle="dropdown">
		                                            		<i className="fas fa-ellipsis-h"></i>
		                                        		</a>
												  	</Dropdown.Toggle>
												  	<Dropdown.Menu>
												    	<Dropdown.Item href="#">Copy <span className="edit-profile-icon"><i className="far fa-copy"></i></span></Dropdown.Item>
												    	<Dropdown.Item href="#">Save <span className="material-icons">save</span></Dropdown.Item>
												    	<Dropdown.Item href="#">Forward <span><i className="fas fa-share"></i></span></Dropdown.Item>
												    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
												  	</Dropdown.Menu>
												</Dropdown>
		                                    </div>
		                                    <div className="chat-read-col">
		                                        <span className="material-icons">done_all</span>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="chats">
		                                <div className="chat-avatar">
		                                    <img src={Avatar8} className="rounded-circle dreams_chat" alt="image" />
		                                </div>
		                                <div className="chat-content">
		                                    <div className="message-content">
		                                        Good morning..... 
		                                        <div className="chat-time">
		                                            <div>
		                                                <div className="time"><i className="fas fa-clock"></i> 10:00</div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div className="chat-profile-name">
		                                        <h6>Doris Brown</h6>
		                                    </div>
		                                </div>
		                                <div className="chat-action-btns ml-3">
		                                    <div className="chat-action-col">
		                                        <Dropdown>
												  	<Dropdown.Toggle>
												    	<a className="#" href="#" data-toggle="dropdown">
		                                            		<i className="fas fa-ellipsis-h"></i>
		                                        		</a>
												  	</Dropdown.Toggle>
												  	<Dropdown.Menu>
												    	<Dropdown.Item href="#">Copy <span className="edit-profile-icon"><i className="far fa-copy"></i></span></Dropdown.Item>
												    	<Dropdown.Item href="#">Save <span className="material-icons">save</span></Dropdown.Item>
												    	<Dropdown.Item href="#">Forward <span><i className="fas fa-share"></i></span></Dropdown.Item>
												    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
												  	</Dropdown.Menu>
												</Dropdown>
		                                    </div>
		                                </div>
		                            </div>
		                            <div className="chats chats-right">
		                                <div className="chat-content">
		                                    <div className="message-content">
		                                        Wow Thats Great
		                                        <div className="chat-time">
		                                            <div>
		                                                <div className="time"><i className="fas fa-clock"></i> 10:00</div>
		                                            </div>
		                                        </div>
		                                    </div>
		                                    <div className="chat-profile-name text-right">
		                                        <h6>Alexandr</h6>
		                                    </div>
		                                </div>
		                                <div className="chat-avatar">
		                                    <img src={Avatar12} className="rounded-circle dreams_chat" alt="image" />
		                                </div>
		                                <div className="chat-action-btns mr-2">
		                                    <div className="chat-action-col">
		                                        <Dropdown>
												  	<Dropdown.Toggle>
												    	<a className="#" href="#" data-toggle="dropdown">
		                                            		<i className="fas fa-ellipsis-h"></i>
		                                        		</a>
												  	</Dropdown.Toggle>
												  	<Dropdown.Menu>
												    	<Dropdown.Item href="#">Copy <span className="edit-profile-icon"><i className="far fa-copy"></i></span></Dropdown.Item>
												    	<Dropdown.Item href="#">Save <span className="material-icons">save</span></Dropdown.Item>
												    	<Dropdown.Item href="#">Forward <span><i className="fas fa-share"></i></span></Dropdown.Item>
												    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
												  	</Dropdown.Menu>
												</Dropdown>
		                                    </div>
		                                    <div className="chat-read-col">
		                                        <span className="material-icons">done_all</span>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
                            </div>
                        </div>
                        <div className="chat-footer pt-0">
		                    <form>
		                        <div className="smile-col">
		                            <a href="#"><i className="far fa-smile"></i></a>
		                        </div>
		                        <div className="attach-col">
		                            <a href="#"><i className="fas fa-paperclip"></i></a>
		                        </div>
		                        <input type="text" className="form-control chat_form" placeholder="Enter Message....." />
		                        <div className="form-buttons">
		                            <button className="btn send-btn" type="submit">
		                                <span className="material-icons">send</span>
		                            </button>
		                        </div>
		                        <div className="specker-col">
		                            <a href="#"><span className="material-icons">settings_voice</span></a>
		                        </div>
		                    </form>
		                </div>
                    </div>
                </div>
            </div>
    	)
    }
}

export default Rightaudiosinglesidebar;