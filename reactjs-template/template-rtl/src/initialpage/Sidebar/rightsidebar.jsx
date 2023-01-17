/**
 * App Routes
 */
import React, { Component } from 'react';
import ColoredScrollbars from '../ColoredScrollbars';
import {Avatar_02,Media1,Media2,Media3} from '../../imagepath';

class RightSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_media: true,
      show_about: true,
      show_setting: true,
    };
  }
  handleShow = (type) => {
    const {show_media,show_about,show_setting} = this.state
      this.setState({
          show_media: type === 1 && !show_media,
          show_about: type === 2 && !show_about,
          show_setting: type === 3 && !show_setting
      });
  };

	render() {
		const { match } = this.props;
    const {show_media,show_about,show_setting} = this.state
		return (
			<div className="right-sidebar right_sidebar_profile" id="middle1">
      <ColoredScrollbars>
        <div className="right-sidebar-wrap active">
          <div className="contact-close_call mr-4 mt-4 text-right">
            <a className="btn btn-outline-light close_profile close_profile4">
              <i className="fas fa-times close_icon" />
            </a>
          </div>
          <div className="sidebar-body">
            <div className="pl-4 pr-4 mt-0 right_sidebar_logo">
              <div className="text-center mb-3">
                <figure className="avatar avatar-xl mb-3">
                  <img src={Avatar_02} className="rounded-circle" alt="image" />
                </figure>
                <h5 className="profile-name">Scott Albright</h5>
              </div>
              <div>
                <div className="accordion-col">
                  <div className="accordion-title">
                    <h6 className="primary-title">Media (31) <i className="fas fa-chevron-right float-right" onClick={()=>this.handleShow(3)} /></h6>
                  </div>
                  {show_media && 
                    <div className="accordion-content">
                    <div className="media-lists">
                      <div className="media-image">
                        <img src={Media1} alt="" />
                      </div>
                      <div className="media-image">
                        <img src={Media2} alt="" />
                      </div>
                      <div className="media-image">
                        <img src={Media3} alt="" />
                      </div>
                    </div>
                  </div> }
                  <div className="accordion-title">
                    <h6 className="primary-title">About and phone number <i className="fas fa-chevron-right float-right" onClick={()=>this.handleShow(3)} /></h6>
                  </div>
                  {show_about && <div className="accordion-content">
                    <p className="text-muted text-center mt-1">Help people to build websites and apps + grow
                      awareness in social media 🔥</p>
                    <div className="mt-2 text-center">
                      <h6>Phone: <span className="text-muted ml-2">+(33 1) 45 55 01 10</span></h6>
                    </div>
                  </div> }
                  <div className="accordion-title">
                    <h6 className="primary-title">Settings <i className="fas fa-chevron-right float-right" onClick={()=>this.handleShow(3)} /></h6>
                  </div>
                  { show_setting && <div className="accordion-content">
                    <ul className="contact-action">
                      <li className="block-user mt-1">
                        <a><i className="fas fa-ban mr-2 text-muted" />Block</a>
                      </li>
                      <li className="report-contact">
                        <a><i className="fas fa-thumbs-down mr-2" /> Report Contact</a>
                      </li>
                      <li className="delete-chat">
                        <a><i className="fas fa-trash-alt mr-2" /> Delete Chat</a>
                      </li>
                    </ul>
                  </div> }
                </div>
              </div>
            </div>
          </div>
        </div>
      </ColoredScrollbars>
      </div>
		);
	}
}
export default RightSidebar;