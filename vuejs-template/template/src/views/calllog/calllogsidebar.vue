<template>
<!-- sidebar group -->
            <div class="sidebar-group left-sidebar">
                <!-- Chats sidebar -->
                <div id="chats" class="left-sidebar-wrap sidebar active">
                    <div class="header">
                        <div class="header-top">
                            <div class="logo ms-2 mt-3">
                                <router-link to="/index">
                                    <img src="../../assets/img/logo.png" alt="" class="header_image">
                                </router-link>
                            </div>
                            <ul class="header-action mt-4">
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="fas fa-ellipsis-h ellipse_header"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right header_drop_icon">
                                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#new_group">New
                                            Group</a>
                                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#profile_modal">Profile</a>
                                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#settings_modal">Settings</a>
                                        <router-link to="/login1" class="dropdown-item">Logout</router-link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul class="nav nav-tabs chat-tabs mt-4">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/index">Chat</router-link>
                            </li>
                            <li class="nav-item ms-1">
                                <router-link class="nav-link" to="/group">Group</router-link>
                            </li>
                            <li class="nav-item ms-1">
                                <router-link class="nav-link" to="/status">Status</router-link>
                            </li>
                            <li class="nav-item ms-1">
                                <router-link class="nav-link  active" to="/call-log">Call</router-link>
                            </li>
                        </ul>
                        <button type="button" class="float-end btn btn-circle btn-sm header_button" data-bs-toggle="modal" data-bs-target="#audiocallmodal">
                            <i class="fas fa-plus button_plus"></i>
                        </button>
                    </div>
                    <div class="search_chat has-search">
                        <span class="fas fa-search form-control-feedback"></span>
                        <input class="form-control chat_input" id="search-contact" type="text" placeholder="">
                    </div>
                    <div class="sidebar-body" id="chatsidebar">
                        <ul class="user-list">
                            <li class="user-list-item">
                                <div class="avatar avatar-online">
                                    <img src="../../assets/img/avatar-8.jpg" class="rounded-circle" alt="image">
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Regina Dickerson</h5>
                                        <p><small class="text-muted">Today, 14:45 pm</small></p>
                                    </div>
                                    <div class="last-chat-time">
                                        <div class="last-chat-time">
                                            <i class="missed-col"><img src="../../assets/img/incoming-call-icon.svg" alt="" class="mCS_img_loaded"></i>
                                        </div>
                                    </div>    
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar avatar-away">
                                        <img src="../../assets/img/avatar-7.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Kevin Howard</h5>
                                        <p><small class="text-muted">Today, 08:45 pm</small></p>
                                    </div>
                                    <div class="last-chat-time">
                                        <i class="missed-col"><img src="../../assets/img/missed-call-icon.svg" alt="" class="mCS_img_loaded"></i>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar avatar-offline">
                                        <img src="../../assets/img/avatar-1.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5 class="list_group_notread">Eric Knight</h5>
                                        <small class="text-muted">Yesterday</small>
                                    </div>
                                    <div class="last-chat-time">
                                        <i class="missed-col"><img src="../../assets/img/incoming-call-icon.svg" alt="" class="mCS_img_loaded"></i>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item unread">
                                <div>
                                    <div class="avatar avatar-online">
                                        <img src="../../assets/img/avatar-2.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Scott Albright</h5>
                                        <p><small class="text-muted">Today, 11:43 PM</small></p>
                                    </div>
                                    <div class="last-chat-time">
                                        <i class="missed-col"><img src="../../assets/img/missed-call-icon.svg" alt="" class="mCS_img_loaded"></i>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar avatar-away">
                                        <img src="../../assets/img/avatar-3.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5 class="list_group_notread">Irene Perkins</h5>
                                        <p><small class="text-muted">Yesterday</small></p>
                                    </div>
                                    <div class="last-chat-time">
                                        <i class="missed-col"><img src="../../assets/img/incoming-call-icon.svg" alt="" class="mCS_img_loaded"></i>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar avatar-online">
                                        <img src="../../assets/img/avatar-4.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5 class="list_group_notread">Carol Andre</h5>
                                        <p><small class="text-muted">Yesterday</small></p>
                                    </div>
                                    <div class="last-chat-time">
                                        <i class="missed-col"><img src="../../assets/img/incoming-call-icon.svg" alt="" class="mCS_img_loaded"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- /Chats sidebar -->
            </div>
            <!-- /Sidebar group -->
</template>