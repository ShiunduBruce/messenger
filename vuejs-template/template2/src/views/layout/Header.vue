<template>
<!-- Header -->
            <div class="header">
            

                <!-- Logo -->
                <logo></logo>
                <!-- /Logo -->
                
                <mobile></mobile>
                
                <navbarright></navbarright>
                
            </div>
            <!-- /Header -->		
</template>
<script>
    export default {
        mounted() {
       // Variables declarations
    var $wrapper = $('.main-wrapper');
    var $pageWrapper = $('.page-wrapper');
    var $sidebarOverlay = $('.sidebar-overlay');
    // Small Sidebar
    if(screen.width >= 992) {
        $(document).on('click', '#toggle_btn', function() {
            if($('body').hasClass('mini-sidebar')) {
                $('body').removeClass('mini-sidebar');
                $('.subdrop + ul').slideDown();
            } else {
                $('body').addClass('mini-sidebar');
                $('.subdrop + ul').slideUp();
            }
            return false;
        });
        $(document).on('mouseover', function(e) {
            e.stopPropagation();
            if($('body').hasClass('mini-sidebar') && $('#toggle_btn').is(':visible')) {
                var targ = $(e.target).closest('.sidebar').length;
                if(targ) {
                    $('body').addClass('expand-menu');
                    $('.subdrop + ul').slideDown();
                } else {
                    $('body').removeClass('expand-menu');
                    $('.subdrop + ul').slideUp();
                }
                return false;
            }
        });
    }
    // Sidebar overlay
    function sidebar_overlay($target) {
        if($target.length) {
            $target.toggleClass('opened');
            $sidebarOverlay.toggleClass('opened');
            $('html').toggleClass('menu-opened');
            $sidebarOverlay.attr('data-reff', '#' + $target[0].id);
        }
    }
    // Mobile menu sidebar overlay
    $(document).on('click', '#mobile_btn', function() {
        var $target = $($(this).attr('href'));
        sidebar_overlay($target);
        $wrapper.toggleClass('slide-nav');
        $('#chat_sidebar').removeClass('opened');
        return false;
    });
    // Mobile Menu
    $(document).on('click', '#open_msg_box', function() {
        $wrapper.toggleClass('open-msg-box');
        return false;
    });
    // Page wrapper height
    var pHeight = $(window).height();
    $pageWrapper.css('min-height', pHeight);
    $(window).resize(function() {
        var prHeight = $(window).height();
        $pageWrapper.css('min-height', prHeight);
    });
    },
       computed: {
           currentPath() {
               return this.$route.name
           }
       }
    }
    </script>