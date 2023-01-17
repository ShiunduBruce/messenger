<template>
<!-- Right sidebar -->
            <div class="right-sidebar right_sidebar_profile" id="middle1">
                <div class="right-sidebar-wrap active">
                <div>
                <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                        <div class="left-chat-title d-flex justify-content-between align-items-center p-3">
                            <div class="chat-title">
                                <h4>PROFILE</h4>
                            </div>
                            <div class="contact-close_call text-end">
                                <a href="javascript:void(0);"
                                    class="close_profile close_profile4">
                                    <span class="material-icons">close</span>
                                </a>
                            </div>
                        </div>
                        <div class="sidebar-body">
                            <div class="mt-0 right_sidebar_logo">
                                <div class="text-center mb-2 right-sidebar-profile">
                                    <figure class="avatar avatar-xl mb-3">
                                        <img src="../../assets/img/avatar/avatar-2.jpg" class="rounded-circle" alt="image">
                                    </figure>
                                    <h5 class="profile-name">Scott Albright</h5>
                                    <div class="online-profile">
                                        <span>online</span>
                                    </div>
                                </div>
                                <div>
                                     <div class="about-media-tabs">       
                                        <nav>
                                            <div class="nav nav-tabs justify-content-center" id="nav-tab">
                                                <a class="nav-item nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#about">About</a>
                                                <a class="nav-item nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#media" >Media</a>
                                            </div>
                                        </nav>
                                        <div class="tab-content" id="nav-tabContent">
                                            <div class="tab-pane fade show active" id="about">
                                                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual.</p>
                                                <div class="member-details">
                                                    <ul>
                                                        <li>
                                                            <h6>Phone</h6>
                                                            <span>555-555-21541</span>
                                                        </li>
                                                        <li>
                                                            <h6>Nick Name</h6>
                                                            <span>Alberywo</span>
                                                        </li>
                                                        <li>
                                                            <h6>Email</h6>
                                                            <span>Alberywo@gmail.com</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="social-media-col">
                                                    <h6>Social media accounts</h6>
                                                    <ul>
                                                        <li><a href="javascript:void(0);"><i class="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i class="fab fa-youtube"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a href="javascript:void(0);"><i class="fab fa-linkedin-in"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div class="settings-col">
                                                    <h6>Settings</h6>
                                                    <ul>
                                                        <li class="d-flex align-items-center">
                                                            <label class="switch">
                                                                <input type="checkbox" checked>
                                                                <span class="slider round"></span>
                                                            </label>
                                                            <div>
                                                                <span>Block</span>
                                                            </div>
                                                        </li>
                                                        <li class="d-flex align-items-center">
                                                            <label class="switch">
                                                                <input type="checkbox">
                                                                <span class="slider round"></span>
                                                            </label>
                                                            <div>
                                                                <span>Mute</span>
                                                            </div>
                                                        </li>
                                                        <li class="d-flex align-items-center">
                                                            <label class="switch">
                                                                <input type="checkbox">
                                                                <span class="slider round"></span>
                                                            </label>
                                                            <div>
                                                                <span>Get notification</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="media">
                                                <div class="file-download-col">
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
                                                        <li class="full-width text-center">
                                                            <a href="javascript:void(0);" class="load-more-btn">More 154 Files <i class="fas fa-sort-down"></i></a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="report-col">
                            <ul>
                                <li><a href="javascript:void(0);"><span class="material-icons">report_problem</span> Report Chat</a></li>
                                <li><a href="javascript:void(0);"><span><i class="far fa-trash-alt"></i></span> Delete Chat</a></li>
                            </ul>
                        </div>
                </perfect-scrollbar>
                    </div>
                </div>
            </div>
            <!-- Right sidebar -->
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