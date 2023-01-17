<template>
	<div class="voice-call-page">
		<div class="main-wrapper">
        <!-- content -->
        <div class="content main_content">
			<layout-sidebar></layout-sidebar>
		     
        <!-- sidebar group -->
                <div class="sidebar-group left-sidebar chat_sidebar">
                
                    <!-- Chats sidebar -->
                    <div id="chats" class="left-sidebar-wrap sidebar active">
                        <div>
                        <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                            <!-- Left Chat Title -->
                            <div class="left-chat-title d-flex justify-content-between align-items-center">
                                <div class="chat-title">
                                    <h4>CALLS</h4>
                                </div>
                            </div>
                            <!-- /Left Chat Title -->
                            
                            <div class="search_chat has-search mb-0">
                                <span class="fas fa-search form-control-feedback"></span>
                                <input class="form-control chat_input" id="search-contact" type="text" placeholder="Search Contacts">
                            </div>
                            <div class="sidebar-body" id="chatsidebar">
                            
                                <!-- Left Chat Title -->
                                <div class="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
                                    <div class="chat-title">
                                        <h4>RECENT CALLS</h4>
                                    </div>
                                    <div class="add-section">
                                        <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-group-call"><i class="fas fa-phone-alt"></i></a>
                                    </div>
                                </div>
                                <!-- /Left Chat Title -->
                                
                                <nav>
                                    <div class="nav nav-tabs chat-scroll side_bar" id="nav-tab">
                                        <a class="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#allcalls">All Calls</a>
                                        <a class="nav-item nav-link" id="nav-profile-tab1" data-bs-toggle="tab" href="#receivedcalls" >Recieved Calls</a>
                                        <a class="nav-item nav-link" id="nav-profile-tab3" data-bs-toggle="tab" href="#incomingcalls" >Incoming Calls</a>
                                        <a class="nav-item nav-link" id="nav-profile-tab4" data-bs-toggle="tab" href="#missedcalls" >Missed Calls</a>
                                    </div>
                                </nav>
                                <div class="tab-content settings-form">
                                
                                    <!-- Tab Contents -->
                                    <div class="tab-pane fade show active" id="allcalls">
                                        <ul class="user-list mt-2">
                                            <li class="user-list-item">
                                                <div class="avatar avatar-online">
                                                    <img src="../assets/img/avatar/avatar-8.jpg" class="rounded-circle" alt="image">
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>Just now</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_made</span>
                                                        <router-link to="/videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-away">
                                                        <img src="../assets/img/avatar/avatar-9.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Forest Kroch</h5>
                                                        <p>9 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_received</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item item-typing">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <img src="../assets/img/avatar/avatar-10.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 callmissed-icon">call_missed</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <div class="letter-avatar">
                                                            M
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Townsend Seary</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_received</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <img src="../assets/img/avatar/avatar-11.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Margaretta Worvell</h5>
                                                        <p>4 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_made</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-away">
                                                        <img src="../assets/img/avatar/avatar-2.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>#Tech Support</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_made</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <div class="letter-avatar">
                                                            A
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Harald Kowalski</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 callmissed-icon">call_missed</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-away">
                                                        <img src="../assets/img/avatar/avatar-12.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Alexandr Donnelly</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_received</span>
                                                        <router-link to="/videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <img src="../assets/img/avatar/avatar-4.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>8 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 callmissed-icon">call_missed</span>
                                                        <router-link to="/videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- /Tab Contents -->
                                    
                                    <!-- Tab Contents -->
                                    <div class="tab-pane fade" id="receivedcalls">
                                        <ul class="user-list mt-2">
                                            <li class="user-list-item">
                                                <div class="avatar avatar-online">
                                                    <img src="../assets/img/avatar/avatar-8.jpg" class="rounded-circle" alt="image">
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>Just now</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_made</span>
                                                        <router-link to="/videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <img src="../assets/img/avatar/avatar-11.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Margaretta Worvell</h5>
                                                        <p>4 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_made</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-away">
                                                        <img src="../assets/img/avatar/avatar-2.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>#Tech Support</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_made</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-away">
                                                        <img src="../assets/img/avatar/avatar-9.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Forest Kroch</h5>
                                                        <p>9 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_made</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <div class="letter-avatar">
                                                            M
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Townsend Seary</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_made</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-away">
                                                        <img src="../assets/img/avatar/avatar-12.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Alexandr Donnelly</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_made</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- /Tab Contents -->
                                    
                                    <!-- Tab Contents -->
                                    <div class="tab-pane fade" id="incomingcalls">
                                        <ul class="user-list mt-2">
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-away">
                                                        <img src="../assets/img/avatar/avatar-9.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Forest Kroch</h5>
                                                        <p>9 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_received</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <div class="letter-avatar">
                                                            M
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Townsend Seary</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_received</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-away">
                                                        <img src="../assets/img/avatar/avatar-12.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Alexandr Donnelly</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_received</span>
                                                        <router-link to="/videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item item-typing">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <img src="../assets/img/avatar/avatar-10.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_received</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <div class="letter-avatar">
                                                            A
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Harald Kowalski</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_received</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <img src="../assets/img/avatar/avatar-4.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>8 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 incoming-icon">call_received</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- /Tab Contents -->
                                    
                                    <!-- Tab Contents -->
                                    <div class="tab-pane fade" id="missedcalls">
                                        <ul class="user-list mt-2">
                                            <li class="user-list-item item-typing">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <img src="../assets/img/avatar/avatar-10.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 callmissed-icon">call_missed</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <div class="letter-avatar">
                                                            A
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Harald Kowalski</h5>
                                                        <p>3 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 callmissed-icon">call_missed</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <img src="../assets/img/avatar/avatar-4.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>8 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 callmissed-icon">call_missed</span>
                                                        <router-link to="videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div class="avatar avatar-online">
                                                    <img src="../assets/img/avatar/avatar-8.jpg" class="rounded-circle" alt="image">
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Regina Dickerson</h5>
                                                        <p>Just now</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 callmissed-icon">call_missed</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-online">
                                                        <img src="../assets/img/avatar/avatar-11.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>Margaretta Worvell</h5>
                                                        <p>4 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 callmissed-icon">call_missed</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="user-list-item">
                                                <div>
                                                    <div class="avatar avatar-away">
                                                        <img src="../assets/img/avatar/avatar-2.jpg" class="rounded-circle" alt="image">
                                                    </div>
                                                </div>
                                                <div class="users-list-body align-items-center">
                                                    <div>
                                                        <h5>#Tech Support</h5>
                                                        <p>5 Min Ago</p>
                                                    </div>
                                                    <div class="last-chat-time">
                                                        <span class="material-icons me-3 callmissed-icon">call_missed</span>
                                                        <router-link to="/audiocall-single"><span class="material-icons calling-icon">call</span></router-link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <!-- /Tab Contents -->
                                    
                                </div>
                            </div>
                        </perfect-scrollbar>
                        </div>
                    </div>
                    <!-- / Chats sidebar -->
                    
                </div>
                <!-- /Sidebar group -->
                
                <!-- Chat -->
                <div class="chat" id="middle">
                    <div class="chat-header">
                        <div class="user-details">
                            <div class="d-lg-none ms-2">
                                <ul class="list-inline mt-2 me-2">
                                    <li class="list-inline-item">
                                        <a class="text-muted px-0 left_side" href="#" data-chat="open">
                                        <i class="fas fa-arrow-left"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <figure class="avatar ms-1">
                                <img src="../assets/img/avatar/avatar-8.jpg" class="rounded-circle" alt="image">
                            </figure>
                            <div class="mt-1">
                                <h5>Doris Brown</h5>
                                <small class="online">
                                Online
                                </small>
                            </div>
                        </div>
                        <div class="chat-options">
                            <ul class="list-inline">
                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">
                                    <a href="javascript:void(0)" class="btn btn-outline-light chat-search-btn" >
                                        <i class="fas fa-search"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Voice call">
                                    <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                        data-bs-target="#voice_call">
                                        <i class="fas fa-phone-alt voice_chat_phone"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Video call">
                                    <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                        data-bs-target="#video_call">
                                        <i class="fas fa-video"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item dream_profile_menu" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile">
                                    <a href="javascript:void(0)" class="btn btn-outline-light">
                                        <i class="fas fa-user"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="btn btn-outline-light no-bg" href="#" data-bs-toggle="dropdown">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Archive <span><i class="fas fa-archive"></i></span></a>
                                        <a href="javascript:void(0);" class="dropdown-item">Muted <span class="material-icons">volume_off</span></a>
                                        <a href="javascript:void(0);" class="dropdown-item">Delete <span><i class="far fa-trash-alt"></i></span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        <!-- Chat Search -->
                        <div class="chat-search">
                            <form>
                                <span class="fas fa-search form-control-feedback"></span>
                                <input type="text" name="chat-search" placeholder="Search Chats" class="form-control">
                                <div class="close-btn-chat"><span class="material-icons">close</span></div>
                            </form>
                        </div>
                        <!-- /Chat Search -->
                        
                    </div>
                </div>
                <!-- /Chat -->

		</diV>
 
      <!-- Add Group Members -->
            <div class="modal fade custom-border-modal" id="add-group-call">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <span class="material-icons">call</span>Add Call
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span class="material-icons">close</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="search_chat has-search me-0 ms-0">
                                <span class="fas fa-search form-control-feedback"></span>
                                <input class="form-control chat_input" id="search-contacts" type="text" placeholder="Search Contacts">
                            </div>
                            <div class="sidebar">
                                <span class="contact-name-letter">A</span>
                                <ul class="user-list mt-2">
                                    <li class="user-list-item">
                                        <div class="avatar avatar-online">
                                            <img src="../assets/img/avatar/avatar-1.jpg" class="rounded-circle" alt="image">
                                        </div>
                                        <div class="users-list-body align-items-center">
                                            <div>
                                                <h5>Albert Rodarte</h5>
                                            </div>
                                            <div class="last-chat-time">
                                                <span class="material-icons calling-icon me-3">call</span>
                                                <router-link to="/videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="user-list-item">
                                        <div class="avatar avatar-online">
                                            <img src="../assets/img/avatar/avatar-2.jpg" class="rounded-circle" alt="image">
                                        </div>
                                        <div class="users-list-body align-items-center">
                                            <div>
                                                <h5>Allison Etter</h5>
                                            </div>
                                            <div class="last-chat-time">
                                                <span class="material-icons calling-icon me-3">call</span>
                                                <router-link to="/videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <span class="contact-name-letter mt-3">C</span>
                                <ul class="user-list mt-2">
                                    <li class="user-list-item">
                                        <div class="avatar avatar-online">
                                            <img src="../assets/img/avatar/avatar-3.jpg" class="rounded-circle" alt="image">
                                        </div>
                                        <div class="users-list-body align-items-center">
                                            <div>
                                                <h5>Craig Smiley</h5>
                                            </div>
                                            <div class="last-chat-time">
                                                <span class="material-icons calling-icon me-3">call</span>
                                                <router-link to="/videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="user-list-item">
                                        <div class="avatar avatar-online">
                                            <img src="../assets/img/avatar/avatar-4.jpg" class="rounded-circle" alt="image">
                                        </div>
                                        <div class="users-list-body align-items-center">
                                            <div>
                                                <h5>Caniel Clay</h5>
                                            </div>
                                            <div class="last-chat-time">
                                                <span class="material-icons calling-icon me-3">call</span>
                                                <router-link to="/videocall-group"><span class="material-icons videocall-icon">videocam</span></router-link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Add Group Members -->
            
            <!-- Add Contact -->
            <div class="modal fade" id="add-contact">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <span class="material-icons">person_add</span>Add Friends
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span class="material-icons">close</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Card -->
                            <form action="new-friends">
                                <div class="form-group">
                                    <label>Name</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Nickname</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email">
                                </div>
                            </form>
                            <!-- Card -->
                            <div class="form-row profile_form text-end float-end m-0 align-items-center">
                                <!-- Button -->
                                <div class="cancel-btn me-4">
                                    <a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close">Cancel</a>
                                </div>
                                <div class="">
                                    <button type="button" class="btn btn-block newgroup_create mb-0" data-bs-dismiss="modal" aria-label="Close">
                                    Add to contacts
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Add Contact -->
            
            <!-- Add New Group -->
            <div class="modal fade" id="add-new-group">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <span class="material-icons group-add-btn">group_add</span>Create a New Group
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span class="material-icons">close</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Card -->
                            <form action="new-friends">
                                <div class="form-group">
                                    <label>Group Name</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Choose profile picture</label>
                                    <div class="custom-input-file form-control form-control-lg group_formcontrol">
                                        <input type="file" class="">
                                        <span class="browse-btn">Browse File</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>Topic (optional)</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text">
                                </div>
                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea class="form-control form-control-lg group_formcontrol"></textarea>
                                </div>
                                <div class="form-group">
                                    <div class="d-flex align-items-center">
                                        <label class="custom-radio me-3">Private Group
                                        <input type="radio" checked="checked" name="radio">
                                        <span class="checkmark"></span>
                                        </label>
                                        <label class="custom-radio">Public Group
                                        <input type="radio" name="radio">
                                        <span class="checkmark"></span>
                                        </label>
                                    </div>
                                </div>
                            </form>
                            <!-- Card -->
                            <div class="form-row profile_form text-end float-end m-0 align-items-center">
                                <!-- Button -->
                                <div class="cancel-btn me-4">
                                    <a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close">Cancel</a>
                                </div>
                                <div class="">
                                    <button type="button" class="btn btn-block newgroup_create mb-0" data-bs-toggle="modal" data-bs-target="#add-group-member" data-bs-dismiss="modal" aria-label="Close">
                                    Add Participants
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Add New Group -->
            
            <!-- Add Group Members -->
            <div class="modal fade custom-border-modal" id="add-group-member">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                <span class="material-icons group-add-btn">group_add</span>Add Group Members
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                            <span class="material-icons">close</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="search_chat has-search me-0 ms-0">
                                <span class="fas fa-search form-control-feedback"></span>
                                <input class="form-control chat_input" id="search-contact1" type="text" placeholder="Search Contacts">
                            </div>
                            <div class="sidebar">
                                <span class="contact-name-letter">A</span>
                                <ul class="user-list mt-2">
                                    <li class="user-list-item">
                                        <div class="avatar avatar-online">
                                            <img src="../assets/img/avatar/avatar-1.jpg" class="rounded-circle" alt="image">
                                        </div>
                                        <div class="users-list-body align-items-center">
                                            <div>
                                                <h5>Albert Rodarte</h5>
                                            </div>
                                            <div class="last-chat-time">
                                                <label class="custom-check">
                                                <input type="checkbox" checked="checked">
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="user-list-item">
                                        <div class="avatar avatar-online">
                                            <img src="../assets/img/avatar/avatar-2.jpg" class="rounded-circle" alt="image">
                                        </div>
                                        <div class="users-list-body align-items-center">
                                            <div>
                                                <h5>Allison Etter</h5>
                                            </div>
                                            <div class="last-chat-time">
                                                <label class="custom-check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <span class="contact-name-letter mt-3">C</span>
                                <ul class="user-list mt-2">
                                    <li class="user-list-item">
                                        <div class="avatar avatar-online">
                                            <img src="../assets/img/avatar/avatar-3.jpg" class="rounded-circle" alt="image">
                                        </div>
                                        <div class="users-list-body align-items-center">
                                            <div>
                                                <h5>Craig Smiley</h5>
                                            </div>
                                            <div class="last-chat-time">
                                                <label class="custom-check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="user-list-item">
                                        <div class="avatar avatar-online">
                                            <img src="../assets/img/avatar/avatar-4.jpg" class="rounded-circle" alt="image">
                                        </div>
                                        <div class="users-list-body align-items-center">
                                            <div>
                                                <h5>Caniel Clay</h5>
                                            </div>
                                            <div class="last-chat-time">
                                                <label class="custom-check">
                                                <input type="checkbox">
                                                <span class="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div class="form-row profile_form text-end float-end m-0 mt-3 align-items-center">
                                <!-- Button -->
                                <div class="cancel-btn me-3">
                                    <a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close">Cancel</a>
                                </div>
                                <div class="">
                                    <button type="button" class="btn newgroup_create previous mb-0 me-3" data-bs-toggle="modal" data-bs-target="#add-new-group" data-bs-dismiss="modal" aria-label="Close">
                                    Previous
                                    </button>
                                </div>
                                <div class="">
                                    <button type="button" class="btn btn-block newgroup_create mb-0" data-bs-dismiss="modal" aria-label="Close">
                                    Create Group
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Add Group Members -->
            
            <!-- Video Call -->
            <div class="modal fade" id="video_call" role="document">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content voice_content">
                        <div class="modal-body voice_body">
                            <div class="call-box incoming-box">
                                <div class="call-wrapper">
                                    <div class="call-inner">
                                        <div class="call-user">
                                            <img alt="User Image" src="../assets/img/avatar/avatar-8.jpg" class="call-avatar">
                                            <h4>Brietta Blogg <span>video calling</span>
                                            </h4>
                                        </div>
                                        <div class="call-items">
                                            <a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal">
                                            <span class="material-icons">close</span>
                                            </a>
                                            <a href="javascript:void(0);" class="btn call-item call-start" data-bs-dismiss="modal">
                                            <i class="fas fa-video"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Video Call -->
            
            <!-- Voice Call -->
            <div class="modal fade" id="voice_call" role="document">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content voice_content">
                        <div class="modal-body voice_body">
                            <div class="call-box incoming-box">
                                <div class="call-wrapper">
                                    <div class="call-inner">
                                        <div class="call-user">
                                            <img alt="User Image" src="../assets/img/avatar/avatar-8.jpg" class="call-avatar">
                                            <h4>Brietta Blogg <span>voice calling</span>
                                            </h4>
                                        </div>
                                        <div class="call-items">
                                            <a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal">
                                            <span class="material-icons">close</span>
                                            </a>
                                            <a href="javascript:void(0);" class="btn call-item call-start" data-bs-dismiss="modal">
                                            <i class="fas fa-video"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Voice Call -->

	</div>
    </div>
</template>
<script>
import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
    export default {
  components: {
   PerfectScrollbar ,
 },
        mounted() {
    // Variable Declarations

        var right_sidebar = $('.right-sidebar').width();
        var left_sidebar = $('.left-sidebar').width();
        var chat_bar = $('.chat').width();
        var win_width = $(window).width();

        $(".user-list-item:not(body.status-page .user-list-item, body.voice-call-page .user-list-item)").on('click', function () {
        if ($(window).width() < 992) {
                $('.left-sidebar').addClass('hide-left-sidebar');
                $('.chat').addClass('show-chatbar');
            }
        });

        $(".dream_profile_menu").on('click', function () {
            $('.right-sidebar').addClass('show-right-sidebar');
            $('.right-sidebar').removeClass('hide-right-sidebar');
                if ( $(window).width() > 991 && $(window).width() < 1201) {
                $(".chat:not(.right-sidebar .chat)").css('margin-left', - chat_bar);
            }
            if ($(window).width() < 992) {
                $('.chat:not(.right-sidebar .chat)').addClass('hide-chatbar');
            }
        });

        $(".close_profile").on('click', function () {
            $('.right-sidebar').addClass('hide-right-sidebar');
            $('.right-sidebar').removeClass('show-right-sidebar');
            if ( $(window).width() > 991 && $(window).width() < 1201) {
                $(".chat").css('margin-left', 0);
            }
            if ($(window).width() < 992) {
                $('.chat').removeClass('hide-chatbar');
            }
        });
        $(".nav-tabs a").on('click', function () {
            $(this).tab('show');
        });

        $(".chat-header .left_side i, .page-header .left_side i").on('click', function () {
            $('.left-sidebar').removeClass('hide-left-sidebar');
            $('.chat').removeClass('show-chatbar');
        });
            //Rightside accordian
    $('.accordion-col .accordion-title').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });
    //Custom modal click for status view
    $('*[data-target="#status-modal"]').on('click', function () {
        $('body').addClass('custom-model-open');
    });
    $('.custom-status-close').on('click', function () {
        $('body').removeClass('custom-model-open');
    });
    
    //Top Online Contacts
    if($('.top-online-contacts .swiper-container').length > 0 ){
        var swiper = new Swiper('.top-online-contacts .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 15,
        });
    }
    //Chat Search Visible
    $('.chat-search-btn').on('click', function () {
        $('.chat-search').addClass('visible-chat');
    });
    $('.close-btn-chat').on('click', function () {
        $('.chat-search').removeClass('visible-chat');
    });
    $(".chat-search .form-control").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".chat .chat-body .messages .chats").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
    }
}
    </script>