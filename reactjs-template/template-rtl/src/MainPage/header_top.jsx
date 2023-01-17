import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import { withRouter } from "react-router";
import avatar2 from "../assets/img/avatar-2.jpg";
import avatar3 from "../assets/img/avatar-3.jpg";
import avatar7 from "../assets/img/avatar-7.jpg";

class HeaderTop extends Component {
  constructor() {
    super();
    this.state = {
      show: null,
      showtab : 1
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
    const {showtab} = this.state
    return (
      <>
        <div className="header-top">
          <div className="logo ml-2 mt-3">
            <Link to="/chat">
              <img src={logo} alt="" className="header_image" />
            </Link>
          </div>
          <ul className="header-action mt-4">
            <Dropdown className="user-dropdown">
              <Dropdown.Toggle id="dropdown-basic">
                <a data-toggle="dropdown">
                  <i className="fas fa-ellipsis-h ellipse_header"></i>
                </a>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => this.handleShow("group")}>
                  New Group
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.handleShow("profile")}>
                  Profile
                </Dropdown.Item>
                <Dropdown.Item onClick={() => this.handleShow("setting")}>
                  Settings
                </Dropdown.Item>
                <Dropdown.Item >
                  <Link style={{color:"black"}} to="/login">Logout</Link> </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
          <Modal
            show={this.state.show === "group" ? true : false}
            onHide={this.close}
            dialogClassName="modal-90w status_modal"
            aria-labelledby="example-custom-modal-styling-title"
            centered
          >
            <div className="modal-header">
              <h5 className="modal-title">Group</h5>
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

            <div className="modal-content">
              <div className="modal-body">
                <ul
                  className="nav nav-tabs nav-justified newgroup_ul mt-0"
                  role="tablist"
                >
                  <li className="nav-item" style={{cursor:"pointer"}}>
                    <a className="nav-link active"
                      data-toggle="tab" onClick={()=>this.setState({showtab : 1})}
                      role="tab"
                      aria-selected="true"
                    >
                      Details
                    </a>
                  </li>

                  <li className="nav-item" style={{cursor:"pointer"}}>
                    <a className="nav-link"
                      data-toggle="tab" onClick={()=>this.setState({showtab : 2})}
                      role="tab"
                      aria-selected="true"
                    >
                      Members
                    </a>
                  </li>
                </ul>
                <div className="tab-content" role="tablist">
                  {showtab === 1 && <div
                    id="create-group-details"
                    className="tab-pane fade show active"
                    role="tabpanel"
                  >
                    <form action="#">
                      <div className="form-group">
                        <label>Name</label>
                        <input
                          className="form-control form-control-lg group_formcontrol"
                          name="new-chat-title"
                          type="text"
                          placeholder="Group Name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Topic (optional)</label>
                        <input
                          className="form-control form-control-lg group_formcontrol"
                          name="new-chat-topic"
                          id="new-chat-topic"
                          type="text"
                          placeholder="Group Topic"
                        />
                      </div>
                      <div className="form-group mb-0">
                        <label>Description</label>
                        <textarea
                          className="form-control form-control-lg group_control_text"
                          name="new-chat-description"
                          id="new-chat-description"
                          rows="6"
                          placeholder="Group Description"
                        ></textarea>
                      </div>
                      <div className="pt-3">
                        <div className="container text-center">
                          <button
                            className="btn btn-block newgroup_create mb-1 mt-0"
                            type="submit"
                            data-dismiss="modal"
                          >
                            Create group
                          </button>
                        </div>
                      </div>
                    </form>
                  </div> }

                  {showtab === 2 && <div
                    id="create-group-members"
                    className="tab-pane fade show active"
                    role="tabpanel"
                  >
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
                            <div className="align-self-center ml-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="id-user-1"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                ></label>
                              </div>
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
                                src={avatar2}
                                alt="Brian Dawson"
                              />
                            </div>
                            <div className="media-body align-self-center mr-6 group_card_media">
                              <h6 className="mb-0">Brian Dawson</h6>
                              <small className="text-muted">
                                last seen 2 hours ago
                              </small>
                            </div>
                            <div className="align-self-center ml-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="id-user-2"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                ></label>
                              </div>
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
                            <div className="align-self-center ml-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="id-user-3"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                ></label>
                              </div>
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
                            <div className="align-self-center ml-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="id-user-4"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                ></label>
                              </div>
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
                            <div className="align-self-center ml-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="id-user-5"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                ></label>
                              </div>
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
                              <img
                                className="avatar-img group_image"
                                src={avatar7}
                                alt="William Wright"
                              />
                            </div>
                            <div className="media-body align-self-center mr-6 group_card_media">
                              <h6 className="mb-0">William Wright</h6>
                              <small className="text-muted">
                                last seen 3 days ago
                              </small>
                            </div>
                            <div className="align-self-center ml-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="id-user-6"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                ></label>
                              </div>
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
                            <div className="align-self-center ml-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="id-user-7"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                ></label>
                              </div>
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
                                src={avatar2}
                                alt="Zane Mayes"
                              />
                            </div>
                            <div className="media-body align-self-center mr-6 group_card_media">
                              <h6 className="mb-0">Zane Mayes</h6>
                              <small className="text-muted">
                                last seen 3 days ago
                              </small>
                            </div>
                            <div className="align-self-center ml-auto">
                              <div className="custom-control custom-checkbox">
                                <input
                                  className="custom-control-input"
                                  id="id-user-8"
                                  type="checkbox"
                                />
                                <label
                                  className="custom-control-label"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <label
                          className="stretched-label"
                        ></label>
                      </div>
                    </nav>
                  </div> }
                </div>

                
              </div>
            </div>
          </Modal>
          <Modal
            show={this.state.show === "setting" ? true : false}
            onHide={this.close}
            dialogClassName="modal-90w status_modal"
            aria-labelledby="example-custom-modal-styling-title"
            centered
          >
            <div className="modal-header">
              <h5 className="modal-title">Settings</h5>
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
              <div className="card-header position-relative account_details">
                <a className="text-reset d-block stretched-link collapsed"
                >
                  <div className="row no-gutters align-items-center">
                    <div className="col">
                      <h5>Account</h5>
                      <p className="m-0">Update your profile details.</p>
                    </div>

                    <div className="col-auto">
                      <i className="text-muted icon-md fas fa-user"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="card-header position-relative mt-3 security_details">
                <a className="text-reset d-block stretched-link collapsed"
                >
                  <div className="row no-gutters align-items-center">
                    <div className="col">
                      <h5>Security</h5>
                      <p className="m-0">Update your profile details.</p>
                    </div>

                    <div className="col-auto">
                      <i className="text-muted icon-md fas fa-crosshairs"></i>
                    </div>
                  </div>
                </a>
              </div>
              <div className="mt-3">
                <label >Name</label>
                <input
                  className="form-control form-control-lg profile_input group_formcontrol"
                  name="profile-name"
                  id="profile-name"
                  type="text"
                  placeholder="Type your name"
                />
              </div>
              <div className="mt-4">
                <label >Current Password</label>
                <input
                  className="form-control form-control-lg group_formcontrol"
                  name="profile-name"
                  id="profile-name_pswd"
                  type="text"
                  placeholder="Current Password"
                />
              </div>
              <div className="mt-4">
                <label >New Password</label>
                <input
                  className="form-control form-control-lg group_formcontrol"
                  name="profile-name"
                  id="profile-name_new"
                  type="text"
                  placeholder="New Password"
                />
              </div>
              <div className="mt-4">
                <label >Verify Password</label>
                <input
                  className="form-control form-control-lg group_formcontrol"
                  name="profile-name"
                  id="profile-name_prfname"
                  type="text"
                  placeholder="Verify Password"
                />
              </div>
              <div className="mt-3 text-center">
                <button
                  className="btn btn-block newgroup_create mb-0"
                  type="submit"
                  data-dismiss="modal"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </Modal>
          <Modal
            show={this.state.show === "profile" ? true : false}
            onHide={this.close}
            dialogClassName="modal-90w status_modal"
            aria-labelledby="example-custom-modal-styling-title"
            centered
          >
            <div className="modal-header">
              <h5 className="modal-title">Profile</h5>
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

            <div className="modal-content">
              <div className="modal-body">
                <div className="card mb-6 profile_Card">
                  <div className="card-body">
                    <div className="text-center py-6">
                      <div className="avatar avatar-xl mb-3">
                        <img
                          className="avatar-img rounded-circle mCS_img_loaded"
                          src={avatar2}
                          alt=""
                        />
                      </div>
                      <h5>John Janousek</h5>
                      <p className="text-muted m-0">Last seen: Today</p>
                    </div>
                  </div>
                </div>

                <form action="#" className="mt-3">
                  <div className="form-group">
                    <label>Country</label>
                    <input
                      className="form-control form-control-lg group_formcontrol"
                      name="new-chat-title"
                      type="text"
                      placeholder="Country Name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      className="form-control form-control-lg group_formcontrol"
                      name="new-chat-title"
                      type="text"
                      placeholder="+39 02 87 21 43 19"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      className="form-control form-control-lg group_formcontrol"
                      name="new-chat-title"
                      type="email"
                      placeholder="johnjanousek@gmail.com"
                    />
                  </div>
                </form>

                <div className="form-row profile_form mt-3 mb-1">
                  <button
                    type="button"
                    className="btn btn-block newgroup_create mb-0"
                    data-dismiss="modal"
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        </div>
        
      </>
    );
  }
}

export default withRouter(HeaderTop);
