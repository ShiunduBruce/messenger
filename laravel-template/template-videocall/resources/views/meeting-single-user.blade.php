<?php $page="meeting-single-user";?>
@extends('layout.mainlayout')
@section('content')				
            <!-- Join Call -->
            <div class="page-content">
				<div class="meeting">
					<div class="meeting-wrapper">
						<div class="join-contents single-view fade-whiteboard">						
							<div class="join-video user-active">
								<img src="assets/img/video-call.jpg" class="img-fluid" alt="Logo">
								<div class="video-avatar">
									<div class="text-avatar">
										<div class="text-box">
											S
										</div>
									</div>
									</div>
								<div class="part-name">								
									<h4>Shira</h4>
								</div>									
								<div class="more-icon">	
									<a href="#" class="handraise-on">
										<i class="fas fa-hand-paper"></i>
									</a>
									<a href="#" class="mic-on">
										<i class="feather-more-horizontal"></i>
									</a>
									<a href="#" class="mic-off">
										<i class="feather-mic-off"></i>
									</a>
								</div>
								<div class="overlay-icon">	
									<a href="#">
										<i class="fas fa-thumbtack"></i>
									</a>	
									<a href="#">
										<i class="feather-mic-off"></i>
									</a>	
									<a href="#">
										<i class="feather-minus-circle"></i>
									</a>
								</div>
							</div>
							<div class="join-video single-user">
								<img src="assets/img/users/user-01.jpg" class="img-fluid" alt="Logo">
								<div class="part-name">								
									<h4>Saba G</h4>
								</div>									
								<div class="more-icon">	
									<a href="#">
										<i class="feather-mic-off"></i>
									</a>
								</div>
								<div class="overlay-icon">	
									<a href="#">
										<i class="fas fa-thumbtack"></i>
									</a>	
									<a href="#">
										<i class="feather-mic-off"></i>
									</a>	
									<a href="#">
										<i class="feather-minus-circle"></i>
									</a>
								</div>
							</div>
						</div>
						
						<!-- Whiteboard View -->
						<div class="join-contents vertical-view show-whiteboard">						
							<div class="join-video user-active">
								<div class="whiteboard-sec">
									<div id='my-holder'></div> 
								</div>
							</div>
							<div class="vertical-sec">
								<div class="join-video single-user">
									<img src="assets/img/users/user-01.jpg" class="img-fluid" alt="Logo">
									<div class="part-name">								
										<h4>Saba G</h4>
									</div>									
									<div class="more-icon">	
										<a href="#">
											<i class="feather-mic-off"></i>
										</a>
									</div>
									<div class="overlay-icon">	
										<a href="#">
											<i class="fas fa-thumbtack"></i>
										</a>	
										<a href="#">
											<i class="feather-mic-off"></i>
										</a>	
										<a href="#">
											<i class="feather-minus-circle"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<!-- /Whiteboard View -->	
						
						<!-- Meet Footer -->
						<div class="meet-footer">
							<div class="meet-icons">	
								<div class="view-more">	
									<ul class="meet-items">
										<li class="meet-item  dropdown dropdown-action">
											<a href="#" class="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
												<i class="feather-more-vertical"></i>
											</a>
											 <ul class="dropdown-menu settings-menu">
												<li><a class="dropdown-item showInviteList" href="#"><i class="feather-user-plus"></i> Invite People</a></li>
												<li><a class="dropdown-item showChatList" href="#"><i class="feather-message-circle"></i> Chat</a></li>
												<li><a class="dropdown-item whiteboard" href="#"><i class="feather-edit-3"></i> Whiteboard</a></li>
												<li><a class="dropdown-item record-icon" href="#"><i class="far fa-dot-circle"></i> Start Recording</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-mic-off"></i> Mute Everyone</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-camera-off"></i> Disable Everyone’s Camera</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-youtube"></i> Share a Video</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-settings"></i> Settings</a></li>
											 </ul>
										</li>
									</ul>
								</div>
								<div class="met-icons">	
									<ul class="meet-items">
										<li class="meet-item  dropdown dropdown-action">
											<a href="#" class="nav-link dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
												<i class="feather-settings"></i>
											</a>
											 <ul class="dropdown-menu settings-menu">
												<li><a class="dropdown-item" href="#"><span class="user-img"><img src="assets/img/user.jpg" alt="user"> Carl Kelly</span></a></li>
												<li><a class="dropdown-item showInviteList" href="#"><i class="feather-user-plus"></i> Invite People</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-maximize"></i> View Full Screen</a></li>
												<li><a class="dropdown-item record-icon" href="#"><i class="far fa-dot-circle"></i> Start Recording</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-mic-off"></i> Mute Everyone</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-camera-off"></i> Disable Everyone’s Camera</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-youtube"></i> Share a Video</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-settings"></i> Settings</a></li>
												<li><a class="dropdown-item" href="#"><i class="feather-code"></i> Embed meeting</a></li>
											 </ul>
										</li>
										<li class="meet-item">
											<a href="#" class="mute-video">
												<i class="feather-video"></i>
											</a>
										</li>
										<li class="meet-item">
											<a href="#" class="mute-bt">
												<i class="feather-mic"></i>
											</a>
										</li>
									</ul>	
								</div>
								<div class="action-icons">							
									<ul class="action-items">
										<li class="action-item">
											<a href="join-call" class="callend-icon">
												<i class="material-icons">call_end</i>
											</a>
										</li>
										<li class="action-item">
											<a href="#" class="share-icon">
												<i class="fas fa-share"></i>
											</a>
										</li>
										<li class="action-item">
											<a href="#" class="record-icon">
												<i class="far fa-dot-circle"></i>
											</a>
										</li>
									</ul>
								</div>
								<div class="end-call">
									<ul class="meet-items">
										<li class="meet-item">
											<a href="#" class="hand-raise">
												<i class="fas fa-hand-paper"></i>
											</a>
										</li>
										<li class="meet-item">
											<a href="#" class="showInviteList">
												<i class="feather-users"></i>
											</a>
										</li>
										<li class="meet-item">
											<a href="#" class="whiteboard">
												<i class="feather-edit-3"></i>
											</a>
										</li>
										<li class="meet-item">
											<a href="#" class="showChatList">
												<i class="feather-message-circle"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<!-- /Meet Footer -->
						
					</div>
				</div>
			</div>
			<!-- /Join Call -->
			
			<!-- Record -->
			<div class="show-record">
				<p><i class="far fa-dot-circle text-danger"></i> Recording<p>		
			</div>
			<!-- /Record -->
			
			<!-- Chat Right -->
			<div class="chat-cont-right user-sidebar-right">
				<div class="chat-header">
					<a href="#" class="close-btn" id="chatClose">
						<i class="feather-x"></i>
					</a>
				</div>
				<div class="message-body">
					<div class="chat-body">
						<div class="chat-scroll">
							<ul class="list-unstyled">
								<li class="media received">
									<div class="avatar">
										<img src="assets/img/users/user-02.jpg" alt="User Image" class="avatar-img">
									</div>
									<div class="media-body">
										<div class="msg-box">															
											<ul class="chat-msg-info">
												<li>
													<div class="chat-time">
														Linnea <span>8:35 AM</span>
													</div>
												</li>
											</ul>
											<div>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
											</div>
										</div>
									</div>
								</li>
								<li class="media received">
									<div class="avatar">
										<img src="assets/img/users/user-01.jpg" alt="User Image" class="avatar-img">
									</div>
									<div class="media-body">
										<div class="msg-box">
											<ul class="chat-msg-info">
												<li>
													<div class="chat-time">
														Saba G <span>12:00 PM</span>
													</div>
												</li>
											</ul>
											<div>
												<p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
											</div>
										</div>
									</div>
								</li>
								<li class="media received">
									<div class="avatar person-view">
										A
									</div>
									<div class="media-body">
										<div class="msg-box">
											<ul class="chat-msg-info">
												<li>
													<div class="chat-time">
														Akshay <span>12:00 PM</span>
													</div>
												</li>
											</ul>
											<div>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
											</div>
										</div>
									</div>
								</li>
								<li class="media sent">
									<div class="media-body">
										<div class="msg-box">
											<ul class="chat-msg-info">
												<li>
													<div class="chat-time">
														You <span>12:00 PM</span>
													</div>
												</li>
											</ul>
											<div>
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="chat-footer">
						<div class="input-group">
							<input type="text" class="input-msg-send form-control" placeholder="Type Message...">
							<div class="input-group-append">
								<button type="button" class="btn msg-send-btn"><i class="fab fa-telegram-plane"></i></button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Chat Right -->
			
			<!-- Invite People -->
			<div class="chat-cont-right invite-sidebar-right">
				<div class="chat-header">
					<div class="heading-text">Invite Someone</div>
					<a href="#" class="close-btn" id="InviteClose">
						<i class="feather-x"></i>
					</a>
				</div>
				<div class="message-body">
					<div class="chat-body">
						<div class="chat-scroll">
							<ul class="add-list">
								<li class="add-listitem user-active">
									<div class="person-info">
										<img src="assets/img/video-call.jpg" alt="User Image" class="avatar-img">
										<div class="person-name">Shira</div>
									</div>
									<div class="list-body">														
										<ul class="action-info">
											<li>
												<a href="#" class="mute-vid">
													<i class="feather-video"></i>
												</a>
											</li>
											<li>
												<a href="#" class="mute-mic">
													<i class="feather-mic"></i>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="add-listitem">
									<div class="person-info">
										<img src="assets/img/users/user-02.jpg" alt="User Image" class="avatar-img">
										<div class="person-name">Linnea</div>
									</div>
									<div class="list-body">														
										<ul class="action-info">
											<li>
												<a href="#" class="mute-vid">
													<i class="feather-video"></i>
												</a>
											</li>
											<li>
												<a href="#" class="mute-mic">
													<i class="feather-mic"></i>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="add-listitem">
									<div class="person-info">
										<img src="assets/img/users/user-01.jpg" alt="User Image" class="avatar-img">
										<div class="person-name">Saba G</div>
									</div>
									<div class="list-body">														
										<ul class="action-info">
											<li>
												<a href="#" class="mute-vid">
													<i class="feather-video"></i>
												</a>
											</li>
											<li>
												<a href="#" class="mute-mic">
													<i class="feather-mic"></i>
												</a>
											</li>
										</ul>
									</div>
								</li>
								<li class="add-listitem">
									<div class="person-info">
										<div class="person-view">A</div>
										<div class="person-name">Akshay</div>
									</div>
									<div class="list-body">														
										<ul class="action-info">
											<li>
												<a href="#" class="mute-vid text-primary">
													<i class="feather-video-off"></i>
												</a>
											</li>
											<li>
												<a href="#" class="mute-mic">
													<i class="feather-mic"></i>
												</a>
											</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="chat-footer d-grid">
						<button type="button" class="btn heading-text">Invite Someone</button>
					</div>
				</div>
			</div>
			<!-- /Invite People -->		
	</div>
	<!-- /Main Wrapper -->
@endsection