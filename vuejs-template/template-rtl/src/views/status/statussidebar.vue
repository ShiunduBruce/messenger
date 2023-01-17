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
                            <li class="nav-item  active ms-1">
                                <router-link class="nav-link active" to="/status">Status</router-link>
                            </li>
                            <li class="nav-item ms-1">
                                <router-link class="nav-link" to="/call-log">Call</router-link>
                            </li>
                        </ul>
                        <button type="button" class="float-right btn btn-circle btn-sm header_button" data-bs-toggle="modal" data-bs-target="#drag_files">
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
                                            <img src="../../assets/img/avatar-8.jpg" class="rounded-circle" alt="image">
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
                                            <img src="../../assets/img/avatar-7.jpg" class="rounded-circle" alt="image">
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
                                        <img src="../../assets/img/avatar-1.jpg" class="rounded-circle" alt="image">
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
                                            <img src="../../assets/img/avatar-2.jpg" class="rounded-circle" alt="image">
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
                                            <img src="../../assets/img/avatar-3.jpg" class="rounded-circle" alt="image">
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
</template>