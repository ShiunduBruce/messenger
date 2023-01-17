import React,{useEffect} from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
// Import Images
import {Logo,Videocall,user } from "../imagepath";

    const Joincall = () => {   
    useEffect(() => {
      
          if($('.toggle-switch').length > 0) {
            const toggleSwitch = document.querySelector('.toggle-switch input[type="checkbox"]');
            const currentTheme = localStorage.getItem('theme');
            var app = document.getElementsByTagName("BODY")[0];

            if (currentTheme) {
                app.setAttribute('data-theme', currentTheme);
              
                if (currentTheme === 'dark') {
                    toggleSwitch.checked = true;
                }
            }

            function switchTheme(e) {
                if (e.target.checked) {
                    app.setAttribute('data-theme', 'dark');
                    localStorage.setItem('theme', 'dark');
                }
                else {       
                    app.setAttribute('data-theme', 'light');
                    localStorage.setItem('theme', 'light');
                }    
            }

            toggleSwitch.addEventListener('change', switchTheme, false);	
          }
    
          if(window.location.hash == "#LightMode"){
              localStorage.setItem('theme', 'dark');
          }
          else {
              if(window.location.hash == "#DarkMode"){
                  localStorage.setItem('theme', 'light');
              }
          }
            // return () => { document.body.className = ''; }
      });
        return (
          <>
          {/* Main Wrapper */}
          <div className="main-wrapper">
            {/* Header */}
            <header className="header">
              <nav className="navbar navbar-expand-lg header-nav fixed-top">
                <div className="navbar-header">
                  <a href="" className="navbar-brand logo">
                    <img src={Logo} className="img-fluid" alt="Logo" />
                  </a>
                </div>
                <ul className="nav header-navbar-rht">
                  <li className="nav-item dark-mode">
                    <label className="toggle-switch" htmlFor="notification_switch3">
                      <span>
                        <input
                          type="checkbox"
                          className="toggle-switch-input"
                          id="notification_switch3"
                        />
                        <span className="toggle-switch-label ms-auto">
                          <span className="toggle-switch-indicator" />
                        </span>
                      </span>
                      <span>Dark Mode Off</span>
                    </label>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link p-0">
                      <span className="user-img">
                        <img src={user} alt="user" />
                      </span>
                      <span className="user-name">Carl Kelly</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
            {/* /Header */}
            {/* Join Call */}
            <div className="page-content">
              <div className="join-call">
                <div className="join-video">
                  <img
                    src={Videocall}
                    className="img-fluid"
                    alt="Logo"
                  />
                  <div className="video-avatar">
                    <h4>Camera is off</h4>
                  </div>
                  <div className="call-icons">
                    <ul className="call-items">
                      <li className="call-item">
                        <a
                          className="mute-bt"
                          href="#"
                          title=""
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Mute Audio"
                        >
                          <i className="feather-mic" />
                        </a>
                      </li>
                      <li className="call-item">
                        <a
                          className="mute-video"
                          href="#"
                          title=""
                          data-bs-placement="top"
                          data-bs-toggle="tooltip"
                          data-bs-original-title="Stop Camera"
                        >
                          <i className="feather-video" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="join-content">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">What's your name?</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Name here"
                        />
                      </div>
                    </div>
                  </div>
                  <h3>UX/UI Design Conference Meeting</h3>
                  <div className="btn-infos">
                    <Link
                      to="/meeting-single-user"
                      className="btn btn-primary btn-join"
                    >
                      Join Now
                    </Link>
                    <div className="d-flex align-items-center">
                      <span className="icon-mic">
                        <i className="feather-mic" />
                      </span>{" "}
                      <span>Your microphone is working properly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Join Call */}
          </div>
          {/* /Main Wrapper */}
        </>
    
        )
}
export default Joincall;