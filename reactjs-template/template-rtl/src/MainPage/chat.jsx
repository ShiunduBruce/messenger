import React, { Component } from "react";
import { Link } from 'react-router-dom';
import media1 from "../assets/img/media1.jpg";
import media2 from "../assets/img/media2.jpg";
import media3 from "../assets/img/media3.jpg";
import avatar1 from "../assets/img/avatar-1.jpg";
import avatar2 from "../assets/img/avatar-2.jpg";
import avatar3 from "../assets/img/avatar-3.jpg";
import avatar7 from "../assets/img/avatar-7.jpg";
import avatar8 from "../assets/img/avatar-8.jpg";
import doube_tick from "../assets/img/double-tick.png";
import Modal from 'react-bootstrap/Modal'
import { Double_Tick } from "../imagepath";
import HeaderTop from "./header_top";
import { Scrollbars } from "react-custom-scrollbars";

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: null
        };
      }
      handleShow = (value) =>{
          this.setState({
            show: value
          })
      }
    
      close = () => {
        this.setState({ show: false });
      }
    
  render() {
    const url = this.props.location.pathname;

    return (
      <div className="main-wrapper">
            <div className="content main_content">

            <div className="sidebar-group left-sidebar chat_sidebar">
                
                <div id="chats" className="left-sidebar-wrap sidebar active">
                <div className="header">
                    
                    <HeaderTop />
                    <ul className="nav nav-tabs chat-tabs">
            <li className="nav-item">
              <Link className={`nav-link ${url === "/chat" ? 'active': ""} `} to="/chat">
                Chat
              </Link>
            </li>
            <li className="nav-item ml-1">
              <Link className="nav-link" to="/group">
                Group
              </Link>
            </li>
            <li className="nav-item ml-1">
              <Link className="nav-link" to="/status">
                Status
              </Link>
            </li>
            <li className="nav-item ml-1">
              <Link className="nav-link" to="/call-log">
                Call
              </Link>
            </li>
          </ul>
                        <button type="button" className="float-right btn btn-circle btn-sm header_button" onClick={()=>this.handleShow("add")}>
                            <i className="fas fa-plus button_plus"></i>
                        </button>
                    </div>
                    <div className="search_chat has-search">
                        <span className="fas fa-search form-control-feedback"></span>
                        <input className="form-control chat_input" id="search-contact" type="text" placeholder="" />
                    </div>
                    <div className="sidebar-body" id="chatsidebar">
                    <Scrollbars
                renderTrackVertical={(props) => (
                  <div {...props} className="track-vertical" />
                )}
              >
                        <ul className="user-list">
                            <li className="user-list-item">
                                <div className="avatar avatar-online">
                                    <img src={avatar8} className="rounded-circle" alt="image" />
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>Regina Dickerson</h5>
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">14:45 pm</small>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" >
                                                    <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a  className="dropdown-item">Open</a>
                                                    <a  className="dropdown-item dream_profile_menu">Profile</a>
                                                    <a  className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a  className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>    
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-away">
                                        <img src={avatar2} className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>Kevin Howard</h5>
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">08:45 pm</small>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" >
                                                    <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a  className="dropdown-item">Open</a>
                                                    <a  data-navigation-target="contact-information"
                                                        className="dropdown-item dream_profile_menu">Profile</a>
                                                    <a  className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a  className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-offline">
                                        <img src={avatar1} className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5 className="list_group_notread">Eric Knight</h5>
                                        <p>Welcome to the community mate! 👍</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">Yesterday</small>
                                        <div className="new-message-count"></div>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" >
                                                    <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a  className="dropdown-item">Open</a>
                                                    <a  data-navigation-target="contact-information"
                                                        className="dropdown-item dream_profile_menu">Profile</a>
                                                    <a  className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a  className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item unread">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src={avatar2} className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5>Scott Albright</h5>
                                        <p>I remember everything mate. See you later 🤘</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">06:18 am</small>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" >
                                                    <i className="fas fa-ellipsis-h ellipse_header open_drop"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a  className="dropdown-item">Open</a>
                                                    <a  data-navigation-target="contact-information"
                                                        className="dropdown-item dr_menu">Profile</a>
                                                    <a  className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a  className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-away">
                                        <img src={avatar3} className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5 className="list_group_notread">Irene Perkins</h5>
                                        <p><i className="fa fa-camera mr-1"></i> I will miss you, too, my dear!</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">Yesterday</small>
                                        <div className="new-message-count"></div>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" >
                                                    <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a  className="dropdown-item">Open</a>
                                                    <a  data-navigation-target="contact-information"
                                                        className="dropdown-item dream_profile_menu" >Profile</a>
                                                    <a  className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a  className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="user-list-item">
                                <div>
                                    <div className="avatar avatar-online">
                                        <img src={avatar2} className="rounded-circle" alt="image" />
                                    </div>
                                </div>
                                <div className="users-list-body">
                                    <div>
                                        <h5 className="list_group_notread">Carol Andre</h5>
                                        <p><i className="fa fa-camera mr-1"></i> Photo</p>
                                    </div>
                                    <div className="last-chat-time">
                                        <small className="text-muted">Yesterday</small>
                                        <div className="new-message-count"></div>
                                        <div className="chat-toggle mt-1">
                                            <div className="dropdown">
                                                <a data-toggle="dropdown" >
                                                    <i className="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a  className="dropdown-item">Open</a>
                                                    <a  data-navigation-target="contact-information"
                                                        className="dropdown-item dream_profile_menu">Profile</a>
                                                    <a  className="dropdown-item">Add to archive</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a  className="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </Scrollbars>
                    </div>
                </div>
             
            </div>

            <div className="chat" id="middle">
                <div className="chat-header">
                    <div className="user-details">
                        <div className="d-lg-none ml-2">
                            <ul className="list-inline mt-2 mr-2">
                                <li className="list-inline-item">
                                    <a className="text-muted px-0 left_side"  data-chat="open">
                                        <i className="fas fa-arrow-left"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <figure className="avatar ml-1">
                            <img src={avatar1} className="rounded-circle" alt="image" />
                        </figure>
                        <div className="mt-1">
                            <h5 className="mb-1">Scott Albright</h5>
                            <small className="text-muted mb-2">
                                Active 35m ago
                            </small>
                        </div>
                    </div>
                    <div className="chat-options">
                        <ul className="list-inline">
                            <li className="list-inline-item" data-toggle="tooltip" title=""
                                data-original-title="Voice call">
                                <a 
                                 onClick={()=>this.handleShow("voice")}
                                  className="btn btn-outline-light" data-toggle="modal"
                                    data-target="#voice_call">
                                    <i className="fas fa-phone-alt voice_chat_phone"></i>
                                </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title=""
                                data-original-title="Video call">
                                <a 
                                 onClick={()=>this.handleShow("video")}
                                 className="btn btn-outline-light" data-toggle="modal"
                                    data-target="#video_call">
                                    <i className="fas fa-video"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn btn-outline-light"  data-toggle="dropdown">
                                    <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a  className="dropdown-item dream_profile_menu">Profile</a>
                                    <a  className="dropdown-item">Delete</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <Scrollbars
              renderTrackVertical={(props) => (
                <div {...props} className="track-vertical" />
              )}
            >
                <div className="chat-body">
                    <div className="messages">
                        <div className="chats">
                            <div className="chat-avatar">
                                <img src={avatar2} className="rounded-circle dreams_chat" alt="image" />
                            </div>
                            <div className="chat-content">
                                <div className="message-content">
                                    Hi James! What’s Up?
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">Yesterday 14:26 PM</div>
                                    </div>
                                </div>
                            </div>
                            <div className="chat-action-btns">
                                <ul>
                                    <li><a  className="share-msg" title="Share"><i className="fas fa-share"></i></a>
                                    </li>
                                    <li><a  className="edit-msg"><i className="fas fa-edit"></i></a></li>
                                    <li><a  className="del-msg"><i className="fas fa-trash-alt"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="chats chats-right">
                            <div className="chat-content">
                                <div className="message-content">
                                    Oh, hello! All perfectly. I work, study and know this wonderful world!
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">Yesterday 14:38 PM <i>
                                            <img src={Double_Tick} alt="" /></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chats">
                            <div className="chat-avatar">
                                <img src={avatar2} className="rounded-circle dreams_chat" alt="image" />
                            </div>
                            <div className="chat-content">
                                <div className="message-content">
                                    Ok Cool, Where you from
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">Yesterday 14:40 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chats chats-right">

                            <div className="chat-content">
                                <div className="message-content">
                                    I am from California, and you?
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">Yesterday 14:42 PM <i>
                                            <img src={doube_tick} alt="" /></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="chat-line">
							<span className="chat-date">Today</span>
						</div>

                        <div className="chats">
                            <div className="chat-avatar">
                                <img src={avatar2} className="rounded-circle dreams_chat" alt="image" />
                            </div>
                            <div className="chat-content">
                                <div className="message-content">
                                    I am from Australia, and where you working?
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">14:26 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chats chats-right">

                            <div className="chat-content">
                                <div className="message-content">
                                    Oh Cool, Yeah i am working here famous software company
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">14:29 PM <i>
                                        <img src={doube_tick} alt="" /></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chats">
                            <div className="chat-avatar">
                                <img src={avatar2} className="rounded-circle dreams_chat" alt="image" />
                            </div>
                            <div className="chat-content">
                                <div className="message-content">
                                    That's Good Lol, What is your designation?
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">14:30 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chats chats-right">

                            <div className="chat-content">
                                <div className="message-content">
                                    I am senior software engineer.
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">14:32 PM <i>
                                            <img src={doube_tick} alt="" /></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
						<div className="chat-line">
							<span className="chat-date">1 message unread</span>
						</div>

                        <div className="chats">
                            <div className="chat-avatar">
                                <img src={avatar2} className="rounded-circle dreams_chat" alt="image" />
                            </div>
                            <div className="chat-content">
                                <div className="message-content">
                                    Good.!!!
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">14:33 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="chats chats-right">

                            <div className="chat-content">
                                <div className="message-content">
                                    Yeah, Thank you..
                                </div>
                                <div className="chat-time">
                                    <div>
                                        <div className="time">14:34 PM <i>
                                            
                                        <img src={doube_tick} alt="" /></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Scrollbars>
                <div className="chat-footer">
                    <form>
                        <input type="text" className="form-control chat_form" placeholder="Write a message." />
                        <div className="form-buttons">
                            <button className="btn" type="button">
                                <i className="far fa-smile"></i>
                            </button>
                            <button className="btn" type="button" data-toggle="modal" data-target="#drag_files">
                                <i className="fas fa-paperclip"></i>
                            </button>
                            <button className="btn" type="button">
                                <i className="fas fa-microphone-alt"></i>
                            </button>
                            <button className="btn send-btn" type="submit">
                                <i className="fab fa-telegram-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="right-sidebar right_sidebar_profile" id="middle1">
            <Scrollbars
              renderTrackVertical={(props) => (
                <div {...props} className="track-vertical" />
              )}
            >
                <div className="right-sidebar-wrap active">
                    <div className="contact-close_call mr-4 mt-4 text-right">
                        <a 
                            className="btn btn-outline-light close_profile close_profile4">
                            <i className="fas fa-times close_icon"></i>
                        </a>
                    </div>
                    <div className="sidebar-body">
                        <div className="pl-4 pr-4 mt-0 right_sidebar_logo">
                            <div className="text-center mb-3">
                                <figure className="avatar avatar-xl mb-3">
                                    <img src={avatar2} className="rounded-circle" alt="image" />
                                </figure>
                                <h5 className="profile-name">Scott Albright</h5>
                            </div>
                            <div>

                                <div className="accordion-col">
                                    <div className="accordion-title">
                                        <h6 className="primary-title">Media (31) <i className="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div className="accordion-content">
                                        <div className="media-lists">
                                            <div className="media-image">
                                                <img src={media1} alt="" />
                                            </div>
                                            <div className="media-image">
                                                <img src={media2} alt="" />
                                            </div>
                                            <div className="media-image">
                                                <img src={media3} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-title">
                                        <h6 className="primary-title">About and phone number <i className="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div className="accordion-content">
                                        <p className="text-muted text-center mt-1">Help people to build websites and apps + grow
                                            awareness in social media 🔥</p>
                                        <div className="mt-2 text-center">
                                            <h6>Phone: <span className="text-muted ml-2">+(33 1) 45 55 01 10</span></h6>
                                        </div>
                                    </div>
                                    <div className="accordion-title">
                                        <h6 className="primary-title">Settings <i className="fas fa-chevron-right float-right"></i></h6>
                                    </div>
                                    <div className="accordion-content">
                                        <ul className="contact-action">
                                            <li className="block-user mt-1">
                                                <a><i className="fas fa-ban mr-2 text-muted"></i>Block</a>
                                            </li>
                                            <li className="report-contact">
                                                <a><i className="fas fa-thumbs-down mr-2"></i> Report Contact</a>
                                            </li>
                                            <li className="delete-chat">
                                                <a><i className="fas fa-trash-alt mr-2"></i> Delete Chat</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                </Scrollbars>
            </div>
            <Modal
        show={this.state.show === "voice" ? true : false}
        onHide={this.close}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >

        <Modal.Body className="voice_content">
        
                            <div className="call-box incoming-box">
                                <div className="call-wrapper">
                                    <div className="call-inner">
                                        <div className="call-user">
                                            <img alt="User Image" src={avatar2} className="call-avatar" />
                                            <h4>Tobbias Williams</h4>
                                            <span className="chat_cal">calling...</span>
                                        </div>
                                        <div className="call-items">
                                            <a  className="btn call-item call-end" data-dismiss="modal" onClick={()=>this.close("close")}>
                                                <i className="fas fa-phone-alt phone_icon"></i></a>
                                            <a  className="btn call-item call-start" data-dismiss="modal" onClick={()=>this.close("close")}> 
                                            <i
                                                    className="fas fa-phone-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                  
        </Modal.Body>
      </Modal>
      <Modal
        show={this.state.show === "video" ? true : false}
        onHide={this.close}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >

        <Modal.Body className="voice_content">
        
                            <div className="call-box incoming-box">
                                <div className="call-wrapper">
                                    <div className="call-inner">
                                        <div className="call-user">
                                            <img alt="User Image" src={avatar2} className="call-avatar" />
                                            <h4>Tobbias Williams</h4>
                                            <span className="chat_cal">calling...</span>
                                        </div>
                                        <div className="call-items">
                                            <a  className="btn call-item call-end" data-dismiss="modal" onClick={()=>this.close("close")}>
                                                <i className="fas fa-phone-alt phone_icon"></i></a>
                                            <a  className="btn call-item call-start" data-dismiss="modal" onClick={()=>this.close("close")}> 
                                            <i
                                                    className="fas fa-phone-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                  
        </Modal.Body>
      </Modal>
            <Modal
        show={this.state.show === "add" ? true : false}
        onHide={this.close}
        dialogClassName="modal-90w chat-addnumber"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >

        <Modal.Body>
        
      
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Add Friends
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.close("close")}>
                                <i className="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                     
                            <form action="new-friends" className="new-friends">
                                <div className="form-group">
                                    <label>Phone</label>
 <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="+39 02 87 21 43 19" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
  <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="tobiaswilliams@gmail.com" />
                                </div>
                            </form>
                          
                            <div className="form-row profile_form mt-3 mb-1">
                              
                                <button type="button" className="btn btn-block newgroup_create mb-0" data-dismiss="modal" aria-label="Close">
                                    Submit
                                </button>
                            </div>
                        </div>       
            
                  
        </Modal.Body>
      </Modal>       
      </div>
    </div>
    );
  }
}

export default Chat;
