<template>
    <div>
         <!-- Main Wrapper -->
    <div class="main-wrapper">
          <!-- content -->
        <div class="content main_content">
            
            <statussidebar></statussidebar>

            <statuschat></statuschat>

            <!-- Upload Documents -->
            <div id="drag_files" class="modal fade" role="dialog">
                <div class="modal-dialog modal-md modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">Drag and drop files upload</h4>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <i class="fas fa-times close_icon"></i>
                            </button>
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

            <statusmodal></statusmodal>
           
        </div>
        <!-- /Content -->

    </div>
    <!-- /Main Wrapper -->

    <statusmodal1></statusmodal1>
    
    </div>
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