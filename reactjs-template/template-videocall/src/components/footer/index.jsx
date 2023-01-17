import React,{useEffect} from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Painterro from 'painterro'

// Import Images
import { user } from "../imagepath";

    const Footer = (props) => {  

    useEffect(() => {
      
	// Tooltip
	
	if($('[data-bs-toggle="tooltip"]').length > 0) {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		  return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}
	
	// Popover
	
	if($('.popover-list').length > 0) {
		var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
		var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
		  return new bootstrap.Popover(popoverTriggerEl)
		})
	}
	
	// Mute Audio
	
	if($('.mute-bt').length > 0) {
		$(".mute-bt").on('click', function(){
			if($(this).hasClass("stop")) {
				$(this).removeClass("stop");
				$(".mute-bt i").removeClass("feather-mic-off");
				$(".mute-bt i").addClass("feather-mic");
				$(this).attr("data-bs-original-title","Mute Audio");
				$(".join-video.user-active .more-icon").removeClass("mic-view");
				
				$(".action-info.vid-view li .mute-mic i").removeClass("feather-mic-off");
				$(".action-info.vid-view li .mute-mic i").addClass("feather-mic");
			}
			else{
				$(this).addClass("stop");
				$(".mute-bt i").removeClass("feather-mic");
				$(".mute-bt i").addClass("feather-mic-off");
				$(this).attr("data-bs-original-title","Unmute Audio");				
				$(".join-video.user-active .more-icon").addClass("mic-view");
				
				$(".add-list .user-active .action-info").addClass("vid-view");
				$(".action-info.vid-view li .mute-mic i").removeClass("feather-mic");
				$(".action-info.vid-view li .mute-mic i").addClass("feather-mic-off");
			}
		});
	}
	
	// Mute Video
	
	if($('.mute-video').length > 0) {
		$(".mute-video").on('click', function(){
			if($(this).hasClass("stop")) {
				$(this).removeClass("stop");
				$(".mute-video i").removeClass("feather-video-off");
				$(".mute-video i").addClass("feather-video");
				$(".join-call .join-video").removeClass("video-hide");
				$(".video-avatar").removeClass("active");
				$(this).attr("data-bs-original-title","Stop Camera");
				$(".meeting .join-video.user-active").removeClass("video-hide");
				
				$(".join-video.user-active .more-icon").removeClass("vid-view");				
				$(".action-info.vid-view li .mute-vid i").removeClass("feather-video-off");
				$(".action-info.vid-view li .mute-vid i").addClass("feather-video");
			}
			else{
				$(this).addClass("stop");
				$(".mute-video i").removeClass("feather-video");
				$(".mute-video i").addClass("feather-video-off");
				$(".join-call .join-video").addClass("video-hide");
				$(".video-avatar").addClass("active");
				$(this).attr("data-bs-original-title","Start Camera");
				$(".meeting .join-video.user-active").addClass("video-hide");
				
				$(".add-list .user-active .action-info").addClass("vid-view");
				$(".action-info.vid-view li .mute-vid i").removeClass("feather-video");
				$(".action-info.vid-view li .mute-vid i").addClass("feather-video-off");
			}
		});
	}
	
	// Record
	
	if($('.record-icon').length > 0) {
		$(".record-icon").on('click', function(){
			if($(".record-icon").hasClass("active")) {
				$(".record-icon").removeClass("active");
				$(".show-record").css("display", "none");
				$(".record-icon i").removeClass("far fa-stop-circle");
				$(".record-icon i").addClass("far fa-dot-circle");	
			}
			else {
				$(".record-icon").addClass("active");
				$(".show-record").css("display", "block");	
				$(".record-icon i").removeClass("far fa-dot-circle");
				$(".record-icon i").addClass("far fa-stop-circle");			
			}
		});
	}	
	
	// Handrise
	
	if($('.hand-raise').length > 0) {
		$(".hand-raise").on('click', function(){
			if($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(".join-video.user-active .more-icon .handraise-on").removeClass("active");
			}
			else {
				$(this).addClass("active");
				$(".join-video.user-active .more-icon .handraise-on").addClass("active");				
			}
		});
	}	

	// Whiteboard
	if($('.whiteboard').length > 0) {
		$(".whiteboard").on('click', function(){
			if($(this).hasClass("active")) {
				$(this).removeClass("active");
				$(".join-contents.show-whiteboard").css("display", "none");	
				$(".join-contents.fade-whiteboard").css("display", "flex");	
			}
			else {
				$(this).addClass("active");						
				$(".join-contents.show-whiteboard").css("display", "flex");				
				$(".join-contents.fade-whiteboard").css("display", "none");
				Painterro({
					id: 'my-holder' 
				}).show();					
			}
		});
	}
	
	// Chat
	
	var toggleChatList = 0;
	if($('.showChatList').length > 0) {
		$('.showChatList').on('click', function(e){
			e.preventDefault()
			if($('body').hasClass("show-invite-list")){
				$(".invite-sidebar-right").css("margin-right", "-100%");
				$('body').removeClass('show-invite-list');
				$('.showInviteList').removeClass('active');
				$(this).addClass('active');
				$('body').addClass('show-chat-list');
				$(".show-chat-list .user-sidebar-right").css("margin-right", "20px");
				toggleChatList=1;
				toggleInviteList=0;
			}
			else {
				if(toggleChatList==0) {
					toggleChatList=1;
					$(this).addClass('active');
					$('body').addClass('show-chat-list');
					$(".show-chat-list .user-sidebar-right").css("margin-right", "20px");
				}
				else {
					toggleChatList=0;
					$(this).removeClass('active');
					$('body').removeClass('show-chat-list');
					$(".user-sidebar-right").css("margin-right", "-100%");
				}
			}
		})
	}
		
	if($('#chatClose').length > 0) {
		$('#chatClose').on('click', function(e){
			e.preventDefault()		
			$('body').removeClass('show-chat-list');
			$('.showChatList').removeClass('active');
			$(".user-sidebar-right").css("margin-right", "-100%");
			toggleChatList=0;
		})
	}
		
	var toggleInviteList = 0;
	if($('.showInviteList').length > 0) {
		$('.showInviteList').on('click', function(e){
			e.preventDefault()
			if($('body').hasClass("show-chat-list")){
				$('body').removeClass('show-chat-list');
				$('.showChatList').removeClass('active');
				$(".user-sidebar-right").css("margin-right", "-100%");
				$(this).addClass('active');
				$('body').addClass('show-invite-list');
				$(".show-invite-list .invite-sidebar-right").css("margin-right", "20px");
				toggleInviteList=1;
				toggleChatList=0;
			}
			else {
				if(toggleInviteList==0) {
					toggleInviteList=1;
					$(this).addClass('active');
					$('body').addClass('show-invite-list');
					$(".show-invite-list .invite-sidebar-right").css("margin-right", "20px");
				}
				else {
					toggleInviteList=0;
					$(this).removeClass('active');
					$('body').removeClass('show-invite-list');
					$(".invite-sidebar-right").css("margin-right", "-100%");
				}
			}
		})
	}
		
	if($('#InviteClose').length > 0) {
		$('#InviteClose').on('click', function(e){
			e.preventDefault()		
			$('body').removeClass('show-invite-list');
			$(".invite-sidebar-right").css("margin-right", "-100%");
			$('.showInviteList').removeClass('active');
			toggleInviteList=0;
		})
	}
	
	if($('.win-maximize').length > 0) {
		$('.win-maximize').on('click', function(e){
			if (!document.fullscreenElement) {
				document.documentElement.requestFullscreen();
			} else {
				if (document.exitFullscreen) {
					document.exitFullscreen();
				}
			}
		})
	}

	// Chat

	var chatAppTarget = $('.chat-window');
	(function() {
		if ($(window).width() > 991)
			chatAppTarget.removeClass('chat-slide');
		
		$(document).on("click",".chat-window .chat-users-list a.media",function () {
			if ($(window).width() <= 991) {
				chatAppTarget.addClass('chat-slide');
			}
			return false;
		});
		$(document).on("click","#back_user_list",function () {
			if ($(window).width() <= 991) {
				chatAppTarget.removeClass('chat-slide');
			}	
			return false;
		});
	})();
	
	$(window).on('load',function(){
		$('.page-loading').fadeOut();
	});

	// Resize	

	function resizeInnerDiv() {
		
		var height = $(window).height();
		var screen_height = $(window).height() - 252;
		var screen_height_vertical_view = $(window).height() - 232;
		var screen_height_horizontal_view = $(window).height() - 292;

		
		$(".meeting-wrapper .join-contents").css("min-height", screen_height);
		$('.join-contents .join-video').css('height', (screen_height_horizontal_view / 4)*2.8);
		$('.join-contents .join-video img').css('height', (screen_height_horizontal_view / 4)*2.8);
		
		$('.join-contents .join-video.single-user img').css('height', screen_height / 4);
		$('.join-contents .join-video.single-user').css('height', screen_height / 4);
		$('.join-contents .join-video.single-user').css('min-height', screen_height / 4);
		
		$('.horizontal-view .join-video.single-user img').css('height', screen_height / 3);
		$('.horizontal-view .join-video.single-user').css('height', screen_height / 3);
		$('.horizontal-view .join-video.single-user').css('min-height', screen_height / 3);

		$('.grid-view .join-video.single-user img').css('height', screen_height / 2);
		$('.grid-view .join-video.single-user').css('height', screen_height / 2);
		$('.grid-view .join-video.single-user').css('min-height', screen_height / 2);

		$('.vertical-view .join-video').css('height', (screen_height_vertical_view / 4)*3);
		$('.vertical-view .join-video img').css('height', (screen_height_vertical_view / 4)*3);

		$('.vertical-view .join-video.single-user img').css('height', screen_height / 4);
		$('.vertical-view .join-video.single-user').css('height', screen_height / 4);
		$('.vertical-view .join-video.single-user').css('min-height', screen_height / 4);

		if($(window).width() < 768 ) {
			
			screen_height = $(window).height() - 232;
			screen_height_horizontal_view = $(window).height() - 232;

			$('.join-contents .join-video').css('height', screen_height_horizontal_view / 4);
			$('.join-contents .join-video img').css('height', screen_height_horizontal_view / 4);
			
			$('.join-contents .join-video.single-user img').css('height', screen_height / 4);
			$('.join-contents .join-video.single-user').css('height', screen_height / 4);
			$('.join-contents .join-video.single-user').css('min-height', screen_height / 4);
			
			$('.grid-view .join-video.single-user img').css('height', screen_height / 4);
			$('.grid-view .join-video.single-user').css('height', screen_height / 4);
			$('.grid-view .join-video.single-user').css('min-height', screen_height / 4);
			
			$('.vertical-view .join-video.single-user img').css('height', screen_height / 4);
			$('.vertical-view .join-video.single-user').css('height', screen_height / 4);
			$('.vertical-view .join-video.single-user').css('min-height', screen_height / 4);
		}
	}
		
	if($('.page-content').length > 0 ){
		resizeInnerDiv();
	}

	$(window).resize(function(){
		if($('.page-content').length > 0 ){
			resizeInnerDiv();
		}
	});
    });
    const pathname = window.location.pathname.split("/")[1];

    return (
        <>
         {/* Meet Footer */}
         <div className="meet-footer">
            <div className="meet-icons">
                <div className="view-more">
                    <ul className="meet-items">
                        <li className="meet-item  dropdown dropdown-action">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="feather-more-vertical" />
                        </a>
                        <ul className="dropdown-menu settings-menu">
                            <li>
                            <a className="dropdown-item showInviteList" href="#">
                                <i className="feather-user-plus" /> Invite People
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item showChatList" href="#">
                                <i className="feather-message-circle" /> Chat
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item whiteboard" href="#">
                                <i className="feather-edit-3" /> Whiteboard
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item record-icon" href="#">
                                <i className="far fa-dot-circle" /> Start Recording
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-mic-off" /> Mute Everyone
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-camera-off" /> Disable
                                Everyone’s Camera
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-youtube" /> Share a Video
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-settings" /> Settings
                            </a>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
                <div className="met-icons">
                    <ul className="meet-items">
                        <li className="meet-item  dropdown dropdown-action">
                        <a
                            href="#"
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="feather-settings" />
                        </a>
                        <ul className="dropdown-menu settings-menu">
                            <li>
                            <a className="dropdown-item" href="#">
                                <span className="user-img">
                                <img src={user} alt="user" /> Carl
                                Kelly
                                </span>
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item showInviteList" href="#">
                                <i className="feather-user-plus" /> Invite People
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-maximize" /> View Full Screen
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item record-icon" href="#">
                                <i className="far fa-dot-circle" /> Start Recording
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-mic-off" /> Mute Everyone
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-camera-off" /> Disable
                                Everyone’s Camera
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-youtube" /> Share a Video
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-settings" /> Settings
                            </a>
                            </li>
                            <li>
                            <a className="dropdown-item" href="#">
                                <i className="feather-code" /> Embed meeting
                            </a>
                            </li>
                        </ul>
                        </li>
                        <li className="meet-item">
                        <a href="#" className="mute-video">
                            <i className="feather-video" />
                        </a>
                        </li>
                        <li className="meet-item">
                        <a href="#" className="mute-bt">
                            <i className="feather-mic" />
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="action-icons">
                    <ul className="action-items">
                        <li className="action-item">
                        <Link to="/join-call" className="callend-icon">
                            <i className="material-icons">call_end</i>
                        </Link>
                        </li>
                        <li className="action-item">
                        <a href="#" className="share-icon">
                            <i className="fas fa-share" />
                        </a>
                        </li>
                        <li className="action-item">
                        <a href="#" className="record-icon">
                            <i className="far fa-dot-circle" />
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="end-call">
                    <ul className="meet-items">
                        <li className="meet-item">
                        <a href="#" className="hand-raise">
                            <i className="fas fa-hand-paper" />
                        </a>
                        </li>
                        <li className="meet-item">
                        <a href="#" className="showInviteList">
                            <i className="feather-users" />
                        </a>
                        </li>
                        <li className="meet-item">
                        <a href="#" className="whiteboard">
                            <i className="feather-edit-3" />
                        </a>
                        </li>
                        <li className="meet-item">
                        <a href="#" className="showChatList">
                            <i className="feather-message-circle" />
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            {/* /Meet Footer */}
        </>    
    )
}
export default Footer;