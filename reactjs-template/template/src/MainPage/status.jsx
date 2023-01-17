
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ColoredScrollbars from '../initialpage/ColoredScrollbars';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import {Avatar_01,Avatar_02,Avatar_03,Avatar_04,Avatar_05,Avatar_06,Avatar_07,Avatar_08,Logo,Status_Icon,
  Double_Tick,Carousel,Carousel1,Carousel2} from '../imagepath';

  // const styles = theme => ({
  //   root: {
  //     flexGrow: 1,
  //     height: 'auto',
  //     overflow: 'hidden',
  //     position: 'relative',
  //     display: 'flex',
  //     width:'100%'
  //   },    
  // });

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isstatusmodal : false, 
    };
  }
  statusModalClose() {
    this.setState({ isstatusmodal: false })
  }
  removestatusclass(){
    $('body').removeClass('custom-model-open');
    this.setState({ isstatusmodal: false })
  }
   render() {
     const{isstatusmodal} = this.state
    const {  location } = this.props
    let pathname = location.pathname
      return ( 
        <div className="content main_content">
        {/* sidebar group */}
        <div className="sidebar-group left-sidebar">
          {/* Chats sidebar */}
          <div id="chats" className="left-sidebar-wrap sidebar active">
            <div className="header">
              <div className="header-top">
                <div className="logo ml-2 mt-3">
                  <Link to="/app/index">
                    <img src={Logo} alt="" className="header_image" />
                  </Link>
                </div>
                <ul className="header-action mt-4">
                  <li>
                    <a data-toggle="dropdown">
                      <i className="fas fa-ellipsis-h ellipse_header" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right header_drop_icon">
                      <a className="dropdown-item" data-toggle="modal" data-target="#new_group">New
                        Group</a>
                      <a className="dropdown-item" data-toggle="modal" data-target="#profile_modal">Profile</a>
                      <a className="dropdown-item" data-toggle="modal" data-target="#settings_modal">Settings</a>
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
              <button type="button" className="float-right btn btn-circle btn-sm header_button" data-toggle="modal" data-target="#drag_files">
                <i className="fas fa-plus button_plus" />
              </button>
            </div>
            <div className="search_chat has-search">
              <span className="fas fa-search form-control-feedback" />
              <input className="form-control chat_input" id="search-contact" type="text" placeholder="" />
            </div>
            <ColoredScrollbars className="sidebar-body" id="chatsidebar">
              <h4 className="status-title ml-4">Recent</h4>
              <ul className="user-list mb-4">
                <li className="list-group-item">
                  <a className="first_list" data-toggle="modal" onClick={()=>this.setState({isstatusmodal : true})} data-target="#status-modal">
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
                  <a className="first_list" data-toggle="modal" onClick={()=>this.setState({isstatusmodal : true})} data-target="#status-modal">
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
                  <a className="first_list" data-toggle="modal" onClick={()=>this.setState({isstatusmodal : true})} data-target="#status-modal">
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
                  <a className="first_list" onClick={()=>this.setState({isstatusmodal : true})} data-toggle="modal" data-target="#status-modal">
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
                  <a className="first_list" onClick={()=>this.setState({isstatusmodal : true})} data-toggle="modal" data-target="#status-modal">
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
              </ul>
            </ColoredScrollbars>
          </div>
          {/* /Chats sidebar */}
        </div>
        {/* /Sidebar group */}
        {/* Chat */}
        <div className="status_update">
          <img src={Status_Icon} alt="" className="status_content" />
          <h3 className="status_content_h3">Click on a contact to view their status updates</h3>
        </div>
        <div className="chat" id="middle">
          <div className="chat-header">
            <div className="user-details">
              <div className="d-lg-none ml-2">
                <ul className="list-inline mt-2 mr-2">
                  <li className="list-inline-item">
                    <a className="text-muted px-0 left_side" data-chat="open">
                      <i className="fas fa-arrow-left" />
                    </a>
                  </li>
                </ul>
              </div>
              <figure className="avatar ml-1">
                <img src={Avatar_02} className="rounded-circle" alt="image" />
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
                <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Voice call">
                  <a className="btn btn-outline-light" data-toggle="modal" data-target="#voice_call">
                    <i className="fas fa-phone-alt voice_chat_phone" />
                  </a>
                </li>
                <li className="list-inline-item" data-toggle="tooltip" title="" data-original-title="Video call">
                  <a className="btn btn-outline-light" data-toggle="modal" data-target="#video_call">
                    <i className="fas fa-video" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn btn-outline-light" data-toggle="dropdown">
                    <i className="fas fa-ellipsis-h" />
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
                  <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
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
                    <li><a className="share-msg" title="Share"><i className="fas fa-share" /></a>
                    </li>
                    <li><a className="edit-msg"><i className="fas fa-edit" /></a></li>
                    <li><a className="del-msg"><i className="fas fa-trash-alt" /></a></li>
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
                      <div className="time">Yesterday 14:38 PM <i><img src={Double_Tick} alt="" /></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chats">
                <div className="chat-avatar">
                  <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
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
                      <div className="time">Yesterday 14:42 PM <i><img src={Double_Tick} alt="" /></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-line">
                <span className="chat-date">Today</span>
              </div>
              <div className="chats">
                <div className="chat-avatar">
                  <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
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
                      <div className="time">14:29 PM <i><img src={Double_Tick} alt="" /></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chats">
                <div className="chat-avatar">
                  <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
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
                      <div className="time">14:32 PM <i><img src={Double_Tick} alt="" /></i></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="chat-line">
                <span className="chat-date">1 message unread</span>
              </div>
              <div className="chats">
                <div className="chat-avatar">
                  <img src={Avatar_02} className="rounded-circle dreams_chat" alt="image" />
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
                      <div className="time">14:34 PM <i><img src={Double_Tick} alt="" /></i></div>
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
                  <i className="far fa-smile" />
                </button>
                <button className="btn" type="button" data-toggle="modal" data-target="#drag_files">
                  <i className="fas fa-paperclip" />
                </button>
                <button className="btn" type="button">
                  <i className="fas fa-microphone-alt" />
                </button>
                <button className="btn send-btn" type="submit">
                  <i className="fab fa-telegram-plane" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* /Chat */}
        {/* Upload Documents */}
        <div id="drag_files" className="modal fade" role="dialog">
          <div className="modal-dialog modal-md modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Drag and drop files upload</h4>
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body">
                <form id="js-upload-form">
                  <div className="upload-drop-zone" id="drop-zone">
                    <i className="fa fa-cloud-upload fa-2x" /> <span className="upload-text">Just drag and
                      drop files here</span>
                  </div>
                </form>
                <div className="text-center mt-0">
                  <button className="btn newgroup_create m-0" data-dismiss="modal">Add to upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Upload Documents */}
        {/* Voice call */}
        <div className="modal fade voice_pop" id="voice_call" role="document">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content voice_content ml-3">
              <div className="modal-body voice_body">
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img alt="User Image" src={Avatar_02} className="call-avatar" />
                        <h4>Tobbias Williams</h4>
                        <span className="chat_cal">calling...</span>
                      </div>
                      <div className="call-items">
                        <a className="btn call-item call-end" data-dismiss="modal">
                          <i className="fas fa-phone-alt phone_icon" /></a>
                        <a className="btn call-item call-start" data-dismiss="modal"> <i className="fas fa-phone-alt" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Voice call */}
        {/* Video Call */}
        <div className="modal fade voice_pop" id="video_call" role="document">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content voice_content ml-3">
              <div className="modal-body voice_body">
                <div className="call-box incoming-box">
                  <div className="call-wrapper">
                    <div className="call-inner">
                      <div className="call-user">
                        <img alt="User Image" src={Avatar_02} className="call-avatar" />
                        <h4>Tobbias Williams</h4>
                        <span className="chat_cal">calling...</span>
                      </div>
                      <div className="call-items">
                        <a className="btn call-item call-end" data-dismiss="modal"><i className="fas fa-phone-alt phone_icon" /></a>
                        <a className="btn call-item call-start" data-dismiss="modal">
                          <i className="fas fa-video" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Video Call */}
        {/* New group modal */}
        <div className="modal fade" id="new_group">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  New Group
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <i className="fas fa-times close_icon" />
                </button>
              </div>
              <div className="modal-body">
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
                    <button className="btn btn-block newgroup_create mb-1 mt-0" type="submit" data-dismiss="modal">Create group</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /New group modal */}
        {/* Profile Modal */}
        <div className="modal fade" id="profile_modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Profile
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <i className="fas fa-times close_icon" />
                </button>
              </div>
              <div className="modal-body">
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
                  <button type="button" className="btn btn-block newgroup_create mb-0" data-dismiss="modal">
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Profile Modal */}
        {/* Settings Modal */}
        <div className="modal fade" id="settings_modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  Settings
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <i className="fas fa-times close_icon" />
                </button>
              </div>
              <div className="modal-body">
                <div className="card-header position-relative account_details">
                  <a className="text-reset d-block stretched-link collapsed">
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
                  <a className="text-reset d-block stretched-link collapsed">
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
                  <button className="btn btn-block newgroup_create mb-0" type="submit" data-dismiss="modal">Save Settings</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Settings Modal */}
        {/* Status modal */}
        {/* style={{display:"block",paddingLeft:"17px",maxWidth:"100%",
            padding:"20px",marginTop:"0",marginBottom:"0",height:'100%',border:"0",backgroundColor:"transparent" }} */}
        <Modal className="status-modal modal-dialog-centered" 
        isOpen={isstatusmodal} toggle={() => this.statusModalClose()}>
            <div className="inner-popup">
              <span className="close custom-status-close" onClick={()=>this.removestatusclass() } data-dismiss="modal"><i className="fas fa-times" /></span>
              <div id="carouselExampleIndicators" className="carousel slide slider" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                  <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                  <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                </ol>
                <div className="carousel-inner status_slider" role="listbox">
                  <div className="carousel-item active">
                    <img src={Carousel} alt="" />
                  </div>
                  <div id="target" className="carousel-item">
                    <img src={Carousel1} alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={Carousel2} alt="" />
                  </div>
                </div>
                <a className="carousel-control-prev" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fas fa-chevron-left" /></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"><i className="fas fa-chevron-right" /></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              <div className="bottom-message-col">
                <ul>
                  <li>
                    <form className="chat_status mt-4">
                      <input type="text" className="form-control text_status mx-auto d-block form_status" placeholder="Reply" />
                      <button className="btn btn-primary send-btn_status" type="submit">
                        <i className="fab fa-telegram-plane status_telegram" />
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            </div>
          </Modal>
      </div>
      );
   }
}

export default withRouter(Status);