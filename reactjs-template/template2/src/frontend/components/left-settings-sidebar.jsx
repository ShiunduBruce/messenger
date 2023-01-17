import React,{ Component } from 'react';
import $ from "jquery";
import { Button, Modal, Dropdown, DropdownItem, Tabs } from "react-bootstrap";

import Avatar10 from '../assets/img/avatar/avatar-10.jpg';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faSearch } from '@fortawesome/fontawesome-free-solid';
import { faMoon } from '@fortawesome/fontawesome-free-regular';

import Topactivemember from './slider/top-active-members.jsx';

class Leftsettingssidebar extends Component {
  	render() {
  		return (
     	 	<div className="sidebar-group left-sidebar chat_sidebar">

                <div id="chats" className="left-sidebar-wrap sidebar active">

                    <div className="slimscroll">
                       <div className="left-chat-title d-flex justify-content-between align-items-center">
                            <div className="chat-title">
                                <h4>PROFILE</h4>
                            </div>
                            <div className="btn-section">
                                <button className="btn logout-btn">Sign out</button>
                            </div>
                       </div>

                        <div className="search_chat has-search">
                            <span className="fas fa-search form-control-feedback"></span>
                            <input className="form-control chat_input" id="search-contacts" type="text" placeholder="Search Contacts" />
                        </div>

                        <div className="settings-option">
                            <a href="#" className="user-list-item">Edit Settings</a>
                        </div>

                        <div className="profile-card">
                            <div className="profile-cover text-center mb-3">
                                <label className="profile-cover-avatar" for="avatar_upload">
                                    <img className="avatar-img" src={Avatar10} alt="Profile Image" />
                                    <input type="file" id="avatar_upload" />
                                    <span className="avatar-edit">
                                        <i className="fas fa-pen"></i>
                                    </span>
                                </label>
                                <h5 className="mt-3 profile-name mb-1">Michelle Green</h5>
                                <p className="profile-email mb-1">michelle.green@gmail.com</p>
                                <h5 className="profile-country mb-0">USA</h5>
                            </div>
                            <div className="profile-info">
                                <div className="text-center mb-4">
                                    <p className="info-title mb-0">Phone</p>
                                    <span className="info-text">555-555-21541</span>
                                </div>
                                <div className="text-center mb-4">
                                    <p className="info-title mb-0">Nick Name</p>
                                    <span className="info-text">Alberywo</span>
                                </div>
                                <div className="text-center mb-4">
                                    <p className="info-title mb-0">Email</p>
                                    <span className="info-text">alberywo@gmail.com</span>
                                </div>
                                <ul className="social-nav p-0 mb-0 text-center">
                                    <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="settings-card">
                            <div className="settings-control">
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div>
                                            <span>Desktop Notification</span>
                                        </div>
                                        <label className="switch ml-auto">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                        </label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div>
                                            <span>Sound Notification</span>
                                        </div>
                                        <label className="switch ml-auto">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                        </label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div>
                                            <span>Profile privacy</span>
                                        </div>
                                        <label className="switch ml-auto">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                        </label>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div>
                                            <span>Two-step security verification</span>
                                        </div>
                                        <label className="switch ml-auto">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="settings-footer">
                                <ul className="p-0 mb-0">
                                    <li>
                                        <a href="#"><i className="fas fa-chevron-right"></i>  Need Help? Let's chat</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fas fa-chevron-right"></i>  English (united States)</a>
                                    </li>
                                </ul>
                                <div className="profile-update text-center py-4">
                                    <button type="button" className="btn btn-block btn-update mb-0" data-dismiss="modal" aria-label="Close">
                                    Update Profile
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>


        	</div>     	
    	)
    }
}

export default Leftsettingssidebar;