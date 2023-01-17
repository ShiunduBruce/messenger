import React,{ Component } from 'react';
import $ from "jquery";
import { Button, Modal, Dropdown, DropdownItem, Tabs } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

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
import { faSearch, faPhone, faVideo, faUser, faEllipsisH, faClock, faArchive, faTrashAlt, faCopy, faShare, faCloudDownloadAlt, faPaperclip } from '@fortawesome/fontawesome-free-solid';
import { faFileArchive, faSmile } from '@fortawesome/fontawesome-free-regular';


class Leftstatussidebar extends Component {
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
                                <h4>STATUS</h4>
                            </div>
                            <div className="add-section">
                                <ul>
                                    <li><a href="#" onClick={() => this.handleShow('Addstatus')}><span className="material-icons">library_add</span></a></li>
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
                                    <h4>Recent STATUS</h4>
                                </div>
                            </div>

                            <ul className="user-list mt-2">
                                <li className="user-list-item">
                                    <a href="#" className="d-flex" onClick={() => this.handleShow('Statusview')}>
                                        <div className="avatar avatar-online">
                                            <img src={Avatar8} className="rounded-circle" alt="image" />
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Regina Dickerson</h5>
                                                <p>Just now</p>
                                            </div> 
                                        </div>
                                    </a>
                                </li>
                                <li className="user-list-item">
                                    <a href="#" className="d-flex w-100" onClick={() => this.handleShow('Statusview')}>
                                        <div>
                                            <div className="avatar avatar-away">
                                                <img src={Avatar9} className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Forest Kroch</h5>
                                                <p>4 Min Ago</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="user-list-item">
                                    <a href="#" className="d-flex w-100" onClick={() => this.handleShow('Statusview')}>
                                        <div>
                                            <div className="avatar avatar-online">
                                                <img src={Avatar10} className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Regina Dickerson</h5>
                                                <p>4 Min Ago</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="user-list-item">
                                    <a href="#" className="d-flex w-100" onClick={() => this.handleShow('Statusview')}>
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
                                                <p>5 min Ago</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="user-list-item">
                                    <a href="#" className="d-flex w-100" onClick={() => this.handleShow('Statusview')}>
                                        <div>
                                            <div className="avatar avatar-online">
                                                <img src={Avatar11} className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Margaretta Worvell</h5>
                                                <p>8 min ago</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div className="left-chat-title d-flex justify-content-between align-items-center pl-0 pr-0 mt-1">
                                <div className="chat-title">
                                    <h4>VIEWED</h4>
                                </div>
                            </div>
                            <ul className="user-list mt-2">
                                <li className="user-list-item">
                                    <a href="#" className="d-flex w-100" onClick={() => this.handleShow('Statusview')}>
                                        <div>
                                            <div className="avatar avatar-away">
                                                <img src={Avatar2} className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>#Tech Support</h5>
                                                <p>8 min ago</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="user-list-item">
                                    <a href="#" className="d-flex w-100" onClick={() => this.handleShow('Statusview')}>
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
                                                <p>8 min ago</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li className="user-list-item">
                                    <a href="#" className="d-flex w-100" onClick={() => this.handleShow('Statusview')}>
                                        <div>
                                            <div className="avatar avatar-away">
                                                <img src={Avatar12} className="rounded-circle" alt="image" />
                                            </div>
                                        </div>
                                        <div className="users-list-body">
                                            <div>
                                                <h5>Alexandr Donnelly</h5>
                                                <p>8 min ago</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

                <Modal show={this.state.show == 'Addstatus'} onHide={this.handleClose} animation={true} size="md" centered className="shadow-lg">
                    <Modal.Header>
                        <h5 className="modal-title">
                            Drag and drop files upload
                        </h5>
                        <button type="button" className="close" onClick={() => this.setState({ show: false })}>
                            <span className="material-icons">close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>               
                        <form id="js-upload-form">
                            <div className="upload-drop-zone" id="drop-zone">
                                <span className="upload-text">Just drag and drop files here</span>
                            </div>
                        </form>
                        <div className="form-row profile_form text-right float-right m-0 align-items-center">
                            <div className="cancel-btn ml-4">
                                <a href="#" data-dismiss="modal" onClick={() => this.setState({ show: false })}>Cancel</a>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-block newgroup_create mb-0" onClick={() => this.handleShow('AddGroupMembers')}>
                                     Add to Upload
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal show={this.state.show == 'Statusview'} onHide={this.handleClose} animation={true} size="lg" centered className="shadow-lg status-modal ">            
                    <div className="inner-popup">
                        <div className="close custom-status-close" onClick={() => this.setState({ show: false })}><span className="material-icons">close</span></div>
                        <Carousel>
                            <Carousel.Item>
                                <img src={status1} alt="" />
                                <Carousel.Caption>
                                    <div className="status-text">
                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={status1} alt="" />
                                <Carousel.Caption>
                                    <div className="status-text">
                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={status1} alt="" />
                                <Carousel.Caption>
                                    <div className="status-text">
                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={status1} alt="" />
                                <Carousel.Caption>
                                    <div className="status-text">
                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src={status1} alt="" />
                                <Carousel.Caption>
                                    <div className="status-text">
                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <div className="bottom-message-col chat">
                            <div className="chat-footer p-0">
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
                </Modal>

        	</div>     	
    	)
    }
}

export default Leftstatussidebar;