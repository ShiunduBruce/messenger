import React,{useEffect} from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
// Import Images
import {Logo,user } from "../imagepath";

    const Header = (props) => {   
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
          
          if($('#InviteClose').length > 0) {
            $('#InviteClose').on('click', function(e){
              e.preventDefault()		
              $('body').removeClass('show-invite-list');
              $(".invite-sidebar-right").css("margin-right", "-100%");
              $('.showInviteList').removeClass('active');
              // toggleInviteList=0;
            })
          }
          
          if($('.win-maximize').length > 0) {
            $('.win-maximize').on('click', function(e){
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
              } else {
                if (document.exitFullscreen) {
                  document.exitFullscreen();
                }
              }
            })
          }
            // return () => { document.body.className = ''; }
      });
      const pathname = window.location.pathname.split("/")[2];      

        return (
          <>
          
           {/* Header */}
           <header className="header fixed-position">
              <nav className="navbar navbar-expand-lg header-nav">
                <div className="navbar-header">
                  <a href="" className="navbar-brand logo">
                    <img src={Logo} className="img-fluid" alt="Logo" />
                  </a>
                  <p>a2x3-x3pp-ca2i-extn</p>
                </div>
                <div className="main-menu-wrapper">
                  <ul className="grid-menu">
                    <li className={`${pathname === "meetingcall-multigrid" || pathname === "meeting-call-multigrid-2" ? "active" : ""}`}>
                      <Link to="/meetingcall-multigrid" className="tab-nav">
                        <i className="fas fa-th" />
                      </Link>
                    </li>
                    <li className={`${pathname === "meetingcall-vertical" ? "active" : ""}`}>                    
                      <Link to="/meetingcall-vertical" className="tab-nav">
                        <i className="fas fa-grip-vertical" />
                      </Link>
                    </li>
                    <li className={`${pathname === "meetingcall-horizontal" || pathname === "meeting-call-2" || pathname === "meeting-single-user" ? "active" : ""}`}>
                      <Link to="/meetingcall-horizontal" className="tab-nav">
                        <i className="fas fa-grip-horizontal" />
                      </Link>
                    </li>
                    <li className={`${pathname === "meetingcall-grid" ? "active" : ""}`}>
                      <Link to="/meetingcall-grid" className="tab-nav">
                        <i className="fas fa-th-large" />
                      </Link>
                    </li>
                    <li>
                      <a href="#max" className="tab-nav win-maximize">
                        <i className="fas fa-expand-alt" />
                      </a>
                    </li>
                  </ul>
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
        </>
    
        )
}
export default Header;