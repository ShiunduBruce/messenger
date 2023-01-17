<template>
<!-- sidebar group -->
            <div class="sidebar-group left-sidebar chat_sidebar">
                <!-- Chats sidebar -->
                <div id="chats" class="left-sidebar-wrap sidebar active">
                    <div class="header">
                        <div class="header-top">
                            <div class="logo ms-2 mt-3">
                                <router-link to="/index">
                                    <img src="../../assets/img/logo.png" class="header_image img-fluid" alt="">
                                </router-link>
                            </div>
                            <ul class="header-action mt-4">
                                <li>
                                    <a href="javascript:void(0);" data-bs-toggle="dropdown">
                                        <i class="fas fa-ellipsis-h ellipse_header"></i>
                                    </a>
                                    <div class="dropdown-menu  header_drop_icon">
                                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#new_group">
                                            New Group
                                        </a>
                                        <a class="dropdown-item" data-bs-toggle="modal" data-bs-target="#profile_modal">Profile</a>
                                        <a class="dropdown-item" data-bs-toggle="modal"
                                            data-bs-target="#settings_modal">Settings</a>
                                        <router-link to="/login1" class="dropdown-item">Logout</router-link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul class="nav nav-tabs chat-tabs mt-4">
                            <li class="nav-item">
                                <router-link class="nav-link  active" to="/index">Chat</router-link>
                            </li>
                            <li class="nav-item ms-1">
                                <router-link class="nav-link" to="/group">Group</router-link>
                            </li>
                            <li class="nav-item ms-1">
                                <router-link class="nav-link" to="/status">Status</router-link>
                            </li>
                            <li class="nav-item ms-1">
                                <router-link class="nav-link" to="/call-log">Call</router-link>
                            </li>
                        </ul>
                        <button type="button" class="float-end btn btn-circle btn-sm header_button"
                            data-bs-toggle="modal" data-bs-target="#chat-new">
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
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">14:45 pm</small>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-bs-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" class="dropdown-item">Open</a>
                                                    <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
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
                                        <p>It seems logical that the strategy of providing!</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">08:45 pm</small>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-bs-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" class="dropdown-item">Open</a>
                                                    <a href="javascript:void(0);" data-navigation-target="contact-information"
                                                        class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
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
                                        <p>Welcome to the community mate! 👍</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">Yesterday</small>
                                        <div class="new-message-count"></div>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-bs-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" class="dropdown-item">Open</a>
                                                    <a href="javascript:void(0);" data-navigation-target="contact-information"
                                                        class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
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
                                        <p>I remember everything mate. See you later 🤘</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">06:18 am</small>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-bs-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header open_drop"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" class="dropdown-item">Open</a>
                                                    <a href="javascript:void(0);" data-navigation-target="contact-information"
                                                        class="dropdown-item dr_menu">Profile</a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
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
                                        <p><i class="fa fa-camera me-1"></i> I will miss you, too, my dear!</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">Yesterday</small>
                                        <div class="new-message-count"></div>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-bs-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" class="dropdown-item">Open</a>
                                                    <a href="javascript:void(0);" data-navigation-target="contact-information"
                                                        class="dropdown-item dream_profile_menu" >Profile</a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
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
                                        <p><i class="fa fa-camera me-1"></i> Photo</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">Yesterday</small>
                                        <div class="new-message-count"></div>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-bs-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a href="javascript:void(0);" class="dropdown-item">Open</a>
                                                    <a href="javascript:void(0);" data-navigation-target="contact-information"
                                                        class="dropdown-item dream_profile_menu">Profile</a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Add to archive</a>
                                                    <div class="dropdown-divider"></div>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- / Chats sidebar -->
            </div>
            <!-- /Sidebar group -->
</template>