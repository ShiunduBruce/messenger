import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";

class SidebarNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null,
    };
  }

  handleShow(id) {
    this.setState({
      show: id,
    });
  }

  onhandleCloseMenu = (e) => {
    let allElements = Array.from(
      document.querySelectorAll(".main-wrapper.slide-nav")
    );
    for (let element of allElements) {
      element.classList.remove("slide-nav");
    }
    let allElements1 = Array.from(
      document.querySelectorAll(".sidebar-overlay.opened")
    );
    for (let element of allElements1) {
      element.classList.remove("opened");
    }
  };

  render() {
    
    const { location } = this.props;
    let pathname = location.pathname;

    const links = ["/admin/error", "/admin/coming-soon"]; 
    console.log('location.pathname', location.pathname)

    if(links.indexOf(pathname) >= 0){
      return ""
    }

    return (
      <div className="sidebar" id="sidebar">
        <div className="primary-nav">
          <nav role="navigation" className="menu">
            <Scrollbars
              style={{
                width: 250,
                height: "100%",
                backgroundColor: "rgb(121 145 165)",
              }}
              className="menu"
            >
              <div className="overflow-container">
                <ul className="menu-dropdown">
                  <li className={`${"/admin" === pathname ? "active" : ""}`}>
                    <Link to="/admin" exact="true">
                      <i className="fe fe-home"></i>
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li
                    className={`submenu ${
                      "/admin/user" === pathname ||
                      "/admin/user/blocked-user" === pathname ||
                      "/admin/user/report-user" === pathname
                        ? "active"
                        : ""
                    }`}
                  >
                    <span className="icon"></span>

                    <a href="#0" onClick={() => this.handleShow("user")}>
                      {" "}
                      <i class="fe fe-users"></i>
                      <span>Users</span>
                    </a>

                    <label title="toggle menu" htmlFor="user">
                      <span className="downarrow">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </label>
                    <input
                      type="checkbox"
                      className="sub-menu-checkbox"
                      id="user"
                    />

                    <ul
                      className={`sub-menu-dropdown submenu ${
                        this.state.show === "user" ? "active" : ""
                      } `}
                    >
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link
                          className={`submenu ${
                            "/admin/user" === pathname ? "active" : ""
                          }`}
                          to="/admin/user"
                          exact="true"
                        >
                          <span>Users</span>
                        </Link>
                      </li>
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link  className={`submenu ${"/admin/user/blocked-user" === pathname ? "active" : ""
                          }`} 
                        to="/admin/user/blocked-user" exact="true">
                          <span>Blocked User</span>
                        </Link>
                      </li>
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link  className={`submenu ${
                            "/admin/user/report-user" === pathname ? "active" : ""
                          }`} to="/admin/user/report-user" exact="true">
                          <span>Report User</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`submenu`}>
                    <span className="icon"></span>

                    <a href="#0" onClick={() => this.handleShow("chat")}>
                      {" "}
                      <i class="fe fe-comments"></i><span>Chat</span>
                    </a>

                    <label title="toggle menu" htmlFor="history">
                      <span className="downarrow">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </label>
                    <input
                      type="checkbox"
                      className="sub-menu-checkbox"
                      id="history"
                    />

                    <ul
                      className={`sub-menu-dropdown submenu ${
                        this.state.show === "chat" ? "active" : ""
                      } `}
                    >
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link to="#0"  exact="true">
                          Chat
                        </Link>
                      </li>
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link to="#0" exact="true">
                          Group Chat
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`submenu ${
                      "/admin/history/call-history" === pathname ||
                      "/admin/history/group-history" === pathname ||
                      "" === pathname
                        ? "active"
                        : ""
                    }`}
                  >
                    <span className="icon"></span>

                    <a href="#0" onClick={() => this.handleShow("history")}>
                      {" "}
                      <i class="fe fe-sync"></i><span>History</span>
                    </a>

                    <label title="toggle menu" htmlFor="history">
                      <span className="downarrow">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </label>
                    <input
                      type="checkbox"
                      className="sub-menu-checkbox"
                      id="history"
                    />

                    <ul
                      className={`sub-menu-dropdown submenu ${
                        this.state.show === "history" ? "active" : ""
                      } `}
                    >
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link 
                        className={`submenu ${
                          "/admin/history/call-history" === pathname ? "active" : ""
                        }`}
                        to="/admin/history/call-history" exact="true">
                          Call History
                        </Link>
                      </li>
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link 
                         className={`submenu ${
                          "/admin/history/group-history" === pathname ? "active" : ""
                        }`}
                        to="/admin/history/group-history" exact="true">
                          Group History
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`submenu ${
                      "/admin/settings" === pathname ||
                      "/admin/settings/admob" === pathname ||
                      "/admin/settings/sinch" === pathname ||
                      "/admin/settings/firebase" === pathname
                        ? "active"
                        : ""
                    }`}
                  >
                    <span className="icon"></span>

                    <a href="#0" onClick={() => this.handleShow("settings")}>
                      {" "}
                      <i class="fe fe-gear"></i><span>Settings</span>
                    </a>

                    <label title="toggle menu" htmlFor="settings">
                      <span className="downarrow">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </label>
                    <input
                      type="checkbox"
                      className="sub-menu-checkbox"
                      id="settings"
                    />

                    <ul
                      className={`sub-menu-dropdown submenu ${
                        this.state.show === "settings" ? "active" : ""
                      } `}
                    >
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link 
                          className={`submenu ${
                            "/admin/settings" === pathname ? "active" : ""
                          }`}
                        to="/admin/settings" exact="true">
                          General
                        </Link>
                      </li>
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link 
                        className={`submenu ${
                          "/admin/settings/admob" === pathname ? "active" : ""
                        }`}
                        to="/admin/settings/admob" exact="true">
                          Admob
                        </Link>
                      </li>
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link 
                          className={`submenu ${
                            "/admin/settings/sinch" === pathname ? "active" : ""
                          }`}
                          to="/admin/settings/sinch" exact="true">
                          Sinch Settings
                        </Link>
                      </li>
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link 
                         className={`submenu ${
                          "/admin/settings/firebase" === pathname ? "active" : ""
                        }`}
                        to="/admin/settings/firebase" exact="true">
                          Firebase Settings
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${
                      "/admin/blank-page" === pathname ? "active" : ""
                    }`}
                    onClick={(e) => this.onhandleCloseMenu(e)}
                  >
                    <Link 
                     className={`submenu ${
                      "/admin/blank-page" === pathname ? "active" : ""
                    }`}
                    to="/admin/blank-page" exact="true">
                      <i class="fe fe-file"></i><span>Blank Pages</span>
                    </Link>
                  </li>
                  <li
                    className={`${"/admin/error" === pathname ? "active" : ""}`}
                    onClick={(e) => this.onhandleCloseMenu(e)}
                  >
                    <Link to="/admin/error" exact="true">
                    <i class="fe fe-map"></i><span>Vector Maps</span>
                    </Link>
                  </li>
                  <li
                    className={`${
                      "/admin/coming-soon" === pathname ? "active" : ""
                    }`}
                    onClick={(e) => this.onhandleCloseMenu(e)}
                  >
                    <Link to="/admin/coming-soon" exact="true">
                      {" "}
                      <i class="fe fe-vector"></i> <span>Components</span>
                    </Link>
                  </li>
                  <li onClick={(e) => this.onhandleCloseMenu(e)}>
                    <Link to="#0" exact="true">
                    <i class="fe fe-layout"></i><span>Forms</span>
                    </Link>
                  </li>
                  <li onClick={(e) => this.onhandleCloseMenu(e)}>
                    <Link to="#0" exact="true">
                    <i class="fe fe-table"></i><span>Tables</span>
                    </Link>
                  </li>
                  <li>
                    <span>
                      <a href="#0" onClick={() => this.handleShow("level")}>
                      <i class="fe fe-code"></i> <span>Multi Level</span> 
                      </a>
                    </span>

                    <label title="toggle menu" htmlFor="settings">
                      <span className="downarrow">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </label>
                    <input
                      type="checkbox"
                      className="sub-menu-checkbox"
                      id="settings"
                    />

                    <ul
                      className={`sub-menu-dropdown submenu ${
                        this.state.show === "level" ? "active" : ""
                      } `}
                    >
                      <li onClick={(e) => this.onhandleCloseMenu(e)}>
                        <Link to="#0" exact="true">
                          Level1
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${"#0" === pathname ? "active" : ""}`}
                    onClick={(e) => this.onhandleCloseMenu(e)}
                  >
                    <span className="icon"></span>
                    <Link to="#0" exact="true">
                      {" "}
                      <i className="fe fe-user-plus"></i>Level2
                    </Link>
                  </li>
                </ul>
              </div>
            </Scrollbars>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(SidebarNav);
