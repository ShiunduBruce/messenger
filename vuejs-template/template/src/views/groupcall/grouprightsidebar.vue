<template>
<!-- Right Sidebar -->
            <div class="right-sidebar right_sidebar_profile" id="middle1">
                <div class="right-sidebar-wrap profile_wrap_right member_sidebar active">
                    <div class="contact-close_call me-4 mt-4 text-end">
                        <a href="javascript:void(0);"
                            class="btn btn-outline-light close_profile close_profile4">
                            <i class="fas fa-times close_icon"></i>
                        </a>
                    </div>
                    <div class="sidebar-body">
                        <div class="ps-4 pe-4 right_sidebar_logo">
                            <div class="text-center mb-3">
                                <figure class="avatar avatar-xl mb-3">
                                    <img src="../../assets/img/carousel1.jpg" class="rounded-circle" alt="image">
                                </figure>
                                <h5 class="mb-1 profile-name">Dreams Team</h5>
                            </div>
                            <ul class="nav nav-tabs nav-tabs-solid nav-tabs-rounded nav-justified profile-tabs">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#info">Info</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#member">Members</a>
                                </li>
                            </ul>
                            <!-- Tab panes -->
                            <div class="tab-content rightside_tab">
                                <div id="info" class="tab-pane active"><br>  
                                    <div class="accordion-col">
                                        <div class="accordion-title">
                                            <h6 class="primary-title">Media (31) <i class="fas fa-chevron-right float-end"></i></h6>
                                        </div>
                                        <div class="accordion-content">
                                            <div class="media-lists">
                                                <div class="media-image">
                                                    <img src="../../assets/img/media1.jpg" alt="">
                                                </div>
                                                <div class="media-image">
                                                    <img src="../../assets/img/media2.jpg" alt="">
                                                </div>
                                                <div class="media-image">
                                                    <img src="../../assets/img/media3.jpg" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-title">
                                            <h6 class="primary-title">About and phone number <i class="fas fa-chevron-right float-end"></i></h6>
                                        </div>
                                        <div class="accordion-content">
                                            <p class="text-muted text-center mt-1">Help people to build websites and apps + grow
                                                awareness in social media ????</p>
                                            <div class="mt-2 text-center">
                                                <h6>Phone: <span class="text-muted ms-2">+(33 1) 45 55 01 10</span></h6>
                                            </div>
                                        </div>
                                        <div class="accordion-title">
                                            <h6 class="primary-title">Settings <i class="fas fa-chevron-right float-end"></i></h6>
                                        </div>
                                        <div class="accordion-content">
                                            <ul class="contact-action">
                                                <li class="block-user mt-1">
                                                    <a href=""><i class="fas fa-ban me-2 text-muted"></i>Block</a>
                                                </li>
                                                <li class="report-contact">
                                                    <a href=""><i class="fas fa-thumbs-down me-2"></i> Report Contact</a>
                                                </li>
                                                <li class="delete-chat">
                                                    <a href=""><i class="fas fa-trash-alt me-2"></i> Delete Chat</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div id="member" class="tab-pane"><br>
                                    <div>
                                        <h6 class="primary-title">20 Participants <i
                                                class="fas fa-chevron-right float-end"></i></h6>
                                        <div class="list-group list-group-flush">
                                            <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                                <div class="media align-items-center d-flex">
                                                    <div class="me-3 flex-shrink-0">
                                                        <img alt="Image placeholder" src="../../assets/img/avatar-8.jpg"
                                                            class="avatar  rounded-circle">
                                                    </div>
                                                    <div class="media-body flex-grow-1">
                                                        <h6 class="text-sm d-block text-truncate mb-0">Regina Dickerson
                                                        </h6>
                                                        <span class="d-block text-sm text-muted">At Work</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                                <div class="media align-items-center d-flex">
                                                    <div class="me-3 flex-shrink-0">
                                                        <img alt="Image placeholder" src="../../assets/img/avatar-7.jpg"
                                                            class="avatar  rounded-circle">
                                                    </div>
                                                    <div class="media-body flex-grow-1">
                                                        <h6 class="text-sm d-block text-truncate mb-0">Kevin Howard
                                                        </h6>
                                                        <span class="d-block text-sm text-muted">At Work</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                                <div class="media align-items-center d-flex">
                                                    <div class="me-3 flex-shrink-0">
                                                        <img alt="Image placeholder" src="../../assets/img/avatar-1.jpg"
                                                            class="avatar  rounded-circle">
                                                    </div>
                                                    <div class="media-body flex-grow-1">
                                                        <h6 class="text-sm d-block text-truncate mb-0">Eric Knight
                                                        </h6>
                                                        <span class="d-block text-sm text-muted">At Work</span>
                                                    </div>
                                                </div>
                                            </a>
                                            <div class="view-more ms-4 mt-3">
                                                <a href="javascript:void(0);"><i class="fas fa-chevron-down me-1"></i> <span>17
                                                        More</span></a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Right Sidebar -->
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