<template>
<!-- Chat -->
            <div class="chat archivedmiddle" id="middle">
            
                <div>
                <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
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
                                <img src="../../assets/img/avatar/avatar-8.jpg" class="rounded-circle" alt="image">
                            </figure>
                            <div class="mt-1">
                                <h5>Doris Brown</h5>
                                <small class="online">
                                    Online
                                </small>
                            </div>
                        </div>
                        <div class="chat-options">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <span class="archive-btn">Archived</span>
                                </li>
                                <li class="list-inline-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Search">
                                    <a href="javascript:void(0)" class="btn btn-outline-light chat-search-btn" >
                                        <i class="fas fa-search"></i>
                                    </a>
                                </li>
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
                                <li class="list-inline-item dream_profile_menu" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Profile">
                                    <a href="javascript:void(0)" class="btn btn-outline-light">
                                        <i class="fas fa-user"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="btn btn-outline-light no-bg" href="#" data-bs-toggle="dropdown">
                                        <i class="fas fa-ellipsis-h"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="javascript:void(0);" class="dropdown-item dream_profile_menu">Unarchive <span><i class="fas fa-archive"></i></span></a>
                                        <a href="javascript:void(0);" class="dropdown-item">Muted <span class="material-icons">volume_off</span></a>
                                        <a href="javascript:void(0);" class="dropdown-item">Delete <span><i class="far fa-trash-alt"></i></span></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <!-- Chat Search -->
                        <div class="chat-search">
                            <form>
                                <span class="fas fa-search form-control-feedback"></span>
                                <input type="text" name="chat-search" placeholder="Search Chats" class="form-control">
                                <div class="close-btn-chat"><span class="material-icons">close</span></div>
                            </form>
                        </div>
                        <!-- /Chat Search -->
                    </div>
                    <div class="chat-body">
                        <div class="messages">
                            <div class="chats">
                                <div class="chat-avatar">
                                    <img src="../../assets/img/avatar/avatar-8.jpg" class="rounded-circle dreams_chat" alt="image">
                                </div>
                                <div class="chat-content">
                                    <div class="message-content">
                                        Hi James! What’s Up?
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
                                        Good morning, How are you? What about our next meeting?
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
                                    <img src="../../assets/img/avatar/avatar-12.jpg" class="rounded-circle dreams_chat" alt="image">
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
                                    <img src="../../assets/img/avatar/avatar-8.jpg" class="rounded-circle dreams_chat" alt="image">
                                </div>
                                <div class="chat-content">
                                    <div class="message-content">
                                        & Next meeting tomorrow 10.00AM
                                        <div class="chat-time">
                                            <div>
                                                <div class="time"><i class="fas fa-clock"></i>  10:06</div>
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
                            <div class="chat-line">
                                <span class="chat-date">Today</span>
                            </div>
                            <div class="chats chats-right">
                                <div class="chat-content">
                                    <div class="message-content">
                                        Wow Thats Great
                                        <div class="chat-time">
                                            <div>
                                                <div class="time"><i class="fas fa-clock"></i> 10:02</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat-profile-name text-end">
                                        <h6>Alexandr</h6>
                                    </div>
                                </div>
                                <div class="chat-avatar">
                                    <img src="../../assets/img/avatar/avatar-12.jpg" class="rounded-circle dreams_chat" alt="image">
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
                                    <img src="../../assets/img/avatar/avatar-8.jpg" class="rounded-circle dreams_chat" alt="image">
                                </div>
                                <div class="chat-content">
                                    <div class="message-content">
                                        <div class="download-col">
                                            <ul>
                                                <li>
                                                    <div class="image-download-col">
                                                        <a href="../../assets/img/chat-download.jpg" data-fancybox="gallery" class="fancybox">
                                                            <img src="../../assets/img/chat-download.jpg" alt="">
                                                        </a>
                                                        <div class="download-action d-flex align-items-center">
                                                            <div><a href="javascript:void(0);"><i class="fas fa-cloud-download-alt"></i></a></div>
                                                            <div><a href="javascript:void(0);"><i class="fas fa-ellipsis-h"></i></a></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="image-download-col image-not-download">
                                                        <a href="../../assets/img/chat-download.jpg" data-fancybox="gallery" class="fancybox">
                                                            <img src="../../assets/img/chat-download.jpg" alt="">
                                                        </a>
                                                        <div class="download-action d-flex align-items-center">
                                                            <div><a href="javascript:void(0);"><i class="fas fa-cloud-download-alt"></i></a></div>
                                                            <div><a href="javascript:void(0);"><i class="fas fa-ellipsis-h"></i></a></div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div class="image-download-col image-not-download">
                                                        <a href="../../assets/img/chat-download.jpg" data-fancybox="gallery" class="fancybox">
                                                            <img src="../../assets/img/chat-download.jpg" alt="">
                                                        </a>
                                                        <div class="download-action d-flex align-items-center">
                                                            <div><a href="javascript:void(0);"><i class="fas fa-cloud-download-alt"></i></a></div>
                                                            <div><a href="javascript:void(0);"><i class="fas fa-ellipsis-h"></i></a></div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
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
                                        <div class="file-download d-flex align-items-center">
                                            <div class="file-type d-flex align-items-center justify-content-center me-2">
                                                <i class="far fa-file-archive"></i>
                                            </div>
                                            <div class="file-details">
                                                <span class="file-name">filename.zip</span>
                                                <span class="file-size">10.6MB</span>
                                            </div>
                                            <div class="download-action d-flex align-items-center">
                                                <div><a href="javascript:void(0);"><i class="fas fa-cloud-download-alt"></i></a></div>
                                                <div><a href="javascript:void(0);"><i class="fas fa-ellipsis-h"></i></a></div>
                                            </div>
                                        </div>
                                        <div class="chat-time">
                                            <div>
                                                <div class="time"><i class="fas fa-clock"></i> 10:02</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="chat-profile-name text-end">
                                        <h6>Alexandr</h6>
                                    </div>
                                </div>
                                <div class="chat-avatar">
                                    <img src="../../assets/img/avatar/avatar-12.jpg" class="rounded-circle dreams_chat" alt="image">
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
                <div class="chat-footer">
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
            <!-- /Chat -->
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