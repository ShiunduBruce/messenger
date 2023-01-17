import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png";
import Icon from "../assets/img/status-icon.png";
import avatar1 from "../assets/img/avatar-1.jpg";
import avatar2 from "../assets/img/avatar-2.jpg";
import avatar7 from "../assets/img/avatar-7.jpg";
import avatar8 from "../assets/img/avatar-8.jpg";
import double_tick from "../assets/img/double-tick.png"
import Modal from "react-bootstrap/Modal";
import HeaderTop from "./header_top";
import Carousel from 'react-bootstrap/Carousel';
import carousel from "../assets/img/carousel.jpg";
import carousel1 from "../assets/img/carousel1.jpg";
import carousel2 from "../assets/img/carousel2.jpg";
import { Scrollbars } from "react-custom-scrollbars";

class Status extends Component {

    constructor(props) {
        super(props);
        this.state = {
          show: null,
        };
      }
      handleShow = (value) => {
        this.setState({
          show: value,
        });
      };
    
      close = () => {
        this.setState({ show: false });
        document.body.classList.remove('custom-model-open'); 
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
                               <Link className={`nav-link ${url === "/group" ? 'active': ""} `} to="/group">
                                   Group
                               </Link>
                               </li>
                               <li className="nav-item ml-1">
                               <Link className={`nav-link ${url === "/status" ? 'active': ""} `} to="/status">
                                   Status
                               </Link>
                               </li>
                               <li className="nav-item ml-1">
                               <Link className={`nav-link ${url === "/call-log" ? 'active': ""} `} to="/call-log">
                                    Call
                                </Link>
                               </li>
                           </ul>
               <button
                 type="button"
                 className="float-right btn btn-circle btn-sm header_button"
                 data-toggle="modal"
                 data-target="#audiocallmodal"
                 onClick={() => this.handleShow("add")}
               >
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
                    <h4 className="status-title ml-4">Recent</h4>
                    <ul className="user-list mb-4">
                            <li className="list-group-item">
                                <a className="first_list" 
                                onClick={() => this.handleShow("item")}
                                data-toggle="modal" data-target="#status-modal">
                                    <div>
                                        <div className="avatar status-active">
                                            <img src={avatar8} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body mt-2">
                                        <div>
                                            <h5>Anna Dorum</h5>
                                            <p className="text-muted">Just Now</p>
                                        </div>
                                       
                                    </div>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a className="first_list"  onClick={() => this.handleShow("item")} data-toggle="modal" data-target="#status-modal">
                                    <div>
                                        <div className="avatar status-active">
                                            <img src={avatar7} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body mt-2">
                                        <div>
                                            <h5>Kevin Howard</h5>
                                            <p className="text-muted">Today , 10:30am</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a className="first_list"  onClick={() => this.handleShow("item")} data-toggle="modal" data-target="#status-modal">
                                    <div className="avatar status-active">
                                        <img src={avatar1} className="rounded-circle" alt="image" />
                                    </div>
                                    <div className="users-list-body mt-2">
                                        <div>
                                            <h5>Eric Knight</h5>
                                            <p className="text-muted">Today , 8.00am</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="list-group-item">
                                <a className="first_list"  onClick={() => this.handleShow("item")} data-toggle="modal" data-target="#status-modal">
                                    <div>
                                        <div className="avatar status-active">
                                            <img src={avatar2} className="rounded-circle" alt="image" />
                                        </div>
                                    </div>
                                    <div className="users-list-body mt-2">
                                        <div>
                                            <h5>Scott Albright</h5>
                                            <p className="text-muted">Today , 5.00am</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        </Scrollbars>
                    </div>
                       </div>   
               
              </div>
            <div className="status_update">
                <img src={Icon} alt="" className="status_content" />
                <h3 className="status_content_h3">Click on a contact to view their status updates</h3>
            </div>
          <div className="chat" id="middle">
                <div className="chat-header">
                    <div className="user-details">
                        <div className="d-lg-none ml-2">
                            <ul className="list-inline mt-2 mr-2">
                                <li className="list-inline-item">
                                    <a className="text-muted px-0 left_side" data-chat="open">
                                        <i className="fas fa-arrow-left"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <figure className="avatar ml-1">
                            <img src={avatar2} className="rounded-circle" alt="image" />
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
                                <a className="btn btn-outline-light" data-toggle="modal"
                                    data-target="#voice_call">
                                    <i className="fas fa-phone-alt voice_chat_phone"></i>
                                </a>
                            </li>
                            <li className="list-inline-item" data-toggle="tooltip" title=""
                                data-original-title="Video call">
                                <a className="btn btn-outline-light" data-toggle="modal"
                                    data-target="#video_call">
                                    <i className="fas fa-video"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn btn-outline-light" data-toggle="dropdown">
                                    <i className="fas fa-ellipsis-h"></i>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item dr_menu">Profile</a>
                                    <a className="dropdown-item">Delete</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
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
                                    <li><a className="share-msg" title="Share"><i className="fas fa-share"></i></a>
                                    </li>
                                    <li><a className="edit-msg"><i className="fas fa-edit"></i></a></li>
                                    <li><a className="del-msg"><i className="fas fa-trash-alt"></i></a></li>
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
                                        <img src={double_tick} alt="" /></i></div>
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
                                            <img src={double_tick} alt="" /></i></div>
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
                                            <img src={double_tick} alt="" /></i></div>
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
                                            <img src={double_tick} alt="" /></i></div>
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
                                            
                                            <img src={double_tick} alt="" /> </i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
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
            <Modal
        show={this.state.show === "voice" ? true : false} onHide={this.close}
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
                                            <a className="btn call-item call-end" data-dismiss="modal" onClick={()=>this.close("close")}>
                                                <i className="fas fa-phone-alt phone_icon"></i></a>
                                            <a className="btn call-item call-start" data-dismiss="modal" onClick={()=>this.close("close")}> 
                                            <i
                                                    className="fas fa-phone-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                  
        </Modal.Body>
      </Modal>
      <Modal
        show={this.state.show === "video" ? true : false} onHide={this.close}
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
                                            <a className="btn call-item call-end" data-dismiss="modal" onClick={()=>this.close("close")}>
                                                <i className="fas fa-phone-alt phone_icon"></i></a>
                                            <a className="btn call-item call-start" data-dismiss="modal" onClick={()=>this.close("close")}> 
                                            <i
                                                    className="fas fa-phone-alt"></i></a>
                                        </div>
                                </div>
                                </div>
                            </div>
                  
        </Modal.Body>
      </Modal>
      <Modal
          show={this.state.show === "item" ? true : false} onHide={this.close}
          dialogClassName="modal-90w status-modal"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
             <Modal.Header>
             <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => this.close("close")}
              >
                <i className="fas fa-times close_icon"></i>
              </button>
        </Modal.Header>
          <Modal.Body >
          <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={carousel}
      alt="First slide"
    />

  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={carousel1}
      alt="Third slide"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel2}
      alt="Third slide"
    />
   
  </Carousel.Item>
</Carousel>
<div className="bottom-message-col">
                        <ul>
                            <li>
                                <form className="chat_status mt-4">
                                    <input type="text" className="form-control text_status mx-auto d-block form_status"
                                    placeholder="Reply" />
                                    <button className="btn btn-primary send-btn_status" type="submit">
                                        <i className="fab fa-telegram-plane status_telegram"></i>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
          </Modal.Body>
        </Modal>
      
      </div>
      <Modal
        show={this.state.show === "add" ? true : false} onHide={this.close}
        dialogClassName="modal-90w status_modal"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >

                        <div className="modal-header">
                            <h5 className="modal-title">
                                Add Friends
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={()=>this.close("close")}>
                                <i className="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form id="js-upload-form">
                                <div className="upload-drop-zone" id="drop-zone">
                                    <i className="fa fa-cloud-upload fa-2x"></i> <span className="upload-text">Just drag and
                                        drop files here</span>
                                </div>
                            </form>
                            <div className="text-center mt-0">
                                <button className="btn newgroup_create m-0" data-dismiss="modal">Add to upload</button>
                            </div>
                        </div>
   
      </Modal>       
    </div>
    );
  }
}

export default Status;
