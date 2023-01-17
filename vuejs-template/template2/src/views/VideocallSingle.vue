<template>
	<div>
		<div class="main-wrapper">
        <!-- content -->
        <div class="content main_content">
		<layout-sidebar></layout-sidebar>
        
        <!-- Chat -->
            <div class="chat video-screen" id="middle">
                <div class="chat-header">
                    <div class="user-details">
                        <div class="d-lg-none me-2">
                            <ul class="list-inline mt-2 me-2">
                                <li class="list-inline-item">
                                    <router-link class="text-muted px-0 left_side" to="/index" data-chat="open">
                                        <i class="fas fa-arrow-left"></i>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <figure class="avatar me-2">
                            <img src="../assets/img/avatar/avatar-8.jpg" class="rounded-circle" alt="image">
                        </figure>
                        <div>
                            <h5>Doris Brown</h5>
                        </div>
                    </div>
                    <div class="chat-options">
                        <ul class="list-inline">
                            <li class="list-inline-item in-a-call d-flex align-items-center me-5">
                                <span class="icon-call"><i class="fas fa-phone-alt"></i></span> 
                                <span class="call-text">in call : 14</span>
                            </li>
                            <li class="list-inline-item">
                                <a href="javascript:void(0);" class="add-person-call no-bg d-flex align-items-center dream_profile_menu">
                                    <span class="icon-call"><i class="fas fa-plus"></i></span> 
                                    <span class="call-text">Add person to call</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="chat-body pt-4 pb-0">
                    <div class="video-screen-inner">
                        <div class="call-user-avatar">
                            <div class="avatar-col">
                                <img src="../assets/img/avatar/avatar-8.jpg" alt="">
                            </div>
                        </div>
                        <div class="record-time">
                            <span>40:12</span>
                        </div>
                        <div class="volume-col">
                            <div class="inner-volume-col text-center">
                                <div id="player" class="">
                                    <div id="volume"></div>
                                </div>
                                <span class="material-icons">volume_up</span>
                            </div>
                        </div>
                        <div class="video-call-action">
                            <ul>
                                <li><a href="javascript:void(0);"><span class="material-icons">fullscreen</span></a></li>
                                <li><a href="javascript:void(0);" class="call-mute"><span class="material-icons">volume_off</span></a></li>
                                <li><a href="javascript:void(0);" class="call-end"><span class="material-icons">call_end</span></a></li>
                                <li><a href="javascript:void(0);"><span class="material-icons">videocam_off</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Chat -->

            <!-- Right sidebar -->
            <div class="right-sidebar right_sidebar_profile video-right-sidebar videocallsingle" id="middle1">
                <div class="chat p-0">
                    <div class="right-sidebar-wrap active">
                        <div>
                        <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                            <div class="left-chat-title d-flex justify-content-between align-items-center p-3 with-bg">
                                <div class="chat-title">
                                    <h4>Chat</h4>
                                </div>
                                <div class="contact-close_call text-end">
                                    <a href="javascript:void(0);"
                                        class="close_profile close_profile4">
                                        <span class="material-icons">close</span>
                                    </a>
                                </div>
                            </div>
                            <div class="chat-body pt-3">
                                <div class="messages">
                                    <div class="chats">
                                        <div class="chat-avatar">
                                            <img src="../assets/img/avatar/avatar-8.jpg" class="rounded-circle dreams_chat" alt="image">
                                        </div>
                                        <div class="chat-content">
                                            <div class="message-content">
                                                Good morning.....
                                                <div class="chat-time">
                                                    <div>
                                                        <div class="time"><i class="fas fa-clock"></i> 10:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat-profile-name">
                                                <h6>Doris Brown</h6>
                                            </div>
                                        </div>
                                        <div class="chat-action-btns ms-3">
                                            <div class="chat-action-col">
                                                <a class="#" href="#" data-bs-toggle="dropdown">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Copy <span ><i class="far fa-copy"></i></span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Save <span class="material-icons">save</span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Forward <span><i class="fas fa-share"></i></span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete <span><i class="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chats chats-right">
                                        <div class="chat-content">
                                            <div class="message-content">
                                                Wow Thats Great
                                                <div class="chat-time">
                                                    <div>
                                                        <div class="time"><i class="fas fa-clock"></i> 10:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat-profile-name text-end">
                                                <h6>Alexandr</h6>
                                            </div>
                                        </div>
                                        <div class="chat-avatar">
                                            <img src="../assets/img/avatar/avatar-12.jpg" class="rounded-circle dreams_chat" alt="image">
                                        </div>
                                        <div class="chat-action-btns me-2">
                                            <div class="chat-action-col">
                                                <a class="#" href="#" data-bs-toggle="dropdown">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Copy <span ><i class="far fa-copy"></i></span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Save <span class="material-icons">save</span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Forward <span><i class="fas fa-share"></i></span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete <span><i class="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                            <div class="chat-read-col">
                                                <span class="material-icons">done_all</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chats">
                                        <div class="chat-avatar">
                                            <img src="../assets/img/avatar/avatar-8.jpg" class="rounded-circle dreams_chat" alt="image">
                                        </div>
                                        <div class="chat-content">
                                            <div class="message-content">
                                                Good morning.....
                                                <div class="chat-time">
                                                    <div>
                                                        <div class="time"><i class="fas fa-clock"></i> 10:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat-profile-name">
                                                <h6>Doris Brown</h6>
                                            </div>
                                        </div>
                                        <div class="chat-action-btns ms-3">
                                            <div class="chat-action-col">
                                                <a class="#" href="#" data-bs-toggle="dropdown">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Copy <span ><i class="far fa-copy"></i></span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Save <span class="material-icons">save</span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Forward <span><i class="fas fa-share"></i></span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete <span><i class="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chats chats-right">
                                        <div class="chat-content">
                                            <div class="message-content">
                                                Wow Thats Great
                                                <div class="chat-time">
                                                    <div>
                                                        <div class="time"><i class="fas fa-clock"></i> 10:00</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="chat-profile-name text-end">
                                                <h6>Alexandr</h6>
                                            </div>
                                        </div>
                                        <div class="chat-avatar">
                                            <img src="../assets/img/avatar/avatar-12.jpg" class="rounded-circle dreams_chat" alt="image">
                                        </div>
                                        <div class="chat-action-btns me-2">
                                            <div class="chat-action-col">
                                                <a class="#" href="#" data-bs-toggle="dropdown">
                                                    <i class="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-end">
                                                    <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Copy <span ><i class="far fa-copy"></i></span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Save <span class="material-icons">save</span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Forward <span><i class="fas fa-share"></i></span></a>
                                                    <a href="javascript:void(0);" class="dropdown-item">Delete <span><i class="far fa-trash-alt"></i></span></a>
                                                </div>
                                            </div>
                                            <div class="chat-read-col">
                                                <span class="material-icons">done_all</span>
                                            </div>
                                        </div>
                                    </div>                         
                                </div>
                            </div>
                        </perfect-scrollbar>
                        </div>
                        <div class="chat-footer pt-0">
                            <form>
                                <div class="smile-col">
                                    <a href="javascript:void(0);"><i class="far fa-smile"></i></a>
                                </div>
                                <div class="attach-col">
                                    <a href="javascript:void(0);"><i class="fas fa-paperclip"></i></a>
                                </div>
                                <input type="text" class="form-control chat_form" placeholder="Enter Message.....">
                                <div class="form-buttons">
                                    <button class="btn send-btn" type="submit">
                                        <span class="material-icons">send</span>
                                    </button>
                                </div>
                                <div class="specker-col">
                                    <a href="javascript:void(0);"><span class="material-icons">settings_voice</span></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Right sidebar -->

		</diV>

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
    if($('#volume').length > 0 ){
    $("#volume").slider({
        min: 0,
        max: 100,
        orientation: "vertical",
        value: 0,
            range: "min",
        slide: function(event, ui) {
            setVolume(ui.value / 100);
        }
        });
        
        var myMedia = document.createElement('audio');
        $('#player').append(myMedia);
        myMedia.id = "myMedia";
        
        function playAudio(fileName, myVolume) {
                myMedia.src = fileName;
                myMedia.setAttribute('loop', 'loop');
            setVolume(myVolume);
            myMedia.play();
        }
        
        function setVolume(myVolume) {
        var myMedia = document.getElementById('myMedia');
        myMedia.volume = myVolume;
    }
}
    }
}
    </script>