<template>
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
                            <img src="../../assets/img/carousel1.jpg" class="rounded-circle" alt="image">
                        </figure>
                        <div class="mt-1">
                            <h5 class="mb-1">Dreams Team</h5>
                            <small class="text-muted mb-2">
                                Active
                            </small>
                        </div>
                    </div>
                    <div class="avatar-group">
                        <div class="avatar avatar-xs group_img group_header">
                            <img class="avatar-img rounded-circle border border-white" alt="User Image"
                                src="../../assets/img/avatar-1.jpg">
                        </div>
                        <div class="avatar avatar-xs group_img group_header">
                            <img class="avatar-img rounded-circle border border-white" alt="User Image"
                                src="../../assets/img/avatar-7.jpg">
                        </div>
                        <div class="avatar avatar-xs group_img group_header">
                            <span class="avatar-title rounded-circle border border-white">10+</span>
                        </div>
                    </div>
                    <div class="chat-options">
                        <ul class="list-inline">
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
                            <li class="list-inline-item">
                                <a class="btn btn-outline-light" href="#" data-bs-toggle="dropdown">
                                    <i class="fas fa-ellipsis-h"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-end">
                                    <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Profile</a>
                                    <a href="javascript:void(0);" class="dropdown-item">Delete</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="chat-body">
                    <div class="messages">
                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="../../assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
                            </div>
                            <div class="chat-content">
                                <div class="message-content">
                                    Hi James! What’s Up?
                                </div>
                                <div class="chat-time">
                                    <div>
                                        <div class="time">Yesterday 14:26 PM</div>
                                    </div>
                                </div>
                            </div>
                            <div class="chat-action-btns">
                                <ul>
                                    <li><a href="javascript:void(0);" class="share-msg" title="Share"><i class="fas fa-share"></i></a>
                                    </li>
                                    <li><a href="javascript:void(0);" class="edit-msg"><i class="fas fa-edit"></i></a></li>
                                    <li><a href="javascript:void(0);" class="del-msg"><i class="fas fa-trash-alt"></i></a></li>
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
                                        <div class="time">Yesterday 14:38 PM <i><img src="../../assets/img/double-tick.png" alt=""></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="../../assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
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
                                        <div class="time">Yesterday 14:42 PM <i><img src="../../assets/img/double-tick.png" alt=""></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-line">
                            <span class="chat-date">Today</span>
                        </div>

                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="../../assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
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
                                        <div class="time">14:29 PM <i><img src="../../assets/img/double-tick.png" alt=""></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="../../assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
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
                                        <div class="time">14:32 PM <i><img src="../../assets/img/double-tick.png" alt=""></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="chat-line">
                            <span class="chat-date">1 message unread</span>
                        </div>

                        <div class="chats">
                            <div class="chat-avatar">
                                <img src="../../assets/img/avatar-2.jpg" class="rounded-circle dreams_chat" alt="image">
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
                                        <div class="time">14:34 PM <i><img src="../../assets/img/double-tick.png" alt=""></i></div>
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