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
                                <router-link class="nav-link active" to="/group">Group</router-link>
                            </li>
                            <li class="nav-item ms-1">
                                <router-link class="nav-link" to="/status">Status</router-link>
                            </li>
                            <li class="nav-item ms-1">
                                <router-link class="nav-link" to="/call-log">Call</router-link>
                            </li>
                        </ul>
                        <button type="button" class="float-end btn btn-circle btn-sm header_button" data-bs-toggle="modal" data-bs-target="#new_group">
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
                                <div class="avatar">
                                    <img src="../../assets/img/media2.jpg" class="rounded-circle" alt="image">
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Baddies and Buddies</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing</p>
                                    </div>
                                    <div class="avatar-group group-col">
                                        <div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <img class="avatar-img rounded-circle border border-white" alt="User Image"
                                                    src="../../assets/img/avatar-8.jpg">
                                            </div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <img class="avatar-img rounded-circle border border-white" alt="User Image"
                                                    src="../../assets/img/avatar-7.jpg">
                                            </div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <span class="avatar-title rounded-circle border border-white">14+</span>
                                            </div>
                                        </div>
                                        <small class="text-muted float-end">08:45 am</small>
                                    </div>    
                                </div>
                            </li>
                            <li class="user-list-item unread">
                                <div>
                                    <div class="avatar">
                                        <img src="../../assets/img/carousel1.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Dreams Team</h5>
                                        <p>Lorem Ipsum has been the industry's standard</p>
                                    </div>
                                    <div class="avatar-group group-col">
                                        <div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <img class="avatar-img rounded-circle border border-white" alt="User Image"
                                                    src="../../assets/img/avatar-1.jpg">
                                            </div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <img class="avatar-img rounded-circle border border-white" alt="User Image"
                                                    src="../../assets/img/avatar-2.jpg">
                                            </div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <span class="avatar-title rounded-circle border border-white">10+</span>
                                            </div>
                                        </div>
                                        <small class="text-muted float-end">09.50 am</small>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar">
                                        <img src="../../assets/img/media3.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5 class="list_group_notread">Chamber of Secrets</h5>
                                        <p>Welcome to the community mate! 👍</p>
                                    </div>
                                    <div class="avatar-group group-col">
                                        <div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <img class="avatar-img rounded-circle border border-white" alt="User Image"
                                                    src="../../assets/img/avatar-3.jpg">
                                            </div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <img class="avatar-img rounded-circle border border-white" alt="User Image"
                                                    src="../../assets/img/avatar-1.jpg">
                                            </div>
                                            <div class="avatar avatar-xs group_img group_header">
                                                <span class="avatar-title rounded-circle border border-white">8+</span>
                                            </div>
                                        </div>
                                        <small class="text-muted float-end">Yesterday</small>
                                    </div>
                                </div>
                            </li>
                            <li class="user-list-item">
                                <div>
                                    <div class="avatar">
                                        <img src="../../assets/img/media1.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5>Family Matters</h5>
                                        <p>I remember everything mate. See you later 🤘</p>
                                    </div>
                                    <div class="last-chat-time">
                                        <small class="text-muted">06:18 am</small>
                                        <div class="chat-toggle mt-1">
                                            <div class="dropdown">
                                                <a data-bs-toggle="dropdown" href="#">
                                                    <i class="fas fa-ellipsis-h ellipse_header open_drop"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-right">
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
                                    <div class="avatar">
                                        <img src="../../assets/img/avatar-3.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5 class="list_group_notread">All in the Mind</h5>
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
                                                <div class="dropdown-menu dropdown-menu-right">
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
                                    <div class="avatar">
                                        <img src="../../assets/img/avatar-4.jpg" class="rounded-circle" alt="image">
                                    </div>
                                </div>
                                <div class="users-list-body">
                                    <div>
                                        <h5 class="list_group_notread">Smells Like Team Spirit</h5>
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
                                                <div class="dropdown-menu dropdown-menu-right">
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
                <!-- /Chats sidebar -->
            </div>
            <!-- /Sidebar group -->
</template>
<script>
    export default {
        mounted() {
            
		var right_sidebar = $('.right-sidebar').width();
		var left_sidebar = $('.left-sidebar').width();
		var chat_bar = $('.chat').width();
		var win_width = $(window).width();
        $("#search-contact").on("keyup", function() {
		var value = $(this).val().toLowerCase();
		$("#chatsidebar ul li").filter(function() {
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	});
		$(".user-list-item").on('click', function () {
		if ($(window).width() < 992) {
				$('.left-sidebar').addClass('hide-left-sidebar');
				$('.chat').addClass('show-chatbar');
			}
		});

		$(".dream_profile_menu").on('click', function () {
			$('.right-sidebar').addClass('show-right-sidebar');
			$('.right-sidebar').removeClass('hide-right-sidebar');
				if ( $(window).width() > 991 && $(window).width() < 1201) {
				$(".chat").css('margin-left', - chat_bar);
			}
			if ($(window).width() < 992) {
				$('.chat').addClass('hide-chatbar');
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
		// $(".nav-tabs a").on('click', function () {
		// 	$(this).tab('show');
		// });

		$(".chat-header .left_side i").on('click', function () {
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
	


	//Custom scroll bar
	if ($(window).width() > 992) {
		if($('.chat-body, .left-sidebar .sidebar-body, .right-sidebar').length > 0 ){
			$('.chat-body, .left-sidebar .sidebar-body, .right-sidebar').mCustomScrollbar();
		}
        }
    }
}
</script>