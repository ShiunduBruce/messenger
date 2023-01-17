import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logo_small from "../../assets/images/logo-small.png";
import Dropdown from "react-bootstrap/Dropdown";

import avatar1 from "../../assets/images/profiles/avatar-01.jpg";
import avatar2 from "../../assets/images/profiles/avatar-02.jpg";
import avatar3 from "../../assets/images/profiles/avatar-03.jpg";
import avatar4 from "../../assets/images/profiles/avatar-04.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.pathname.split("/")[1] === "admin") {
      require("../../assets/css/style.css");
      require("../../assets/css/feathericon.min.css");
    }
  }

  handlesidebar = () => {
    console.log("d");
    document.body.classList.toggle("mini-sidebar");
  };

  render() {
    const { location } = this.props;
    let pathname = location.pathname;

    const links = ["/admin/error", "/admin/coming-soon"];
    console.log("location.pathname", location.pathname);

    if (links.indexOf(pathname) >= 0) {
      return "";
    }

    return (
      <div>
        <div className="header">
          <div className="header-left">
            <a href="/admin" className="logo">
              <img src={logo} alt="Logo" />
            </a>
            <a href="/admin" className="logo logo-small">
              <img src={logo_small} alt="Logo" width="30" height="30" />
            </a>
          </div>

          <a href="javascript:void(0);" id="toggle_btn" onClick={this.handlesidebar}>
            <i className="fe fe-text-align-left"></i>
          </a>

          <div className="top-nav-search">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Search here"
              />
              <button className="btn" type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>

          <a className="mobile_btn" id="mobile_btn">
            <i className="fa fa-bars"></i>
          </a>

          <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown">
              <a
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i className="fa fa-bell"></i>{" "}
                <span className="badge badge-pill">3</span>
              </a>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <a href="javascript:void(0)" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </a>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={avatar2}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Carlson Tech</span>{" "}
                              has approved{" "}
                              <span className="noti-title">your estimate</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                4 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={avatar3}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                International Software Inc
                              </span>{" "}
                              has sent you a invoice in the amount of{" "}
                              <span className="noti-title">$218</span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                6 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={avatar3}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">John Hendry</span>{" "}
                              sent a cancellation request{" "}
                              <span className="noti-title">
                                Apple iPhone XR
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                8 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="notification-message">
                      <a href="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src={avatar4}
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">
                                Mercury Software Inc
                              </span>{" "}
                              added a new product{" "}
                              <span className="noti-title">
                                Apple MacBook Pro
                              </span>
                            </p>
                            <p className="noti-time">
                              <span className="notification-time">
                                12 mins ago
                              </span>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <a href="#">View all Notifications</a>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown has-arrow">
              <Dropdown className="user-dropdown">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span className="user-img">
                    <img
                      className="rounded-circle"
                      src={avatar1}
                      width="31"
                      alt="Ryan Taylor"
                    />
                  </span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1" className="no-padding">
                    <div className="user-header">
                      <div className="avatar avatar-sm">
                        <img
                          src={avatar2}
                          alt="User"
                          className="avatar-img rounded-circle"
                        />
                      </div>
                      <div className="user-text">
                        <h6>Ryan Taylor</h6>
                        <p className="text-muted mb-0">Administrator</p>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="/admin/settings">
                    {" "}
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="/admin/settings">Settings</Dropdown.Item>
                  <Dropdown.Item href="/admin">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
