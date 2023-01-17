<template>
 <!-- sidebar group -->
            <div class="sidebar-group left-sidebar chat_sidebar">

                <!-- Chats sidebar -->
                <div id="chats" class="left-sidebar-wrap sidebar active">

                    <div> 
                       
                       <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                        <div class="sidebar-body" id="chatsidebar">
                           
                            <!-- Left Chat Title -->
                            <div class="left-chat-title d-flex justify-content-between align-items-center ps-0 pe-0">
                                <div class="chat-title">
                                    <h4><router-link to="/index"><i class="fas fa-arrow-left me-1"></i> Archived</router-link></h4>
                                </div>
                            </div>
                            <!-- /Left Chat Title -->

                            <ul class="user-list mt-2">
                                <li class="user-list-item">
                                    <div class="avatar avatar-online">
                                        <img src="../../assets/img/avatar/avatar-8.jpg" class="rounded-circle" alt="image">
                                    </div>
                                    <div class="users-list-body">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>It seems logical that the</p>
                                        </div>
                                        <div class="last-chat-time">
                                            <small class="text-muted">05 min</small>
                                            <div class="archive-btn-grey">Archived</div>
                                        </div>    
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div>
                                        <div class="avatar avatar-away">
                                            <img src="../../assets/img/avatar/avatar-9.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body">
                                        <div>
                                            <h5>Forest Kroch</h5>
                                            <p>It seems logical that the</p>
                                        </div>
                                        <div class="last-chat-time">
                                            <small class="text-muted">05 min</small>
                                            <div class="archive-btn-grey">Archived</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div>
                                        <div class="avatar avatar-online">
                                            <img src="../../assets/img/avatar/avatar-10.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p class="missed-call-col"><span class="material-icons">call_missed</span> Missed Call</p>
                                        </div>
                                        <div class="last-chat-time">
                                            <small class="text-muted">05 min</small>
                                            <div class="archive-btn-grey">Archived</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div>
                                        <div class="avatar avatar-online">
                                            <div class="letter-avatar">
                                                M
                                            </div>
                                        </div>
                                    </div>
                                    <div class="users-list-body">
                                        <div>
                                            <h5>Townsend Seary</h5>
                                            <p><span class="material-icons">insert_photo</span> Photo</p>
                                        </div>
                                        <div class="last-chat-time">
                                            <small class="text-muted">45 min</small>
                                            <div class="archive-btn-grey">Archived</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div>
                                        <div class="avatar avatar-online">
                                            <img src="../../assets/img/avatar/avatar-11.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body">
                                        <div>
                                            <h5>Margaretta Worvell</h5>
                                            <p class="missed-call-col"><span class="material-icons">call_missed</span> Missed Call</p>
                                        </div>
                                        <div class="last-chat-time">
                                            <small class="text-muted">52 min</small>
                                            <div class="archive-btn-grey">Archived</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div>
                                        <div class="avatar avatar-away">
                                            <img src="../../assets/img/avatar/avatar-2.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body">
                                        <div>
                                            <h5>#Tech Support</h5>
                                            <p><strong>Haidar</strong> : Hi!!!</p>
                                        </div>
                                        <div class="last-chat-time">
                                            <small class="text-muted">Yesterday</small>
                                            <div class="archive-btn-grey">Archived</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div>
                                        <div class="avatar avatar-online">
                                            <div class="letter-avatar">
                                                A
                                            </div>
                                        </div>
                                    </div>
                                    <div class="users-list-body">
                                        <div>
                                            <h5>Harald Kowalski</h5>
                                            <p><span class="material-icons">videocam</span> It seems logical that the</p>
                                        </div>
                                        <div class="last-chat-time">
                                            <small class="text-muted">Yesterday</small>
                                            <div class="archive-btn-grey">Archived</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div>
                                        <div class="avatar avatar-away">
                                            <img src="../../assets/img/avatar/avatar-12.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body">
                                        <div>
                                            <h5>Alexandr Donnelly</h5>
                                            <p><span class="material-icons">settings_voice</span> 0.25</p>
                                        </div>
                                        <div class="last-chat-time">
                                            <small class="text-muted">Yesterday</small>
                                            <div class="archive-btn-grey">Archived</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="user-list-item">
                                    <div>
                                        <div class="avatar avatar-online">
                                            <img src="../../assets/img/avatar/avatar-4.jpg" class="rounded-circle" alt="image">
                                        </div>
                                    </div>
                                    <div class="users-list-body">
                                        <div>
                                            <h5>Regina Dickerson</h5>
                                            <p>It seems logical that the</p>
                                        </div>
                                        <div class="last-chat-time">
                                            <small class="text-muted">Yesterday</small>
                                            <div class="archive-btn-grey">Archived</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                      </perfect-scrollbar>
                    </div>

                </div>
                <!-- / Chats sidebar -->
            </div>
            <!-- /Sidebar group -->
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