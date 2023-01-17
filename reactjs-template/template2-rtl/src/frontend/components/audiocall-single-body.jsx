import React,{ Component } from 'react';
import $ from "jquery";


import Statusicon from '../assets/img/status-icon.png';
import Avatar8 from '../assets/img/avatar/avatar-8.jpg';

class Audiocallsinglebody extends Component {
  	render() {
  		return (
			<div className="chat video-screen" id="middle">
                <div className="chat-header">
                    <div className="user-details">
                        <div className="d-lg-none ml-2">
                            <ul className="list-inline mt-2 mr-2">
                                <li className="list-inline-item">
                                    <a className="text-muted px-0 left_side" href="/" data-chat="open">
                                        <i className="fas fa-arrow-left"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <figure className="avatar ml-1">
                            <img src={Avatar8} className="rounded-circle" alt="image" />
                        </figure>
                        <div>
                            <h5>Doris Brown</h5>
                        </div>
                    </div>
                    <div className="chat-options">
                        <ul className="list-inline">
                            <li className="list-inline-item in-a-call d-flex align-items-center mr-5">
                                <span className="icon-call"><i className="fas fa-phone-alt"></i></span> 
                                <span className="call-text">in call : 14</span>
                            </li>
                            <li className="list-inline-item">
                                <a href="#" className="add-person-call no-bg d-flex align-items-center dream_profile_menu">
                                    <span className="icon-call"><i className="fas fa-plus"></i></span> 
                                    <span className="call-text">Add person to call</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="chat-body pt-4 pb-0">
                    <div className="video-screen-inner blur-bg">
                        <div className="call-user-avatar">
                            <div className="avatar-col">
                                <img src={Avatar8} alt="" className="blur-img" />
                            </div>
                        </div>
                        <div className="record-time">
                            <span>40:12</span>
                        </div>
                        <div className="volume-col">
                            <div className="inner-volume-col text-center">
                                <div id="player" className="">
                                    <div id="volume"></div>
                                </div>
                                <span className="material-icons">volume_up</span>
                            </div>
                        </div>
                        <div className="video-call-action">
                            <ul>
                                <li><a href="#"><span className="material-icons">fullscreen</span></a></li>
                                <li><a href="#" className="call-mute"><span className="material-icons">volume_off</span></a></li>
                                <li><a href="#" className="call-end"><span className="material-icons">call_end</span></a></li>
                                <li><a href="#"><span className="material-icons">videocam_off</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    	)
    }
}

export default Audiocallsinglebody;