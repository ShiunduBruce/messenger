import React,{ Component } from 'react';
import $ from "jquery";
import { Button, Modal, Dropdown, DropdownItem, Tab, Tabs } from "react-bootstrap";

import Avatar2 from '../assets/img/avatar/avatar-2.jpg';
import Avatar4 from '../assets/img/avatar/avatar-4.jpg';
import Avatar8 from '../assets/img/avatar/avatar-8.jpg';
import Avatar9 from '../assets/img/avatar/avatar-9.jpg';
import Avatar10 from '../assets/img/avatar/avatar-10.jpg';
import Avatar11 from '../assets/img/avatar/avatar-11.jpg';
import Avatar12 from '../assets/img/avatar/avatar-12.jpg';
import Chatdownloadimg from '../assets/img/chat-download.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faCloudDownloadAlt, faTrashAlt, faSortDown, faEdit, faSignOutAlt } from '@fortawesome/fontawesome-free-solid';

class Rightgroupsidebar extends Component {
	constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
          show: null
        };
    }
    handleClose() {
        this.setState({show: id});
    }
    handleShow(id) {
        this.setState({show: id});
    }
  	render() {
  		return (
			<div className="right-sidebar right_sidebar_profile" id="middle1">
                <div className="right-sidebar-wrap active">
                	<div className="slimscroll">
                        <div className="left-chat-title d-flex justify-content-between align-items-center p-3">
                            <div className="chat-title">
                                <h4>Group Details</h4>
                            </div>
                            <div className="contact-close_call text-right">
                                <a href="#"
                                    className="close_profile close_profile4">
                                    <span className="material-icons">close</span>
                                </a>
                            </div>
                        </div>
                        <div className="sidebar-body">
                            <div className="mt-0 right_sidebar_logo">
                                <div className="text-center mb-2 right-sidebar-profile">
                                    <figure className="avatar avatar-xl mb-3">
                                        <img src={Avatar12} className="rounded-circle" alt="image" />
                                    </figure>
                                    <h5 className="profile-name">#Tech Support</h5>
                                    <div className="create-group-date">Created on 25/02/2020</div>
                                    <div className="edit-group">
                                        <a href="#" onClick={() => this.handleShow('AddNewGroup')}><span><i className="fas fa-edit"></i></span> Edit Group</a>
                                    </div>
                                </div>
                                <div>
									<div className="about-media-tabs">   
									    <Tabs activekey="About">
										  	<Tab eventKey="Info" title="Info">
												<p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
												<div className="settings-col">
													<h6>Settings</h6>
													<ul>
														<li className="d-flex align-items-center">
															<label className="switch">
																<input type="checkbox" />
																<span className="slider round"></span>
															</label>
															<div>
																<span>Block</span>
															</div>
														</li>
														<li className="d-flex align-items-center">
															<label className="switch">
																<input type="checkbox" />
																<span className="slider round"></span>
															</label>
															<div>
																<span>Mute</span>
															</div>
														</li>
														<li className="d-flex align-items-center">
															<label className="switch">
																<input type="checkbox" />
																<span className="slider round"></span>
															</label>
															<div>
																<span>Notification</span>
															</div>
														</li>
													</ul>
												</div>
										  	</Tab>
										  	<Tab eventKey="participants" title="participants(63)">
										  		<div className="participants-list">
													<ul className="user-list mt-2">
														<li className="d-flex">
															<div>
																<div className="avatar avatar-online">
																	<img src={Avatar8} className="rounded-circle" alt="image" />
																</div>
															</div>
															<div className="users-list-body d-flex justify-content-between">
																<div>
																	<h5>Regina</h5>
																	<p>At work</p>
																</div>
																<div>
																	<span className="admin-profiles">admin</span>
																</div>
															</div>
														</li>
														<li className="d-flex">
															<div>
																<div className="avatar avatar-online">
																	<img src={Avatar9} className="rounded-circle" alt="image" />
																</div>
															</div>
															<div className="users-list-body d-flex justify-content-between">
																<div>
																	<h5>Kroch</h5>
																	<p>At work</p>
																</div>
																<div>
																	<span className="admin-profiles">admin</span>
																</div>
															</div>
														</li>
														<li className="d-flex">
															<div>
																<div className="avatar avatar-online">
																	<img src={Avatar10} className="rounded-circle" alt="image" />
																</div>
															</div>
															<div className="users-list-body d-flex justify-content-between">
																<div>
																	<h5>Seary</h5>
																	<p>At work</p>
																</div>
																<div className="grp-delete"> 
																	<div className="chat-action-col">
																		<Dropdown>
																		  	<Dropdown.Toggle>
																		    	<a className="#" href="#">
																					<i className="fas fa-ellipsis-h"></i>
																				</a>
																		  	</Dropdown.Toggle>
																		  	<Dropdown.Menu>
																		    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
																		    	<Dropdown.Item href="#">Mute <span className="material-icons">volume_off</span></Dropdown.Item>
																		  	</Dropdown.Menu>
																		</Dropdown>
																	</div>
																</div>
															</div>
														</li>
														<li className="d-flex">
															<div>
																<div className="avatar avatar-online">
																	<img src={Avatar11} className="rounded-circle" alt="image" />
																</div>
															</div>
															<div className="users-list-body d-flex justify-content-between">
																<div>
																	<h5>Margaretta</h5>
																	<p>At work</p>
																</div>
																<div className="grp-delete"> 
																	<div className="chat-action-col">
																		<Dropdown>
																		  	<Dropdown.Toggle>
																		    	<a className="#" href="#">
																					<i className="fas fa-ellipsis-h"></i>
																				</a>
																		  	</Dropdown.Toggle>
																		  	<Dropdown.Menu>
																		    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
																		    	<Dropdown.Item href="#">Mute <span className="material-icons">volume_off</span></Dropdown.Item>
																		  	</Dropdown.Menu>
																		</Dropdown>
																	</div>
																</div>
															</div>
														</li>
														<li className="d-flex">
															<div>
																<div className="avatar avatar-online">
																	<img src={Avatar2} className="rounded-circle" alt="image" />
																</div>
															</div>
															<div className="users-list-body d-flex justify-content-between">
																<div>
																	<h5>Kowalski</h5>
																	<p>At work</p>
																</div>
																<div className="grp-delete"> 
																	<div className="chat-action-col">
																		<Dropdown>
																		  	<Dropdown.Toggle>
																		    	<a className="#" href="#">
																					<i className="fas fa-ellipsis-h"></i>
																				</a>
																		  	</Dropdown.Toggle>
																		  	<Dropdown.Menu>
																		    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
																		    	<Dropdown.Item href="#">Mute <span className="material-icons">volume_off</span></Dropdown.Item>
																		  	</Dropdown.Menu>
																		</Dropdown>
																	</div>
																</div>
															</div>
														</li>
														<li className="d-flex">
															<div>
																<div className="avatar avatar-online">
																	<img src={Avatar12} className="rounded-circle" alt="image" />
																</div>
															</div>
															<div className="users-list-body d-flex justify-content-between">
																<div>
																	<h5>Alexandr</h5>
																	<p>At work</p>
																</div>
																<div className="grp-delete"> 
																	<div className="chat-action-col">
																		<Dropdown>
																		  	<Dropdown.Toggle>
																		    	<a className="#" href="#">
																					<i className="fas fa-ellipsis-h"></i>
																				</a>
																		  	</Dropdown.Toggle>
																		  	<Dropdown.Menu>
																		    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
																		    	<Dropdown.Item href="#">Mute <span className="material-icons">volume_off</span></Dropdown.Item>
																		  	</Dropdown.Menu>
																		</Dropdown>
																	</div>
																</div>
															</div>
														</li>
														<li className="d-flex">
															<div>
																<div className="avatar avatar-online">
																	<img src={Avatar4} className="rounded-circle" alt="image" />
																</div>
															</div>
															<div className="users-list-body d-flex justify-content-between">
																<div>
																	<h5>Dickerson</h5>
																	<p>At work</p>
																</div>
																<div className="grp-delete"> 
																	<div className="chat-action-col">
																		<Dropdown>
																		  	<Dropdown.Toggle>
																		    	<a className="#" href="#">
																					<i className="fas fa-ellipsis-h"></i>
																				</a>
																		  	</Dropdown.Toggle>
																		  	<Dropdown.Menu>
																		    	<Dropdown.Item href="#">Delete <span><i className="far fa-trash-alt"></i></span></Dropdown.Item>
																		    	<Dropdown.Item href="#">Mute <span className="material-icons">volume_off</span></Dropdown.Item>
																		  	</Dropdown.Menu>
																		</Dropdown>
																	</div>
																</div>
															</div>
														</li>
													</ul>
													<div className="text-center">
														<a href="#" className="load-more-btn">More 54 <i className="fas fa-sort-down"></i></a>
													</div>
											   </div>
										  	</Tab>
										  	<Tab eventKey="Media" title="Media">
										    	<div className="file-download-col">
													<ul>
														<li>
															<div className="image-download-col">
																<a href={Chatdownloadimg} data-fancybox="gallery" className="fancybox">
																	<img src={Chatdownloadimg} alt="" />
																</a>
																<div className="download-action d-flex align-items-center">
																	<div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
																	<div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
																</div>
															</div>
														</li>
														<li>
															<div className="image-download-col">
																<a href={Chatdownloadimg} data-fancybox="gallery" className="fancybox">
																	<img src={Chatdownloadimg} alt="" />
																</a>
																<div className="download-action d-flex align-items-center">
																	<div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
																	<div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
																</div>
															</div>
														</li>
														 <li>
															<div className="image-download-col">
																<a href={Chatdownloadimg} data-fancybox="gallery" className="fancybox">
																	<img src={Chatdownloadimg} alt="" />
																</a>
																<div className="download-action d-flex align-items-center">
																	<div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
																	<div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
																</div>
															</div>
														</li>
														<li>
															<div className="image-download-col">
																<a href={Chatdownloadimg} data-fancybox="gallery" className="fancybox">
																	<img src={Chatdownloadimg} alt="" />
																</a>
																<div className="download-action d-flex align-items-center">
																	<div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
																	<div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
																</div>
															</div>
														</li>
														 <li>
															<div className="image-download-col">
																<a href={Chatdownloadimg} data-fancybox="gallery" className="fancybox">
																	<img src={Chatdownloadimg} alt="" />
																</a>
																<div className="download-action d-flex align-items-center">
																	<div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
																	<div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
																</div>
															</div>
														</li>
														<li>
															<div className="image-download-col">
																<a href={Chatdownloadimg} data-fancybox="gallery" className="fancybox">
																	<img src={Chatdownloadimg} alt="" />
																</a>
																<div className="download-action d-flex align-items-center">
																	<div><a href="#"><i className="fas fa-cloud-download-alt"></i></a></div>
																	<div><a href="#"><i className="fas fa-ellipsis-h"></i></a></div>
																</div>
															</div>
														</li>
														<li className="full-width text-center">
															<a href="#" className="load-more-btn">More 154 Files <i className="fas fa-sort-down"></i></a>
														</li>
													</ul>
												</div>
										  	</Tab>
										</Tabs>
									</div>
								</div>
							</div>
						</div>
						<div className="report-col">
							<ul>
								<li><a href="#"><span><i className="fas fa-sign-out-alt"></i></span> Exit Group</a></li>
								<li><a href="#"><span className="material-icons">report_problem</span> Report Chat</a></li>
								<li><a href="#"><span><i className="far fa-trash-alt"></i></span> Delete Chat</a></li>
							</ul>
						</div>
					</div>
                </div>

                <Modal show={this.state.show == 'AddNewGroup'} onHide={this.handleClose} animation={true} size="md" centered className="shadow-lg" id="edit-new-group">
                    <Modal.Header>
                        <h5 className="modal-title">
                            <i class="fas fa-edit"></i>Edit Group
                        </h5>
                        <button type="button" className="close" onClick={() => this.setState({ show: false })}>
                            <span className="material-icons">close</span>
                        </button>
                    </Modal.Header>
                    <Modal.Body>
                        <form action="new-friends">
                            <div className="form-group">
                                <label>Group Name</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Software" />
                            </div>
                            <div className="form-group">
                                <label>Choose profile picture</label>
                                <div className="custom-input-file form-control form-control-lg group_formcontrol">
                                    <input type="file" className="" />
                                    <span className="browse-btn">Change File</span>
                                </div>
								<div className="edit-image">
									<div className="img-edit">
										<img src={Avatar12} alt="" />
										<a href="javascript:void(0);" className="btn btn-icon btn-danger btn-sm"><i className="far fa-trash-alt"></i></a>
									</div>
								</div>
                            </div>
                            <div className="form-group">
                                <label>Topic (optional)</label>
                                <input className="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Award Winning Web Design" />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea className="form-control form-control-lg group_formcontrol">Award Winning Web Design, Online Marketing, Mobile App Development and Software Engineering</textarea>
                            </div>
                            <div className="form-group">
                                <div className="d-flex align-items-center">
                                    <label className="custom-radio mr-3">Private Group
                                        <input type="radio" checked="checked" name="radio" />
                                        <span className="checkmark"></span>
                                    </label>
                                    <label className="custom-radio">Public Group
                                      <input type="radio" name="radio" />
                                      <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </form>
                        <div className="form-row profile_form text-right float-right m-0 align-items-center">
                            <div className="cancel-btn ml-4">
                                <a href="#" data-dismiss="modal" onClick={() => this.setState({ show: false })}>Cancel</a>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-block newgroup_create mb-0">
                                    Save
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
    	)
    }
}

export default Rightgroupsidebar;