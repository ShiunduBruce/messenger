/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import ColoredScrollbars from '../ColoredScrollbars';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';

import {Avatar_01,Avatar_02,Avatar_03,Avatar_04,Avatar_05,Avatar_06,Avatar_07,Avatar_08,Logo,
  Carousel,Carousel1,Carousel2,Media1,Media2,Media3,Incoming_Call_Icon,Missed_Call_Icon} from '../../imagepath';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isnewgroupmodal : false ,
      issettingmodal : false,
      isprofilemodal : false,
      ischatnewmodal:false,
      ischatindexmodal : false, 
      isstatusmodal : false, 
      iscalllogmodal : false, 
    };
  }
  newgroupModalClose() {
    this.setState({ isnewgroupmodal: false })
  }
  settingModalClose() {
    this.setState({ issettingmodal: false })
  }
  profileModalClose() {
    this.setState({ isprofilemodal: false })
  }
  chatnewModalClose() {
    this.setState({ ischatnewmodal: false })
  }
  chatindexModalClose() {
    this.setState({ ischatindexmodal: false })
  }
  statusModalClose() {
    this.setState({ isstatusmodal: false })
  }
  calllogModalClose() {
    this.setState({ iscalllogmodal: false })
  }
  renderView({ style, ...props }) {
    const { top } = this.state;
    const viewStyle = {
        padding: 15,
        backgroundColor: `rgb(${Math.round(255 - (top * 255))}, ${Math.round(top * 255)}, ${Math.round(255)})`,
        color: `rgb(${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))}, ${Math.round(255 - (top * 255))})`
    };
    return (
        <div
            className="box"
            style={{ ...style, ...viewStyle }}
            {...props}>
              
              </div>
    );
}
   render() {
    const{isnewgroupmodal,issettingmodal,isprofilemodal,ischatnewmodal,ischatindexmodal,isstatusmodal,iscalllogmodal} = this.state
    const {  location } = this.props
    let pathname = location.pathname

    return (
      <div className="sidebar-group left-sidebar chat_sidebar">
      {/* Chats sidebar */}
      <div id="chats" className="left-sidebar-wrap sidebar active">
        <div className="header">
          <div className="header-top">
            <div className="logo ml-2 mt-3">
              <Link to="/app/index">
                <img src={Logo} className="header_image img-fluid" alt="" />
              </Link>
            </div>
            <ul className="header-action mt-4">
              <li>
                <a data-toggle="dropdown">
                  <i className="fas fa-ellipsis-h ellipse_header" />
                </a>
                <div className="dropdown-menu dropdown-menu-right header_drop_icon">
                  <a className="dropdown-item" onClick={()=>this.setState({isnewgroupmodal : true})} 
                        data-toggle="modal" data-target="#new_group">New Group</a>
                  <a className="dropdown-item" onClick={()=>this.setState({isprofilemodal : true})} 
                        data-toggle="modal" data-target="#profile_modal">Profile</a>
                  <a className="dropdown-item" onClick={()=>this.setState({issettingmodal : true})}
                         data-toggle="modal" data-target="#settings_modal">Settings</a>
                  <Link to="/login" className="dropdown-item">Logout</Link>
                </div>
              </li>
            </ul>
          </div>
          <ul className="nav nav-tabs chat-tabs mt-4">
            <li className="nav-item">
              <Link className={pathname.includes('index') ?"nav-link active" :"nav-link"} to="/app/index">Chat</Link>
            </li>
            <li className="nav-item ml-1">
              <Link className={pathname.includes('group') ?"nav-link active" :"nav-link"} to="/app/group">Group</Link>
            </li>
            <li className="nav-item ml-1">
              <Link className={pathname.includes('status') ?"nav-link active" :"nav-link"} to="/app/status">Status</Link>
            </li>
            <li className="nav-item ml-1">
              <Link className={pathname.includes('call-log') ?"nav-link active" :"nav-link"} to="/app/call-log">Call</Link>
            </li>
          </ul>
          <button type="button" className="float-right btn btn-circle btn-sm header_button" onClick={()=>
            pathname.includes('index') ?  this.setState({ischatindexmodal : true}) : 
            pathname.includes('group') ?  this.setState({isnewgroupmodal : true}) :
            pathname.includes('status') ?  this.setState({isstatusmodal : true}) :
            this.setState({iscalllogmodal : true}) }
             data-toggle="modal" data-target="#chat-new">
            <i className="fas fa-plus button_plus" />
          </button>
        </div>
        <div className="search_chat has-search">
          <span className="fas fa-search form-control-feedback" />
          <input className="form-control chat_input" id="search-contact" type="text" placeholder="" />
        </div>
        {pathname.includes('index') ?
        <ColoredScrollbars className="sidebar-body" id="chatsidebar">
          <ul className="user-list" style={{padding:"0px 25px 0px 0px"}}>
            <li className="user-list-item">
              <div className="avatar avatar-online">
                <img src={Avatar_08} className="rounded-circle" alt="image" />
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
                        <i className="fas fa-ellipsis-h ellipse_header" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a  className="dropdown-item">Open</a>
                        <a  className="dropdown-item dream_profile_menu">Profile</a>
                        <a  className="dropdown-item">Add to archive</a>
                        <div className="dropdown-divider" />
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
                  <img src={Avatar_07} className="rounded-circle" alt="image" />
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
                        <i className="fas fa-ellipsis-h ellipse_header" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a  className="dropdown-item">Open</a>
                        <a  data-navigation-target="contact-information" className="dropdown-item dream_profile_menu">Profile</a>
                        <a  className="dropdown-item">Add to archive</a>
                        <div className="dropdown-divider" />
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
                  <img src={Avatar_01} className="rounded-circle" alt="image" />
                </div>
              </div>
              <div className="users-list-body">
                <div>
                  <h5 className="list_group_notread">Eric Knight</h5>
                  <p>Welcome to the community mate! 👍</p>
                </div>
                <div className="last-chat-time">
                  <small className="text-muted">Yesterday</small>
                  <div className="new-message-count" />
                  <div className="chat-toggle mt-1">
                    <div className="dropdown">
                      <a data-toggle="dropdown" >
                        <i className="fas fa-ellipsis-h ellipse_header" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a  className="dropdown-item">Open</a>
                        <a  data-navigation-target="contact-information" className="dropdown-item dream_profile_menu">Profile</a>
                        <a  className="dropdown-item">Add to archive</a>
                        <div className="dropdown-divider" />
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
                  <img src={Avatar_02} className="rounded-circle" alt="image" />
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
                        <i className="fas fa-ellipsis-h ellipse_header open_drop" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a  className="dropdown-item">Open</a>
                        <a  data-navigation-target="contact-information" className="dropdown-item dr_menu">Profile</a>
                        <a  className="dropdown-item">Add to archive</a>
                        <div className="dropdown-divider" />
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
                  <img src={Avatar_03} className="rounded-circle" alt="image" />
                </div>
              </div>
              <div className="users-list-body">
                <div>
                  <h5 className="list_group_notread">Irene Perkins</h5>
                  <p><i className="fa fa-camera mr-1" /> I will miss you, too, my dear!</p>
                </div>
                <div className="last-chat-time">
                  <small className="text-muted">Yesterday</small>
                  <div className="new-message-count" />
                  <div className="chat-toggle mt-1">
                    <div className="dropdown">
                      <a data-toggle="dropdown" >
                        <i className="fas fa-ellipsis-h ellipse_header" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a  className="dropdown-item">Open</a>
                        <a  data-navigation-target="contact-information" className="dropdown-item dream_profile_menu">Profile</a>
                        <a  className="dropdown-item">Add to archive</a>
                        <div className="dropdown-divider" />
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
                  <img src={Avatar_04} className="rounded-circle" alt="image" />
                </div>
              </div>
              <div className="users-list-body">
                <div>
                  <h5 className="list_group_notread">Carol Andre</h5>
                  <p><i className="fa fa-camera mr-1" /> Photo</p>
                </div>
                <div className="last-chat-time">
                  <small className="text-muted">Yesterday</small>
                  <div className="new-message-count" />
                  <div className="chat-toggle mt-1">
                    <div className="dropdown">
                      <a data-toggle="dropdown" >
                        <i className="fas fa-ellipsis-h ellipse_header" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a  className="dropdown-item">Open</a>
                        <a  data-navigation-target="contact-information" className="dropdown-item dream_profile_menu">Profile</a>
                        <a  className="dropdown-item">Add to archive</a>
                        <div className="dropdown-divider" />
                        <a  className="dropdown-item">Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </ColoredScrollbars> : pathname.includes('call-log') ?
        <ColoredScrollbars className="sidebar-body" id="chatsidebar">
          <ul className="user-list" style={{padding:"0px 25px 0px 0px"}}>
            <li className="user-list-item">
              <div className="avatar avatar-online">
                <img src={Avatar_08} className="rounded-circle" alt="image" />
              </div>
              <div className="users-list-body">
                <div>
                  <h5>Regina Dickerson</h5>
                  <p><small className="text-muted">Today, 14:45 pm</small></p>
                </div>
                <div className="last-chat-time">
                  <div className="last-chat-time">
                    <i className="missed-col"><img src={Incoming_Call_Icon} alt="" className="mCS_img_loaded" /></i>
                  </div>
                </div>    
              </div>
            </li>
            <li className="user-list-item">
              <div>
                <div className="avatar avatar-away">
                  <img src={Avatar_07} className="rounded-circle" alt="image" />
                </div>
              </div>
              <div className="users-list-body">
                <div>
                  <h5>Kevin Howard</h5>
                  <p><small className="text-muted">Today, 08:45 pm</small></p>
                </div>
                <div className="last-chat-time">
                  <i className="missed-col"><img src={Missed_Call_Icon} alt="" className="mCS_img_loaded" /></i>
                </div>
              </div>
            </li>
            <li className="user-list-item">
              <div>
                <div className="avatar avatar-offline">
                  <img src={Avatar_01} className="rounded-circle" alt="image" />
                </div>
              </div>
              <div className="users-list-body">
                <div>
                  <h5 className="list_group_notread">Eric Knight</h5>
                  <small className="text-muted">Yesterday</small>
                </div>
                <div className="last-chat-time">
                  <i className="missed-col"><img src={Incoming_Call_Icon} alt="" className="mCS_img_loaded" /></i>
                </div>
              </div>
            </li>
            <li className="user-list-item unread">
              <div>
                <div className="avatar avatar-online">
                  <img src={Avatar_02} className="rounded-circle" alt="image" />
                </div>
              </div>
              <div className="users-list-body">
                <div>
                  <h5>Scott Albright</h5>
                  <p><small className="text-muted">Today, 11:43 PM</small></p>
                </div>
                <div className="last-chat-time">
                  <i className="missed-col"><img src={Missed_Call_Icon} alt="" className="mCS_img_loaded" /></i>
                </div>
              </div>
            </li>
            <li className="user-list-item">
              <div>
                <div className="avatar avatar-away">
                  <img src={Avatar_03} className="rounded-circle" alt="image" />
                </div>
              </div>
              <div className="users-list-body">
                <div>
                  <h5 className="list_group_notread">Irene Perkins</h5>
                  <p><small className="text-muted">Yesterday</small></p>
                </div>
                <div className="last-chat-time">
                  <i className="missed-col"><img src={Incoming_Call_Icon} alt="" className="mCS_img_loaded" /></i>
                </div>
              </div>
            </li>
            <li className="user-list-item">
                <div>
                  <div className="avatar avatar-online">
                    <img src={Avatar_04} className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5 className="list_group_notread">Carol Andre</h5>
                    <p><small className="text-muted">Yesterday</small></p>
                  </div>
                  <div className="last-chat-time">
                    <i className="missed-col"><img src={Incoming_Call_Icon} alt="" className="mCS_img_loaded" /></i>
                  </div>
                </div>
              </li>
          </ul> </ColoredScrollbars> : pathname.includes('group') ? 
        <ColoredScrollbars className="sidebar-body" id="chatsidebar">
          <ul className="user-list" style={{padding:"0px 25px 0px 0px"}}>
              <li className="user-list-item">
                <div className="avatar">
                  <img src={Media2} className="rounded-circle" alt="image" />
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Baddies and Buddies</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing</p>
                  </div>
                  <div className="avatar-group group-col">
                    <div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_08} />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_07} />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <span className="avatar-title rounded-circle border border-white">14+</span>
                      </div>
                    </div>
                    <small className="text-muted float-right">08:45 am</small>
                  </div>    
                </div>
              </li>
              <li className="user-list-item unread">
                <div>
                  <div className="avatar">
                    <img src={Carousel1} className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Dreams Team</h5>
                    <p>Lorem Ipsum has been the industry's standard</p>
                  </div>
                  <div className="avatar-group group-col">
                    <div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_01} />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_02} />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <span className="avatar-title rounded-circle border border-white">10+</span>
                      </div>
                    </div>
                    <small className="text-muted float-right">09.50 am</small>
                  </div>
                </div>
              </li>
              <li className="user-list-item">
                <div>
                  <div className="avatar">
                    <img src={Media3} className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5 className="list_group_notread">Chamber of Secrets</h5>
                    <p>Welcome to the community mate! 👍</p>
                  </div>
                  <div className="avatar-group group-col">
                    <div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_03} />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <img className="avatar-img rounded-circle border border-white" alt="User Image" src={Avatar_01} />
                      </div>
                      <div className="avatar avatar-xs group_img group_header">
                        <span className="avatar-title rounded-circle border border-white">8+</span>
                      </div>
                    </div>
                    <small className="text-muted float-right">Yesterday</small>
                  </div>
                </div>
              </li>
              <li className="user-list-item">
                <div>
                  <div className="avatar">
                    <img src={Media1} className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5>Family Members</h5>
                    <p>I remember everything mate. See you later 🤘</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">06:18 am</small>
                    <div className="chat-toggle mt-1">
                      <div className="dropdown">
                        <a data-toggle="dropdown" >
                          <i className="fas fa-ellipsis-h ellipse_header open_drop" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a  className="dropdown-item">Open</a>
                          <a  data-navigation-target="contact-information" className="dropdown-item dream_profile_menu">Profile</a>
                          <a  className="dropdown-item">Add to archive</a>
                          <div className="dropdown-divider" />
                          <a  className="dropdown-item">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="user-list-item">
                <div>
                  <div className="avatar">
                    <img src={Avatar_03} className="rounded-circle" alt="image" />
                  </div>
                </div>
                <div className="users-list-body">
                  <div>
                    <h5 className="list_group_notread">All in the Mind</h5>
                    <p><i className="fa fa-camera mr-1" /> I will miss you, too, my dear!</p>
                  </div>
                  <div className="last-chat-time">
                    <small className="text-muted">Yesterday</small>
                    <div className="new-message-count" />
                    <div className="chat-toggle mt-1">
                      <div className="dropdown">
                        <a data-toggle="dropdown" >
                          <i className="fas fa-ellipsis-h ellipse_header" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a  className="dropdown-item">Open</a>
                          <a  data-navigation-target="contact-information" className="dropdown-item dream_profile_menu">Profile</a>
                          <a  className="dropdown-item">Add to archive</a>
                          <div className="dropdown-divider" />
                          <a  className="dropdown-item">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="user-list-item">
              <div>
                <div className="avatar">
                  <img src={Avatar_04} className="rounded-circle" alt="image" />
                </div>
              </div>
              <div className="users-list-body">
                <div>
                  <h5 className="list_group_notread">Smells Like Team Spirit</h5>
                  <p><i className="fa fa-camera mr-1" /> Photo</p>
                </div>
                <div className="last-chat-time">
                  <small className="text-muted">Yesterday</small>
                  <div className="new-message-count" />
                  <div className="chat-toggle mt-1">
                    <div className="dropdown">
                      <a data-toggle="dropdown" >
                        <i className="fas fa-ellipsis-h ellipse_header" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a  className="dropdown-item">Open</a>
                        <a  data-navigation-target="contact-information" className="dropdown-item dream_profile_menu">Profile</a>
                        <a  className="dropdown-item">Add to archive</a>
                        <div className="dropdown-divider" />
                        <a  className="dropdown-item">Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul></ColoredScrollbars> : 
        <ColoredScrollbars className="sidebar-body" id="chatsidebar">
          <h4 className="status-title ml-4">Recent</h4>
            <ul className="user-list mb-4">
              <li className="list-group-item">
                <a className="first_list"  data-toggle="modal" data-target="#status-modal">
                  <div>
                    <div className="avatar status-active">
                      <img src={Avatar_08} className="rounded-circle" alt="image" />
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
                <a className="first_list"  data-toggle="modal" data-target="#status-modal">
                  <div>
                    <div className="avatar status-active">
                      <img src={Avatar_07} className="rounded-circle" alt="image" />
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
                <a className="first_list"  data-toggle="modal" data-target="#status-modal">
                  <div className="avatar status-active">
                    <img src={Avatar_01} className="rounded-circle" alt="image" />
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
                <a className="first_list"  data-toggle="modal" data-target="#status-modal">
                  <div>
                    <div className="avatar status-active">
                      <img src={Avatar_02} className="rounded-circle" alt="image" />
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
          <h4 className="status-title ml-4">Viewed</h4>
            <ul className="user-list">
              <li className="list-group-item">
                  <a className="first_list"  data-toggle="modal" data-target="#status-modal">
                    <div>
                      <div className="avatar">
                        <img src={Avatar_03} className="rounded-circle" alt="image" />
                      </div>
                    </div>
                    <div className="users-list-body mt-2">
                      <div>
                        <h5>Irene Perkins</h5>
                        <p className="text-muted">Yesterday, 08.45pm</p>
                      </div>
                    </div>
                  </a>
                </li>
            </ul></ColoredScrollbars> }
      </div>
      {/* / Chats sidebar */}
      {/* New group modal */}
        <Modal className="modal-dialog-centered" isOpen={isnewgroupmodal} toggle={() => this.newgroupModalClose()}>
            <ModalHeader toggle={() => this.newgroupModalClose()}>New Group</ModalHeader>
            <ModalBody>
              {/* Tabs */}
              <ul className="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" role="tab" aria-selected="true">Details</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" role="tab" aria-selected="false">Members</a>
                </li>
              </ul>
              {/* Tabs */}	
              {/* Create chat */}
              <div className="tab-content" role="tablist">
                {/* Chat details */}
                <div id="create-group-details" className="tab-pane fade show active" role="tabpanel">
                  <form action="#">
                    <div className="form-group">
                      <label>Name</label>
                      <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Group Name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="new-chat-topic">Topic (optional)</label>
                      <input className="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Group Topic" />
                    </div>
                    <div className="form-group mb-0">
                      <label htmlFor="new-chat-description">Description</label>
                      <textarea className="form-control form-control-lg group_control_text" name="new-chat-description" id="new-chat-description" rows={6} placeholder="Group Description" defaultValue={""} />
                    </div>
                  </form>
                </div>
                {/* Chat details */}
                {/* Chat Members */}
                <div id="create-group-members" className="tab-pane fade create-group-members" role="tabpanel">
                  <nav className="list-group list-group-flush mb-n6">
                    {/* Search */}
                    <form className="mb-3 newgroup_content">
                      <div className="input-group">
                        <input type="text" className="form-control form-control-lg newgroup_search" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                        <div className="input-group-append">
                          <button className="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn" type="submit">
                            <i className="fas fa-search newgroup_fa_search" />
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* Search */}
                    <div className="mb-6">
                      <small className="text-uppercase">A</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar avatar-online mr-5">
                            <img className="avatar-img group_image" src={Avatar_07} alt="Anna Bridges" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Anna Bridges</h6>
                            <small className="text-muted">Online</small>
                          </div>
                          <div className="align-self-center ml-auto">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" id="id-user-1" type="checkbox" />
                              <label className="custom-control-label" htmlFor="id-user-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-1" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">B</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_01} alt="Brian Dawson" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Brian Dawson</h6>
                            <small className="text-muted">last seen 2 hours ago</small>
                          </div>
                          <div className="align-self-center ml-auto">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" id="id-user-2" type="checkbox" />
                              <label className="custom-control-label" htmlFor="id-user-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-2" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">L</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_02} alt="Leslie Sutton" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Leslie Sutton</h6>
                            <small className="text-muted">last seen 3 days ago</small>
                          </div>
                          <div className="align-self-center ml-auto">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" id="id-user-3" type="checkbox" />
                              <label className="custom-control-label" htmlFor="id-user-3" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-3" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">M</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_03} alt="Matthew Wiggins" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Matthew Wiggins</h6>
                            <small className="text-muted">last seen 3 days ago</small>
                          </div>
                          <div className="align-self-center ml-auto">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" id="id-user-4" type="checkbox" />
                              <label className="custom-control-label" htmlFor="id-user-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-4" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">S</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_04} alt="Simon Hensley" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Simon Hensley</h6>
                            <small className="text-muted">last seen 3 days ago</small>
                          </div>
                          <div className="align-self-center ml-auto">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" id="id-user-5" type="checkbox" />
                              <label className="custom-control-label" htmlFor="id-user-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-5" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">W</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_05} alt="William Wright" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">William Wright</h6>
                            <small className="text-muted">last seen 3 days ago</small>
                          </div>
                          <div className="align-self-center ml-auto">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" id="id-user-6" type="checkbox" />
                              <label className="custom-control-label" htmlFor="id-user-6" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-6" />
                    </div>
                    {/* Friend */}
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_06} alt="William Greer" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">William Greer</h6>
                            <small className="text-muted">last seen 10 minutes ago</small>
                          </div>
                          <div className="align-self-center ml-auto">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" id="id-user-7" type="checkbox" />
                              <label className="custom-control-label" htmlFor="id-user-7" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-7" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">Z</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_08} alt="Zane Mayes" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Zane Mayes</h6>
                            <small className="text-muted">last seen 3 days ago</small>
                          </div>
                          <div className="align-self-center ml-auto">
                            <div className="custom-control custom-checkbox">
                              <input className="custom-control-input" id="id-user-8" type="checkbox" />
                              <label className="custom-control-label" htmlFor="id-user-8" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-8" />
                    </div>
                    {/* Friend */}
                  </nav>
                </div>
                {/* Chat Members */}
              </div>
              {/* Create chat */}
              {/* Button */}
              <div className="pt-3">
                <div className="container text-center">
                  <button className="btn btn-block newgroup_create mb-1 mt-0" onClick={()=>this.newgroupModalClose()} type="submit" data-dismiss="modal">Create group</button>
                </div>
              </div>
            
            </ModalBody>
        </Modal> 
        {/* /New group modal */}
        {/* Profile Modal */}
        <Modal className="modal-dialog-centered" isOpen={isprofilemodal} toggle={() => this.profileModalClose()}>
            <ModalHeader toggle={() => this.profileModalClose()}>Profile</ModalHeader>
            <ModalBody>
                {/* Card */}
                <div className="card mb-6 profile_Card">
                  <div className="card-body">
                    <div className="text-center py-6">
                      {/* Photo */}
                      <div className="avatar avatar-xl mb-3">
                        <img className="avatar-img rounded-circle mCS_img_loaded" src={Avatar_05} alt="" />
                      </div>
                      <h5>John Janousek</h5>
                      <p className="text-muted m-0">Last seen: Today</p>
                    </div>
                  </div>
                </div>
                {/* Card */}
                {/* Card */}
                <form action="#" className="mt-3">
                  <div className="form-group">
                    <label>Country</label>
                    <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Country Name" />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="+39 02 87 21 43 19" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="johnjanousek@gmail.com" />
                  </div>
                </form>
                {/* Card */}
                <div className="form-row profile_form mt-3 mb-1">
                  {/* Button */}
                  <button type="button" className="btn btn-block newgroup_create mb-0" onClick={()=>this.profileModalClose()} data-dismiss="modal">
                    Update Profile
                  </button>
                </div>              
            </ModalBody>
        </Modal>
        {/* /Profile Modal */}
        {/* Settings Modal */}
        <Modal className="modal-dialog-centered" isOpen={issettingmodal} toggle={() => this.settingModalClose()}>
            <ModalHeader toggle={() => this.settingModalClose()}>Settings</ModalHeader>
            <ModalBody>
                <div className="card-header position-relative account_details">
                  <a  className="text-reset d-block stretched-link collapsed">
                    <div className="row no-gutters align-items-center">
                      {/* Title */}
                      <div className="col">
                        <h5>Account</h5>
                        <p className="m-0">Update your profile details.</p>
                      </div>
                      {/* Icon */}
                      <div className="col-auto">
                        <i className="text-muted icon-md fas fa-user" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card-header position-relative mt-3 security_details">
                  <a  className="text-reset d-block stretched-link collapsed">
                    <div className="row no-gutters align-items-center">
                      {/* Title */}
                      <div className="col">
                        <h5>Security</h5>
                        <p className="m-0">Update your profile details.</p>
                      </div>
                      {/* Icon */}
                      <div className="col-auto">
                        <i className="text-muted icon-md fas fa-crosshairs" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="mt-3">
                  <label htmlFor="profile-name">Name</label>
                  <input className="form-control form-control-lg profile_input group_formcontrol" name="profile-name" id="profile-name" type="text" placeholder="Type your name" />
                </div>
                <div className="mt-4">
                  <label htmlFor="profile-name">Current Password</label>
                  <input className="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_pswd" type="text" placeholder="Current Password" />
                </div>
                <div className="mt-4">
                  <label htmlFor="profile-name">New Password</label>
                  <input className="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_new" type="text" placeholder="New Password" />
                </div>
                <div className="mt-4">
                  <label htmlFor="profile-name">Verify Password</label>
                  <input className="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_prfname" type="text" placeholder="Verify Password" />
                </div>
                <div className="mt-3 text-center">
                  <button className="btn btn-block newgroup_create mb-0" onClick={()=>this.settingModalClose()} type="submit" data-dismiss="modal">Save Settings</button>
                </div>
            </ModalBody>
        </Modal>
        {/* /Settings Modal */}
        {/* Chat New Modal */}
        {pathname.includes('index') ? 
          <Modal className="modal-dialog-centered" isOpen={ischatindexmodal} toggle={() => this.chatindexModalClose()}>
            <ModalHeader toggle={() => this.chatindexModalClose()}>Add Friends</ModalHeader>
            <ModalBody>
              {/* Card */}
              <form action="new-friends">
                <div className="form-group">
                  <label>Phone</label>
                  <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="+39 02 87 21 43 19" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="tobiaswilliams@gmail.com" />
                </div>
              </form>
              {/* Card */}
              <div className="form-row profile_form mt-3 mb-1">
                {/* Button */}
                <button type="button" className="btn btn-block newgroup_create mb-0" 
                data-dismiss="modal" aria-label="Close" onClick={()=>this.chatindexModalClose()}>
                  Submit</button>
              </div>
            </ModalBody>
          </Modal>
        : pathname.includes('status') ?
          <Modal className="modal-dialog-centered" isOpen={isstatusmodal} toggle={() => this.statusModalClose()}>
            <ModalHeader toggle={() => this.statusModalClose()}>Drag and drop files upload</ModalHeader>
            <ModalBody>
              <form id="js-upload-form">
                  <div className="upload-drop-zone" id="drop-zone">
                    <i className="fa fa-cloud-upload fa-2x" /> <span className="upload-text">Just drag and
                      drop files here</span>
                  </div>
                </form>
                <div className="text-center mt-0">
                  <button className="btn newgroup_create m-0" onClick={()=>this.statusModalClose() } data-dismiss="modal">Add to upload</button>
                </div>
            </ModalBody>
          </Modal>
        :
          <Modal className="modal-dialog-centered" isOpen={iscalllogmodal} toggle={() => this.calllogModalClose()}>
            <ModalHeader toggle={() => this.calllogModalClose()}>Call</ModalHeader>
            <ModalBody>
              {/* Tabs */}
              <ul className="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" role="tab" aria-selected="true">Members</a>
                </li>
              </ul>
              {/* Tabs */}
              {/* Create chat */}
              <div className="tab-content" role="tablist">
                {/* Chat details */}
                <div className="tab-pane fade show active" role="tabpanel">
                  {/* Chat Members */}
                  <nav className="list-group list-group-flush mb-n6">
                    {/* Search */}
                    <form className="mb-3 newgroup_content">
                      <div className="input-group">
                        <input type="text" className="form-control form-control-lg newgroup_search" placeholder="Search for messages or users..." aria-label="Search for messages or users..." />
                        <div className="input-group-append">
                          <button className="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn" type="submit">
                            <i className="fas fa-search newgroup_fa_search" />
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* Search */}
                    <div className="mb-6">
                      <small className="text-uppercase">A</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar avatar-online mr-5">
                            <img className="avatar-img group_image" src={Avatar_07} alt="Anna Bridges" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Anna Bridges</h6>
                            <small className="text-muted">Online</small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-phone-alt" />
                                </a>
                              </li>
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-video" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-1" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">B</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_01} alt="Brian Dawson" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Brian Dawson</h6>
                            <small className="text-muted">last seen 2 hours
                              ago</small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-phone-alt" />
                                </a>
                              </li>
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-video" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-2" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">L</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_02} alt="Leslie Sutton" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Leslie Sutton</h6>
                            <small className="text-muted">last seen 3 days
                              ago</small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-phone-alt" />
                                </a>
                              </li>
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-video" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-3" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">M</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_03} alt="Matthew Wiggins" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Matthew Wiggins</h6>
                            <small className="text-muted">last seen 3 days
                              ago</small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-phone-alt" />
                                </a>
                              </li>
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-video" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-4" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">S</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_04} alt="Simon Hensley" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Simon Hensley</h6>
                            <small className="text-muted">last seen 3 days
                              ago</small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-phone-alt" />
                                </a>
                              </li>
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-video" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-5" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">W</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_05} alt="William Wright" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">William Wright</h6>
                            <small className="text-muted">last seen 3 days
                              ago</small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-phone-alt" />
                                </a>
                              </li>
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-video" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-6" />
                    </div>
                    {/* Friend */}
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_06} alt="William Greer" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">William Greer</h6>
                            <small className="text-muted">last seen 10 minutes
                              ago</small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-phone-alt" />
                                </a>
                              </li>
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-video" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-7" />
                    </div>
                    {/* Friend */}
                    <div className="mb-6">
                      <small className="text-uppercase">Z</small>
                    </div>
                    {/* Friend */}
                    <div className="card mb-6 group_card_mb">
                      <div className="card-body">
                        <div className="media">
                          <div className="avatar mr-5">
                            <img className="avatar-img group_image" src={Avatar_08} alt="Zane Mayes" />
                          </div>
                          <div className="media-body align-self-center mr-6 group_card_media">
                            <h6 className="mb-0">Zane Mayes</h6>
                            <small className="text-muted">last seen 3 days
                              ago</small>
                          </div>
                          <div className="align-self-center ml-auto members-call">
                            <ul className="list-inline">
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-phone-alt" />
                                </a>
                              </li>
                              <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                                <a  onClick={()=>this.calllogModalClose()} className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call" data-dismiss="modal">
                                  <i className="fas fa-video" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Label */}
                      <label className="stretched-label" htmlFor="id-user-8" />
                    </div>
                    {/* Friend */}
                  </nav>
                  {/* Chat Members */}
                </div>
                {/* Chat details */}
              </div>
              {/* Create chat */}
            </ModalBody>
          </Modal>
         }         
        {/* /Chat New Modal */}
    </div>
   );
   }
}

export default withRouter(Sidebar);
