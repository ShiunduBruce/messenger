<template>
 
 <!-- Header -->
            <header class="header">
                <nav class="navbar navbar-expand-lg header-nav fixed-top">
                    <logo1></logo1>
                    <navbarright1></navbarright1>
                </nav>
            </header>
            <!-- /Header -->

</template>

<script>

export default {
    components: {
        
    },
    mounted() {
         var $wrapper = $('.main-wrapper');
         var $pageWrapper = $('.page-wrapper');
    var $slimScrolls = $('.slimscroll');

    // Mobile menu sidebar overlay
    $('body').append('<div class="sidebar-overlay"></div>');
    $(document).on('click', '#mobile_btn', function () {
        $wrapper.toggleClass('slide-nav');
        $('.sidebar-overlay').toggleClass('opened');
        $('html').addClass('menu-opened');
        return false;
    });
    
    // Sidebar overlay
    $(".sidebar-overlay").on("click", function () {
        $wrapper.removeClass('slide-nav');
        $(".sidebar-overlay").removeClass("opened");
        $('html').removeClass('menu-opened');
    });
    
    // Page Content Height
    if ($('.page-wrapper').length > 0) {
        var height = $(window).height();
        $(".page-wrapper").css("min-height", height);
    }
    
    // Page Content Height Resize
    $(window).resize(function () {
        if ($('.page-wrapper').length > 0) {
            var height = $(window).height();
            $(".page-wrapper").css("min-height", height);
        }
    });
 
       
        // $('body').append('<div class="sidebar-overlay"></div>');
        // $(document).on('click', '#mobile_btn', function() {
        //     $wrapper.toggleClass('slide-nav');
        //     $('.sidebar-overlay').toggleClass('opened');
        //     $('html').addClass('menu-opened');
        //     $('#task_window').removeClass('opened');
        //     return false;
        // });
        // Small Sidebar
    

       

        $(document).on('click', '.top-nav-search .responsive-search', function() {
            $('.top-nav-search').toggleClass('active');
        });
        // $('.sidebar-menu ul li:not(.submenu) a').click(function () {
        //     $("html").removeClass('menu-opened');
        //     $(".sidebar-overlay").removeClass('opened');
        // });
    }
}
</script>