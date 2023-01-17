import React from "react";
import Header from "../header";
import Footer from "../footer";
// Import Images
import { user01, user02, user03, user04, user05, user06, user07, user08, Videocall } from "../imagepath";

    const MeetingcallMultigrid2 = () => {
   
        return (
          <>
          {/* Main Wrapper */}
          <div className="main-wrapper">
          <Header/>
            {/* Join Call */}
            <div className="page-content">
              <div className="meeting">
                <div className="meeting-wrapper">
                  <div className="meeting-list">
                    {/* Multigird View */}
                    <div className="join-contents multigrid-view justify-content-start fade-whiteboard">
                      <div className="join-video user-active single-user">
                        <img
                          src={Videocall}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="video-avatar">
                          <div className="text-avatar">
                            <div className="text-box">S</div>
                          </div>
                        </div>
                        <div className="part-name">
                          <h4>Shira</h4>
                        </div>
                        <div className="more-icon">
                          <a href="#" className="handraise-on">
                            <i className="fas fa-hand-paper" />
                          </a>
                          <a href="#" className="mic-off">
                            <i className="feather-mic-off" />
                          </a>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user01}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Saba G</h4>
                        </div>
                        <div className="more-icon">
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <div className="d-block">
                          <div className="text-avatar">
                            <div className="text-box">L</div>
                          </div>
                        </div>
                        <div className="part-name">
                          <h4>Linnea</h4>
                        </div>
                        <div className="more-icon">
                          <a href="#">
                            <i className="feather-video-off" />
                          </a>
                          <a href="#" className="handraise-on">
                            <i className="fas fa-hand-paper" />
                          </a>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user03}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Shira</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user04}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Richard</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user05}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Travis</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <div className="text-avatar">
                          <div className="text-box">A</div>
                        </div>
                        <div className="part-name">
                          <h4>Akshay</h4>
                        </div>
                        <div className="more-icon">
                          <a href="#">
                            <i className="feather-video-off" />
                          </a>
                          <a href="#" className="handraise-on">
                            <i className="fas fa-hand-paper" />
                          </a>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user06}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Gina</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user07}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Robert</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user08}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Charlene</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user02}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Elsie</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user04}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Richard</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user08}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Charlene</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <div className="d-block">
                          <div className="text-avatar">
                            <div className="text-box">T</div>
                          </div>
                        </div>
                        <div className="part-name">
                          <h4>Trimple</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user02}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Elsie</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <div className="d-block">
                          <div className="text-avatar">
                            <div className="text-box">W</div>
                          </div>
                        </div>
                        <div className="part-name">
                          <h4>William</h4>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                      <div className="join-video single-user">
                        <img
                          src={user01}
                          className="img-fluid"
                          alt="Logo"
                        />
                        <div className="part-name">
                          <h4>Saba G</h4>
                        </div>
                        <div className="more-icon">
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                        </div>
                        <div className="overlay-icon">
                          <a href="#">
                            <i className="fas fa-thumbtack" />
                          </a>
                          <a href="#">
                            <i className="feather-mic-off" />
                          </a>
                          <a href="#">
                            <i className="feather-minus-circle" />
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* /Multigird View */}
                    {/* Whiteboard View */}
                    <div className="join-contents vertical-view show-whiteboard">
                      <div className="join-video user-active">
                        <div className="whiteboard-sec">
                          <div id="my-holder" />
                        </div>
                      </div>
                      <div className="vertical-sec">
                        <div className="join-video single-user">
                          <img
                            src={user01}
                            className="img-fluid"
                            alt="Logo"
                          />
                          <div className="part-name">
                            <h4>Saba G</h4>
                          </div>
                          <div className="more-icon">
                            <a href="#">
                              <i className="feather-mic-off" />
                            </a>
                          </div>
                          <div className="overlay-icon">
                            <a href="#">
                              <i className="fas fa-thumbtack" />
                            </a>
                            <a href="#">
                              <i className="feather-mic-off" />
                            </a>
                            <a href="#">
                              <i className="feather-minus-circle" />
                            </a>
                          </div>
                        </div>
                        <div className="join-video single-user">
                          <div className="d-block">
                            <div className="text-avatar">
                              <div className="text-box">L</div>
                            </div>
                          </div>
                          <div className="part-name">
                            <h4>Linnea</h4>
                          </div>
                          <div className="overlay-icon">
                            <a href="#">
                              <i className="fas fa-thumbtack" />
                            </a>
                            <a href="#">
                              <i className="feather-mic-off" />
                            </a>
                            <a href="#">
                              <i className="feather-minus-circle" />
                            </a>
                          </div>
                        </div>
                        <div className="join-video single-user">
                          <img
                            src={user02}
                            className="img-fluid"
                            alt="Logo"
                          />
                          <div className="part-name">
                            <h4>Elsie</h4>
                          </div>
                          <div className="overlay-icon">
                            <a href="#">
                              <i className="fas fa-thumbtack" />
                            </a>
                            <a href="#">
                              <i className="feather-mic-off" />
                            </a>
                            <a href="#">
                              <i className="feather-minus-circle" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Whiteboard View */}
                  </div>
                  <Footer/>
                </div>
              </div>
            </div>
            {/* /Join Call */}
            {/* Record */}
            <div className="show-record">
              <p>
                <i className="far fa-dot-circle text-danger" /> Recording
              </p>
              <p></p>
            </div>
            {/* /Record */}
            {/* Chat Right */}
            <div className="chat-cont-right user-sidebar-right">
              <div className="chat-header">
                <a href="#" className="close-btn" id="chatClose">
                  <i className="feather-x" />
                </a>
              </div>
              <div className="message-body">
                <div className="chat-body">
                  <div className="chat-scroll">
                    <ul className="list-unstyled">
                      <li className="media received">
                        <div className="avatar">
                          <img
                            src={user02}
                            alt="User Image"
                            className="avatar-img"
                          />
                        </div>
                        <div className="media-body">
                          <div className="msg-box">
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  Linnea <span>8:35 AM</span>
                                </div>
                              </li>
                            </ul>
                            <div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="media received">
                        <div className="avatar">
                          <img
                            src={user01}
                            alt="User Image"
                            className="avatar-img"
                          />
                        </div>
                        <div className="media-body">
                          <div className="msg-box">
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  Saba G <span>12:00 PM</span>
                                </div>
                              </li>
                            </ul>
                            <div>
                              <p>
                                Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen
                                book.{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="media received">
                        <div className="avatar person-view">A</div>
                        <div className="media-body">
                          <div className="msg-box">
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  Akshay <span>12:00 PM</span>
                                </div>
                              </li>
                            </ul>
                            <div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="media sent">
                        <div className="media-body">
                          <div className="msg-box">
                            <ul className="chat-msg-info">
                              <li>
                                <div className="chat-time">
                                  You <span>12:00 PM</span>
                                </div>
                              </li>
                            </ul>
                            <div>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry
                              </p>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chat-footer">
                  <div className="input-group">
                    <input
                      type="text"
                      className="input-msg-send form-control"
                      placeholder="Type Message..."
                    />
                    <div className="input-group-append">
                      <button type="button" className="btn msg-send-btn">
                        <i className="fab fa-telegram-plane" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Chat Right */}
            {/* Invite People */}
            <div className="chat-cont-right invite-sidebar-right">
              <div className="chat-header">
                <div className="heading-text">Invite Someone</div>
                <a href="#" className="close-btn" id="InviteClose">
                  <i className="feather-x" />
                </a>
              </div>
              <div className="message-body">
                <div className="chat-body">
                  <div className="chat-scroll">
                    <ul className="add-list">
                      <li className="add-listitem user-active">
                        <div className="person-info">
                          <img
                            src={Videocall}
                            alt="User Image"
                            className="avatar-img"
                          />
                          <div className="person-name">Shira</div>
                        </div>
                        <div className="list-body">
                          <ul className="action-info">
                            <li>
                              <a href="#" className="mute-vid">
                                <i className="feather-video" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="mute-mic">
                                <i className="feather-mic" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="add-listitem">
                        <div className="person-info">
                          <img
                            src={user02}
                            alt="User Image"
                            className="avatar-img"
                          />
                          <div className="person-name">Linnea</div>
                        </div>
                        <div className="list-body">
                          <ul className="action-info">
                            <li>
                              <a href="#" className="mute-vid">
                                <i className="feather-video" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="mute-mic">
                                <i className="feather-mic" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="add-listitem">
                        <div className="person-info">
                          <img
                            src={user01}
                            alt="User Image"
                            className="avatar-img"
                          />
                          <div className="person-name">Saba G</div>
                        </div>
                        <div className="list-body">
                          <ul className="action-info">
                            <li>
                              <a href="#" className="mute-vid">
                                <i className="feather-video" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="mute-mic">
                                <i className="feather-mic" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="add-listitem">
                        <div className="person-info">
                          <div className="person-view">A</div>
                          <div className="person-name">Akshay</div>
                        </div>
                        <div className="list-body">
                          <ul className="action-info">
                            <li>
                              <a href="#" className="mute-vid text-primary">
                                <i className="feather-video-off" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="mute-mic">
                                <i className="feather-mic" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="chat-footer d-grid">
                  <button type="button" className="btn heading-text">
                    Invite Someone
                  </button>
                </div>
              </div>
            </div>
            {/* /Invite People */}
          </div>
          {/* /Main Wrapper */}
        </>
    
        )
}
export default MeetingcallMultigrid2;