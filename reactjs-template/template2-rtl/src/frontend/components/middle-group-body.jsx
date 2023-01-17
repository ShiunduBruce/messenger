import React,{ Component } from 'react';
import $ from "jquery";
import { Button, Modal, Dropdown, DropdownItem, Tabs } from "react-bootstrap";

import Avatar1 from '../assets/img/avatar/avatar-1.jpg';
import Avatar2 from '../assets/img/avatar/avatar-2.jpg';
import Avatar6 from '../assets/img/avatar/avatar-6.jpg';
import Avatar8 from '../assets/img/avatar/avatar-8.jpg';
import Avatar12 from '../assets/img/avatar/avatar-12.jpg';
import Chatdownloadimg from '../assets/img/chat-download.jpg';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faVideo, faUser, faEllipsisH, faClock, faArchive, faTrashAlt, faCopy, faShare, faCloudDownloadAlt, faPaperclip } from '@fortawesome/fontawesome-free-solid';
import { faFileArchive, faSmile } from '@fortawesome/fontawesome-free-regular';

class Middlegroupbody extends Component {
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
			<div className="chat" id="middle">
                <div className="slimscroll">
                    <div className="chat-header">
                        <div className="user-details">
                            <div className="d-lg-none mr-2">
                                <ul className="list-inline mt-2 mr-2">
                                    <li className="list-inline-item">
                                        <a className="text-muted px-0 left_side" href="#" data-chat="open">
                                            <i className="fas fa-arrow-left"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <figure className="avatar mr-1">
                                <img src={Avatar12} className="rounded-circle" alt="image" />
                            </figure>
                            <div className="mt-1">
                                <h5>#Tech Support</h5>
                                <small className="online">
                                    View Group Info
                                </small>
                            </div>
                        </div>
                        <div className="avatar-group">
                            <div className="avatar avatar-xs group_img group_header">
                                <img className="avatar-img rounded-circle" alt="User Image" src={Avatar6} />
                            </div>
                            <div className="avatar avatar-xs group_img group_header">
                                <img className="avatar-img rounded-circle" alt="User Image" src={Avatar1} />
                            </div>
                            <div className="avatar avatar-xs group_img group_header">
                                <img className="avatar-img rounded-circle" alt="User Image" src={Avatar2} />
                            </div>
                            <div className="avatar avatar-xs group_img group_header">
                                <span className="avatar-title rounded-circle">+35</span>
                            </div>
                        </div>
                        <div className="chat-options">
                            <ul className="list-inline">
                                <li className="list-inline-item" data-toggle="tooltip" title=""
                                    data-original-title="Search">
                                    <a href="#" className="btn btn-outline-light chat-search-btn" >
                                        <i className="fas fa-search"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item" data-toggle="tooltip">
                                    <a href="#" className="btn btn-outline-light" onClick={() => this.handleShow('voicecall')}>
                                        <i className="fas fa-phone-alt voice_chat_phone"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item" data-toggle="tooltip" title=""
                                    data-original-title="Video call">
                                    <a href="#" className="btn btn-outline-light" onClick={() => this.handleShow('videocall')}>
                                        <i className="fas fa-video"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item dream_profile_menu" data-toggle="tooltip" title=""
                                    data-original-title="Profile">
                                    <a href="#" className="btn btn-outline-light">
                                        <i className="fas fa-user"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <Dropdown>
									  	<Dropdown.Toggle>
									    	<a className="btn btn-outline-light no-bg" href="#" data-toggle="dropdown">
                                        		<i className="fas fa-ellipsis-h"></i>
                                    		</a>
									  	</Dropdown.Toggle>
									  	<Dropdown.Menu>
									    	<Dropdown.Item href="/archieve">Archieve <span className="edit-profile-icon"><i className="fas fa-archive"></i></span></Dropdown.Item>
									    	<Dropdown.Item href="#">Muted <span className="material-icons">volume_off</span></Dropdown.Item>
									    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
									  	</Dropdown.Menu>
									</Dropdown>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="chat-search">
                            <form>
                                <span className="fas fa-search form-control-feedback"></span>
                                <input type="text" name="chat-search" placeholder="Search Chats" className="form-control" />
                                <div className="close-btn-chat"><span className="material-icons">close</span></div>
                            </form>
                        </div>
       
                    </div>
                    <div className="chat-body">
                        <div className="messages">
                            <div className="chats">
                                <div className="chat-avatar">
                                    <img src={Avatar8} className="rounded-circle dreams_chat" alt="image" />
                                </div>
                                <div className="chat-content">
                                    <div className="message-content">
                                        Hi James! What’s Up?
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
                                <div className="chat-action-btns mr-3">
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
                                        Good morning, How are you? What about our next meeting?
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
                                <div className="chat-action-btns ml-2">
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
                                        & Next meeting tomorrow 10.00AM
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><i className="fas fa-clock"></i>  10:06</div>
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
                            <div className="chat-line">
                                <span className="chat-date">Today</span>
                            </div>
                            <div className="chats chats-right">
                                <div className="chat-content">
                                    <div className="message-content">
                                        Wow Thats Great
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><i className="fas fa-clock"></i> 10:02</div>
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
                                <div className="chat-action-btns ml-2">
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
                                        <div className="download-col">
                                            <ul>
                                                <li>
                                                    <div className="image-download-col">
                                                        <a href={Chatdownloadimg} data-fancybox="gallery" className="fancybox">
                                                            <img src={Chatdownloadimg} alt="" />
                                                        </a>
                                                        <div className="download-action d-flex align-items-center">
                                                            <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                                            <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image-download-col image-not-download">
                                                        <a href={Chatdownloadimg} data-fancybox="gallery" className="fancybox">
                                                            <img src={Chatdownloadimg} alt="" />
                                                        </a>
                                                        <div className="download-action d-flex align-items-center">
                                                            <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                                            <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image-download-col image-not-download">
                                                        <a href={Chatdownloadimg} data-fancybox="gallery" className="fancybox">
                                                            <img src={Chatdownloadimg} alt="" />
                                                        </a>
                                                        <div className="download-action d-flex align-items-center">
                                                            <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                                            <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
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
                                        <div className="file-download d-flex align-items-center">
                                            <div className="file-type d-flex align-items-center justify-content-center ml-2">
                                                <i className="far fa-file-archive"></i>
                                            </div>
                                            <div className="file-details">
                                                <span className="file-name">filename.zip</span>
                                                <span className="file-size">10.6MB</span>
                                            </div>
                                            <div className="download-action d-flex align-items-center">
                                                <div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
                                                <div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
                                            </div>
                                        </div>
                                        <div className="chat-time">
                                            <div>
                                                <div className="time"><i className="fas fa-clock"></i> 10:02</div>
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
                                <div className="chat-action-btns ml-2">
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
                <div className="chat-footer">
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

                <Modal show={this.state.show == 'voicecall'} onHide={this.handleClose} animation={true} size="md" centered className="shadow-lg">
                    <Modal.Body>
                        <div className="voice_body">
                            <div className="call-box incoming-box">
                                <div className="call-wrapper">
                                    <div className="call-inner">
                                        <div className="call-user">
                                            <img alt="User Image" src={Avatar8} className="call-avatar" />
                                            <h4>Brietta Blogg <span>Voice calling</span>
                                            </h4>
                                        </div>
                                        <div className="call-items">
                                            <a href="#" className="btn call-item call-end" onClick={() => this.setState({ show: false })}>
                                                <span className="material-icons">close</span>
                                            </a>
                                            <a href="#" className="btn call-item call-start" onClick={() => this.setState({ show: false })}>
                                                <i className="fas fa-video"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>    
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.show == 'videocall'} onHide={this.handleClose} animation={true} size="md" centered className="shadow-lg">
                    <Modal.Body>
                        <div className="voice_body">
                            <div className="call-box incoming-box">
                                <div className="call-wrapper">
                                    <div className="call-inner">
                                        <div className="call-user">
                                            <img alt="User Image" src={Avatar8} className="call-avatar" />
                                            <h4>Brietta Blogg <span>video calling</span>
                                            </h4>
                                        </div>
                                        <div className="call-items">
                                            <a href="#" className="btn call-item call-end" onClick={() => this.setState({ show: false })}>
                                                <span className="material-icons">close</span>
                                            </a>
                                            <a href="#" className="btn call-item call-start" onClick={() => this.setState({ show: false })}>
                                                <i className="fas fa-video"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>    
                    </Modal.Body>
                </Modal>

            </div>
    	)
    }
}

export default Middlegroupbody;