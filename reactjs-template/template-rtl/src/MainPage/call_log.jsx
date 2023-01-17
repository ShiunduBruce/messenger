import React, { Component } from "react";
import { Link } from 'react-router-dom';
import avatar2 from "../assets/img/avatar-2.jpg";
import Modal from "react-bootstrap/Modal";
import avatar7 from "../assets/img/avatar-7.jpg";
import avatar3 from "../assets/img/avatar-3.jpg";
import avatar1 from "../assets/img/avatar-1.jpg";
import media1 from "../assets/img/media1.jpg";
import media2 from "../assets/img/media2.jpg";
import media3 from "../assets/img/media3.jpg";
import missed_call_icon from "../assets/img/missed-call-icon.svg";
import incoming_call from "../assets/img/incoming-call-icon.svg";
import { Scrollbars } from "react-custom-scrollbars";
import HeaderTop from "./header_top";

class CallLog extends Component {
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

  close=()=> {
    this.setState({ show: false });
  }

  render() {
    const url = this.props.location.pathname;

    console.log("location", url);
    return (
      <div className="main-wrapper">
        <div className="content main_content">
          <div className="sidebar-group left-sidebar">
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
                <input
                  className="form-control chat_input"
                  id="search-contact"
                  type="text"
                  placeholder=""
                />
              </div>
              <div id="chatsidebar"></div>

              <Scrollbars
                renderTrackVertical={(props) => (
                  <div {...props} className="track-vertical" />
                )}
              >
                <ul className="user-list">
                  <li className="user-list-item">
                    <div className="avatar avatar-online">
                      <img
                        src={avatar7}
                        className="rounded-circle"
                        alt="image"
                      />
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5>Regina Dickerson</h5>
                        <p>
                          <small className="text-muted">Today, 14:45 pm</small>
                        </p>
                      </div>
                      <div className="last-chat-time">
                        <div className="last-chat-time">
                          <i className="missed-col">
                            <img
                              src={incoming_call}
                              alt=""
                              className="mCS_img_loaded"
                            />
                          </i>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="user-list-item">
                    <div>
                      <div className="avatar avatar-away">
                        <img
                          src={avatar7}
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5>Kevin Howard</h5>
                        <p>
                          <small className="text-muted">Today, 08:45 pm</small>
                        </p>
                      </div>
                      <div className="last-chat-time">
                        <i className="missed-col">
                          <img
                            src={missed_call_icon}
                            alt=""
                            className="mCS_img_loaded"
                          />
                        </i>
                      </div>
                    </div>
                  </li>
                  <li className="user-list-item">
                    <div>
                      <div className="avatar avatar-offline">
                        <img
                          src={avatar1}
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5 className="list_group_notread">Eric Knight</h5>
                        <small className="text-muted">Yesterday</small>
                      </div>
                      <div className="last-chat-time">
                        <i className="missed-col">
                          <img
                            src={incoming_call}
                            alt=""
                            className="mCS_img_loaded"
                          />
                        </i>
                      </div>
                    </div>
                  </li>
                  <li className="user-list-item unread">
                    <div>
                      <div className="avatar avatar-online">
                        <img
                          src={avatar2}
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5>Scott Albright</h5>
                        <p>
                          <small className="text-muted">Today, 11:43 PM</small>
                        </p>
                      </div>
                      <div className="last-chat-time">
                        <i className="missed-col">
                          <img
                            src={missed_call_icon}
                            alt=""
                            className="mCS_img_loaded"
                          />
                        </i>
                      </div>
                    </div>
                  </li>
                  <li className="user-list-item">
                    <div>
                      <div className="avatar avatar-away">
                        <img
                          src={avatar3}
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5 className="list_group_notread">Irene Perkins</h5>
                        <p>
                          <small className="text-muted">Yesterday</small>
                        </p>
                      </div>
                      <div className="last-chat-time">
                        <i className="missed-col">
                          <img
                            src={incoming_call}
                            alt=""
                            className="mCS_img_loaded"
                          />
                        </i>
                      </div>
                    </div>
                  </li>
                  <li className="user-list-item">
                    <div>
                      <div className="avatar avatar-online">
                        <img
                          src={avatar3}
                          className="rounded-circle"
                          alt="image"
                        />
                      </div>
                    </div>
                    <div className="users-list-body">
                      <div>
                        <h5 className="list_group_notread">Carol Andre</h5>
                        <p>
                          <small className="text-muted">Yesterday</small>
                        </p>
                      </div>
                      <div className="last-chat-time">
                        <i className="missed-col">
                          <img
                            src={incoming_call}
                            alt=""
                            className="mCS_img_loaded"
                          />
                        </i>
                      </div>
                    </div>
                  </li>
                </ul>
              </Scrollbars>
            </div>
          </div>

          <div className="chat" id="middle">
            <div className="chat-header">
              <div className="user-details">
                <div className="d-lg-none ml-2">
                  <ul className="list-inline mt-2 mr-2">
                    <li className="list-inline-item">
                      <a
                        className="text-muted px-0 left_side"
                        
                        data-chat="open"
                      >
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
                  <small className="text-muted mb-2">50 Calls</small>
                </div>
              </div>
              <div className="chat-options">
                <ul className="list-inline">
                  <li
                    className="list-inline-item"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Voice call"
                  >
                    <a
                      
                      className="btn btn-outline-light"
                      data-toggle="modal"
                      data-target="#voice_call"
                      onClick={() => this.handleShow("voice")}
                    >
                      <i className="fas fa-phone-alt voice_chat_phone"></i>
                    </a>
                  </li>
                  <li
                    className="list-inline-item"
                    data-toggle="tooltip"
                    title=""
                    data-original-title="Video call"
                  >
                    <a className="btn btn-outline-light"
                      data-toggle="modal"
                      data-target="#video_call"
                      onClick={() => this.handleShow("video")}
                    >
                      <i className="fas fa-video"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-light" data-toggle="dropdown"
                    >
                      <i className="fas fa-ellipsis-h"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a  className="dropdown-item dream_profile_menu">
                        Profile
                      </a>
                      <a  className="dropdown-item">
                        Delete
                      </a>
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
                <div className="missed-call-widget mt-0">
                  <div className="call-log-header">
                    <div className="row">
                      <div className="col">
                        <h4>Missed Calls (41)</h4>
                      </div>
                      <div className="col-auto">
                        <a  className="clear-all">
                          Clear all
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card call-card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="text-muted mb-0">
                            <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                          </h6>
                        </div>
                        <div className="col mob-auto">
                          <i className="missed-col">
                            <img src={missed_call_icon} alt="" />
                          </i>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-phone-alt text-muted"></i>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="text-muted mb-0">
                            <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                          </h6>
                        </div>
                        <div className="col mob-auto">
                          <i className="missed-col">
                            <img src={missed_call_icon} alt="" />
                          </i>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-phone-alt text-muted"></i>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="text-muted mb-0">
                            <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                          </h6>
                        </div>
                        <div className="col mob-auto">
                          <i className="missed-col">
                            <img src={missed_call_icon} alt="" />
                          </i>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-phone-alt text-muted"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="call-view-more">
                    <a >
                      <i className="fas fa-chevron-down mr-1"></i>{" "}
                      <span>39 More</span>
                    </a>
                  </div>
                </div>

                <div className="other-call-widget mt-0">
                  <div className="call-log-header">
                    <div className="row">
                      <div className="col">
                        <h4>Other Calls (9)</h4>
                      </div>
                      <div className="col-auto">
                        <a  className="clear-all">
                          Clear all
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card call-card">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="text-muted mb-0">
                            <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                          </h6>
                        </div>
                        <div className="col mob-auto">
                          <i className="incoming-col">
                            <img src={incoming_call} alt="" />
                          </i>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-phone-alt text-muted"></i>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="text-muted mb-0">
                            <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                          </h6>
                        </div>
                        <div className="col mob-auto">
                          <i className="incoming-col">
                            <img src={incoming_call} alt="" />
                          </i>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-video text-muted"></i>
                        </div>
                      </div>
                      <hr className="my-3" />
                      <div className="row align-items-center">
                        <div className="col">
                          <h6 className="text-muted mb-0">
                            <i className="far fa-clock mr-2"></i>Today, 11:43 PM
                          </h6>
                        </div>
                        <div className="col mob-auto">
                          <i className="incoming-col">
                            <img src={incoming_call} alt="" />
                          </i>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-video text-muted"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="call-view-more">
                    <a >
                      <i className="fas fa-chevron-down mr-1"></i>{" "}
                      <span>7 More</span>
                    </a>
                  </div>
                </div>
              </div>
            </Scrollbars>
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
                    
                    className="btn btn-outline-light close_profile close_profile4"
                  >
                    <i className="fas fa-times close_icon"></i>
                  </a>
                </div>

                <div className="sidebar-body">
                  <div className="pl-4 pr-4 mt-0 right_sidebar_logo">
                    <div className="text-center mb-3">
                      <figure className="avatar avatar-xl mb-3">
                        <img
                          src={avatar2}
                          className="rounded-circle"
                          alt="image"
                        />
                      </figure>
                      <h5 className="profile-name">Scott Albright</h5>
                    </div>
                    <div>
                      <div className="accordion-col">
                        <div className="accordion-title">
                          <h6 className="primary-title">
                            Media (31){" "}
                            <i className="fas fa-chevron-right float-right"></i>
                          </h6>
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
                          <h6 className="primary-title">
                            About and phone number{" "}
                            <i className="fas fa-chevron-right float-right"></i>
                          </h6>
                        </div>
                        <div className="accordion-content">
                          <p className="text-muted text-center mt-1">
                            Help people to build websites and apps + grow
                            awareness in social media 🔥
                          </p>
                          <div className="mt-2 text-center">
                            <h6>
                              Phone:{" "}
                              <span className="text-muted ml-2">
                                +(33 1) 45 55 01 10
                              </span>
                            </h6>
                          </div>
                        </div>
                        <div className="accordion-title">
                          <h6 className="primary-title">
                            Settings{" "}
                            <i className="fas fa-chevron-right float-right"></i>
                          </h6>
                        </div>
                        <div className="accordion-content">
                          <ul className="contact-action">
                            <li className="block-user mt-1">
                              <a >
                                <i className="fas fa-ban mr-2 text-muted"></i>
                                Block
                              </a>
                            </li>
                            <li className="report-contact">
                              <a >
                                <i className="fas fa-thumbs-down mr-2"></i>{" "}
                                Report Contact
                              </a>
                            </li>
                            <li className="delete-chat">
                              <a >
                                <i className="fas fa-trash-alt mr-2"></i> Delete
                                Chat
                              </a>
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
                    <img
                      alt="User Image"
                      src={avatar2}
                      className="call-avatar"
                    />
                    <h4>Tobbias Williams</h4>
                    <span className="chat_cal">calling...</span>
                  </div>
                  <div className="call-items">
                    <a
                      
                      className="btn call-item call-end"
                      data-dismiss="modal"
                      onClick={() => this.close("close")}
                    >
                      <i className="fas fa-phone-alt phone_icon"></i>
                    </a>
                    <a
                      
                      className="btn call-item call-start"
                      data-dismiss="modal"
                      onClick={() => this.close("close")}
                    >
                      <i className="fas fa-phone-alt"></i>
                    </a>
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
          dialogClassName="modal-90w new-groups"
          aria-labelledby="example-custom-modal-styling-title"
          centered
        >
          <>
            <div className="modal-header">
              <h5 className="modal-title">Add Friends</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => this.close("close")}
              >
                <i className="fas fa-times close_icon"></i>
              </button>
            </div>
            <div className="modal-body">
              <ul
                className="nav nav-tabs nav-justified newgroup_ul mt-0"
                role="tablist"
              >
                <li className="nav-item">
                  <a className="nav-link active"
                    data-toggle="tab"
                    role="tab"
                    aria-selected="true"
                  >
                    Members
                  </a>
                </li>
              </ul>

              <div className="tab-content" role="tablist">
                <div className="tab-pane fade show active" role="tabpanel">
                  <nav className="list-group list-group-flush mb-n6">
                    <form className="mb-3 newgroup_content">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control form-control-lg newgroup_search"
                          placeholder="Search for messages or users..."
                          aria-label="Search for messages or users..."
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn"
                            type="submit"
                          >
                            <i className="fas fa-search newgroup_fa_search"></i>
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="mb-6">
                      <small className="text-uppercase">A</small>
                    </div>

                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar avatar-online mr-5">
                            <img
                              className="avatar-img group_image"
                              src={avatar2}
                              alt="Anna Bridges"
                            />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Anna Bridges</h6>
                            <small className="text-muted">Online</small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Voice call"
                              >
                                <a
                                  
                                  onClick={() => this.handleShow("voice")}
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-phone-alt"></i>
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Video call"
                              >
                                <a
                                  
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  onClick={() => this.handleShow("video")}
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-video"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <label
                        className="stretched-label"
                      ></label>
                    </div>

                    <div className="mb-6">
                      <small className="text-uppercase">B</small>
                    </div>

                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img
                              className="avatar-img group_image"
                              src={avatar1}
                            />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Brian Dawson</h6>
                            <small className="text-muted">
                              last seen 2 hours ago
                            </small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Voice call"
                              >
                                <a
                                  
                                  onClick={() => this.handleShow("voice")}
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-phone-alt"></i>
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Video call"
                                onClick={() => this.handleShow("video")}
                              >
                                <a
                                  
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-video"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <label
                        className="stretched-label"
                      ></label>
                    </div>

                    <div className="mb-6">
                      <small className="text-uppercase">L</small>
                    </div>

                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img
                              className="avatar-img group_image"
                              src={avatar2}
                              alt="Leslie Sutton"
                            />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Leslie Sutton</h6>
                            <small className="text-muted">
                              last seen 3 days ago
                            </small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Voice call"
                              >
                                <a
                                  
                                  onClick={() => this.handleShow("voice")}
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-phone-alt"></i>
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Video call"
                                onClick={() => this.handleShow("video")}
                              >
                                <a
                                  
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-video"></i>
                                </a>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>

                      <label
                        className="stretched-label"
                      ></label>
                    </div>

                    <div className="mb-6">
                      <small className="text-uppercase">M</small>
                    </div>

                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img
                              className="avatar-img group_image"
                              src={avatar3}
                              alt="Matthew Wiggins"
                            />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Matthew Wiggins</h6>
                            <small className="text-muted">
                              last seen 3 days ago
                            </small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Voice call"
                              >
                                <a
                                  
                                  onClick={() => this.handleShow("voice")}
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-phone-alt"></i>
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Video call"
                                onClick={() => this.handleShow("video")}
                              >
                                <a
                                  
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-video"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <label
                        className="stretched-label"
                      ></label>
                    </div>

                    <div className="mb-6">
                      <small className="text-uppercase">S</small>
                    </div>

                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img
                              className="avatar-img group_image"
                              src={avatar2}
                              alt="Simon Hensley"
                            />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Simon Hensley</h6>
                            <small className="text-muted">
                              last seen 3 days ago
                            </small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Voice call"
                              >
                                <a
                                  
                                  onClick={() => this.handleShow("voice")}
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-phone-alt"></i>
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Video call"
                                onClick={() => this.handleShow("video")}
                              >
                                <a
                                  
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-video"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <label
                        className="stretched-label"
                      ></label>
                    </div>

                    <div className="mb-6">
                      <small className="text-uppercase">W</small>
                    </div>

                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className={avatar3} alt="William Wright" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">William Wright</h6>
                            <small className="text-muted">
                              last seen 3 days ago
                            </small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Voice call"
                              >
                                <a
                                  
                                  onClick={() => this.handleShow("voice")}
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-phone-alt"></i>
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Video call"
                                onClick={() => this.handleShow("video")}
                              >
                                <a
                                  
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-video"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <label
                        className="stretched-label"
                      ></label>
                    </div>

                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img
                              className="avatar-img group_image"
                              src={avatar2}
                              alt="William Greer"
                            />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">William Greer</h6>
                            <small className="text-muted">
                              last seen 10 minutes ago
                            </small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Voice call"
                              >
                                <a
                                  
                                  onClick={() => this.handleShow("voice")}
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-phone-alt"></i>
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                onClick={() => this.handleShow("video")}
                                data-original-title="Video call"
                              >
                                <a
                                  
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-video"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <label
                        className="stretched-label"
                      ></label>
                    </div>

                    <div className="mb-6">
                      <small className="text-uppercase">Z</small>
                    </div>

                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img
                              className="avatar-img group_image"
                              src={avatar1}
                              alt="Zane Mayes"
                            />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Zane Mayes</h6>
                            <small className="text-muted">
                              last seen 3 days ago
                            </small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Voice call"
                              >
                                <a
                                  
                                  onClick={() => this.handleShow("voice")}
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-phone-alt"></i>
                                </a>
                              </li>
                              <li
                                className="list-inline-item"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="Video call"
                                onClick={() => this.handleShow("video")}
                              >
                                <a
                                  
                                  className="btn btn-outline-light"
                                  data-toggle="modal"
                                  data-target="#voice_call"
                                  data-dismiss="modal"
                                >
                                  <i className="fas fa-video"></i>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <label
                        className="stretched-label"
                      ></label>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </>
        </Modal>
      </div>
    );
  }
}

export default CallLog;
