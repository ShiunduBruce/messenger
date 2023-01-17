/**
 * App Routes
 */
import React, { Component } from 'react';
import ColoredScrollbars from '../ColoredScrollbars';
import {Avatar_01,Avatar_07,Avatar_08,Media1,Media2,Media3,Carousel1} from '../../imagepath';

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
      <div className="right-sidebar-wrap profile_wrap_right member_sidebar active">
        <div className="contact-close_call mr-4 mt-4 text-right">
          <a className="btn btn-outline-light close_profile close_profile4">
            <i className="fas fa-times close_icon" />
          </a>
        </div>
        <div className="sidebar-body">
          <div className="pl-4 pr-4 right_sidebar_logo">
            <div className="text-center mb-3">
              <figure className="avatar avatar-xl mb-3">
                <img src={Carousel1} className="rounded-circle" alt="image" />
              </figure>
              <h5 className="mb-1 profile-name">Dreams Team</h5>
            </div>
            <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified profile-tabs">
              <li className="nav-item">
                <a className="nav-link active">Info</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Members</a>
              </li>
            </ul>
            {/* Tab panes */}
            <div className="tab-content rightside_tab">
              <div id="info" className="tab-pane active"><br />  
                <div className="accordion-col">
                  <div className="accordion-title">
                    <h6 className="primary-title">Media (31) <i className="fas fa-chevron-right float-right" /></h6>
                  </div>
                  {show_media && <div className="accordion-content">
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
                    <h6 className="primary-title">About and phone number <i className="fas fa-chevron-right float-right" /></h6>
                  </div>
                  {show_about && <div className="accordion-content">
                    <p className="text-muted text-center mt-1">Help people to build websites and apps + grow
                      awareness in social media ðŸ”¥</p>
                    <div className="mt-2 text-center">
                      <h6>Phone: <span className="text-muted ml-2">+(33 1) 45 55 01 10</span></h6>
                    </div>
                  </div> }
                  <div className="accordion-title">
                    <h6 className="primary-title">Settings <i className="fas fa-chevron-right float-right" /></h6>
                  </div>
                  {show_setting &&  <div className="accordion-content">
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
              <div id="member" className="tab-pane"><br />
                <div>
                  <h6 className="primary-title">20 Participants <i className="fas fa-chevron-right float-right" /></h6>
                  <div className="list-group list-group-flush">
                    <a className="list-group-item list-group-item-action">
                      <div className="media align-items-center">
                        <div className="mr-3">
                          <img alt="Image placeholder" src={Avatar_08} className="avatar  rounded-circle" />
                        </div>
                        <div className="media-body">
                          <h6 className="text-sm d-block text-truncate mb-0">Regina Dickerson
                          </h6>
                          <span className="d-block text-sm text-muted">At Work</span>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action">
                      <div className="media align-items-center">
                        <div className="mr-3">
                          <img alt="Image placeholder" src={Avatar_07} className="avatar  rounded-circle" />
                        </div>
                        <div className="media-body">
                          <h6 className="text-sm d-block text-truncate mb-0">Kevin Howard
                          </h6>
                          <span className="d-block text-sm text-muted">At Work</span>
                        </div>
                      </div>
                    </a>
                    <a className="list-group-item list-group-item-action">
                      <div className="media align-items-center">
                        <div className="mr-3">
                          <img alt="Image placeholder" src={Avatar_01} className="avatar  rounded-circle" />
                        </div>
                        <div className="media-body">
                          <h6 className="text-sm d-block text-truncate mb-0">Eric Knight
                          </h6>
                          <span className="d-block text-sm text-muted">At Work</span>
                        </div>
                      </div>
                    </a>
                    <div className="view-more ml-4 mt-3">
                      <a ><i className="fas fa-chevron-down mr-1" /> <span>17
                          More</span></a>
                    </div>
                  </div>
                </div>
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