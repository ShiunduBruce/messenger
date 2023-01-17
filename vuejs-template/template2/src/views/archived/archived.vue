<template>
	<div>
		<div class="main-wrapper">
        <!-- content -->
        <div class="content main_content">
			<layout-sidebar></layout-sidebar>
		    <!-- sidebar group -->

            <archivedleft></archivedleft>

            <archivedmiddle></archivedmiddle>

            <archivedright></archivedright>
		</diV>
        
       <archivedmodal></archivedmodal>

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