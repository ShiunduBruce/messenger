import React,{ Component } from 'react';
import $ from "jquery";
import { Button, Modal, Dropdown, DropdownItem, Tab, Tabs } from "react-bootstrap";

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
import status1 from '../assets/img/status1.jpg';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPhone, faVideo, faUser, faEllipsisH, faClock, faArchive, faTrashAlt, faCopy, faShare, faCloudDownloadAlt, faPaperclip} from '@fortawesome/fontawesome-free-solid';
import { faFileArchive, faSmile } from '@fortawesome/fontawesome-free-regular';


class Leftcallsidebar extends Component {
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
                                <h4>CALLS</h4>
                            </div>
                       </div>

                        <div className="search_chat has-search mb-0">
                            <span className="fas fa-search form-control-feedback"></span>
                            <input className="form-control chat_input" id="search-contacts" type="text" placeholder="Search Contacts" />
                        </div>

                        <div className="sidebar-body" id="chatsidebar">
                           
                            <div className="left-chat-title d-flex justify-content-between align-items-center pl-0 pr-0">
                                <div className="chat-title">
                                    <h4>RECENT CALLS</h4>
                                </div>
                                <div className="add-section">
                                    <a href="#" onClick={() => this.handleShow('Addgroupcall')}><i className="fas fa-phone-alt"></i></a>
                                </div>
                            </div>

                            <div className="chat-scroll side_bar">
                                <Tabs activekey="AllCalls">
                                    <Tab eventKey="AllCalls" title="All Calls">
                                        <ul className="user-list mt-2">
                                            <li className="user-list-item">
                                                <div className="avatar avatar-online">
                                                    <img src={Avatar8} className="rounded-circle" alt="image" />
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>Just now</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_made</span>
                                                        <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-away">
                                                        <img src={Avatar9} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Forest Kroch</h5>
                                                        <p>9 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_received</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item item-typing">
                                                <div>
                                                    <div className="avatar avatar-online">
                                                        <img src={Avatar10} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 callmissed-icon">call_missed</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
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
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Townsend Seary</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_received</span>
                                                        <a href="/audiocall-group"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-online">
                                                        <img src={Avatar11} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Margaretta Worvell</h5>
                                                        <p>4 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_made</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-away">
                                                        <img src={Avatar2} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>#Tech Support</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_made</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
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
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Harald Kowalski</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 callmissed-icon">call_missed</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-away">
                                                        <img src={Avatar12} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Alexandr Donnelly</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_received</span>
                                                        <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-online">
                                                        <img src={Avatar4} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>8 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 callmissed-icon">call_missed</span>
                                                        <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab>
                                    <Tab eventKey="RecievedCalls" title="Recieved Calls">
                                        <ul className="user-list mt-2">
                                            <li className="user-list-item">
                                                <div className="avatar avatar-online">
                                                    <img src={Avatar8} className="rounded-circle" alt="image" />
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>Just now</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_made</span>
                                                        <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-online">
                                                        <img src={Avatar11} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Margaretta Worvell</h5>
                                                        <p>4 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_made</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-away">
                                                        <img src={Avatar2} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>#Tech Support</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_made</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-away">
                                                        <img src={Avatar9} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Forest Kroch</h5>
                                                        <p>9 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_made</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
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
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Townsend Seary</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_made</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-away">
                                                        <img src={Avatar12} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Alexandr Donnelly</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_made</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab>
                                    <Tab eventKey="IncomingCalls" title="Incoming Calls">
                                        <ul className="user-list mt-2">
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-away">
                                                        <img src={Avatar9} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Forest Kroch</h5>
                                                        <p>9 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_received</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
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
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Townsend Seary</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_received</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-away">
                                                        <img src={Avatar12} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Alexandr Donnelly</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_received</span>
                                                        <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item item-typing">
                                                <div>
                                                    <div className="avatar avatar-online">
                                                        <img src={Avatar10} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_received</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
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
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Harald Kowalski</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_received</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-online">
                                                        <img src={Avatar4} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>8 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 incoming-icon">call_received</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab>
                                    <Tab eventKey="MissedCalls" title="Missed Calls">
                                        <ul className="user-list mt-2">
                                            <li className="user-list-item item-typing">
                                                <div>
                                                    <div className="avatar avatar-online">
                                                        <img src={Avatar10} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 callmissed-icon">call_missed</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
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
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Harald Kowalski</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 callmissed-icon">call_missed</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-online">
                                                        <img src={Avatar4} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>8 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 callmissed-icon">call_missed</span>
                                                        <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div className="avatar avatar-online">
                                                    <img src={Avatar8} className="rounded-circle" alt="image" />
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>Just now</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 callmissed-icon">call_missed</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-online">
                                                        <img src={Avatar11} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Margaretta Worvell</h5>
                                                        <p>4 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 callmissed-icon">call_missed</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="user-list-item">
                                                <div>
                                                    <div className="avatar avatar-away">
                                                        <img src={Avatar2} className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="users-list-body align-items-center">
                                                    <div>
                                                        <h5>#Tech Support</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div className="last-chat-time">
                                                        <span className="material-icons ml-3 callmissed-icon">call_missed</span>
                                                        <a href="/audiocall-single"><span className="material-icons calling-icon">call</span></a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab>
                                </Tabs>
                            </div>

                        </div>

                    </div>

                </div>

                <Modal show={this.state.show == 'Addgroupcall'} onHide={this.handleClose} animation={true} size="md" centered className="shadow-lg">
                    <Modal.Header>
                        <h5 className="modal-title">
                            <span className="material-icons">call</span>Add Call
                        </h5>
                        <button type="button" className="close" onClick={() => this.setState({ show: false })}>
                            <span className="material-icons">close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>               
                        <div className="search_chat has-search mr-0 ml-0">
                            <div className="search_chat has-search mr-0 ml-0">
                                className="
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
                                                <span className="material-icons calling-icon ml-3">call</span>
                                                <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
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
                                                <span className="material-icons calling-icon ml-3">call</span>
                                                <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
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
                                                <span className="material-icons calling-icon ml-3">call</span>
                                                <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
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
                                                <span className="material-icons calling-icon ml-3">call</span>
                                                <a href="/videocall-group"><span className="material-icons videocall-icon">videocam</span></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </Modal.Body>
                </Modal>

        	</div>     	
    	)
    }
}

export default Leftcallsidebar;