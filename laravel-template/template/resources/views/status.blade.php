@extends('layout.mainlayout')
@section('content')		
 <!-- Main Wrapper -->
 <div class="main-wrapper">
        <!-- content -->
        <div class="content main_content">
            <!-- sidebar group -->
            <div class="sidebar-group left-sidebar">
                <!-- Chats sidebar -->
                <div id="chats" class="left-sidebar-wrap sidebar active">
                    <div class="header">
                        <div class="header-top">
                            <div class="logo ms-2 mt-3">
                                <a href="index">
                                    <img src="assets/img/logo.png" alt="" class="header_image">
                                </a>
                            </div>
                            <ul class="header-action mt-4">
                                <li>
                                    <a href="#" data-bs-toggle="dropdown">
                                        <i class="fas fa-ellipsis-h ellipse_header"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right header_drop_icon">
                                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#new_group">New
                                            Group</a>
                                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#profile_modal">Profile</a>
                                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#settings_modal">Settings</a>
                                        <a href="login" class="dropdown-item">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul class="nav nav-tabs chat-tabs mt-4">
                            <li class="nav-item">
                                <a class="nav-link" href="index">Chat</a>
                            </li>
                            <li class="nav-item ms-1">
                                <a class="nav-link" href="group">Group</a>
                            </li>
                            <li class="nav-item  active ms-1">
                                <a class="nav-link active" href="status">Status</a>
                            </li>
                            <li class="nav-item ms-1">
                                <a class="nav-link" href="call-log">Call</a>
                            </li>
                        </ul>
                        <button type="button" class="float-end btn btn-circle btn-sm header_button" data-bs-toggle="modal" data-bs-target="#drag_files">
                            <i class="fas fa-plus button_plus"></i>
                        </button>
                    </div>
                    <div class="search_chat has-search">
                        <span class="fas fa-search form-control-feedback"></span>
                        <input class="form-control chat_input" id="search-contact" type="text" placeholder="">
                    </div>
                    <div class="sidebar-body" id="chatsidebar">
                        <h4 class="status-title ms-4">Recent</h4>
                        <ul class="user-list mb-4">
                            <li class="list-group-item">
                                <a class="first_list" href="#" data-bs-toggle="modal" data-bs-target="#status-modal">
                                    <div>
                                        <div class="avatar status-active">
                                            <img src="assets/img/avatar-8.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body mt-2">
                                        <div>
                                            <h5>Anna Dorum</h5>
                                            <p class="text-muted">Just Now</p>
                                        </div>
                                       
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a class="first_list" href="#" data-bs-toggle="modal" data-bs-target="#status-modal">
                                    <div>
                                        <div class="avatar status-active">
                                            <img src="assets/img/avatar-7.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body mt-2">
                                        <div>
                                            <h5>Kevin Howard</h5>
                                            <p class="text-muted">Today , 10:30am</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a class="first_list" href="#" data-bs-toggle="modal" data-bs-target="#status-modal">
                                    <div class="avatar status-active">
                                        <img src="assets/img/avatar-1.jpg" class="rounded-circle" alt="image">
                                    </div>
                                    <div class="users-list-body mt-2">
                                        <div>
                                            <h5>Eric Knight</h5>
                                            <p class="text-muted">Today , 8.00am</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="list-group-item">
                                <a class="first_list" href="#" data-bs-toggle="modal" data-bs-target="#status-modal">
                                    <div>
                                        <div class="avatar status-active">
                                            <img src="assets/img/avatar-2.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body mt-2">
                                        <div>
                                            <h5>Scott Albright</h5>
                                            <p class="text-muted">Today , 5.00am</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <h4 class="status-title ms-4">Viewed</h4>
                        <ul class="user-list">
                            <li class="list-group-item">
                                <a class="first_list" href="#" data-bs-toggle="modal" data-bs-target="#status-modal">
                                    <div>
                                        <div class="avatar">
                                            <img src="assets/img/avatar-3.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body mt-2">
                                        <div>
                                            <h5>Irene Perkins</h5>
                                            <p class="text-muted">Yesterday, 08.45pm</p>
                                        </div>
                                    </div>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
                <!-- /Chats sidebar -->
            </div>
            <!-- /Sidebar group -->

            <!-- Chat -->
            <div class="status_update">
                <img src="assets/img/status-icon.png" alt="" class="status_content">
                <h3 class="status_content_h3">Click on a contact to view their status updates</h3>
            </div>
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
                            <img src="assets/img/avatar-2.jpg" class="rounded-circle" alt="image">
                        </figure>
                        <div class="mt-1">
                            <h5 class="mb-1">Scott Albright</h5>
                            <small class="text-muted mb-2">
                                Active 35m ago
                            </small>
                        </div>
                    </div>
                    <div class="chat-options">
                        <ul class="list-inline">
                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                data-original-title="Voice call">
                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#voice_call">
                                    <i class="fas fa-phone-alt voice_chat_phone"></i>
                                </a>
                            </li>
                            <li class="list-inline-item" data-bs-toggle="tooltip" title=""
                                data-original-title="Video call">
                                <a href="javascript:void(0)" class="btn btn-outline-light" data-bs-toggle="modal"
                                    data-bs-target="#video_call">
                                    <i class="fas fa-video"></i>
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light" href="#" data-bs-toggle="dropdown">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="#" class="dropdown-item dr_menu">Profile</a>
                                    <a href="#" class="dropdown-item">Delete</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="chat-body">
                    <div class="messages">
                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
                            </div>
                            <div class="chat-content">
                                <div class="message-content">
                                    Hi James! What???s Up?
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">Yesterday 14:26 PM</div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-action-btns">
                                <ul>
                                    <li><a href="#" class="share-msg" title="Share"><i class="fas fa-share"></i></a>
                                    </li>
                                    <li><a href="#" class="edit-msg"><i class="fas fa-edit"></i></a></li>
                                    <li><a href="#" class="del-msg"><i class="fas fa-trash-alt"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="chats chats-right">
                            <div class="chat-content">
                                <div class="message-content">
                                    Oh, hello! All perfectly. I work, study and know this wonderful world!
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">Yesterday 14:38 PM <i><img src="assets/img/double-tick.png" alt=""></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
                            </div>
                            <div class="chat-content">
                                <div class="message-content">
                                    Ok Cool, Where you from
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">Yesterday 14:40 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chats chats-right">

                            <div class="chat-content">
                                <div class="message-content">
                                    I am from California, and you?
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">Yesterday 14:42 PM <i><img src="assets/img/double-tick.png" alt=""></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
						<div class="chat-line">
							<span class="chat-date">Today</span>
						</div>

                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
                            </div>
                            <div class="chat-content">
                                <div class="message-content">
                                    I am from Australia, and where you working?
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">14:26 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chats chats-right">

                            <div class="chat-content">
                                <div class="message-content">
                                    Oh Cool, Yeah i am working here famous software company
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">14:29 PM <i><img src="assets/img/double-tick.png" alt=""></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
                            </div>
                            <div class="chat-content">
                                <div class="message-content">
                                    That's Good Lol, What is your designation?
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">14:30 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chats chats-right">

                            <div class="chat-content">
                                <div class="message-content">
                                    I am senior software engineer.
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">14:32 PM <i><img src="assets/img/double-tick.png" alt=""></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
						<div class="chat-line">
							<span class="chat-date">1 message unread</span>
						</div>

                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
                            </div>
                            <div class="chat-content">
                                <div class="message-content">
                                    Good.!!!
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">14:33 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chats chats-right">

                            <div class="chat-content">
                                <div class="message-content">
                                    Yeah, Thank you..
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">14:34 PM <i><img src="assets/img/double-tick.png" alt=""></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="chat-footer">
                    <form>
                        <input type="text" class="form-control chat_form" placeholder="Write a message.">
                        <div class="form-buttons">
                            <button class="btn" type="button">
                                <i class="far fa-smile"></i>
                            </button>
                            <button class="btn" type="button" data-bs-toggle="modal" data-bs-target="#drag_files">
                                <i class="fas fa-paperclip"></i>
                            </button>
                            <button class="btn" type="button">
                                <i class="fas fa-microphone-alt"></i>
                            </button>
                            <button class="btn send-btn" type="submit">
                                <i class="fab fa-telegram-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /Chat -->

            <!-- Upload Documents -->
            <div id="drag_files" class="modal fade" role="dialog">
                <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Drag and drop files upload</h4>
                            <button type="button" class="close" data-bs-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <form id="js-upload-form">
                                <div class="upload-drop-zone" id="drop-zone">
                                    <i class="fa fa-cloud-upload fa-2x"></i> <span class="upload-text">Just drag and
                                        drop files here</span>
                                </div>
                            </form>
                            <div class="text-center mt-0">
                                <button class="btn newgroup_create m-0" data-bs-dismiss="modal">Add to upload</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Upload Documents -->

            <!-- Voice call -->
            <div class="modal fade voice_pop" id="voice_call" role="document">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content voice_content ml-3">
                        <div class="modal-body voice_body">
                            <div class="call-box incoming-box">
                                <div class="call-wrapper">
                                    <div class="call-inner">
                                        <div class="call-user">
                                            <img alt="User Image" src="assets/img/avatar-2.jpg" class="call-avatar">
                                            <h4>Tobbias Williams</h4>
                                            <span class="chat_cal">calling...</span>
                                        </div>
                                        <div class="call-items">
                                            <a href="#" class="btn call-item call-end" data-bs-dismiss="modal">
                                                <i class="fas fa-phone-alt phone_icon"></i></a>
                                            <a href="#" class="btn call-item call-start" data-bs-dismiss="modal"> <i
                                                    class="fas fa-phone-alt"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Voice call -->

            <!-- Video Call -->
            <div class="modal fade voice_pop" id="video_call" role="document">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content voice_content ml-3">
                        <div class="modal-body voice_body">
                            <div class="call-box incoming-box">
                                <div class="call-wrapper">
                                    <div class="call-inner">
                                        <div class="call-user">
                                            <img alt="User Image" src="assets/img/avatar-2.jpg" class="call-avatar">
                                            <h4>Tobbias Williams</h4>
                                            <span class="chat_cal">calling...</span>
                                        </div>
                                        <div class="call-items">
                                            <a href="#" class="btn call-item call-end" data-bs-dismiss="modal"><i
                                                    class="fas fa-phone-alt phone_icon"></i></a>
                                            <a href="" class="btn call-item call-start" data-bs-dismiss="modal">
                                                <i class="fas fa-video"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Video Call -->

            <!-- New group modal -->
            <div class="modal fade" id="new_group">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                New Group
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Tabs -->
                            <ul class="nav nav-tabs nav-justified newgroup_ul mt-0" role="tablist">
                                <li class="nav-item">
                                    <a href="#create-group-details" class="nav-link active" data-bs-toggle="tab" role="tab" aria-selected="true">Details</a>
                                </li>

                                <li class="nav-item">
                                    <a href="#create-group-members" class="nav-link" data-bs-toggle="tab" role="tab" aria-selected="false">Members</a>
                                </li>
                            </ul>
                            <!-- Tabs -->   
                            <!-- Create chat -->
                            <div class="tab-content" role="tablist">
                                <!-- Chat details -->
                                <div id="create-group-details" class="tab-pane fade show active"
                                    role="tabpanel">
                                    <form action="#">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Group Name">
                                        </div>
                                        <div class="form-group">
                                            <label for="new-chat-topic">Topic (optional)</label>
                                            <input class="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Group Topic">
                                        </div>
                                        <div class="form-group mb-0">
                                            <label for="new-chat-description">Description</label>
                                            <textarea class="form-control form-control-lg group_control_text" name="new-chat-description" id="new-chat-description" rows="6" placeholder="Group Description"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <!-- Chat details -->
                                
                                <!-- Chat Members -->
                                <div id="create-group-members" class="tab-pane fade create-group-members" role="tabpanel">
                                    <nav class="list-group list-group-flush mb-n6">
                                        <!-- Search -->
                                        <form class="mb-3 newgroup_content">
                                            <div class="input-group">
                                                <input type="text" class="form-control form-control-lg newgroup_search" placeholder="Search for messages or users..." aria-label="Search for messages or users...">
                                                <div class="input-group-append">
                                                    <button class="btn btn-lg btn-ico btn-secondary btn-minimal newgroup_search_btn" type="submit">
                                                        <i class="fas fa-search newgroup_fa_search"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <!-- Search -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">A</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar avatar-online me-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-7.jpg" alt="Anna Bridges">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media">
                                                        <h6 class="mb-0">Anna Bridges</h6>
                                                        <small class="text-muted">Online</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-1" type="checkbox">
                                                            <label class="custom-control-label" for="id-user-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-1"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">B</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar me-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-1.jpg" alt="Brian Dawson">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media">
                                                        <h6 class="mb-0">Brian Dawson</h6>
                                                        <small class="text-muted">last seen 2 hours ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-2" type="checkbox">
                                                            <label class="custom-control-label" for="id-user-2"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-2"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">L</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar me-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-2.jpg" alt="Leslie Sutton">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media">
                                                        <h6 class="mb-0">Leslie Sutton</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-3" type="checkbox">
                                                            <label class="custom-control-label" for="id-user-3"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-3"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">M</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar me-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-3.jpg" alt="Matthew Wiggins">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media">
                                                        <h6 class="mb-0">Matthew Wiggins</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-4" type="checkbox">
                                                            <label class="custom-control-label" for="id-user-4"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-4"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">S</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar me-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-4.jpg" alt="Simon Hensley">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media">
                                                        <h6 class="mb-0">Simon Hensley</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-5" type="checkbox">
                                                            <label class="custom-control-label" for="id-user-5"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-5"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">W</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar me-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-5.jpg" alt="William Wright">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media">
                                                        <h6 class="mb-0">William Wright</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-6" type="checkbox">
                                                            <label class="custom-control-label" for="id-user-6"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-6"></label>
                                        </div>
                                        <!-- Friend -->
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar me-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-6.png" alt="William Greer">
                                                    </div>
                                                    <div class="media-body align-self-center me-6 group_card_media">
                                                        <h6 class="mb-0">William Greer</h6>
                                                        <small class="text-muted">last seen 10 minutes ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-7" type="checkbox">
                                                            <label class="custom-control-label" for="id-user-7"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-7"></label>
                                        </div>
                                        <!-- Friend -->
                                        <div class="mb-6">
                                            <small class="text-uppercase">Z</small>
                                        </div>
                                        <!-- Friend -->
                                        <div class="card mb-6 group_card_mb">
                                            <div class="card-body">
                                                <div class="media">
                                                    <div class="avatar me-5">
                                                        <img class="avatar-img group_image" src="assets/img/avatar-8.jpg" alt="Zane Mayes">
                                                    </div>
                                                    <div
                                                        class="media-body align-self-center me-6 group_card_media">
                                                        <h6 class="mb-0">Zane Mayes</h6>
                                                        <small class="text-muted">last seen 3 days ago</small>
                                                    </div>
                                                    <div class="align-self-center ms-auto">
                                                        <div class="custom-control custom-checkbox">
                                                            <input class="custom-control-input" id="id-user-8" type="checkbox">
                                                            <label class="custom-control-label" for="id-user-8"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- Label -->
                                            <label class="stretched-label" for="id-user-8"></label>
                                        </div>
                                        <!-- Friend -->
                                    </nav>
                                </div>
                                <!-- Chat Members -->
                            </div>
                            <!-- Create chat -->
                            <!-- Button -->
                            <div class="pt-3">
                                <div class="container text-center">
                                    <button class="btn btn-block newgroup_create mb-1 mt-0" type="submit" data-bs-dismiss="modal">Create group</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /New group modal -->

            <!-- Profile Modal -->
            <div class="modal fade" id="profile_modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Profile
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <!-- Card -->
                            <div class="card mb-6 profile_Card">
                                <div class="card-body">
                                    <div class="text-center py-6">
                                        <!-- Photo -->
                                        <div class="avatar avatar-xl mb-3">
                                            <img class="avatar-img rounded-circle mCS_img_loaded" src="assets/img/avatar-5.jpg" alt="">
                                        </div>
                                        <h5>John Janousek</h5>
                                        <p class="text-muted m-0">Last seen: Today</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Card -->
                            <!-- Card -->
                            <form action="#" class="mt-3">
                                <div class="form-group">
                                    <label>Country</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="Country Name">
                                </div>
                                <div class="form-group">
                                    <label>Phone</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="text" placeholder="+39 02 87 21 43 19">
                                </div>
                                <div class="form-group">
                                    <label>Email</label>
                                    <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="johnjanousek@gmail.com">
                                </div>
                            </form>
                            <!-- Card -->
                            <div class="form-row profile_form mt-3 mb-1">
                                <!-- Button -->
                                <button type="button" class="btn btn-block newgroup_create mb-0" data-bs-dismiss="modal">
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Profile Modal -->

            <!-- Settings Modal -->
            <div class="modal fade" id="settings_modal">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Settings
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="card-header position-relative account_details">
                                <a href="#" class="text-reset d-block stretched-link collapsed">
                                    <div class="row no-gutters align-items-center">
                                        <!-- Title -->
                                        <div class="col">
                                            <h5>Account</h5>
                                            <p class="m-0">Update your profile details.</p>
                                        </div>
                                        <!-- Icon -->
                                        <div class="col-auto">
                                            <i class="text-muted icon-md fas fa-user"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="card-header position-relative mt-3 security_details">
                                <a href="#" class="text-reset d-block stretched-link collapsed">
                                    <div class="row no-gutters align-items-center">
                                        <!-- Title -->
                                        <div class="col">
                                            <h5>Security</h5>
                                            <p class="m-0">Update your profile details.</p>
                                        </div>
                                        <!-- Icon -->
                                        <div class="col-auto">
                                            <i class="text-muted icon-md fas fa-crosshairs"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="mt-3">
                                <label for="profile-name">Name</label>
                                <input class="form-control form-control-lg profile_input group_formcontrol" name="profile-name" id="profile-name" type="text" placeholder="Type your name">
                            </div>
                            <div class="mt-4">
                                <label for="profile-name">Current Password</label>
                                <input class="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_pswd" type="text" placeholder="Current Password">
                            </div>
                            <div class="mt-4">
                                <label for="profile-name">New Password</label>
                                <input class="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_new" type="text" placeholder="New Password">
                            </div>
                            <div class="mt-4">
                                <label for="profile-name">Verify Password</label>
                                <input class="form-control form-control-lg group_formcontrol" name="profile-name" id="profile-name_prfname" type="text" placeholder="Verify Password">
                            </div>
                            <div class="mt-3 text-center">
                                <button class="btn btn-block newgroup_create mb-0" type="submit" data-bs-dismiss="modal">Save Settings</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Settings Modal -->
           
        </div>
        <!-- /Content -->

    </div>
    <!-- /Main Wrapper -->

    <!-- Status modal -->
    <div class="modal status-modal fade" id="status-modal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="inner-popup">
                    <span class="close custom-status-close" data-bs-dismiss="modal"><i class="fas fa-times"></i></span>
                    <div id="carouselExampleIndicators" class="carousel slide slider" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner status_slider" role="listbox">
                            <div class="carousel-item active">
                                <img src="assets/img/carousel.jpg" alt="">
                            </div>
                            <div id="target" class="carousel-item">
                                <img src="assets/img/carousel1.jpg" alt="">
                            </div>
                            <div class="carousel-item">
                                <img src="assets/img/carousel2.jpg" alt="">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-chevron-left"></i></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-chevron-right"></i></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <div class="bottom-message-col">
                        <ul>
                            <li>
                                <form class="chat_status mt-4">
                                    <input type="text" class="form-control text_status mx-auto d-block form_status"
                                    placeholder="Reply">
                                    <button class="btn btn-primary send-btn_status" type="submit">
                                        <i class="fab fa-telegram-plane status_telegram"></i>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Status Modal -->
@endsection